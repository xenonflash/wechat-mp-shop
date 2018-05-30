//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')
let userInfo = null

App({
    onLaunch: function () {
      qcloud.setLoginUrl(config.service.loginUrl)
    },
    login: function({ success, error }) {
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo'] === false) {
            //用户拒绝了授权
            wx.showModal({
              title: '提示',
              content: '请授权用户信息',
              showCancel:false,
              success: res => {
                wx.openSetting({
                  success:res => {
                    if (res.authSetting['scope.userInfo'] === true) {
                      this.doQcloudLogin({ success, error })
                    }
                  }
                })
              }
            })
          } else {
            this.doQcloudLogin({ success, error })
          }
        }
      })
    },
    doQcloudLogin({ success, error }) {
      qcloud.login({
        success: result => {
          if (result) {
            console.log(result)
            userInfo = result

            success && success({
              userInfo
            })
          } else {
            // 如果不是首次登录，不会返回用户信息，请求用户信息接口获取
            this.getUserInfo({ success, error })
          }
        },
        fail: () => {
          error && error()
        }
      })
    },

    getUserInfo({ success, error }) {
      if (userInfo) return userInfo

      qcloud.request({
        url: config.service.userUrl,
        login: true,
        success: result => {
          let data = result.data

          if (!data.code) {
            userInfo = data.data

            success && success({
              userInfo
            })
          } else {
            error && error()
          }
        },
        fail: () => {
          error && error()
        }
      })
    },
    checkSession({ success, error }) {
      wx.checkSession({
        success: () => {
          this.getUserInfo({ success, error })
        },
        fail: () => {
          error && error()
        }
      })
    },
})