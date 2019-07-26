(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/loadlevel.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0c5e3D0UM5KA6DlJ4mtv+60', 'loadlevel', __filename);
// script/loadlevel.js

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
    level: cc.Label,
    stonebook: cc.Label,
    power: cc.Label,
    fire: cc.Label,
    lucky: cc.Label,
    betterDiamond: cc.Label,
    broadcostTimes: 2,
    audio: {
      default: null,
      type: cc.AudioClip
    }
  },

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {},

  start: function start() {
    if (Global.sound === 1) {
      cc.audioEngine.play(this.audio, false, 1);
    }
    this.schedule(this.doCountdownTime, 1);
    var level = Global.currentLevel;
    this.level.string = 'Level ' + level + '\nTarget: ' + Global.targets[level - 1];
    this.stonebook.string = 'x' + Global.stoneBooks;
    this.power.string = 'x' + Global.powers;
    this.fire.string = 'x' + Global.fires;
    this.lucky.string = 'x' + Global.luckys;
    this.betterDiamond.string = 'x' + Global.betterDiamonds;
  },


  // 倒计时
  doCountdownTime: function doCountdownTime() {
    if (this.broadcostTimes >= -1) {
      this.broadcostTimes -= 1;
      if (this.broadcostTimes === -1) {
        var scene = 'level' + Global.currentLevel;
        cc.director.loadScene(scene);
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
        //# sourceMappingURL=loadlevel.js.map
        