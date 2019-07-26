// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  extends: cc.Component,

  properties: {
    broadcostTimes: 3,
    audio: {
      default: null,
      type: cc.AudioClip
    }
  },

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {},

  start () {
    if (Global.sound === 1) {
      cc.audioEngine.play(this.audio, false, 1)
    }
    this.schedule(this.doCountdownTime, 1)
  },

  // 倒计时
  doCountdownTime () {
    if (this.broadcostTimes >= 0) {
      this.broadcostTimes -= 1
      if (this.broadcostTimes === 0) {
        cc.director.loadScene('shop')
      }
    }
  }

})
