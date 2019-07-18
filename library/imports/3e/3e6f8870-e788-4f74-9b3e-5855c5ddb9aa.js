"use strict";
cc._RF.push(module, '3e6f8hw54hPdJs+WFXF3bmq', 'next');
// script/next.js

"use strict";

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
        broadcostTimes: 2
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        this.schedule(this.doCountdownTime, 1);
    },


    //倒计时
    doCountdownTime: function doCountdownTime() {
        if (this.broadcostTimes >= 0) {
            this.broadcostTimes -= 1;
            if (this.broadcostTimes == 0) {
                cc.director.loadScene("shop");
            }
        }
    }
});

cc._RF.pop();