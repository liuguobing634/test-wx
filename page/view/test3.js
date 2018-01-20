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
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      played: true,
      time:0
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
    });
    var self = this;
    setInterval(function() {
      var d = self.data.time % 4;
      var time = self.data.time;
      var newX = 0;
      var newY = 0;
      if (d == 1) {
        newX = 150;
        newY = 0;
      }
      if (d == 2) {
        newY = 150;
        newX = 150;
      }
      if (d == 3) {
        newX = 0;
        newY = 150
      }
      if (d == 0) {
        newY = 0;
        newX = 0;
      }
      self.setData({
        x: newX,
        y: newY,
        time: time + 1
      });
    },2000);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    this.videoCtx = wx.createVideoContext('myVideo');
  },
  play: function(){
    console.log(this);
    if (this.data.played) {
      this.data.played = false;
      this.videoCtx.pause();
    } else {
      this.data.played = true;
      this.videoCtx.play();
    }
    
  },

  pause(){
    this.videoCtx.play(),
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