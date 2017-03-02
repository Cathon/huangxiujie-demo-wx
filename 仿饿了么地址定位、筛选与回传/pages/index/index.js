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
    data: {
        location: '正在请求地址...'
    },
    onLoad: function () {
        that = this;
        var qqmapsdk = new QQMapWX({
            key: 'BJFBZ-ZFTHW-Y2HRO-RL2UZ-M6EC3-GMF4U'
        });
        // 调用接口
        qqmapsdk.reverseGeocoder({
            poi_options: 'policy=2',
            get_poi: 1,
            success: function(res) {
                that.setData({
                    location: res.result.address
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
            url: '../search/search?location=' + that.data.location
        });
    }
})
