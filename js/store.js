/* 旅行英语 —— 本地数据、间隔复习、备份 */
const Store = {
  KEY: 'lxzTravelEn',
  data: null,
  INTV: [0, 1, 3, 7, 21], // 复习间隔：明天→3天→7天→21天→移出队列
  pad(n) { return String(n).padStart(2, '0'); },
  fmt(d) { return d.getFullYear() + '-' + this.pad(d.getMonth() + 1) + '-' + this.pad(d.getDate()); },
  today() { return this.fmt(new Date()); },
  addDays(dateStr, n) { const d = new Date(dateStr + 'T00:00:00'); d.setDate(d.getDate() + n); return this.fmt(d); },
  yesterday() { return this.addDays(this.today(), -1); },

  load() {
    let raw = null;
    try { raw = JSON.parse(localStorage.getItem(this.KEY)); } catch (e) {}
    if (raw && raw.ver === 1) { this.data = raw; this.normalize(); }
    else {
      this.data = {
        ver: 1,
        settings: { remindDays: 7, dailyCap: 20, lastBackup: '' },
        srs: {},
        lessonProgress: {},
        favorites: [],
        learnedWords: [],
        learnedSents: [],
        stats: { streak: 0, lastStudy: '', todayDate: '', todayCount: 0, lessonsDone: 0, answers: {} },
        lastLesson: null
      };
      this.save();
    }
  },
  normalize() {
    const d = this.data;
    d.settings = Object.assign({ remindDays: 7, dailyCap: 20, lastBackup: '' }, d.settings || {});
    d.srs = d.srs || {};
    d.lessonProgress = d.lessonProgress || {};
    d.favorites = d.favorites || [];
    d.learnedWords = d.learnedWords || [];
    d.learnedSents = d.learnedSents || [];
    d.stats = Object.assign({ streak: 0, lastStudy: '', todayDate: '', todayCount: 0, lessonsDone: 0, answers: {} }, d.stats || {});
    d.lastLesson = d.lastLesson || null;
  },
  save() { try { localStorage.setItem(this.KEY, JSON.stringify(this.data)); } catch (e) { console.warn('保存失败', e); } },

  /* 记录一次学习行为（连续天数/今日计数） */
  touch() {
    const t = this.today(), st = this.data.stats;
    if (st.todayDate !== t) { st.todayDate = t; st.todayCount = 0; }
    st.todayCount++;
    if (st.lastStudy !== t) {
      if (st.lastStudy === this.yesterday()) st.streak++;
      else st.streak = 1;
      st.lastStudy = t;
    }
    this.save();
  },

  /* —— 间隔复习 —— */
  learnItem(type, id) {
    if (this.data.srs[id]) return;
    this.data.srs[id] = { type, level: 1, next: this.addDays(this.today(), 1), lapses: 0 };
    this.touch();
    this.save();
  },
  answerCard(id, remembered) {
    const e = this.data.srs[id];
    if (!e) return;
    if (remembered) {
      e.level++;
      if (e.level >= 5) delete this.data.srs[id];
      else e.next = this.addDays(this.today(), this.INTV[e.level]);
    } else {
      e.level = 1; e.lapses++; e.next = this.addDays(this.today(), 1);
    }
    this.touch();
    this.save();
  },
  dueList() {
    const t = this.today();
    return Object.entries(this.data.srs)
      .filter(([, e]) => e.next <= t)
      .map(([id, e]) => Object.assign({ id }, e));
  },
  dueCount() { return this.dueList().length; },

  /* —— 已学标记 —— */
  markLearned(type, id, on) {
    const arr = type === 'word' ? this.data.learnedWords : this.data.learnedSents;
    const i = arr.indexOf(id);
    if (on && i < 0) { arr.push(id); this.learnItem(type === 'word' ? 'word' : 'sentence', id); }
    if (!on && i >= 0) arr.splice(i, 1);
    this.save();
  },
  isLearned(type, id) {
    const arr = type === 'word' ? this.data.learnedWords : this.data.learnedSents;
    return arr.indexOf(id) >= 0;
  },
  toggleFav(id) {
    const i = this.data.favorites.indexOf(id);
    if (i >= 0) this.data.favorites.splice(i, 1);
    else this.data.favorites.push(id);
    this.save();
  },
  isFav(id) { return this.data.favorites.indexOf(id) >= 0; },

  /* —— 备份 —— */
  exportBackup() {
    return { app: 'lxz-travel-english', ver: 1, exportedAt: new Date().toISOString(), data: this.data };
  },
  importBackup(obj) {
    if (!obj || obj.app !== 'lxz-travel-english') return 'bad';
    if (typeof obj.ver === 'number' && obj.ver > 1) return 'newer';
    this.data = obj.data || this.data;
    this.normalize();
    this.save();
    return 'ok';
  },
  daysSinceBackup() {
    if (!this.data.settings.lastBackup) return null;
    const d1 = new Date(this.data.settings.lastBackup + 'T00:00:00');
    const d2 = new Date(this.today() + 'T00:00:00');
    return Math.round((d2 - d1) / 86400000);
  }
};
