Page({
  data: {
    inputShowed: false,
    inputVal: ""
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  } ,
  
    data: {
      option1: [
        { text: '综合排序', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '价格默认', value: 'a' },
        { text: '由高到低', value: 'b' },
        { text: '由低到高', value: 'c' }
      ],
      option3: [
        { text: '销量默认', value: 'a' },
        { text: '由高到低', value: 'b' },
        { text: '由低到高', value: 'c' }
      ],
      value1: 0,
      value2: 'a',
      value3: 'a',
  }
  });