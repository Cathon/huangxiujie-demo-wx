//index.js
//获取应用实例
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["全部", "未发货", "已发货", "已收货"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,
  },
  onLoad: function() {
    // var states = parseInt(options.states);
    var states = 0;
    this.setData({
      states: states,
      sliderLeft: (getApp().screenWidth / this.data.tabs.length - sliderWidth) / 2,
      sliderOffset: getApp().screenWidth / this.data.tabs.length * this.data.activeIndex
    });
  },
  tabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
})