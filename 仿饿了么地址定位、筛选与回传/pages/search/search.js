/**
 * 仿饿了么地址选择，实现了地址定位、筛选与回传
 *
 * 配套视频教程请移步微信->小程序->灵动课堂
 * 图文教程发布于订阅号【huangxiujie85】
 *
 * @link https://my.oschina.net/huangxiujie
 * @author 黄秀杰
 */
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
var that;
Page({
    onLoad: function (options) {
        that = this;
        // 从首页传入当前地址名称
        var location = options.location;
        console.log(location);
        // 渲染给页面
        that.setData({
            location: location
        });
    },
    keywordTyping: function (e) {
        // 键盘不断录入绑定取值
        var keyword = e.detail.value;
        console.log('keyword' + keyword);
        // 向腾讯地图接口发送请求
        var qqmapsdk = new QQMapWX({
            key: 'BJFBZ-ZFTHW-Y2HRO-RL2UZ-M6EC3-GMF4U'
        });
        qqmapsdk.getSuggestion({
            keyword: keyword,
            success: function (res) {
                console.log(res);
            }, 
            fail: function(res) {
                console.log(res);
            },
            complete: function(res) {
                console.log(res);
            }
        });

    }
})
