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
        num: 3,
        audio: {
            default: null,
            type: cc.AudioClip
        },
        count: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    
    onTouchStart (event) {
        if(this.hook.getComponent("hook").flag == 2 && this.num>0){
            this.hook.getComponent("hook").moveSpeed=6;
            if(this.hook.getComponent("hook").item){
                this.hook.getComponent("hook").item.destroy();
                cc.audioEngine.play(this.audio, false, 1);
                this.num -= 1;
            }
        }
    },
/*
    onMouseDown (event) {
        //this.hook.getComponent("hook").down = true;
        if(this.hook.getComponent("hook").flag == 2 && this.num>0){
            this.hook.getComponent("hook").moveSpeed=6,
            this.hook.getComponent("hook").item.destroy();
            cc.audioEngine.play(this.audio, false, 1);
            this.num -= 1;
        }
    },
*/
    start () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
    },

    update (dt) {
        this.count.string = "x"+this.num;
    },
});
