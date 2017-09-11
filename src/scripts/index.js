export default class Hook {
  constructor() {
    this.hooks = new Map();
  }

  register(name, cb) {
    if (!this.hooks.has(name)) {
      this.hooks.set(name, new Set());
    }

    if (cb && typeof cb === 'function') {
      this.hooks.get(name).add(cb);
    }
  }

  call(name, ...rest) {
    if (this.hooks.has(name)) {
      this.hooks.get(name).forEach(cb =>
        (typeof cb === 'function') && cb(...rest));
    }
  }
}
