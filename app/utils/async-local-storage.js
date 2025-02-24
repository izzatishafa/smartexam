const asyncLocalStorage = {
  async setItem(key, value) {
    await Promise.resolve();
    localStorage.setItem(key, value);
  },
  async getItem(key) {
    await Promise.resolve();
    return localStorage.getItem(key);
  },
};

export default asyncLocalStorage;
