
cc.Class({
  extends: cc.Component,

  properties: {
    draw: cc.Graphics,
    player1: cc.Node,
    base: cc.Node,
    hook: cc.Node,
    avatar: cc.Node,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad () {
    if (typeof wx === 'undefined') {
      return;
    }

    //this.initUserInfoButton ()
    wx.login({
      success:function(res){
        let code = res.code
        wx.getSetting({
          success (res){
            if(res.authSetting['scope.userInfo']){
              console.log("已经授权")
              wx.getUserInfo({
                success: function(res){
                  console.log(res.userInfo.nickName)
                  cc.loader.load({url: res.userInfo.avatarUrl, type: 'png'}, (err, texture) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    cc.find('Canvas/avatar').getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
                  });
                }
              })
            }else{
              let systemInfo = wx.getSystemInfoSync();
              let width = systemInfo.windowWidth;
              let height = systemInfo.windowHeight;
              let button = wx.createUserInfoButton({
                  type: 'text',
                  text: 'Press to login',
                  style: {
                      left: 0,
                      top: 0.4*height,
                      width: width,
                      height: height,
                      lineHeight: 40,
                      backgroundColor: 'white',
                      color: 'black',
                      textAlign: 'center',
                      fontSize: 30,
                      borderRadius: 4
                  }
              });
          
              button.onTap((res) => {
                  let userInfo = res.userInfo;
                  if (!userInfo) {
                      return;
                  }
                console.log(userInfo.nickName);
                cc.loader.load({url: userInfo.avatarUrl, type: 'png'}, (err, texture) => {
                      if (err) {
                          console.error(err);
                          return;
                      }
                      cc.find('Canvas/avatar').getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
                    });
          
                  wx.getOpenDataContext().postMessage({
                      message: "User info get success."
                  });
                  wx.postMessage({
                    message:'UpdateScore',
                    score:"0"
                  })
                  button.hide();
                  button.destroy();
              });            
            }  
          }
        })
      }
    })

    if(Global.sound === 1){
      cc.audioEngine.play(this.bgm, true, 1)
    }
    cc.director.getCollisionManager().enabledDebugDraw = false
    cc.director.getCollisionManager().enabled = true
    Global.currentLevel = 1
  },

  update (dt) {
    this.draw.clear()
    const startPos = this.base.convertToWorldSpaceAR(cc.v2(0, 1))
    const endPos = this.hook.convertToWorldSpaceAR(cc.v2(-0.1, -25.3))
    this.draw.lineWidth = 4.5
    this.draw.moveTo(startPos.x, startPos.y)
    this.draw.lineTo(endPos.x, endPos.y)
    this.draw.stroke()
  }
})
