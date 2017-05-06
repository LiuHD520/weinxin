//index.js
//获取应用实例
var app = getApp()
Page({
    onLoad:function(){
        var that=this;
            wx.getSystemInfo({
            success: function(res) {
            console.log(res.windowHeight)
            
            that.setData({
              scro:res.windowHeight,
              scrollW:res.windowWidth
            })
          
          
          }
        })
  },
 data: {
   scrollW:0,
   scro:0,
    imgUrls: [
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2828420690,4271112128&fm=23&gp=0.jpg',
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=354649694,3182605068&fm=23&gp=0.jpg',
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3688351022,1717808843&fm=23&gp=0.jpg',
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=230009120,116956548&fm=23&gp=0.jpg',
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1148625319,2788166696&fm=23&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1948565391,1506324472&fm=23&gp=0.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  //事件处理函数
  bindViewTap01: function() {
    wx.switchTab({
      url: '../music/music'
    });
  
  },
  bindViewTap02: function() {
  
    wx.switchTab({
      url: '../movie/movie'
    });
  
  },
  bindViewTap03: function() {
 
    wx.switchTab({
      url: '../mine/mine'
    })

  }
 
})
