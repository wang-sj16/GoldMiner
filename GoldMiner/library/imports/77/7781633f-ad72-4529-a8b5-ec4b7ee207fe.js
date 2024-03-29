"use strict";
cc._RF.push(module, '77816M/rXJFKai17Et+4gf+', 'pass');
// script/pass.js

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
    label: cc.Label,
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
    this.label.string = 'STAGE CLEAR!\n\nSCORE: ' + Global.currentMoney;
    wx.postMessage({
      message: 'UpdateScore',
      score: Global.currentMoney.toString()
    });
  }

  // update (dt) {},

});

cc._RF.pop();