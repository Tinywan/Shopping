// pages/home/home.js
import {Home} from "home-model.js"
var home = new Home();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._loadData();
  },

  _loadData:function(){
    var id = 1;
    home.getBannerData(id,(res)=>{
      // 数据绑定
      this.setData({
        'bannerArr':res
      });
    });
    home.getThemeData((res)=>{
      console.log(res);
      this.setData({
        'themeArr':res
      });
    });
  },

  // callBack:function(res){
  //   console.log(res);
  // }
})