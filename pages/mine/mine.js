
Page({
  data:{
    movielist:[],
    size:10,
     musicList:[],
    scrollW:0,
    mAnimation:0,
    mAn:0,
    musicAnimation:0,
    musicShow:true,
    mShow:true,
    mS:true
  },
   onLoad: function () {
     var that=this;
        wx.getSystemInfo({
      success: function(res) {
        that.setData({
          scrollH:res.windowHeight,
           scrollH02:res.windowHeight-180,
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

      }
    });
     wx.request({
      url: 'http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1', //仅为示例，并非真实的接口地址
      dataType: 'json',
      data: {
        size: that.data.size,
        offset: 0
      },
      success: function (res) {
        console.log(res)
        that.setData({
          musicList: res.data.song_list
        })
      }
    })
  


  },
 
Swith: function () {//播放器显示开关
    if (this.data.musicShow) {      
        this.showMusicPlay()
      console.log(1)
    } else if (this.data.musicShow == false) {
    this.hiddenMusicPlay()
      console.log(2)
    }
  },
showMusicPlay: function () {//显示播放器动画
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease'
    })
    console.log(animation)
    // animation.width(0).step()
    // this.setData({
    //   musicAnimation:animation.export()
    // })
    animation.height(164).step()
    this.setData({
      musicAnimation: animation.export()
    })
    this.setData({
      musicShow: false
    })
    console.log('显示播放器')
  },
hiddenMusicPlay: function () {//隐藏播放器动画
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease'
    })
    console.log(animation)
    // animation.width(0).step()
    // this.setData({
    //   musicAnimation:animation.export()
    // })
    setTimeout(function () {
      animation.height(0).step()
      this.setData({
        musicAnimation: animation.export()
      })
    }.bind(this), 300)
    this.setData({
      musicShow: true
    })
    console.log('隐藏播放器')
    
  },
 
 
 
 gotoDetail:function(event){
    var id=event.target.dataset.id;
    console.log(event);
    wx.navigateTo({
      url: '/pages/movieDetaik/movieDetaik?id='+id
    }); 
  },
 
 
 
   liu: function () {//播放器显示开关

    if (this.data.mShow) {
       
      this.sh();  
      console.log(1)
    } else  if (this.data.mShow == false){
       this.hid();
      console.log(2)
    }
  },
sh: function () {//显示播放器动画
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease'
    })
    console.log(animation)
    animation.height(164).step()
    this.setData({
      mAnimation: animation.export()
    })
    this.setData({
      mShow: false
    })
  },
hid: function () {//隐藏播放器动画
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease'
    })
    console.log(animation)
  
    setTimeout(function () {
      animation.height(0).step()
      this.setData({
        mAnimation: animation.export()
      })
    }.bind(this), 300)
    this.setData({
      mShow: true
    })
  },
 
 
 
 

  
   he: function () {//播放器显示开关

    if (this.data.mS) {
       
      this.do();  
      console.log(1)
    } else  if (this.data.mS == false){
       this.hiddd();
      console.log(2)
    }
  },
do: function () {//显示播放器动画
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease'
    })
    console.log(animation)
    animation.height(164).step()
    this.setData({
      mAn: animation.export()
    })
    this.setData({
      mS: false
    })
  },
hiddd: function () {//隐藏播放器动画
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease'
    })
    console.log(animation)
  
    setTimeout(function () {
      animation.height(0).step()
      this.setData({
        mAn: animation.export()
      })
    }.bind(this), 300)
    this.setData({
      mS: true
    })
  },
 
 
 
 
 
 
 
 
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})