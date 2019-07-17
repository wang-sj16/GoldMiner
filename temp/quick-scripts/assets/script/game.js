(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/game.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c885eGD3NNFHJbBq7s6RzEi', 'game', __filename);
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
        this.schedule(this.doCountdownTime, 1);
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
        var worldPos = this.hook.convertToWorldSpaceAR(cc.v2(-0.1, -25.3));
        this.draw.lineWidth = 4.5;
        // 路径起点为0,0
        this.draw.moveTo(this.node.x + this.base.x, this.node.y + 2 + this.base.y);
        this.draw.lineTo(worldPos.x, worldPos.y);
        // 把路径画实，能看见啦！
        this.draw.stroke();

        this.moneyLabel1.string = "$ " + this.money1;
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
        //# sourceMappingURL=game.js.map
        