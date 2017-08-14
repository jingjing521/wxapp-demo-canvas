//index.js
//获取应用实例
let ctx;
Page({
  data: {
   pen:{
     lineWidth:5,
     color:'#cc0033'
   }
  },
  onLoad: function () {
     //生命周期函数--监听页面加载
     ctx=wx.createCanvasContext('myCanvas');
     ctx.setStrokeStyle(this.data.pen.color);
     ctx.setLineWidth(this.data.pen.lineWidth);
     ctx.setLineCap('round');
     ctx.setLineJoin('round'); 
  },
  touchStart(e){
    ctx.setStrokeStyle(this.data.pen.color);
    ctx.setLineWidth(this.data.pen.lineWidth);
    ctx.moveTo(e.touches[0].x,e.touches[0].y);
  },
  touchMove(e){
    ctx.lineTo(e.touches[0].x,e.touches[0].y);
    ctx.stroke();
    ctx.draw(true);
    ctx.moveTo(e.touches[0].x,e.touches[0].y);
  },
  penSelect(e){
    this.setData({'pen.lineWidth':e.target.dataset.param});
    console.log(this.data.pen.lineWidth);
  },
  colorSelect(e){
     this.setData({'pen.color':e.target.dataset.param});
     console.log(this.data.pen.color);
  }
})
