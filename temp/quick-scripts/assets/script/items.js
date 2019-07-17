(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/items.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '09721syMk9Jq7F6JuEK2Vzy', 'items', __filename);
// script/items.js

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
        speed: 0,
        value: 0,
        move: false,
        theta: 0
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onCollisionEnter: function onCollisionEnter(other, self) {
        //碰撞则播放爆炸动画
        if (other.node.group == 'hook') {
            console.log(self.name);
            other.node.getComponent("hook").moveSpeed = this.speed;
            other.node.getComponent("hook").down = false;
            this.theta = other.node.getRotation() * (Math.PI / 180);
            this.node.x = other.node.x - (40 + this.node.height / 2) * Math.sin(this.theta);
            this.node.y = other.node.y - (40 + this.node.height / 2) * Math.cos(this.theta);
            //console.log(this.node.x + " " + this.node.y);
            this.move = true;
            return;
        }
    },

    start: function start() {},
    update: function update(dt) {
        if (this.move) {
            this.node.x += this.speed * Math.sin(this.theta);
            this.node.y += this.speed * Math.cos(this.theta);
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
        //# sourceMappingURL=items.js.map
        