export default {
  saveStorage: function(key, value) {
    window.localStorage.setItem(key, value);
  },
  getStorage: function(key) {
    return window.localStorage.getItem(key);
  },
  deleteStorage: function(key) {
    if (key) {
      window.localStorage.removeItem(key)
    } else {
      window.localStorage.clear(); // 删除所有数据
    }
  },
  isLogin: function() {
    return this.getStorage('isLogin');
  }
}
