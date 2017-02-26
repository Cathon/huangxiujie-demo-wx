//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    arr: [],
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // data++
    // this.data.num++;
    // this.data.num = '999';
    // this.data.arr = [1,3,46];
    this.setData({
      arr: [3,2345,11,215,1]
    });
    console.log(this.data.arr);
    // wx.showToast({
    //   title: 'num:' + this.data.num
    // });
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
