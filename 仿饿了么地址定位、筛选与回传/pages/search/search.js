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
var qqmapsdk;
Page({
    onLoad: function (options) {
        that = this;
        qqmapsdk = new QQMapWX({
            key: 'BJFBZ-ZFTHW-Y2HRO-RL2UZ-M6EC3-GMF4U'
        });
        // 调用接口
        qqmapsdk.reverseGeocoder({
            poi_options: 'policy=2',
            get_poi: 1,
            success: function(res) {
            // 渲染给页面
                that.setData({
                    address: res.result.formatted_addresses.recommend,
                    result: res.result.pois,
                    city: res.result.address_component.city
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
    keywordTyping: function (e) {
        // 键盘不断录入绑定取值
        var keyword = e.detail.value;
        console.log('keyword' + keyword);
        // 向腾讯地图接口发送请求
        qqmapsdk.getSuggestion({
            keyword: keyword,
            region: that.data.city,
            success: function (res) {
                console.log(res);
                // 保存地址数组
                that.setData({
                    result: res.data
                });
            }, 
            fail: function(res) {
                console.log(res);
            },
            complete: function(res) {
                console.log(res);
            }
        });
    },
    addressTapped: function (e) {
        var title = e.currentTarget.dataset.title;
        // 取出点中的地址，然后使用WxNotification回传给首页
        WxNotificationCenter.postNotificationName("addressSelectedNotification", title);
        wx.navigateBack();

    }
})
