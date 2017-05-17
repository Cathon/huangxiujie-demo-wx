//app.js
App({
  onLaunch: function () {
    // 微信登录
    wx.login({
      success: function(res) {
        if (res.code) {
          console.log(res);
          //发起网络请求
          wx.request({
            url: 'http://localhost/mp/public/index.php/WXLogin/getSession',
            data: {
              code: res.code
            },
            header: {
              "content-type": "application/x-www-form-urlencoded"
            },
            method: 'POST',
            success: function (res) {
              console.log(res.data);
              // var data = res.data;
              // var json = JSON.parse(data);
              // 保存3rdSession到storage中
              wx.setStorage({
                key:"thirdSession",
                data: res.data.thirdSession
              })
            },
            fail: function (res) {
              console.log(res);
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})