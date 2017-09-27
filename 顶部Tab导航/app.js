//app.js
App({
  onLaunch: function () {
    // 设备信息
    wx.getSystemInfo({
      success: (res) => {
        this.screenWidth = res.windowWidth;
        this.screenHeight = res.windowHeight;
        this.pixelRatio = res.pixelRatio;
      }
    });
  }
})