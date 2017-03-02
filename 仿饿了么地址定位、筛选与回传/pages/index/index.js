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
var WxNotificationCenter = require('../../utils/WxNotificationCenter.js');
var that;

Page({
    data: {
        address: '正在请求地址...'
    },
    onLoad: function () {
        that = this;
        // 注册通知
        WxNotificationCenter.addNotification("addressSelectedNotification",that.getAddress,that)
        var qqmapsdk = new QQMapWX({
            key: 'BJFBZ-ZFTHW-Y2HRO-RL2UZ-M6EC3-GMF4U'
        });
        // 调用接口
        qqmapsdk.reverseGeocoder({
            poi_options: 'policy=2',
            get_poi: 1,
            success: function(res) {
                // console.log(JSON.stringify(res));
                console.log(res);
                that.setData({
                    address: res.result.formatted_addresses.recommend
                });
            },
            fail: function(res) {
        //         console.log(res);
            },
            complete: function(res) {
        //         console.log(res);
            }
        });
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
