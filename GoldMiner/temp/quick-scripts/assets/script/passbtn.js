(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/passbtn.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd0085DaeL5IT4reCe8HGWj0', 'passbtn', __filename);
// script/passbtn.js

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

  properties: {},

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {},
  onTouchStart: function onTouchStart(event) {
    if (this.node._name === 'menu') {
      cc.director.loadScene('start');
    } else if (this.node._name === 'restart') {
      Global.currentLevel = 1;
      Global.currentMoney = 0;
      Global.fires = 0;
      Global.betterDiamonds = 0;
      Global.powers = 0;
      Global.luckys = 0;
      Global.stoneBooks = 0;
      cc.director.loadScene('level1');
    }
  },
  start: function start() {
    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
  }

  // update (dt) {},

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
        //# sourceMappingURL=passbtn.js.map
        