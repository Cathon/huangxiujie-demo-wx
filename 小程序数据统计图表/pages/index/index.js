/**
 * 仿小程序数据助手流量图表
 *
 * 图文教程发布于订阅号【huangxiujie85】
 *
 * @link https://my.oschina.net/huangxiujie
 * @author 黄秀杰
 */

var data = require('../../data/daily.js');
Page({
  data: {
  },
  //事件处理函数
  onLoad: function () {
    // 画布宽度，与CSS中定义等值
    var canvasWidth = 375;
    // 画布高度，与CSS中定义等值
    var canvasHeight = 200;
    // x轴放大倍数
    var ratioX = 12.4;
    // y轴放大倍数
    var ratioY = 4;
    // 浅紫
    var lightPurple = '#d6dbf4';
    // 紫色
    var purple = '#7587db';
    // 浅灰
    var lightGray = '#c7cce5';
    // 灰色
    var gray = '#cccccc';
    const context = wx.createCanvasContext('line-canvas');

    /* Part1.画折线 */
    data.daily.forEach(function(daily, i, array) {
      if (i < array.length - 1) {
        // 当前点坐标
        var currentPoint = {
          x: i * ratioX,
          y: canvasHeight - daily.visit_uv_new * ratioY
        };
        // 下一个点坐标
        var nextPoint = {
          x: (i + 1) * ratioX,
          y: canvasHeight - array[i + 1].visit_uv_new * ratioY
        }
        // 开始
        context.beginPath();
        // 移动到当前点
        context.moveTo(currentPoint.x, currentPoint.y);
        // 画线到下个点
        context.lineTo(nextPoint.x, nextPoint.y);
        // 设置属性
        context.setLineWidth(1);
        // 设置颜色
        context.setStrokeStyle(purple);
        // 描线
        context.stroke();
        // 竖直往下，至x轴
        context.lineTo(nextPoint.x, canvasHeight);
        // 水平往左，至上一个点的在x轴的垂点
        context.lineTo(currentPoint.x, canvasHeight);
        // 设置淡紫色
        context.setFillStyle(lightPurple);
        // 实现闭合与x轴之前的区域
        context.fill();
      }
    });

    /* Part2.画圆圈 */
    data.daily.forEach(function (daily, i, array) {
        // 当前点坐标
        var currentPoint = {
          x: i * ratioX,
          y: canvasHeight - daily.visit_uv_new * ratioY
        };
        context.beginPath();
        context.arc(currentPoint.x, currentPoint.y, 2, 0, 2 * Math.PI);
        context.setStrokeStyle(purple);
        context.setFillStyle('white');
        context.stroke();
        context.fill();
    });

    /* Part3.画横向参照线 */
    var lineCount = 4;
    var estimateRatio = 2;
    var ratio = canvasHeight / lineCount;
    for (var i = 0; i < lineCount; i++) {
      context.beginPath();
      var currentPoint = {
        x: 0,
        y: canvasHeight - i * ratio
      };
      // 移动到原点
      context.moveTo(currentPoint.x, currentPoint.y);
      // 向Y正轴方向画线
      context.lineTo(canvasWidth, canvasHeight - i * ratio);
      // 设置属性
      context.setLineWidth(1);
      // 设置颜色
      context.setStrokeStyle(lightGray);
      context.stroke();
      // 标注数值
      context.setFillStyle(gray);
      context.fillText((i * ratio / estimateRatio).toFixed(0), currentPoint.x, currentPoint.y);
    }
    context.draw();
  }
})
