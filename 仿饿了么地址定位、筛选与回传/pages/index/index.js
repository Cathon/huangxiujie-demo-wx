/**
 * 仿饿了么地址选择，实现了地址定位、筛选与回传
 *
 * 配套视频教程请移步微信->小程序->灵动课堂
 * 图文教程发布于订阅号【huangxiujie85】
 *
 * @link https://my.oschina.net/huangxiujie
 * @author 黄秀杰
 */

var WxNotificationCenter = require('../../utils/WxNotificationCenter.js');
var that;

Page({
    data: {
        address: '选择一个地理地址'
    },
    onLoad: function () {
        that = this;
        // 注册通知
        WxNotificationCenter.addNotification("addressSelectedNotification",that.getAddress,that)
    },
    navigateToSearch: function () {
        wx.navigateTo({
            url: '../search/search'
        });
    },
    getAddress: function (address) {
        that.setData({
            address: address
        });
    }
})
