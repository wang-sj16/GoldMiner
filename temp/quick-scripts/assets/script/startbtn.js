(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/startbtn.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '814batwKhpFCZv2U5FQe2OS', 'startbtn', __filename);
// script/startbtn.js

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
        speed: 4,
        value: 0,
        hooked: false,
        theta: 0
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onCollisionEnter: function onCollisionEnter(other, self) {
        if (other.node.group == 'hook' && !other.node.getComponent("hook").occupied) {
            this.hook.moveSpeed = this.speed;
            this.hook.down = false;
            this.theta = other.node.getRotation() * (Math.PI / 180);
            this.node.x = other.node.x - (40 + this.node.height / 2) * Math.sin(this.theta);
            this.node.y = other.node.y - (40 + this.node.height / 2) * Math.cos(this.theta);
            this.hooked = true;
            this.hook.occupied = true;
            this.hook.item = this.node;
            return;
        }
    },

    start: function start() {
        this.canvas = cc.find("Canvas").getComponent("start");
        this.hook = cc.find("Canvas/hook").getComponent("hook");
        this.animationComponent = this.getComponent(cc.Animation);
    },
    update: function update(dt) {
        if (this.hooked) {
            if (this.hook.occupied) {
                this.node.x += this.speed * Math.sin(this.theta);
                this.node.y += this.speed * Math.cos(this.theta);
            } else {
                if (this.node._name == "single") {
                    cc.director.loadScene("loadlevel");
                } else if (this.node._name == "exit") {
                    cc.game.end();
                }
                this.node.destroy();
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
        //# sourceMappingURL=startbtn.js.map
        