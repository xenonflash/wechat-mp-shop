const qcloud = require('../../vendor/wafer2-client-sdk/index.js')
const config = require('../../config.js')

const app = getApp()

// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    // userInfo: {
    //   nickName: "优达学城",
    //   avatarUrl: "", // 头像 URL 地址
    // }, // 虚拟数据
  },

  onTapAddress() {
    wx.showToast({
      icon: 'none',
      title: '此功能暂未开放'
    })
  },

  onTapKf() {
    wx.showToast({
      icon: 'none',
      title: '此功能暂未开放'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.checkSession({
      success: ({ userInfo }) => {
        this.setData({ userInfo })
      },
      fail: err => {
        app.login({
          success: ({ userInfo }) => {
            this.setData({ userInfo })
          }
        })
      }
    })
  },
  onTapLogin(){
    app.login({
      success: ({ userInfo }) => {
        this.setData({ userInfo })
      }
    })
  },
  checkSession({ success, error }) {
    wx.checkSession({
      success: () => {
        app.getUserInfo({ success, error })
      },
      fail: () => {
        error && error()
      }
    })
  },
})