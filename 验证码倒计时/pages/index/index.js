//index.js
//获取应用实例
var timer = require('../../utils/timer.js');
Page({
    data: {
        verifyCode: '', //6617
        captchaLabel: '获取验证码',
        seconds: timer.length,
        captchaDisabled: false
    },
    onLoad: function() {

    },
    captcha: function(e) {
        var param = {
            phone: this.data.phone
        };
        // 禁用按钮点击
        this.setData({
            captchaDisabled: true
        });
        // 立刻显示重发提示，不必等待倒计时启动
        this.setData({
            captchaLabel: timer.length + '秒后重新发送'
        });
        // 启动以1s为步长的倒计时
        var interval = setInterval(() => {
            timer.countdown(this);
        }, 1000);
        // 停止倒计时
        setTimeout(function() {
            clearInterval(interval);
        }, timer.length * 1000);

        if (this.data.seconds == timer.length) {
            console.log('post');
            wx.showToast({
                title: '发送成功'
            });
        }
    },

})