"use strict";
cc._RF.push(module, 'c885eGD3NNFHJbBq7s6RzEi', 'game');
// script/game.js

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
        draw: cc.Graphics,
        player1: cc.Node,
        base: cc.Node,
        hook: cc.Node,
        moneyLabel1: cc.Label,
        add1: cc.Label,
        money1: 0,
        target: 0,
        countDown: cc.Label,
        broadcostTimes: 10
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        cc.director.getCollisionManager().enabledDebugDraw = false;
        cc.director.getCollisionManager().enabled = true;
        //this.schedule(this.doCountdownTime,1);
    },
    start: function start() {
        this.money1 = Global.currentMoney;
        this.schedule(this.doCountdownTime, 1);
        console.log(Global.levelTarget);
    },


    //倒计时
    doCountdownTime: function doCountdownTime() {
        if (this.broadcostTimes >= 0) {
            this.countDown.string = "-" + this.broadcostTimes + "s";
            this.broadcostTimes -= 1;
            if (this.broadcostTimes == 0) {
                if (this.money1 >= this.target) {
                    console.log("You win! Next Level!");
                } else {
                    console.log("You lose! Game Over!");
                }
            }
        }
    },
    update: function update(dt) {
        this.draw.clear();
        var startPos = this.base.convertToWorldSpaceAR(cc.v2(0, 1));
        var endPos = this.hook.convertToWorldSpaceAR(cc.v2(-0.1, -25.3));
        this.draw.lineWidth = 4.5;
        this.draw.moveTo(startPos.x, startPos.y);
        this.draw.lineTo(endPos.x, endPos.y);
        this.draw.stroke();

        this.moneyLabel1.string = "$ " + this.money1;
    }
});

cc._RF.pop();