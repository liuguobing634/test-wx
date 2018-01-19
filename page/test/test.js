//获取应用程序实例
var instance = getApp();


 
var utils = require("../../page/utils/utils.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pinkProgress: { 
      percent: 40,
      color: "pink",
      show_info:true, 
      stroke_width:5, 
      active:false
      },
    purpleProgress: { 
      percent: 60, 
      color: "purple", 
      show_info:false, 
      stroke_width:8, 
      active:true
      },
   
    test:"我是第一个页面",
    pageIndex:"0",
    name: "kkk",
    message:"测试内容绑定",
    id:"test",
    condition:true,
    flag:false,
    a:2,
    b:5,
    c:7,
    length:7,
    name:"willa",
    condition:110,
    forItem:['sfasf','fff'],
    object:{
      
      key:"你是个傻逼傻逼"
    },
    array:[1,"hhh","你是傻逼吗 "],
    zero:"HI~~~傻逼"
  },
  switch: function(e){
    this.setData({
      forItem:['你好','我好']
    })
console.log("witch+++++")
  },
  addToFront: function(e){
    wx.showToast({
      title:"hello",
      content:"hi",
    }),
    wx.showShareMenu({
      title:"h"
    })
    console.log("witch+++++66")
  },
  addNumberToFront: function(e){
    wx.showActionSheet({
      itemList: ['1','2','3']
    })
   
    console.log("witch+++++77")
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
    console.log(instance.text)
     
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    utils.sayHello(this.data.name + this.data.test + this.data.pageIndex);
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
    wx.showToast({
      title: "tjm love lgb"
      
    });
   
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
   
  }
})