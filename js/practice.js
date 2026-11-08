/* 旅行英语 —— 词汇卡、句子手册、今日复习 */
const Words = { filter: null };
const Phrases = { filter: null };
const Review = { queue: [], idx: 0, leftover: 0 };

/* ================= 词汇 ================= */
function WordsView() {
  const main = document.getElementById('main');
  const chips = `<div class="chipRow"><button class="fchip ${!Words.filter ? 'on' : ''}" data-sc="">全部</button>${CONTENT.scenes.map(sc => `<button class="fchip ${Words.filter === sc.id ? 'on' : ''}" data-sc="${sc.id}">${sc.icon} ${sc.name}</button>`).join('')}</div>`;
  const list = Words.filter
    ? findScene(Words.filter).words.map(w => ({ w, scId: Words.filter }))
    : CONTENT.scenes.flatMap(sc => sc.words.map(w => ({ w, scId: sc.id })));
  const grid = list.map(({ w }) => {
    const learned = Store.isLearned('word', w.id);
    return `<div class="card wordCard ${learned ? 'learned' : ''}" data-id="${w.id}"><div class="em">${w.emoji}</div><div class="en">${esc(w.en)}</div><div class="zh">${esc(w.zh)}</div>${learned ? '<div class="learnBadge">已学 ✓</div>' : ''}</div>`;
  }).join('');
  main.innerHTML = `
    <div class="sectionTitle">旅游核心词（标记已学后自动进复习队列）</div>
    <div class="btnRow">
      <button class="btn ghost" id="quizChoice">🔊 听音想义</button>
      <button class="btn ghost" id="quizType">✍️ 遮词听写</button>
    </div>
    ${chips}
    <div class="wordGrid">${grid}</div>`;
  main.querySelectorAll('.fchip').forEach(c => c.addEventListener('click', () => { Words.filter = c.dataset.sc || null; WordsView(); }));
  main.querySelectorAll('.wordCard').forEach(c => c.addEventListener('click', () => openWordModal(c.dataset.id)));
  document.getElementById('quizChoice').addEventListener('click', () => Quiz.start('choice', Words.filter));
  document.getElementById('quizType').addEventListener('click', () => Quiz.start('type', Words.filter));
}

function openWordModal(wid) {
  const w = WORDMAP[wid];
  if (!w) return;
  const d = document.createElement('div');
  d.className = 'modal';
  d.id = 'wordModal';
  d.innerHTML = `<div class="modalCard">
    <div class="em">${w.emoji}</div>
    <div class="wen">${esc(w.en)}</div>
    <div class="ipa">${esc(w.ipa)}</div>
    <div class="wzh">${esc(w.zh)}</div>
    <div class="ex">${esc(w.ex)}</div>
    <div class="exZh">${esc(w.exZh)}</div>
    <div class="btnRow">
      <button class="btn ghost" id="wPlay">🔊 单词</button>
      <button class="btn ghost" id="wPlayEx">🔊 例句</button>
    </div>
    <div class="btnRow">
      <button class="btn ${Store.isLearned('word', wid) ? 'green' : ''}" id="wLearn">${Store.isLearned('word', wid) ? '✓ 已学会' : '✅ 学会了'}</button>
      <button class="btn ghost" id="wClose">关闭</button>
    </div>
  </div>`;
  document.body.appendChild(d);
  document.getElementById('wPlay').addEventListener('click', () => AudioEngine.play(wid, App.rate));
  document.getElementById('wPlayEx').addEventListener('click', () => AudioEngine.play(wid + '-x', App.rate));
  document.getElementById('wLearn').addEventListener('click', () => {
    if (!Store.isLearned('word', wid)) {
      Store.markLearned('word', wid, true);
      showToast('✅ 已加入复习队列，明天会提醒您复习');
    }
    closeWordModal();
    if (App.route === 'words') WordsView();
  });
  document.getElementById('wClose').addEventListener('click', closeWordModal);
  d.addEventListener('click', e => { if (e.target === d) closeWordModal(); });
}
function closeWordModal() { const m = document.getElementById('wordModal'); if (m) m.remove(); }

/* —— 小测验：听音想义 / 遮词听写 —— */
const Quiz = {
  mode: null, scene: null, pool: [], all: [], idx: 0, score: 0,
  start(mode, sceneId) {
    this.mode = mode;
    this.scene = sceneId;
    this.all = sceneId ? findScene(sceneId).words : CONTENT.scenes.flatMap(sc => sc.words);
    let pool = this.all;
    if (!sceneId) {
      const learned = pool.filter(w => Store.isLearned('word', w.id));
      if (learned.length >= 4) pool = learned;
    }
    this.pool = pool.slice().sort(() => Math.random() - 0.5).slice(0, 10);
    this.idx = 0;
    this.score = 0;
    this.render();
  },
  render() {
    const main = document.getElementById('main');
    if (this.idx >= this.pool.length) {
      const n = this.pool.length;
      main.innerHTML = `<div class="card center" style="padding:30px 20px">
        <div class="quizScore">${this.score}/${n}</div>
        <div class="muted">${this.score === n ? '全对，太棒了！🎉' : '不错，再来一轮巩固一下'}</div>
        <div class="btnRow">
          <button class="btn ghost" onclick="location.hash='#/words'">返回词汇</button>
          <button class="btn" id="qAgain">再来一轮</button>
        </div>
      </div>`;
      document.getElementById('qAgain').addEventListener('click', () => this.start(this.mode, this.scene));
      Store.touch();
      return;
    }
    const w = this.pool[this.idx];
    if (this.mode === 'choice') {
      const opts = [w.zh].concat(this.all.filter(x => x.id !== w.id).sort(() => Math.random() - 0.5).slice(0, 3).map(x => x.zh)).sort(() => Math.random() - 0.5);
      main.innerHTML = `<div class="card center">
        <div class="stepTitle">🔊 听音想义（${this.idx + 1}/${this.pool.length}）</div>
        <div style="font-size:44px;margin:10px 0">${w.emoji}</div>
        <button class="bigPlay" id="qPlay">🔊</button>
        <div id="qOpts" style="text-align:left">${opts.map((o, i) => `<button class="optBtn" data-zh="${esc(o)}">${String.fromCharCode(65 + i)}. ${esc(o)}</button>`).join('')}</div>
        <div class="btnRow"><button class="btn" id="qNext" style="display:none">下一题 →</button></div>
      </div>`;
      document.getElementById('qPlay').addEventListener('click', () => AudioEngine.play(w.id, App.rate));
      AudioEngine.play(w.id, App.rate);
      let answered = false;
      $$('#qOpts .optBtn').forEach(bt => bt.addEventListener('click', () => {
        if (answered) return;
        answered = true;
        if (bt.dataset.zh === w.zh) { bt.classList.add('right'); this.score++; }
        else {
          bt.classList.add('wrong');
          $$('#qOpts .optBtn').forEach(x => { if (x.dataset.zh === w.zh) x.classList.add('right'); });
        }
        document.getElementById('qNext').style.display = '';
      }));
      document.getElementById('qNext').addEventListener('click', () => { this.idx++; this.render(); });
    } else {
      main.innerHTML = `<div class="card center">
        <div class="stepTitle">✍️ 遮词听写（${this.idx + 1}/${this.pool.length}）</div>
        <div style="font-size:44px;margin:10px 0">${w.emoji}</div>
        <button class="bigPlay" id="qPlay">🔊</button>
        <div class="muted">把听到的单词打出来</div>
        <input class="dictInput" id="qIn" placeholder="在这里输入" autocomplete="off" autocapitalize="off">
        <div id="qFb"></div>
        <div class="btnRow"><button class="btn ghost" id="qShow">👀 看答案</button><button class="btn" id="qCheck">检查</button></div>
      </div>`;
      document.getElementById('qPlay').addEventListener('click', () => AudioEngine.play(w.id, App.rate));
      AudioEngine.play(w.id, App.rate);
      let passed = false;
      const go = (right) => {
        if (passed) return;
        passed = true;
        if (right) this.score++;
        document.getElementById('qFb').innerHTML = right
          ? `<div class="fbOk">✅ 正确！${esc(w.en)} — ${esc(w.zh)}</div>`
          : `<div class="fbNo">答案是：${esc(w.en)} — ${esc(w.zh)}</div>`;
        const bt = document.getElementById('qCheck');
        bt.textContent = '下一题 →';
        bt.onclick = () => { this.idx++; this.render(); };
      };
      const check = () => {
        const v = document.getElementById('qIn').value.trim().toLowerCase().replace(/\s+/g, '');
        const ans = w.en.toLowerCase().replace(/\s+/g, '');
        if (!v) { showToast('先听一听，把词打出来', 'err'); return; }
        go(v === ans);
      };
      document.getElementById('qCheck').addEventListener('click', check);
      document.getElementById('qIn').addEventListener('keydown', e => { if (e.key === 'Enter') check(); });
      document.getElementById('qShow').addEventListener('click', () => go(false));
    }
  }
};

/* ================= 句子手册 ================= */
function PhrasesView() {
  const main = document.getElementById('main');
  const sc = Phrases.filter ? findScene(Phrases.filter) : null;
  const list = sc ? sc.sentences : CONTENT.scenes.flatMap(x => x.sentences);
  main.innerHTML = `
    <div class="sectionTitle">常用句子手册（标记"已学"会进复习队列）</div>
    <div class="card" style="padding:12px 14px">
      ${rateBarHTML()}
      <div style="display:flex;gap:8px">
        <button class="btn orange" id="outMode" style="flex:1">🚪 出门模式（大字给当地人看）</button>
      </div>
    </div>
    <div class="chipRow"><button class="fchip ${!Phrases.filter ? 'on' : ''}" data-sc="">全部</button>${CONTENT.scenes.map(x => `<button class="fchip ${Phrases.filter === x.id ? 'on' : ''}" data-sc="${x.id}">${x.icon} ${x.name}</button>`).join('')}</div>
    <div>${list.map(s => {
      const fav = Store.isFav(s.id);
      const learned = Store.isLearned('sent', s.id);
      return `<div class="card phraseRow">
        <div class="pen">${esc(s.en)}</div>
        <div class="pzh">${esc(s.zh)}</div>
        <div class="pact">
          <button class="iconSm" data-act="play" data-id="${s.id}">🔊</button>
          <button class="iconSm ${fav ? 'on' : ''}" data-act="fav" data-id="${s.id}">⭐</button>
          <button class="iconSm" data-act="rec" data-id="${s.id}">🎤</button>
          <button class="btn small ${learned ? 'green' : 'ghost'}" data-act="learn" data-id="${s.id}" style="margin-left:auto">${learned ? '✓ 已学' : '标记已学'}</button>
        </div>
      </div>`;
    }).join('')}</div>`;
  main.querySelectorAll('.fchip').forEach(c => c.addEventListener('click', () => { Phrases.filter = c.dataset.sc || null; PhrasesView(); }));
  main.querySelectorAll('[data-act]').forEach(b => b.addEventListener('click', () => {
    const id = b.dataset.id;
    const act = b.dataset.act;
    if (act === 'play') AudioEngine.play(id, App.rate);
    else if (act === 'fav') { Store.toggleFav(id); b.classList.toggle('on'); showToast(Store.isFav(id) ? '⭐ 已收藏' : '已取消收藏'); }
    else if (act === 'rec') {
      if (Recorder.active) { Recorder.stop(() => { b.textContent = '▶'; b.dataset.recorded = '1'; }); b.textContent = '⏹'; }
      else if (b.dataset.recorded === '1') Recorder.playMine();
      else { Recorder.start(); b.textContent = '⏹'; }
    } else if (act === 'learn') {
      const on = !Store.isLearned('sent', id);
      Store.markLearned('sent', id, on);
      showToast(on ? '✅ 已加入复习队列' : '已取消已学标记');
      PhrasesView();
    }
  }));
  document.getElementById('outMode').addEventListener('click', () => PhrasesView.outMode());
}

/* 出门模式：大字卡片 */
PhrasesView.outMode = function () {
  const sc = Phrases.filter ? findScene(Phrases.filter) : null;
  const list = sc ? sc.sentences : CONTENT.scenes.flatMap(x => x.sentences);
  if (!list.length) { showToast('没有句子', 'err'); return; }
  const ov = document.createElement('div');
  ov.className = 'outOverlay';
  ov.id = 'outMode';
  let idx = 0;
  let tx = 0;
  const render = () => {
    const s = list[idx];
    ov.innerHTML = `
      <div class="outTop"><button class="iconBtn" id="outClose">✕</button><div class="cnt">${esc(sc ? sc.icon + ' ' + sc.name : '全部句子')} · ${idx + 1}/${list.length}</div><button class="iconBtn" id="outFav">${Store.isFav(s.id) ? '⭐' : '☆'}</button></div>
      <div class="outBody">
        <div class="outCard">
          <div class="oen">${esc(s.en)}</div>
          <div class="ozh">${esc(s.zh)}</div>
          <button class="bigPlay" id="outPlay">🔊</button>
          <div class="muted">需要时可以直接把手机给当地人看</div>
        </div>
      </div>
      <div class="outNav">
        <button class="btn ghost" id="outPrev">← 上一句</button>
        <button class="btn" id="outNext">下一句 →</button>
      </div>`;
    document.getElementById('outClose').addEventListener('click', () => ov.remove());
    document.getElementById('outFav').addEventListener('click', () => { Store.toggleFav(s.id); render(); });
    document.getElementById('outPlay').addEventListener('click', () => AudioEngine.play(s.id, App.rate));
    document.getElementById('outPrev').addEventListener('click', () => { idx = (idx - 1 + list.length) % list.length; render(); });
    document.getElementById('outNext').addEventListener('click', () => { idx = (idx + 1) % list.length; render(); });
  };
  render();
  document.body.appendChild(ov);
  ov.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  ov.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 60) { idx = (idx + (dx < 0 ? 1 : -1) + list.length) % list.length; render(); }
  }, { passive: true });
};

/* ================= 今日复习 ================= */
function ReviewView() {
  const due = Store.dueList();
  const cap = Store.data.settings.dailyCap;
  Review.queue = due.slice(0, cap);
  Review.leftover = due.length - cap;
  Review.idx = 0;
  Review.render();
}
Review.render = function () {
  const main = document.getElementById('main');
  const q = this.queue;
  if (this.idx >= q.length) {
    const done = q.length;
    main.innerHTML = `<div class="card center" style="padding:30px 20px">
      <div style="font-size:52px">${done ? '🎉' : '🌤️'}</div>
      <div class="stepTitle" style="margin-top:10px">${done ? '今日复习完成！' : '今天没有待复习内容'}</div>
      <div class="muted" style="line-height:1.9">${done ? `复习了 ${done} 个词句${this.leftover > 0 ? `，还剩 ${this.leftover} 个明天再清` : ''}，连续天数已更新` : '去学点新的吧，学过的内容会自己排期复习'}</div>
      <div class="btnRow">
        <button class="btn ghost" onclick="location.hash='#/lessons'">学习新课</button>
        <button class="btn" onclick="location.hash='#/words'">学新单词</button>
      </div>
    </div>`;
    App.refreshTopbar();
    return;
  }
  const item = q[this.idx];
  const w = item.type === 'word' ? WORDMAP[item.id] : null;
  const s = item.type === 'sentence' ? SENTMAP[item.id] : null;
  if (!w && !s) { this.idx++; this.render(); return; }
  main.innerHTML = `<div class="card reviewCard">
    <div class="rtype">${item.type === 'word' ? '📕 单词复习' : '💬 句子复习'} · ${this.idx + 1}/${q.length}</div>
    <div style="font-size:44px;margin-top:12px">${w ? w.emoji : '🔊'}</div>
    <button class="bigPlay" id="rPlay">🔊</button>
    <div class="muted">先听音，想一想意思</div>
    <div id="rAns" style="display:none">
      <div class="rEn">${esc(w ? w.en : s.en)}</div>
      <div class="rZh">${w ? esc(w.zh) + '　' + esc(w.ipa) : esc(s.zh)}</div>
      ${w ? `<div class="muted mt8">${esc(w.ex)}<br>${esc(w.exZh)}</div>` : ''}
    </div>
    <div class="btnRow"><button class="btn ghost" id="rShow">👀 看答案</button></div>
    <div class="ansBtns" id="rBtns" style="display:none">
      <button class="btn green" id="rKnow">👍 认识</button>
      <button class="btn red" id="rForgot">😅 忘了</button>
    </div>
  </div>`;
  document.getElementById('rPlay').addEventListener('click', () => AudioEngine.play(item.id, App.rate));
  AudioEngine.play(item.id, App.rate);
  document.getElementById('rShow').addEventListener('click', () => {
    document.getElementById('rAns').style.display = '';
    document.getElementById('rBtns').style.display = '';
    document.getElementById('rShow').style.display = 'none';
    AudioEngine.play(item.id, App.rate);
  });
  const adv = rem => { Store.answerCard(item.id, rem); this.idx++; this.render(); };
  document.getElementById('rKnow').addEventListener('click', () => adv(true));
  document.getElementById('rForgot').addEventListener('click', () => adv(false));
};
