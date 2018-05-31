// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList: [
      {
        id: 0,
        list: [{
          count: 1,
          image: 'https://mp-shop-1253413329.cos.ap-beijing.myqcloud.com/product6.jpg',
          name: '商品1',
          price: 50.5,
        }]
      },
      {
        id: 1,
        list: [{
          count: 1,
          image: 'https://mp-shop-1253413329.cos.ap-beijing.myqcloud.com/product6.jpg',
          name: '商品1',
          price: 50.5,
        },
        {
          count: 1,
          image: 'https://mp-shop-1253413329.cos.ap-beijing.myqcloud.com/product6.jpg',
          name: '商品2',
          price: 50.5,
        }
        ]
      },
      {
        id: 2,
        list: [{
          count: 1,
          image: 'https://mp-shop-1253413329.cos.ap-beijing.myqcloud.com/product6.jpg',
          name: '商品2',
          price: 50.5,
        }]
      }
    ], // 订单列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})