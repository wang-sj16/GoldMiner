(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/start.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'dae89QogahOwKknrur62X+5', 'start', __filename);
// script/start.js

'use strict';

cc.Class({
  extends: cc.Component,

  properties: {
    draw: cc.Graphics,
    player1: cc.Node,
    base: cc.Node,
    hook: cc.Node,
    avatar: cc.Node
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad: function onLoad() {
    if (typeof wx === 'undefined') {
      return;
    }

    // this.initUserInfoButton ()
    wx.login({
      success: function success(res) {
        // const code = res.code
        wx.getSetting({
          success: function success(res) {
            if (res.authSetting['scope.userInfo']) {
              console.log('已经授权');
              wx.getUserInfo({
                success: function success(res) {
                  console.log(res.userInfo.nickName);
                  cc.loader.load({ url: res.userInfo.avatarUrl, type: 'png' }, function (err, texture) {
                    if (err) {
                      console.error(err);
                      return;
                    }
                    cc.find('Canvas/avatar').getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
                  });
                }
              });
            } else {
              var systemInfo = wx.getSystemInfoSync();
              var width = systemInfo.windowWidth;
              var height = systemInfo.windowHeight;
              var button = wx.createUserInfoButton({
                type: 'text',
                text: 'Press to login',
                style: {
                  left: 0,
                  top: 0.4 * height,
                  width: width,
                  height: height,
                  lineHeight: 40,
                  backgroundColor: 'white',
                  color: 'black',
                  textAlign: 'center',
                  fontSize: 30,
                  borderRadius: 4
                }
              });

              button.onTap(function (res) {
                var userInfo = res.userInfo;
                if (!userInfo) {
                  return;
                }
                console.log(userInfo.nickName);
                cc.loader.load({ url: userInfo.avatarUrl, type: 'png' }, function (err, texture) {
                  if (err) {
                    console.error(err);
                    return;
                  }
                  cc.find('Canvas/avatar').getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
                });

                wx.getOpenDataContext().postMessage({
                  message: 'User info get success.'
                });
                wx.postMessage({
                  message: 'UpdateScore',
                  score: '0'
                });
                button.hide();
                button.destroy();
              });
            }
          }
        });
      }
    });

    // if(Global.sound === 1){
    //  cc.audioEngine.play(this.bgm, true, 1)
    // }
    Global.currentLevel = 1;
    Global.currentMoney = 0;
    Global.fires = 0;
    Global.betterDiamonds = 0;
    Global.powers = 0;
    Global.luckys = 0;
    Global.stoneBooks = 0;
    cc.director.getCollisionManager().enabledDebugDraw = false;
    cc.director.getCollisionManager().enabled = true;
  },
  update: function update(dt) {
    this.draw.clear();
    var startPos = this.base.convertToWorldSpaceAR(cc.v2(0, 1));
    var endPos = this.hook.convertToWorldSpaceAR(cc.v2(-0.1, -25.3));
    this.draw.lineWidth = 4.5;
    this.draw.moveTo(startPos.x, startPos.y);
    this.draw.lineTo(endPos.x, endPos.y);
    this.draw.stroke();
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
        //# sourceMappingURL=start.js.map
        