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
      this.setData({
        'themeArr':res
      });
    });

    /*获取单品信息*/
    home.getProductorData((res)=>{
      this.setData({
        "productsArr": res
      });
    });

  },

  // callBack:function(res){
  //   console.log(res);
  // }

  onProductsItemTap:function(event){
    var id = home.getDataSet(event,'id');
    console.log('---------'+id);
    wx.navigateTo({
      url: '../product/product?id='+id
    })
  },

  onThemesItemTap:function(event){
    var id = home.getDataSet(event,'id');
    var name = home.getDataSet(event,'name');
    wx.navigateTo({
      url: '../theme/theme?id='+id+'&name='+name
    })
  },

})