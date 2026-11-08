/* 旅行英语 —— 场景课：十步学习链 */
const Lesson = {
  sc: null,
  state: null,
  rpIdx: 0,
  dictIdx: 0,
  dictTries: 0,
  _playing: false,
  STEPS: ['情境', '目标', '盲听', '答题', '文本', '贴士', '跟读', '演练', '听写', '完成'],

  render(id) {
    this.sc = findScene(id);
    if (!this.sc) { location.hash = '#/lessons'; return; }
    this.state = Store.data.lessonProgress[id];
    if (!this.state) {
      this.state = Store.data.lessonProgress[id] = { step: 1, firstRight: null, dictRight: 0, dictTried: false, done: false };
      Store.save();
    }
    if (this.state.done) this.state.step = 10;
    const main = document.getElementById('main');
    main.innerHTML = `
      <div class="lessonHead">
        <button class="back" onclick="location.hash='#/lessons'">←</button>
        <h2>${this.sc.icon} ${this.sc.name}</h2>
      </div>
      <div class="dots">${this.STEPS.map((s, i) => {
        const n = i + 1;
        let cls = 'dot';
        if (this.state.done || n < this.state.step) cls += ' done';
        else if (n === this.state.step) cls += ' cur';
        return `<span class="${cls}">${s}</span>`;
      }).join('')}</div>
      <div id="stepBox"></div>`;
    this.renderStep();
  },

  renderStep() {
    const box = document.getElementById('stepBox');
    if (!box) return;
    box.innerHTML = '';
    const step = this.state.step;
    if (step === 1) this.sIntro(box);
    else if (step === 2) this.sObjective(box);
    else if (step === 3) this.sListen(box);
    else if (step === 4) this.sAnswer(box);
    else if (step === 5) this.sTranscript(box);
    else if (step === 6) this.sTips(box);
    else if (step === 7) this.sShadow(box);
    else if (step === 8) this.sRoleplay(box);
    else if (step === 9) this.sDictation(box);
    else this.sDone(box);
  },

  next(n) {
    this.state.step = n;
    Store.data.lastLesson = { sceneId: this.sc.id, step: n };
    Store.touch();
    Store.save();
    this.render(this.sc.id);
  },
  playLine(i) { AudioEngine.play(this.sc.id + '-d' + i, App.rate); },
  toggleDialogue() {
    if (this._playing) { this._playing = false; return; }
    this._playing = true;
    this.playSeq(0);
  },
  async playSeq(i) {
    const L = this.sc.lesson;
    const b = document.getElementById('bPlay');
    if (!this._playing || i >= L.dialogue.length) {
      this._playing = false;
      if (b) b.textContent = '🔊';
      return;
    }
    if (b) b.textContent = '⏹ 停止';
    const r = await AudioEngine.play(this.sc.id + '-d' + i, App.rate);
    const dur = (r && r.dur ? r.dur : (L.dialogue[i].en.length / 14) / App.rate) * 1000;
    setTimeout(() => this.playSeq(i + 1), dur + 450);
  },

  /* ① 情境卡 */
  sIntro(box) {
    const L = this.sc.lesson;
    box.innerHTML = `<div class="card center" style="padding:30px 22px">
      <div style="font-size:56px">${this.sc.icon}</div>
      <div class="stepTitle" style="margin-top:14px">${esc(L.title)}</div>
      <div class="muted" style="font-size:15px;line-height:1.7;margin-top:8px">${esc(L.intro)}</div>
      <div class="btnRow"><button class="btn big" id="b1">开始学习 →</button></div>
    </div>`;
    document.getElementById('b1').addEventListener('click', () => this.next(2));
  },

  /* ② 听力目标 */
  sObjective(box) {
    const L = this.sc.lesson;
    box.innerHTML = `<div class="card">
      <div class="stepTitle">🎯 听力目标</div>
      <div class="muted">先记住这个问题，听的时候带着它找答案</div>
      <div class="qBig">${esc(L.objective.q)}</div>
      <div class="btnRow"><button class="btn big" id="b2">开始盲听 →</button></div>
    </div>`;
    document.getElementById('b2').addEventListener('click', () => this.next(3));
  },

  /* ③ 盲听 */
  sListen(box) {
    box.innerHTML = `<div class="card center">
      <div class="stepTitle">👂 盲听第一遍</div>
      <div class="muted">先别看文字，听对话大意。听不懂可调慢语速、多听几遍。</div>
      ${rateBarHTML()}
      <button class="bigPlay" id="bPlay">🔊</button>
      <div class="muted">点击播放完整对话</div>
      <div class="btnRow"><button class="btn big" id="b3">已听完，去答题 →</button></div>
      <button class="btn ghost block mt8" id="bPeek">👀 偷看文字（不推荐）</button>
    </div>`;
    document.getElementById('bPlay').addEventListener('click', () => this.toggleDialogue());
    document.getElementById('b3').addEventListener('click', () => this.next(4));
    document.getElementById('bPeek').addEventListener('click', () => this.next(5));
  },

  /* ④ 答题 */
  sAnswer(box) {
    const L = this.sc.lesson;
    box.innerHTML = `<div class="card">
      <div class="stepTitle">🎯 回答问题</div>
      <div class="qBig">${esc(L.objective.q)}</div>
      <div id="opts">${L.objective.options.map((o, i) => `<button class="optBtn" data-i="${i}">${String.fromCharCode(65 + i)}. ${esc(o)}</button>`).join('')}</div>
      <div class="btnRow">
        <button class="btn ghost" id="bReplay">🔊 再听一遍</button>
        <button class="btn" id="bNext4" style="display:none">下一步 →</button>
      </div>
    </div>`;
    let tried = false;
    const record = (right) => {
      const a = Store.data.stats.answers[this.sc.id] || (Store.data.stats.answers[this.sc.id] = { right: 0, total: 0 });
      a.total++;
      if (right) a.right++;
      Store.touch();
      Store.save();
    };
    $$('#opts .optBtn').forEach(bt => bt.addEventListener('click', () => {
      const i = +bt.dataset.i;
      if (i === L.objective.answer) {
        bt.classList.add('right');
        if (this.state.firstRight === null) this.state.firstRight = !tried;
        record(true);
        $$('#opts .optBtn').forEach(x => x.disabled = true);
        document.getElementById('bNext4').style.display = '';
      } else {
        bt.classList.add('wrong');
        bt.disabled = true;
        if (this.state.firstRight === null) this.state.firstRight = false;
        record(false);
        showToast('不对哦，再听一遍试试', 'err');
      }
      tried = true;
    }));
    document.getElementById('bReplay').addEventListener('click', () => this.toggleDialogue());
    document.getElementById('bNext4').addEventListener('click', () => this.next(5));
  },

  /* ⑤ 文本揭晓（逐句精听） */
  sTranscript(box) {
    box.innerHTML = `<div class="card">
      <div class="stepTitle">📄 对话文本</div>
      <div class="muted" style="margin-bottom:10px">点任意一句，单独听这一句</div>
      ${this.sc.lesson.dialogue.map((l, i) => `<div class="tline ${l.who}" data-i="${i}"><div class="who">${l.who === 'T' ? '🧑 旅客' : '🧑‍💼 店员'}</div><div class="en">${esc(l.en)}</div><div class="zh">${esc(l.zh)}</div></div>`).join('')}
      <div class="btnRow"><button class="btn big" id="b5">下一步 →</button></div>
    </div>`;
    $$('.tline').forEach(t => t.addEventListener('click', () => this.playLine(+t.dataset.i)));
    document.getElementById('b5').addEventListener('click', () => this.next(6));
  },

  /* ⑥ 口语小贴士 */
  sTips(box) {
    box.innerHTML = `<div class="card">
      <div class="stepTitle">💡 口语小贴士</div>
      ${this.sc.lesson.tips.map(t => `<div class="tipCard"><div class="tt">${esc(t.t)}</div><div class="tx">${esc(t.txt)}</div></div>`).join('')}
      <div class="btnRow"><button class="btn big" id="b6">下一步 →</button></div>
    </div>`;
    document.getElementById('b6').addEventListener('click', () => this.next(7));
  },

  /* ⑦ 跟读（可跳过） */
  sShadow(box) {
    box.innerHTML = `<div class="card">
      <div class="stepTitle">🎤 跟读练习</div>
      <div class="muted" style="margin-bottom:8px">听一句 → 录自己读一句 → 放出来和原声对比。练几句就行，不用全部。</div>
      ${this.sc.lesson.dialogue.map((l, i) => `<div class="shadowLine" data-i="${i}">
        <div class="en">${esc(l.en)}</div>
        <div class="zh muted">${esc(l.zh)}</div>
        <div class="act">
          <button class="iconSm" data-act="play">🔊</button>
          <button class="iconSm" data-act="rec">🎤 录</button>
          <button class="iconSm hidden" data-act="mine">▶ 我的</button>
        </div>
      </div>`).join('')}
      <div class="btnRow"><button class="btn ghost" id="bSkip7">跳过此步 →</button><button class="btn" id="b7">完成跟读 →</button></div>
    </div>`;
    box.addEventListener('click', e => {
      const b = e.target.closest('[data-act]');
      if (!b) return;
      const row = b.closest('.shadowLine');
      const i = +row.dataset.i;
      if (b.dataset.act === 'play') this.playLine(i);
      else if (b.dataset.act === 'rec') {
        if (Recorder.active) { Recorder.stop(() => { row.querySelector('[data-act="mine"]').classList.remove('hidden'); }); b.textContent = '🎤 录'; }
        else { Recorder.start(); b.textContent = '⏹ 停'; }
      } else if (b.dataset.act === 'mine') Recorder.playMine();
    });
    document.getElementById('bSkip7').addEventListener('click', () => this.next(8));
    document.getElementById('b7').addEventListener('click', () => this.next(8));
  },

  /* ⑧ 对话演练（可跳过） */
  sRoleplay(box) {
    box.innerHTML = `
      <div class="card">
        <div class="stepTitle">🎭 对话演练</div>
        <div class="muted">软件演店员，您演旅客，一来一回。不想开口可跳过。</div>
        <button class="btn ghost block mt8" id="bSkip8">跳过演练 →</button>
      </div>
      <div id="rpBox"></div>`;
    document.getElementById('bSkip8').addEventListener('click', () => this.next(9));
    this.rpIdx = 0;
    this.renderRoleplay();
  },
  renderRoleplay() {
    const box = document.getElementById('rpBox');
    if (!box) return;
    const dlg = this.sc.lesson.dialogue;
    if (this.rpIdx >= dlg.length) {
      box.innerHTML = `<div class="card center">
        <div class="stepTitle">🎭 演练完成！</div>
        <div class="muted">您已完整过了一遍场景对话</div>
        <div class="btnRow"><button class="btn big" id="b8">下一步 →</button></div>
      </div>`;
      document.getElementById('b8').addEventListener('click', () => this.next(9));
      return;
    }
    const l = dlg[this.rpIdx];
    const isStaff = l.who === 'S';
    box.innerHTML = `<div class="card rpCard">
      <div class="spk">${isStaff ? '🧑‍💼 店员说（仔细听）' : '🙋 该您说啦'}</div>
      <div class="rpEn">${isStaff ? esc(l.en) : ''}</div>
      <div class="rpZh">${esc(l.zh)}</div>
      ${isStaff ? '' : `<div class="rpEn" id="rpEn" style="display:none">${esc(l.en)}</div>`}
      <div class="btnRow" style="justify-content:center">
        ${isStaff
          ? `<button class="btn ghost" id="rpReplay">🔊 再听</button><button class="btn" id="rpNext">下一条 →</button>`
          : `<button class="btn ghost" id="rpShow">💡 显示英文</button><button class="btn ghost" id="rpRec">🎤 录音</button><button class="btn" id="rpNext">跳过这句 →</button>`}
      </div>
    </div>`;
    if (isStaff) AudioEngine.play(this.sc.id + '-d' + this.rpIdx, App.rate);
    document.getElementById('rpNext').addEventListener('click', () => { this.rpIdx++; this.renderRoleplay(); });
    if (isStaff) document.getElementById('rpReplay').addEventListener('click', () => this.playLine(this.rpIdx));
    else {
      document.getElementById('rpShow').addEventListener('click', () => {
        const el = document.getElementById('rpEn');
        el.style.display = el.style.display === 'none' ? '' : 'none';
      });
      document.getElementById('rpRec').addEventListener('click', e => {
        if (Recorder.active) { Recorder.stop(() => { Recorder.playMine(); }); e.target.textContent = '🎤 录音'; }
        else { Recorder.start(); e.target.textContent = '⏹ 停止'; }
      });
    }
  },

  /* ⑨ 挖空听写（可跳过） */
  sDictation(box) {
    this.dictIdx = 0;
    this.dictTries = 0;
    this.renderDictation();
  },
  renderDictation() {
    const box = document.getElementById('stepBox');
    if (!box) return;
    const L = this.sc.lesson;
    if (this.dictIdx >= L.dictation.length) {
      box.innerHTML = `<div class="card center">
        <div class="stepTitle">✍️ 听写完成</div>
        <div class="muted">答对 ${this.state.dictRight} / ${L.dictation.length}${this.state.dictTried ? '' : '（未作答）'}</div>
        <div class="btnRow"><button class="btn big" id="b9">下一步 →</button></div>
      </div>`;
      document.getElementById('b9').addEventListener('click', () => this.next(10));
      return;
    }
    const d = L.dictation[this.dictIdx];
    const line = L.dialogue[d.line];
    const blankText = line.en.replace(new RegExp(escReg(d.blank), 'i'), '____');
    let advanced = false;
    box.innerHTML = `<div class="card center">
      <div class="stepTitle">✍️ 挖空听写（${this.dictIdx + 1}/${L.dictation.length}）</div>
      <div class="muted">听句子，把挖掉的词填出来</div>
      <div class="dictText">${esc(blankText)}</div>
      <button class="btn ghost" id="dPlay">🔊 播放句子</button>
      <input class="dictInput" id="dIn" placeholder="把听到的词打在这里" autocomplete="off" autocapitalize="off">
      <div id="dFb"></div>
      <div class="btnRow"><button class="btn ghost" id="dSkip">跳过此题</button><button class="btn" id="dCheck">检查</button></div>
    </div>`;
    document.getElementById('dPlay').addEventListener('click', () => this.playLine(d.line));
    const check = () => {
      const v = document.getElementById('dIn').value.trim().toLowerCase().replace(/[.,!?'\s]/g, '');
      const ans = d.blank.toLowerCase().replace(/[.,!?'\s]/g, '');
      if (v === ans) {
        document.getElementById('dFb').innerHTML = `<div class="fbOk">✅ 正确！${esc(d.blank)}</div>`;
        this.state.dictRight++;
        this.state.dictTried = true;
        this.dictIdx++;
        this.dictTries = 0;
        Store.touch();
        Store.save();
        setTimeout(() => this.renderDictation(), 900);
      } else {
        this.dictTries++;
        this.state.dictTried = true;
        Store.touch();
        Store.save();
        if (this.dictTries >= 3) {
          document.getElementById('dFb').innerHTML = `<div class="fbNo">答案是：${esc(d.blank)}</div>`;
          const bt = document.getElementById('dCheck');
          bt.textContent = '下一题';
          advanced = true;
        } else {
          document.getElementById('dFb').innerHTML = `<div class="fbNo">不对，再听一遍（还能试 ${3 - this.dictTries} 次）</div>`;
        }
      }
    };
    document.getElementById('dCheck').addEventListener('click', () => {
      if (advanced) { this.dictIdx++; this.dictTries = 0; this.renderDictation(); }
      else check();
    });
    document.getElementById('dIn').addEventListener('keydown', e => { if (e.key === 'Enter') { if (advanced) { this.dictIdx++; this.dictTries = 0; this.renderDictation(); } else check(); } });
    document.getElementById('dSkip').addEventListener('click', () => { this.dictIdx++; this.dictTries = 0; this.renderDictation(); });
  },

  /* ⑩ 完成 */
  sDone(box) {
    const L = this.sc.lesson;
    if (!this.state.done) {
      this.state.done = true;
      this.sc.words.forEach(w => { if (!Store.data.srs[w.id]) Store.learnItem('word', w.id); });
      Store.data.stats.lessonsDone = CONTENT.scenes.filter(sc => (Store.data.lessonProgress[sc.id] || {}).done).length;
      Store.data.lastLesson = null;
      Store.save();
    }
    const idx = CONTENT.scenes.findIndex(sc => sc.id === this.sc.id);
    const nextSc = CONTENT.scenes[idx + 1];
    box.innerHTML = `<div class="card center" style="padding:34px 22px">
      <div style="font-size:56px">🎉</div>
      <div class="stepTitle" style="margin-top:12px">本课完成！</div>
      <div class="muted" style="line-height:2.1;font-size:15px">
        答题：${this.state.firstRight === true ? '一次答对 ✓' : (this.state.firstRight === false ? '多听几遍后答对 ✓' : '—')}<br>
        听写：${this.state.dictTried ? this.state.dictRight + ' / ' + L.dictation.length : '未做（可回头再练）'}<br>
        本课 ${this.sc.words.length} 个单词已加入复习队列
      </div>
      <div class="btnRow">
        <button class="btn ghost" onclick="location.hash='#/lessons'">返回列表</button>
        ${nextSc ? `<button class="btn" onclick="location.hash='#/lesson/${nextSc.id}'">下一课：${nextSc.icon} ${nextSc.name} →</button>` : `<button class="btn" onclick="location.hash='#/stats'">查看统计 →</button>`}
      </div>
      <div class="btnRow">
        <button class="btn small ghost" onclick="Lesson.redo(7)">再练跟读</button>
        <button class="btn small ghost" onclick="Lesson.redo(9)">再练听写</button>
        <button class="btn small ghost" onclick="Lesson.redo(5)">再读文本</button>
      </div>
    </div>`;
  },
  redo(n) {
    this.state.step = n;
    Store.data.lastLesson = { sceneId: this.sc.id, step: n };
    Store.save();
    this.render(this.sc.id);
  }
};
