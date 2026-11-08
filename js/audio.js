/* 旅行英语 —— 播放引擎：音频文件优先（保真变速），设备语音兜底 */
const AudioEngine = {
  index: {},       // id -> 英文文本（兜底朗读用）
  ctx: null,
  buffers: {},     // id -> AudioBuffer
  loading: {},
  rate: 1,
  playing: null,

  ensureCtx() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) this.ctx = new AC();
    }
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  },

  /* 取音频文件并解码（带缓存与简单清理） */
  async getBuffer(id) {
    if (this.buffers[id]) return this.buffers[id];
    if (this.loading[id]) return this.loading[id];
    this.ensureCtx();
    if (!this.ctx) return null;
    this.loading[id] = (async () => {
      try {
        const r = await fetch('audio/' + id + '.mp3');
        if (!r.ok) return null;
        const ab = await r.arrayBuffer();
        const buf = await this.ctx.decodeAudioData(ab);
        this.buffers[id] = buf;
        if (Object.keys(this.buffers).length > 120) {
          delete this.buffers[Object.keys(this.buffers)[0]];
        }
        return buf;
      } catch (e) { return null; }
    })();
    const b = await this.loading[id];
    delete this.loading[id];
    return b;
  },

  /* 播放：返回 { dur } 秒数，供连播用 */
  async play(id, rate) {
    rate = rate || this.rate || 1;
    this.stop();
    const text = this.index[id];
    try {
      const buf = await this.getBuffer(id);
      if (buf) {
        this.ensureCtx();
        const src = this.ctx.createBufferSource();
        src.buffer = buf;
        src.playbackRate.value = rate;
        if ('preservePitch' in src) src.preservePitch = true; // 变速不变调
        src.connect(this.ctx.destination);
        src.start(0);
        this.playing = src;
        return { dur: buf.duration / rate };
      }
    } catch (e) {}
    if (text) { this.speak(text, rate); return { dur: Math.max(1.2, text.length / 14 / rate + 0.3) }; }
    return { dur: 1.2 };
  },

  /* 兜底：设备自带语音朗读 */
  speak(text, rate) {
    try {
      if (!('speechSynthesis' in window)) return;
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US';
      u.rate = rate;
      const vs = speechSynthesis.getVoices();
      const v = vs.find(x => x.lang === 'en-US') || vs.find(x => x.lang && x.lang.indexOf('en') === 0);
      if (v) u.voice = v;
      speechSynthesis.speak(u);
    } catch (e) {}
  },

  stop() {
    try {
      if (this.playing) { this.playing.stop(); this.playing = null; }
      if ('speechSynthesis' in window) speechSynthesis.cancel();
    } catch (e) {}
  }
};
