Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: '',
    res: [0, 1, 2, 3,],
    activityInfo: [{
      price: '999',
      time: '2018-10-16 09:00',
      field: "会展中心",
      content: '加入节日促销的元素，要让顾客感觉到节日促销的气息，让客户更加期待这一天的到来。'
    }, {
      price: '997',
      time: '2018-10-17 10:00',
      field: "宝安中心",
      content: '一场活动中最具有吸引力的无非就是“打折”“优惠”，我们可以通过下面几种方式吸引客户'
    }, {
      price: '996',
      time: '2018-10-18 14:00',
      field: "市民中心",
      content: '消费者在购买指定的商品的基础上，增加一些金额就可以低价买到活动商品。最为直接的就是“第二件半价”的类似促销活动。'
    }, {
      price: '995',
      time: '2018-10-19 15:00',
      field: "福田口岸",
      content: '要了解你的产品适合哪些人群，你店铺的人群有哪些，我们可以在生意参谋里进行人群分析。'
    }]
  },
  lower() {
    var result = this.data.res;
    var resArr = [];
    // 小于当前
    for (let i = 0; i < 10; i++) {
      resArr.push(i);
    };
    var cont = result.concat(resArr);
    console.log(resArr.length);
    // 大于14循环第二页
    if (cont.length >= 10) {
      wx.showToast({ //如果全部加载完成了也弹一个框
        title: '加载完毕',
        icon: 'success',
        duration: 1000,
      });
      return false;
    } else {
      wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”  
        title: '加载中',
        icon: 'loading',
      });
      setTimeout(() => {
        this.setData({
          res: cont
        });
        wx.hideLoading();
      }, 1500)
    }
  },
  // // 点击获取详情页参数
  // gotableinfo: function (e) {
  //   var index = parseInt(e.currentTarget.dataset.index);
  //   console.log(111)
  //   wx.showLoading({
  //     title: '详情页正在更新',
  //     icon: 'loading',
  //     duration: 500
  //   });
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          height: res.windowHeight
        })
      }
    })

  }
})