// pages/product/product.js
import {Product} from '../product/product-model.js';
var product = new Product();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:null,
    name:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 接受参数
    var id = options.id;
    console.log("deatil : "+id);
    this._loadData();
  },

  _loadData:function(){
p
    this._loadData();
  },

  _loadData:function(){
    product.getDetailInfo(this.data.id,(res)=>{
      this.setData({
        'product':res
      })
    })
  }
})