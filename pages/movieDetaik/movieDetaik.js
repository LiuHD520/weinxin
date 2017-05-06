function getRandomColor () {
  let rgb = []
  for (let i = 0 ; i < 3; ++i){
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  data:{
    moviedetail:{},
    tmp:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
  },
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  inputValue: '',
    data: {
        src: '',
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
    }]
    },
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

  },
  bindInputBlur: function(e) {
    this.inputValue = e.detail.value
  },
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },
   onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var cid = options.id;
    var that = this;
    console.log(cid);
    wx.request({
      url: 'http://m.maoyan.com/movie/'+cid+'.json',
     
      success: function(res){
        console.log(res);
        that.setData({
           moviedetail:res.data.data.MovieDetailModel
        })
      }
    })
  }
})