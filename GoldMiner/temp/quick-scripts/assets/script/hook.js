(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/hook.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '459d0eZ8ShCPZzIoUCmBl+D', 'hook', __filename);
// script/hook.js

'use strict';

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
    moveSpeed: 6,
    down: false,
    flag: 0,
    occupied: false,
    downPlaying: false,
    item: cc.Node,
    bigGold: {
      default: null,
      type: cc.AudioClip
    },
    getDown: {
      default: null,
      type: cc.AudioClip
    },
    goods: {
      default: null,
      type: cc.AudioClip
    }
  },

  onKeyDown: function onKeyDown(event) {
    // set a flag when key pressed
    switch (event.keyCode) {
      case cc.macro.KEY.down:
        this.down = true;
        break;
    }
  },


  onCollisionEnter: function onCollisionEnter(other, self) {
    if (!this.occupied) {
      if (other.node._name === 'bigGold' || other.node._name === 'treasure') {
        if (Global.sound === 1) {
          cc.audioEngine.play(this.bigGold, false, 1);
        }
      } else if (other.node._name === 'midGold' || other.node._name === 'pocket' || other.node._name === 'diamond' || other.node._name === 'diamondPig') {
        if (Global.sound === 1) {
          cc.audioEngine.play(this.goods, false, 1);
        }
      }
    }
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad: function onLoad() {
    this.animationComponent = this.getComponent(cc.Animation);
    this.initX = this.node.x;
    this.initY = this.node.y;
    this.animationComponent.play('hookRotation');
    this.playing = true;
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
  },

  start: function start() {},
  update: function update(dt) {
    if (this.down && this.flag !== 2) {
      if (!this.downPlaying) {
        this.downPlaying = true;
        if (Global.sound === 1) {
          cc.audioEngine.play(this.getDown, false, 1);
        }
      }

      this.flag = 1;
      this.playing = false;
      this.animationComponent.stop('hookRotation');
      this.animationComponent.stop('hookRotation2');
      this.animationComponent.stop('hookRotation3');
      var theta = this.node.getRotation() * (Math.PI / 180);
      this.node.x -= this.moveSpeed * Math.sin(theta);
      this.node.y -= this.moveSpeed * Math.cos(theta);

      if (this.node.x < -450 || this.node.x > 450 || this.node.y < -240) {
        this.down = false;
        this.occupied = true;
      }
    } else {
      if (this.node.y < this.initY) {
        this.flag = 2;
        this.playing = false;
        var _theta = this.node.getRotation() * (Math.PI / 180);
        if (Global.powers > 0) {
          if (this.moveSpeed === 6) {
            this.node.x += this.moveSpeed * Math.sin(_theta);
            this.node.y += this.moveSpeed * Math.cos(_theta);
          } else {
            this.node.x += 5 * Math.sin(_theta);
            this.node.y += 5 * Math.cos(_theta);
          }
        } else {
          this.node.x += this.moveSpeed * Math.sin(_theta);
          this.node.y += this.moveSpeed * Math.cos(_theta);
        }
        this.down = false;
      } else {
        this.downPlaying = false;
        this.flag = 3;
        this.node.x = this.initX;
        this.node.y = this.initY;
        this.moveSpeed = 6;
        this.item = null;
        this.occupied = false;
        if (!this.playing) {
          if (this.node.getRotation() > 30) {
            this.animationComponent.play('hookRotation2');
          } else if (this.node.getRotation() < -30) {
            this.animationComponent.play('hookRotation3');
          } else {
            this.animationComponent.play('hookRotation');
          }
          this.playing = true;
        }
      }
    }
  }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=hook.js.map
        