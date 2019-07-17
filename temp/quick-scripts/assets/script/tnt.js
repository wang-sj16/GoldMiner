(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/tnt.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ecae1uTvBBKA4C08LWMRC/9', 'tnt', __filename);
// script/tnt.js

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
        hooked: false,
        theta: 0,
        audio: {
            default: null,
            type: cc.AudioClip
        }

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onCollisionEnter: function onCollisionEnter(other, self) {

        if (other.node.group == 'hook' && !other.node.getComponent("hook").occupied) {
            this.hook = other.node.getComponent("hook");
            this.hook.moveSpeed = this.speed;
            this.hook.down = false;
            //this.theta = other.node.getRotation()*(Math.PI / 180);
            //this.node.x = other.node.x-(40+this.node.height/2)*Math.sin(this.theta);
            //this.node.y = other.node.y-(40+this.node.height/2)*Math.cos(this.theta);
            this.hooked = true;
            this.hook.occupied = true;
            this.animationComponent.play("tntbomb");
            cc.audioEngine.play(this.audio, false, 1);
            return;
        }
    },

    start: function start() {
        this.canvas = cc.find("Canvas").getComponent("game");
        this.animationComponent = this.getComponent(cc.Animation);
        this.animationComponent.bombOver = function () {
            this.node.destroy();
            console.log("delete node");
            var children = cc.find("Canvas").children;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;

                    if (item.group == "items" || item.group == "pig") {
                        if (Math.pow(this.node.x - item.x, 2) + Math.pow(this.node.y - item.y, 2) < 20000) {
                            item.destroy();
                        }
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        };
    },
    update: function update(dt) {}
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
        //# sourceMappingURL=tnt.js.map
        