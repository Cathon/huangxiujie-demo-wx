//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
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
    wx.getUserInfo({
      success: function(res) {
        console.log(res);
        //发起网络请求
        wx.request({
          url: 'http://localhost/mp/public/index.php/WXLogin/updateUnionId',
          data: {
            thirdSession: wx.getStorageSync('thirdSession'),
            encryptedData: res.encryptedData,
            iv: res.iv
          },
          header: {
            "content-type": "application/x-www-form-urlencoded"
          },
          method: 'POST',
          success: function (res) {
            console.log('更新成功');
          },
          fail: function (res) {
            console.log('用户拒绝');
            console.log(res);
          }
        })
      }
    })
  }
})
