// pages/category/category.js
import { Category } from 'category-model.js';
var category = new Category(); 

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this._loadData();
  },

  /*加载所有数据*/
  _loadData: function (callback) {
    var that = this;
    category.getCategoryType((categoryData) => {
      that.setData({
        "categoryTypeArr": categoryData,
      });
      // 一定要在回调里调用 categoryData[0].id 第一个菜单
      console.log(categoryData);
      category.getProductsByCategory(categoryData[0].id, (res) => {

        // 自定义数据，重新拼装
        var dataObj = {
          products:res,
          topImgUrl: categoryData[0].img.url,
          title: categoryData[0].name
        };
        
        this.setData({
          categoryProducts:dataObj
        });
      })
    });
  },

  /*切换分类*/
  changeCategory: function (event) {
    var index = category.getDataSet(event, 'index'),
      id = category.getDataSet(event, 'id')//获取data-set
    this.setData({
      currentMenuIndex: index
    });

    //如果数据是第一次请求
    if (!this.isLoadedData(index)) {
      var that = this;
      this.getProductsByCategory(id, (data) => {
        that.setData(that.getDataObjForBind(index, data));
      });
    }
  },

  isLoadedData: function (index) {
    if (this.data['categoryInfo' + index]) {
      return true;
    }
    return false;
  },

})