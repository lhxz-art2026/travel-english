/* 旅行英语 —— 应用外壳、路由、首页、统计、设置 */
const App = {
  route: 'home',
  param: null,
  rate: 1,
  NAV: [
    { id: 'home', icon: '🏠', name: '首页' },
    { id: 'lessons', icon: '🎧', name: '课程' },
    { id: 'words', icon: '📕', name: '词汇' },
    { id: 'phrases', icon: '💬', name: '句子' },
    { id: 'review', icon: '🔁', name: '复习' },
    { id: 'stats', icon: '📊', name: '统计' },
    { id: 'settings', icon: '⚙️', name: '设置' }
  ],
  init() {
    Store.load();
    AudioEngine.index = buildAudioIndex();
    AudioEngine.rate = 1;
    this.buildNavs();
    window.addEventListener('hashchange', () => this.routeNow());
    this.routeNow();
  },
  buildNavs() {
    const bn = document.getElementById('bottomNav');
    bn.innerHTML = this.NAV.slice(0, 5).map(n =>
      `<button class="bnav" data-nav="${n.id}"><span class="bi">${n.icon}</span><span>${n.name}</span></button>`).join('');
    const sn = document.getElementById('sideNav');
    sn.innerHTML = this.NAV.map(n =>
      `<button class="navItem" data-nav="${n.id}"><span class="ni">${n.icon}</span><span class="nm">${n.name}</span></button>`).join('');
    bn.addEventListener('click', e => { const b = e.target.closest('[data-nav]'); if (b) location.hash = '#/' + b.dataset.nav; });
    sn.addEventListener('click', e => { const b = e.target.closest('[data-nav]'); if (b) location.hash = '#/' + b.dataset.nav; });
    document.getElementById('menuBtn').addEventListener('click', openDrawer);
    document.getElementById('overlay').addEventListener('click', closeDrawer);
    document.getElementById('backupWarnBtn').addEventListener('click', () => { location.hash = '#/settings'; });
  },
  refreshNavs() {
    const active = this.route === 'lesson' ? 'lessons' : this.route;
    document.querySelectorAll('#bottomNav [data-nav]').forEach(b => b.classList.toggle('on', b.dataset.nav === active));
    document.querySelectorAll('#sideNav [data-nav]').forEach(b => b.classList.toggle('on', b.dataset.nav === active));
  },
  refreshTopbar() {
    const st = Store.data.stats;
    const chip = document.getElementById('streakChip');
    if (st.streak > 0) { chip.classList.remove('hidden'); chip.innerHTML = '🔥 <b>' + st.streak + '</b>'; }
    else chip.classList.add('hidden');
    const d = Store.daysSinceBackup();
    const w = document.getElementById('backupWarnBtn');
    if (d === null || d > Store.data.settings.remindDays) w.classList.remove('hidden');
    else w.classList.add('hidden');
  },
  routeNow() {
    const h = location.hash.replace(/^#\/?/, '');
    const parts = h.split('/');
    this.route = parts[0] || 'home';
    this.param = parts[1] || null;
    this.render();
  },
  render() {
    this.refreshTopbar();
    this.refreshNavs();
    document.getElementById('main').innerHTML = '';
    const v = this.route;
    if (v === 'home') HomeView();
    else if (v === 'lessons') LessonsView();
    else if (v === 'lesson') Lesson.render(this.param);
    else if (v === 'words') WordsView();
    else if (v === 'phrases') PhrasesView();
    else if (v === 'review') ReviewView();
    else if (v === 'stats') StatsView();
    else if (v === 'settings') SettingsView();
    else HomeView();
    closeDrawer();
    window.scrollTo(0, 0);
  }
};

/* —— 工具函数 —— */
function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function escReg(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function $(sel, root) { return (root || document).querySelector(sel); }
function $$(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }
function showToast(msg, type) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = type === 'err' ? 'err' : '';
  t.classList.remove('hidden');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => t.classList.add('hidden'), 2400);
}

/* 内容索引 */
const WORDMAP = {}, SENTMAP = {}, SCENEMAP = {};
function buildAudioIndex() {
  const idx = {};
  CONTENT.scenes.forEach(sc => {
    SCENEMAP[sc.id] = sc;
    sc.lesson.dialogue.forEach((l, i) => { idx[sc.id + '-d' + i] = l.en; });
    sc.sentences.forEach(s => { idx[s.id] = s.en; SENTMAP[s.id] = s; });
    sc.words.forEach(w => { idx[w.id] = w.en; idx[w.id + '-x'] = w.ex; WORDMAP[w.id] = w; });
  });
  return idx;
}
function findScene(id) { return SCENEMAP[id] || null; }

/* 语速切换（全局） */
function setRate(r) {
  App.rate = r;
  AudioEngine.rate = r;
  if (App.route === 'lesson' && document.getElementById('stepBox')) Lesson.renderStep();
  else if (App.route === 'phrases') PhrasesView();
}
function rateBarHTML() {
  return `<div class="rateBar" style="justify-content:center;margin:14px 0"><span>语速</span><div class="seg">${
    [0.75, 0.9, 1.0].map(r =>
      `<button class="segBtn ${App.rate === r ? 'on' : ''}" onclick="setRate(${r})">${r === 1.0 ? '1.0' : r}</button>`).join('')
  }</div></div>`;
}

/* —— 录音工具（跟读/演练用，录完即用不存储） —— */
const Recorder = {
  media: null, rec: null, chunks: [], url: null, active: false,
  start(cb) {
    const go = stream => {
      this.media = stream;
      this.chunks = [];
      this.rec = new MediaRecorder(stream);
      this.rec.ondataavailable = e => { if (e.data && e.data.size) this.chunks.push(e.data); };
      this.rec.onstop = () => {
        const blob = new Blob(this.chunks, { type: this.rec.mimeType || 'audio/webm' });
        if (this.url) URL.revokeObjectURL(this.url);
        this.url = URL.createObjectURL(blob);
        if (this.media) this.media.getTracks().forEach(t => t.stop());
        this.media = null;
        this.active = false;
        if (cb) cb(this.url);
      };
      this.rec.start();
      this.active = true;
    };
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { showToast('此浏览器不支持录音', 'err'); return; }
    navigator.mediaDevices.getUserMedia({ audio: true }).then(go).catch(e => {
      this.active = false;
      showToast(e && e.name === 'NotAllowedError' ? '麦克风权限被拒绝，请在浏览器设置中允许' : '无法使用麦克风', 'err');
    });
  },
  stop(cb) {
    if (cb) {
      const old = this.rec ? this.rec.onstop : null;
      this.rec.onstop = () => { if (old) old(); cb(this.url); };
    }
    if (this.rec && this.rec.state !== 'inactive') this.rec.stop();
    this.active = false;
  },
  playMine() { if (this.url) { const a = new Audio(this.url); a.play(); } }
};

/* —— 抽屉 —— */
function openDrawer() {
  document.getElementById('drawer').innerHTML = App.NAV.map(n =>
    `<button class="navItem" data-nav="${n.id}"><span class="ni">${n.icon}</span><span class="nm">${n.name}</span></button>`).join('');
  document.getElementById('drawer').querySelectorAll('.navItem').forEach(b => {
    b.classList.toggle('on', b.dataset.nav === (App.route === 'lesson' ? 'lessons' : App.route));
    b.addEventListener('click', () => { location.hash = '#/' + b.dataset.nav; });
  });
  document.getElementById('drawer').classList.remove('hidden');
  document.getElementById('overlay').classList.remove('hidden');
}
function closeDrawer() {
  document.getElementById('drawer').classList.add('hidden');
  document.getElementById('overlay').classList.add('hidden');
}

/* —— 首页 —— */
function HomeView() {
  const main = document.getElementById('main');
  const st = Store.data.stats;
  const due = Store.dueCount();
  const cap = Store.data.settings.dailyCap;
  const d = Store.daysSinceBackup();
  let banner = '';
  if (d === null) banner = `<div class="banner">💾 还没有导出过备份。学习进度只存在本机，建议定期备份防丢失。<button class="btn small ghost" onclick="location.hash='#/settings'">去备份</button></div>`;
  else if (d > Store.data.settings.remindDays) banner = `<div class="banner warn">⚠️ 距上次备份已 ${d} 天，请及时导出备份。<button class="btn small ghost" onclick="location.hash='#/settings'">去备份</button></div>`;
  let continueCard = '';
  if (Store.data.lastLesson && findScene(Store.data.lastLesson.sceneId)) {
    const sc = findScene(Store.data.lastLesson.sceneId);
    const lp = Store.data.lessonProgress[sc.id] || {};
    continueCard = `<div class="card" style="cursor:pointer" onclick="location.hash='#/lesson/${sc.id}'">📖 继续学习：${sc.icon} ${sc.name}（第 ${lp.step || 1} / 10 步） →</div>`;
  }
  const todayTasks = due > 0
    ? `<div class="card"><div class="stepTitle">今日复习</div><div class="muted">有 <b style="font-size:20px;color:var(--orange-deep)">${Math.min(due, cap)}</b> 个词句到期（共 ${due} 个）</div><div class="btnRow"><button class="btn big" onclick="location.hash='#/review'">开始复习</button></div></div>`
    : `<div class="card"><div class="stepTitle">今日复习 ✅</div><div class="muted">没有到期内容，去学点新的吧</div><div class="btnRow"><button class="btn ghost" onclick="location.hash='#/lessons'">学习新课</button></div></div>`;
  const grid = CONTENT.scenes.map(sc => {
    const lp = Store.data.lessonProgress[sc.id];
    const pr = lp && lp.done ? '✓ 已完成' : (lp ? '第 ' + lp.step + ' / 10 步' : '未开始');
    return `<div class="card sceneCard ${lp && lp.done ? 'done' : ''}" onclick="location.hash='#/lesson/${sc.id}'"><div class="ic">${sc.icon}</div><div class="nm">${sc.name}</div><div class="pr">${pr}</div></div>`;
  }).join('');
  main.innerHTML = `
    ${banner}
    ${continueCard}
    ${todayTasks}
    <div class="statRow">
      <div class="card statCard"><div class="num">🔥${st.streak}</div><div class="lbl">连续天数</div></div>
      <div class="card statCard"><div class="num">${st.todayDate === Store.today() ? st.todayCount : 0}</div><div class="lbl">今日已练</div></div>
      <div class="card statCard"><div class="num">${st.lessonsDone}/12</div><div class="lbl">完成课程</div></div>
    </div>
    <div class="sectionTitle">场景课程</div>
    <div class="grid">${grid}</div>
    <div class="sectionTitle">快捷练习</div>
    <div class="grid">
      <div class="card sceneCard" onclick="location.hash='#/review'"><div class="ic">🔁</div><div class="nm">今日复习</div></div>
      <div class="card sceneCard" onclick="location.hash='#/words'"><div class="ic">📕</div><div class="nm">学新单词</div></div>
      <div class="card sceneCard" onclick="location.hash='#/phrases'"><div class="ic">💬</div><div class="nm">常用句子</div></div>
      <div class="card sceneCard" onclick="PhrasesView.outMode()"><div class="ic">🚪</div><div class="nm">出门模式</div></div>
    </div>`;
}

/* —— 课程列表 —— */
function LessonsView() {
  const main = document.getElementById('main');
  const grid = CONTENT.scenes.map(sc => {
    const lp = Store.data.lessonProgress[sc.id];
    const pr = lp && lp.done ? '✓ 已完成' : (lp ? '第 ' + lp.step + ' / 10 步' : '未开始');
    return `<div class="card sceneCard ${lp && lp.done ? 'done' : ''}" onclick="location.hash='#/lesson/${sc.id}'"><div class="ic">${sc.icon}</div><div class="nm">${sc.name}</div><div class="pr">${pr}</div></div>`;
  }).join('');
  main.innerHTML = `<div class="sectionTitle">共 12 个场景，建议按旅途顺序学习</div><div class="grid">${grid}</div>`;
}

/* —— 统计 —— */
function StatsView() {
  const main = document.getElementById('main');
  const st = Store.data.stats;
  const rows = CONTENT.scenes.map(sc => {
    const a = st.answers[sc.id];
    if (!a || !a.total) return '';
    const p = Math.round(a.right / a.total * 100);
    return `<div class="pctRow"><div class="pt"><span>${sc.icon} ${sc.name}</span><span>${a.right}/${a.total} · ${p}%</span></div><div class="pctBar"><i style="width:${p}%"></i></div></div>`;
  }).join('');
  main.innerHTML = `
    <div class="sectionTitle">学习总览</div>
    <div class="statRow">
      <div class="card statCard"><div class="num">🔥${st.streak}</div><div class="lbl">连续天数</div></div>
      <div class="card statCard"><div class="num">${Store.data.learnedWords.length}</div><div class="lbl">已学单词</div></div>
      <div class="card statCard"><div class="num">${Store.data.learnedSents.length}</div><div class="lbl">已学句子</div></div>
    </div>
    <div class="statRow">
      <div class="card statCard"><div class="num">${st.lessonsDone}/12</div><div class="lbl">完成课程</div></div>
      <div class="card statCard"><div class="num">${Object.keys(Store.data.srs).length}</div><div class="lbl">复习队列中</div></div>
      <div class="card statCard"><div class="num">${st.todayDate === Store.today() ? st.todayCount : 0}</div><div class="lbl">今日已练</div></div>
    </div>
    <div class="sectionTitle">各课听懂率（答题正确率）</div>
    <div class="card">${rows || '<div class="muted">还没有答题记录，去上一节课试试</div>'}</div>`;
}

/* —— 设置 —— */
function SettingsView() {
  const main = document.getElementById('main');
  const s = Store.data.settings;
  const d = Store.daysSinceBackup();
  const lastBk = s.lastBackup ? '上次备份：' + s.lastBackup + (d !== null ? '（' + d + ' 天前）' : '') : '还没有导出过备份';
  main.innerHTML = `
    <div class="sectionTitle">数据备份</div>
    <div class="card">
      <div class="muted" style="margin-bottom:12px;line-height:1.7">学习数据只存在本机浏览器里。换设备或清理浏览器数据前，请先导出备份文件保存到别处（微信文件传输助手、U盘等）。</div>
      <div class="muted" style="margin-bottom:14px">${lastBk}</div>
      <div class="btnRow">
        <button class="btn" onclick="doExportBackup()">📤 导出备份文件</button>
        <button class="btn orange" onclick="document.getElementById('importFile').click()">📥 导入备份恢复</button>
      </div>
      <input type="file" id="importFile" accept=".json,application/json" class="hidden">
      <div class="setRow"><span>备份提醒周期</span><select class="sel" id="setRemind">${[7, 14, 30].map(n => `<option value="${n}" ${s.remindDays == n ? 'selected' : ''}>${n} 天</option>`).join('')}</select></div>
    </div>
    <div class="sectionTitle">学习设置</div>
    <div class="card">
      <div class="setRow"><span>每日复习上限</span><select class="sel" id="setCap">${[10, 20, 30, 50].map(n => `<option value="${n}" ${s.dailyCap == n ? 'selected' : ''}>${n} 个</option>`).join('')}</select></div>
    </div>
    <div class="sectionTitle">关于</div>
    <div class="card">
      <div class="muted" style="line-height:1.9">旅行英语 v0.1.0<br>学习理念：先听后看 · 一篇吃透 · 学过必复习 · 能变速 · 看得见的进步<br>数据只存本机，不上传任何服务器。</div>
    </div>`;
  document.getElementById('setRemind').addEventListener('change', e => { Store.data.settings.remindDays = +e.target.value; Store.save(); showToast('✓ 已保存'); App.render(); });
  document.getElementById('setCap').addEventListener('change', e => { Store.data.settings.dailyCap = +e.target.value; Store.save(); showToast('✓ 已保存'); });
  document.getElementById('importFile').addEventListener('change', doImportBackup);
}

function doExportBackup() {
  const b = Store.exportBackup();
  const now = new Date();
  const ts = `${now.getFullYear()}${Store.pad(now.getMonth() + 1)}${Store.pad(now.getDate())}-${Store.pad(now.getHours())}${Store.pad(now.getMinutes())}`;
  const blob = new Blob([JSON.stringify(b, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `旅行英语备份-${ts}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 5000);
  Store.data.settings.lastBackup = Store.today();
  Store.save();
  showToast('✅ 备份已导出，请把文件保存到安全的地方');
  App.render();
}
function doImportBackup(ev) {
  const f = ev.target.files[0];
  if (!f) return;
  const reader = new FileReader();
  reader.onload = () => {
    let obj = null;
    try { obj = JSON.parse(reader.result); } catch (e) {}
    ev.target.value = '';
    if (!obj || obj.app !== 'lxz-travel-english') { showToast('这不是本软件的备份文件，请检查后重试', 'err'); return; }
    if (typeof obj.ver === 'number' && obj.ver > 1) { showToast('这个备份来自更新版本的软件，请先升级软件再导入', 'err'); return; }
    if (!confirm('导入将覆盖当前全部学习数据，是否继续？\n（建议先导出当前数据留底）')) return;
    const res = Store.importBackup(obj);
    if (res === 'ok') { showToast('✅ 导入成功，正在刷新…'); setTimeout(() => location.reload(), 800); }
    else showToast('导入失败，请重试', 'err');
  };
  reader.readAsText(f);
}
