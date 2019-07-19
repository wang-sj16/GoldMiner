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
        hook: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onTouchStart (event) {
        // set a flag when key pressed
        this.hook.getComponent("hook").down = true;
    },

    start () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    },

    // update (dt) {},
});
