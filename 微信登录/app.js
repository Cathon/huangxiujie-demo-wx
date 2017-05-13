//app.js
App({
  onLaunch: function () {
    // 微信登录
    wx.login({
        success: function (res) {
          // 用于获取openid
          // console.log(res.code);
          var code = res.code;
          wx.request({
            data: {code: code},
            method: 'POST',
            header: {
      				'content-type': 'application/x-www-form-urlencoded'
      			},
            url: 'http://localhost:9000/index.php/wechat/login',
            success: function(res) {
              // console.log(res);
            }
          });
          // 假如用户不同意授权获取用户资料，将不能拿到iv，encrypedData，也就不能拿到unionid了
          // wx.getUserInfo({
          //   success: function (res) {
          //     console.log(res);
          //   }
          // })
        }
      })
  }
})