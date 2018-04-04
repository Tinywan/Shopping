import {Base} from "../../utils/base.js";

class Home extends Base{

  constructor(){
    super(); 
  }

  // Banner 图片信息
  getBannerData(id, callback){
    var params = {
      "url":'banner/'+id,
      sCallback:function(res){
        callback && callback(res.items);
      }
    };
    this.request(params);// 基类封装方法
    // 所有请求都是异步的
    // wx.request({
    //   url: 'https://www.tinywan.com/api/v1/banner/'+id,
    //   method:"GET",
    //   success:function(res){
    //     //return res;
    //     callBack(res);
    //   }
    // })
  }

  getThemeData(callback){
    var params = {
      'url':'theme?ids=1,2,3',
      sCallback:function(res){
        callback && callback(res);
      }
    }
    this.request(params);
  }

  /*首页部分商品*/
  getProductorData(callback) {
    var params = {
      url: 'product/recent',
      sCallback: function (res) {
        callback && callback(res);
      }
    };
    this.request(params);
  }

}

export {Home}