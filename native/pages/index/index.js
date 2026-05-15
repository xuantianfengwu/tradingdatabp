Page({
  data: {
    motto: '欢迎使用璇天凤舞的数据助手',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function() {
    console.log('首页加载');
  },
  goToData: function() {
    wx.switchTab({
      url: '/pages/data/data'
    });
  },
  goToStrategy: function() {
    wx.switchTab({
      url: '/pages/strategy/strategy'
    });
  },
  goToTools: function() {
    wx.switchTab({
      url: '/pages/tools/tools'
    });
  },
  onShareAppMessage: function() {
    return {
      title: '璇天凤舞的数据助手 - 专业投资工具',
      path: '/pages/index/index',
      imageUrl: ''
    };
  }
})
