(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/loading.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9c6f2/jee9KQ6LETgMP+1Wd', 'loading', __filename);
// script/loading.js

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
    load: cc.Node,
    broadcostTimes: 2
  },

  // LIFE-CYCLE CALLBACKS:

  // 倒计时
  doCountdownTime: function doCountdownTime() {
    this.broadcostTimes -= 1;
    console.log(this.broadcostTimes);
    if (this.broadcostTimes <= 0 && this.loadOver) {
      cc.director.loadScene('start');
    }
  },
  start: function start() {
    this.schedule(this.doCountdownTime, 1);
    var animationComponent = this.load.getComponent(cc.Animation);
    animationComponent.play('loading');

    cc.loader.downloader.loadSubpackage('img', function (err) {
      if (err) {
        console.log('load subpackage failed.');
        return console.error(err);
      }
      console.log('load img successfully.');
      cc.loader.downloader.loadSubpackage('music', function (err) {
        if (err) {
          console.log('load subpackage failed.');
          return console.error(err);
        }
        cc.find('Canvas').getComponent('loading').loadOver = true;
        console.log('load music successfully.');
      });
    });
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
        //# sourceMappingURL=loading.js.map
        