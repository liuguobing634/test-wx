Page({

  /**
   * 页面的初始数据
   */
  data: {
   
      x: 0,
      y: 0,
      motto: 'Hello World',
      userInfo: {},
      hasUserInfo: false,
      canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    tap: function () {
      this.setData({
        x: 30,
        y: 30
      })
    },
    tapName: function (event, Touch) {

      console.log(event),
        wx.showModal({

          title: '这里有一个傻逼p',
          content: '我也觉得',
          success: function (res) {
            if (res.confirm) {
              wx.showToast({
                title: '回答正确',

              });
              wx.navigateTo({
                url: '../test/test2',
              })
            } else {
              wx.showToast({
                title: '回答错误',
              })
            }
          }
        });

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title: options.title
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    this.videoCtx = wx.createVideoContext('myVideo'),
    console.log("fsdf")
  },
  play(){
    this.videoCtx.play()
  },

  pause(){
    this.videoCtx.pause(),
    console.log("fs")
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