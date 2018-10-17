
Page({
  data: {
    username: null,
    id:'',
    projectSource: 'www.weblzh.top',
    userListInfo: [{
      text: '逻符会展活动策划与管理',
    },{
      icon: '../../images/iconfont-dingdan.png',
      text: '日期：2018-10-17 09:00',
    }, {
      icon: '../../images/iconfont-shouhuodizhi.png',
      text: '地址：深圳市逻符科技有限公司',
    }, {
      icon: '../../images/iconfont-kefu.png',
      text: '本场价格：999$'
    }],
  },
  payt: function () {
    wx.showLoading({
      "title":'正在支付',
      icon: 'success',
      duration: 1000,
    })
  }

})