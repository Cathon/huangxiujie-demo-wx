//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imagesSrc: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502453834531&di=3fe3abf4f7e3c19a45950391081a2bde&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F16%2F44%2F61958PICiMB_1024.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502453834531&di=082c712fbedffddf424d7fa6d4455a27&imgtype=0&src=http%3A%2F%2Fm.tangrenjv.com%2Fupload%2Fimages%2Fnews%2F2013_02_10_17_11_01%2F2013-02-15-1360896757697.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502453834531&di=59847a9f0840c02e20f417f8894ad089&imgtype=0&src=http%3A%2F%2Fwww.hengannet.com%2FDoc%2Fhygs0333%2F153445.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502453834526&di=f3c15c610c79351e1e6da390a0b1e862&imgtype=0&src=http%3A%2F%2Fimg.86zsw.com%2Fpics%2Fnbsj_200791694049662.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502453834529&di=63f8c0cb727a2594609102025cc9e13d&imgtype=0&src=http%3A%2F%2Fimg05.tooopen.com%2Fimages%2F20141125%2Fsy_75737491662.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502453834527&di=d49f726c60953c4ad032745999c6a410&imgtype=0&src=http%3A%2F%2Fimage01.baixingstatic.com%2F01%2F520c84280adc4041b409d3e0111e9be3e0a3.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502453834526&di=f3c15c610c79351e1e6da390a0b1e862&imgtype=0&src=http%3A%2F%2Fimg.86zsw.com%2Fpics%2Fnbsj_200791694049662.jpg'
    ]
  },
  onLoad: function() {
    var imagesSrc = this.data.imagesSrc;
    // 处理图片分组，3个一组
    var length = Math.ceil(imagesSrc.length / 3.0);
    var images = [];
    for (var i = 0; i < length; i++) {
      // 每组
      var section = [];
      for (var j = 0; j < 3; j++) {
        // 前提是不为空，否则溢出
        var item = imagesSrc[i * 3 + j];
        if (item) {
          section.push(item);
        }
      }
      images.push(section);
    }
    console.log(images);
    this.setData({
      imagesTarget: images
    });
  }
})