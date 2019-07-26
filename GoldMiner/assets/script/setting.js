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
    sound: cc.Label,
    soundNode: cc.Node,
    return: cc.Node
  },

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {},
  onTouchStart (event) {
    if (Global.sound === 0) {
      Global.sound = 1
      this.sound.string = 'SOUND: ON'
    } else {
      Global.sound = 0
      this.sound.string = 'SOUND: OFF'
    }
  },

  onTouchStart1 (event) {
    cc.director.loadScene('start')
  },
  start () {
    this.soundNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
    this.return.on(cc.Node.EventType.TOUCH_START, this.onTouchStart1, this)

    if (Global.sound === 0) {
      this.sound.string = 'SOUND: OFF'
    } else {
      this.sound.string = 'SOUND: ON'
    }
  }

  // update (dt) {},
})
