//app.js
App({
  onLaunch: function() {
    // wx.connectSocket({
    //   url: '127.0.0.1:8282',
    //   success: function (res) {
    //     console.log(res)
    //   },
    //   fail: function (res) {
    //     console.log(res)
    //   },
    //   complete: function (res) {
    //     console.log(res)
    //   }
    // })
    // console.log('test');

    // wx.onSocketOpen(function(res) {
    //   console.log('WebSocket连接已打开！')
    // })
    // wx.onSocketError(function(res){
    //   console.log('WebSocket连接打开失败，请检查！')
    // })
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null
  }
})
