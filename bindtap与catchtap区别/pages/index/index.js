Page({
	navigateToDetail: function () {
		wx.navigateTo({
			url: '../detail/detail'
		});
	},
	navigateToCart: function () {
		wx.showToast({
			title: '已加入购物车',
			icon: 'success'
		});
	}
})
