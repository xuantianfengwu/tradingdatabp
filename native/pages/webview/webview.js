Page({
  data: {
    url: ''
  },

  onLoad: function(options) {
    if (options.url) {
      this.setData({
        url: decodeURIComponent(options.url)
      });
    }
  },

  onMessage: function(e) {
    console.log('收到 web-view 消息:', e.detail);
  },

  onShareAppMessage: function() {
    return {
      title: '文章详情',
      path: `/pages/webview/webview?url=${encodeURIComponent(this.data.url)}`
    };
  }
});