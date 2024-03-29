(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/game.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c885eGD3NNFHJbBq7s6RzEi', 'game', __filename);
// script/game.js

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
    draw: cc.Graphics,
    player1: cc.Node,
    base: cc.Node,
    hook: cc.Node,
    moneyLabel1: cc.Label,
    add1: cc.Label,
    addFire: cc.Label,
    levelLabel: cc.Label,
    money1: 0,
    power1: 0,
    target: 0,
    countDown: cc.Label,
    exit: cc.Node,
    powerLogo: cc.Node
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad: function onLoad() {
    cc.director.getCollisionManager().enabledDebugDraw = false;
    cc.director.getCollisionManager().enabled = true;
    // this.schedule(this.doCountdownTime,1);
  },
  onTouchExit: function onTouchExit(event) {
    cc.director.loadScene('start');
  },
  start: function start() {
    this.broadcostTimes = 30;
    this.schedule(this.doCountdownTime, 1);
    this.money1 = Global.currentMoney;
    this.power1 = Global.powers;
    this.target = Global.targets[Global.currentLevel - 1];
    this.levelLabel.string = 'Level ' + Global.currentLevel + '\nTarget: $' + this.target;
    this.exit.on(cc.Node.EventType.TOUCH_START, this.onTouchExit, this);
  },


  // 倒计时
  doCountdownTime: function doCountdownTime() {
    this.countDown.string = '-' + this.broadcostTimes + 's';
    this.broadcostTimes -= 1;
    if (this.broadcostTimes === -1) {
      if (this.money1 >= this.target) {
        console.log('You win! Next Level!');
        var fire1 = cc.find('Canvas/fire1').getComponent('fire1');
        Global.currentMoney = this.money1;
        Global.fires = fire1.num;
        Global.betterDiamonds = 0;
        Global.powers = 0;
        Global.luckys = 0;
        Global.stoneBooks = 0;
        if (Global.currentLevel === 8) {
          cc.director.loadScene('pass');
        } else {
          Global.currentLevel++;
          cc.director.loadScene('next');
        }
      } else {
        Global.loseMoney = this.money1;
        console.log(Global.powers);
        Global.powers = this.power1;
        console.log(Global.powers);
        cc.director.loadScene('lose');
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

    this.moneyLabel1.string = '$ ' + this.money1;
    if (Global.powers > 0) {
      this.powerLogo.opacity = 255;
    } else {
      this.powerLogo.opacity = 0;
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
        //# sourceMappingURL=game.js.map
        