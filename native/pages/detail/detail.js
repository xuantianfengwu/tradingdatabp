Page({
  data: {
    detail: {},
    loading: true
  },

  onLoad: function(options) {
    const { module, id } = options;
    this.loadDetail(module, id);
  },

  loadDetail: function(module, id) {
    const COS_BASE_URL = 'https://astockdata-1256438093.cos.ap-shanghai.myqcloud.com/databp_miniprogram/data';
    const url = `${COS_BASE_URL}/${module}/details/${id}.json`;
    // const LOCAL_BASE_PATH = '/data';
    // const url = `${LOCAL_BASE_PATH}/${module}/details/${id}.json`;

    wx.showLoading({
      title: '加载中...'
    });

    wx.request({
      url: url,
      method: 'GET',
      success: (res) => {
        wx.hideLoading();
        if (res.data) {
          this.setData({
            detail: res.data,
            loading: false
          });
        } else {
          wx.showToast({
            title: '数据加载失败',
            icon: 'none'
          });
        }
      },
      fail: (err) => {
        wx.hideLoading();
        console.error('Failed to load detail:', err);
        wx.showToast({
          title: '加载失败',
          icon: 'none'
        });
      }
    });
  },

  openLink: function() {
    const url = this.data.detail.url;
    if (url) {
      wx.setClipboardData({
        data: url,
        success: () => {
          wx.showToast({
            title: '链接已复制',
            icon: 'success'
          });
        }
      });
    }
  },

  openArticle: function(e) {
    const articleId = e.currentTarget.dataset.articleId;
    const articleUrl = `https://mp.weixin.qq.com/s/${articleId}`;
    
    wx.navigateTo({
      url: `/pages/webview/webview?url=${encodeURIComponent(articleUrl)}`
    });
  },

  onShareAppMessage: function() {
    const detail = this.data.detail;
    return {
      title: detail.name || '详情',
      path: `/pages/detail/detail?module=${this.options.module}&id=${this.options.id}`
    };
  }
});