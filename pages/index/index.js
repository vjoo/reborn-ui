//index.js
//获取应用实例

Page({
   
    data: {
      active:'home'
  },
    onChange(event) {
    this.setData({ active: event.detail });
  },

  data: {
    imgUrls: [
      'https://yanxuan.nosdn.127.net/0cd24646257bb45524321f307f123b26.jpg',
      'https://yanxuan.nosdn.127.net/2b426e10cc9f3f8b8b2798f6a6499007.jpg',
      'https://yanxuan.nosdn.127.net/6dd409e73b4062464dc07b2aa06d6d53.jpg',
  'https://yanxuan.nosdn.127.net/4ed70e02bf7762469cb18745f3ff5815.jpg'
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
  
});