Page({
    data: {
        categories: []
    },
    onLoad: function() {
        // 生成一个二维数据
        this.initCategories();
        console.log(this.data.categories);
    },
    parentTap: function (e) {
        let index = e.currentTarget.dataset.index;
        // 点中哪行父类，显示其子列表
        let categories = this.data.categories;
        // 如果想实现手风琴效果，打开forEach以下代码
        categories.forEach(item => {
            item.hidden = true;
        });
        categories[index].hidden = !categories[index].hidden;
        this.setData({
            categories: categories
        });
        console.log(index);
    },
    initCategories: function() {
        let categories = [];
        for (let i = 0; i < 4; i++) {
            // title即为序号
            let parent = {
                title: i,
                hidden: true
            };
            // 生成child
            let child = [];
            for (let j = 0; j < 4; j++) {
                child.push({
                    title: i + '-' + j
                });
            }
            // 写入child
            parent.child = child;
            categories[i] = parent;
        }
        // 写到page data中
        this.setData({
            categories: categories
        });
    }
})