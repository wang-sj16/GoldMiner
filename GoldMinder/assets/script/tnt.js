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
    speed: 0,
    value: 0,
    hooked: false,
    theta: 0,
    audio: {
      default: null,
      type: cc.AudioClip
    }
  },

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {},
  onCollisionEnter: function (other, self) {
    if (other.node.group === 'hook' && !other.node.getComponent('hook').occupied) {
      this.hook = other.node.getComponent('hook')
      this.hook.down = false
      // this.theta = other.node.getRotation()*(Math.PI / 180);
      // this.node.x = other.node.x-(40+this.node.height/2)*Math.sin(this.theta);
      // this.node.y = other.node.y-(40+this.node.height/2)*Math.cos(this.theta);
      this.hooked = true
      this.hook.occupied = true
      this.animationComponent.play('tntbomb')
      if(Global.sound === 1){
        cc.audioEngine.play(this.audio, false, 1)
      }
    }
  },

  start () {
    this.canvas = cc.find('Canvas').getComponent('game')
    this.animationComponent = this.getComponent(cc.Animation)
    this.animationComponent.bombOver = function () {
      this.node.destroy()
      console.log('delete node')
      var children = cc.find('Canvas').children
      for (const item of children) {
        if (item.group === 'items' || item.group === 'pig') {
          if (Math.pow(this.node.x - item.x, 2) + Math.pow(this.node.y - item.y, 2) < 20000) {
            item.destroy()
          }
        }
      }
    }
  },

  update (dt) {

  }
})
