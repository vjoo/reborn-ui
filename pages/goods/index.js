// pages/goods/index.js
Page({
  data: {
    imgUrls: [
      'https://yanxuan-item.nosdn.127.net/904a10b076f6734fc10af4644f92d04d.png',
      'https://yanxuan-item.nosdn.127.net/977772e5b5d4e03c8b45df7933081914.png',
      'https://yanxuan-item.nosdn.127.net/4c27c642aee015e3de78c7763791c93b.png',
      
    ],
    indicatorDots: true,
    circular: true,
    autoplay: true,
    interval: 4000,
    duration: 300,
    Height: "",
  },
  //设置图片轮显高度
  imgHeight: function (e) {
    var winWid = wx.getSystemInfoSync().windowWidth; //获取当前屏幕的宽度
    var imgh = e.detail.height; //图片高度
    var imgw = e.detail.width; //图片宽度
    var h = 25;
    //等比设置swiper的高度。 即 屏幕宽度 / swiper高度 = 图片宽度 / 图片高度  ==》swiper高度 = 屏幕宽度 * 图片高度 / 图片宽度
    var swiperH = (winWid * imgh / imgw) + "px";
    this.setData({
      Height: swiperH //设置高度
    })
  },
  onLoad: function (options) {

  },

  onShow: function () {

  },
  onShareAppMessage: function () {

  },
  
   /**
   * 点击跳转视图事件
   */
  onTapView: function (event){
    console.log(event);
    wx.navigateTo({
      url: event.currentTarget.dataset.url,
    })
  }
   
});