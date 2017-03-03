//logs.js
var util = require('../../utils/util.js')
var WxNotificationCenter = require("../../utils/WxNotificationCenter.js");
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js')
var qqmapsdk;
var that;
Page({
	onLoad: function () {
		that = this;
		qqmapsdk = new QQMapWX({
            key: 'BJFBZ-ZFTHW-Y2HRO-RL2UZ-M6EC3-GMF4U'
        });
        qqmapsdk.reverseGeocoder({
    		get_poi: 1,
        	success: function (res) {
        		// console.log(res);
        		// currentAddress
        		that.setData({
        			currentAddress: res.result.formatted_addresses.recommend,
        			city: res.result.address_component.city,
        			result: res.result.pois
        		});
        	}
        });
	},
	addressBindInput: function (e) {
		var keyword = e.detail.value;
		qqmapsdk.getSuggestion({
			keyword: keyword,
			region: that.data.city,
			success: function (res) {
				that.setData({
        			result: res.data
        		});
			}
		});
	},
	addressBindTap: function (e) {
		var address = e.currentTarget.dataset.address;
		WxNotificationCenter.postNotificationName("getAddressNotification", address);
		wx.navigateBack();
	}
})
