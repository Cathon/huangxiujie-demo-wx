Page({
  data: {
    fade: ''
  },
  fadeInMe: function () {
    this.setData({
      fade: 'fadeIn'
    });
  },
  fadeOutMe: function () {
    this.setData({
      fade: 'fadeOut'
    })
  }
})
