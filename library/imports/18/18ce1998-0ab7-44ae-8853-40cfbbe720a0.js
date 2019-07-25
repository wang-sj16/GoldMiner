"use strict";
cc._RF.push(module, '18ce1mYCrdErohTQM+75yCg', 'lose');
// script/lose.js

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
    cc.audioEngine.play(this.audio, false, 1);
    this.label.string = 'YOU LOSE!\n\nSCORE: ' + Global.loseMoney;
    wx.postMessage({
      message: 'UpdateScore',
      score: Global.loseMoney.toString()
    });
  }

  // update (dt) {},

});

cc._RF.pop();