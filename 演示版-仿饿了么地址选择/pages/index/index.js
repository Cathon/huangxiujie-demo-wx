//index.js
//获取应用实例
var WxNotificationCenter = require("../../utils/WxNotificationCenter.js");
var that;
Page({
	onLoad: function () {
		that = this;
		that.setData({
			address: '请选择一个地址位置'
		});
		WxNotificationCenter.addNotification("getAddressNotification",that.getAddress,that)
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
