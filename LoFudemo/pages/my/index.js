var app = getApp()
Page( {
  data: {
    username: null,
    projectSource: 'www.weblzh.top',
    userListInfo: [ {
      icon: '../../images/iconfont-dingdan.png',
      text: '已订购活动',
      isunread: true,
      unreadNum: 2
    },  {
        icon: '../../images/iconfont-shouhuodizhi.png',
        text: '逻符地址',
        isunread: true,
        unreadNum: 1
      }, {
        icon: '../../images/iconfont-kefu.png',
        text: '联系逻符'
      }, {
        icon: '../../images/iconfont-help.png',
        text: '常见问题'
      }]
  },

  onLoad: function (options) {
    //调用应用实例的方法获取全局数据
    // 如果初始的appdata数据为空时跳转
    if (app.setData == null) {
      //  wx.navigateTo({url:"../login/login"})
      wx.navigateTo({ url: "../login/index" })
      // 否则获取setData更改的数据
    } else {
      this.setData({username:app.setData.username})
    }
  },
  onReady: function () {
    // 页面渲染完成
  
  },
  onShow: function (options) {
    // 页面显示
    console.log(111)
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})