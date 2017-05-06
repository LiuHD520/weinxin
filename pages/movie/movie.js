Page({
  onLoad:function(){
    var that=this;
        wx.getSystemInfo({
      success: function(res) {
        that.setData({
          scrollH:res.windowHeight - 200,
          scrollHall:res.windowHeight,
          scrollW:res.windowWidth
        })
      } 
    })
    wx.request({
      url: 'http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000',
      success: function (res) {
        
        that.setData({
          movielist: res.data.data.movies
        })
      console.log(that.data.movielist);
      }
    });
  },
  data: {
     movielist: [],
    scrollHall:0,
    scrollH:0,
    scrollW:0,
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=230009120,116956548&fm=23&gp=0.jpg',
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1148625319,2788166696&fm=23&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1948565391,1506324472&fm=23&gp=0.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
   gotoDetail:function(event){
    var id=event.target.dataset.id;
    console.log(event);
    wx.navigateTo({
      url: '/pages/movieDetaik/movieDetaik?id='+id
    }); 
  }
})