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
    wx.connectSocket({
      url: 'ws://127.0.0.1:8282',
      success: function (res) {
        console.log('连接成功')
      },
      fail: function (res) {
        console.log('连接失败')
      }
    })

    wx.onSocketOpen(function(res) {
      console.log('WebSocket连接已打开！')
      wx.sendSocketMessage({
        data: "huangxj"
      })
    })

    wx.onSocketError(function(res){
      console.log('WebSocket连接打开失败，请检查！')
    })

    wx.onSocketMessage(function(res) {
      console.log('收到服务器内容：' + res.data)
    })

  }
})
