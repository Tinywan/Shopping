
class Home{

  constructor(){

  }

  getBannerData(id, callBack){
    // 所有请求都是异步的
    wx.request({
      url: 'https://www.tinywan.com/api/v1/banner/'+id,
      method:"GET",
      success:function(res){
        //return res;
        callBack(res);
      }
    })
  }
}

export {Home}