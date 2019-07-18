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
            //this.hook.getComponent("hook").moveSpeed=6;
            var item = this.hook.getComponent("hook").item;
            if(item){

                if(item._name == "bigRock" || item._name == "midRock" ||item._name == "smallRock"){
                    item.getComponent("items").animationComponent.play("rockbomb");
                }else if(item._name == "bigGold" || item._name == "midGold" ||item._name == "smallGold"){
                    item.getComponent("items").animationComponent.play("goldbomb");
                }else if(item._name == "pocket"){
                    item.getComponent("items").animationComponent.play("pocketbomb");
                }else if(item._name == "diamond"){
                    item.getComponent("items").animationComponent.play("diamondbomb");
                }else if(item._name == "pig"){
                    if(item.getComponent("items").toRight){
                        item.getComponent("items").animationComponent.play("pigbombR");
                    }else{
                        item.getComponent("items").animationComponent.play("pigbomb");
                    }
                }else if(item._name == "diamondPig"){
                    if(item.getComponent("items").toRight){
                        item.getComponent("items").animationComponent.play("diamondPigbombR");
                    }else{
                        item.getComponent("items").animationComponent.play("diamondPigbomb");
                    }
                }
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
