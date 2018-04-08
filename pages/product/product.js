// pages/product/product.js
import { Product } from 'product-model.js';

var product = new Product();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:null,
    name:null,
    loadingHidden: false,
    hiddenSmallImg: true,
    countsArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    productCounts: 1, // 默认值
    currentTabsIndex:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 接受参数
    var id = options.id;
    this.data.id = id;
    this._loadData();
  },

  _loadData:function(){
    product.getDetailInfo(this.data.id,(res)=>{
      this.setData({
        'product':res
      })
    })
  },

  // 事件函数
  bindPickerChange:function(event){
    this.setData({
      "productCounts":event.detail.value
    })
  },

  onTabsItemTap:function(event){
    var index = product.getDataSet(event,'index');
    this.setData({
      "currentTabsIndex":index
    });
  },
})