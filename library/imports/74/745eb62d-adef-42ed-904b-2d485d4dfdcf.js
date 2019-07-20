"use strict";
cc._RF.push(module, '745ebYtre9C7ZBLLUhdTf3P', 'losebtn');
// script/losebtn.js

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

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onTouchStart: function onTouchStart(event) {
        if (this.node._name == "menu") {
            cc.director.loadScene("start");
        } else if (this.node._name == "restart") {
            var scene = "level" + Global.currentLevel;
            cc.director.loadScene(scene);
        }
    },
    start: function start() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    }
}

// update (dt) {},
);

cc._RF.pop();