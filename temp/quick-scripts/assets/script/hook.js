(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/hook.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '459d0eZ8ShCPZzIoUCmBl+D', 'hook', __filename);
// script/hook.js

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
        moveSpeed: 6,
        down: false,
        flag: 0
    },

    goDown: function goDown() {
        // 跳跃上升
        //var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight));
        // 下落
        //var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight));
        // 不断重复
        //return cc.repeatForever(cc.sequence(jumpUp, jumpDown));
    },

    onKeyDown: function onKeyDown(event) {
        // set a flag when key pressed
        switch (event.keyCode) {
            case cc.macro.KEY.down:
                this.down = true;
                break;
        }
    },


    /*
        onKeyUp (event) {
            // unset a flag when key released
            switch(event.keyCode) {
                case cc.macro.KEY.a:
                    this.accLeft = false;
                    break;
                case cc.macro.KEY.d:
                    this.accRight = false;
                    break;
            }
        },
    */

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        var animationComponent = this.getComponent(cc.Animation);
        this.initX = this.node.x;
        this.initY = this.node.y;
        animationComponent.play("hookRotation");
        this.playing = true;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },

    start: function start() {},
    update: function update(dt) {
        var animationComponent = this.getComponent(cc.Animation);
        //console.log(this.node.getRotation());

        if (this.down && this.flag != 2) {
            this.flag = 1;
            this.playing = false;
            animationComponent.stop("hookRotation");
            animationComponent.stop("hookRotation2");
            animationComponent.stop("hookRotation3");
            var theta = this.node.getRotation() * (Math.PI / 180);
            this.node.x -= this.moveSpeed * Math.sin(theta);
            this.node.y -= this.moveSpeed * Math.cos(theta);

            if (this.node.x < -450 || this.node.x > 450 || this.node.y < -240) {
                this.down = false;
            }
        } else {
            if (this.node.y < this.initY) {
                this.flag = 2;
                this.playing = false;
                var _theta = this.node.getRotation() * (Math.PI / 180);
                this.node.x += this.moveSpeed * Math.sin(_theta);
                this.node.y += this.moveSpeed * Math.cos(_theta);
                this.down = false;
            } else {
                this.flag = 3;
                this.node.x = this.initX;
                this.node.y = this.initY;
                this.moveSpeed = 6;
                if (!this.playing) {

                    if (this.node.getRotation() > 30) {
                        animationComponent.play("hookRotation2");
                    } else if (this.node.getRotation() < -30) {
                        animationComponent.play("hookRotation3");
                    } else {
                        animationComponent.play("hookRotation");
                    }
                    this.playing = true;
                }
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
        //# sourceMappingURL=hook.js.map
        