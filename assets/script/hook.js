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
    },

    goDown: function () {
        // 跳跃上升
        //var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight));
        // 下落
        //var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight));
        // 不断重复
        //return cc.repeatForever(cc.sequence(jumpUp, jumpDown));
    },

    onKeyDown (event) {
        // set a flag when key pressed
        switch(event.keyCode) {
            case cc.macro.KEY.down:
                console.log("test");
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

    onLoad: function(){
        var animationComponent = this.getComponent(cc.Animation);
        this.initX = this.node.x;
        this.initY = this.node.y;
        animationComponent.play("hookRotation");
        this.playing = true;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },

    start () {

    },

    update (dt) {
        var animationComponent = this.getComponent(cc.Animation)
        //console.log(this.node.getRotation());

        if(this.down){
            this.playing = false;
            animationComponent.stop("hookRotation");
            let theta = this.node.getRotation()*(Math.PI / 180);
            this.node.x -= this.moveSpeed*Math.sin(theta);
            this.node.y -= this.moveSpeed*Math.cos(theta);
            if((this.node.x<-450) || (this.node.x>450) || (this.node.y<-240)){
                this.down = false;
            }
        }else if(!this.down && Math.abs(this.node.x-this.initX)>0.1){
            this.playing = false;
            let theta = this.node.getRotation()*(Math.PI / 180);
            this.node.x += this.moveSpeed*Math.sin(theta);
            this.node.y += this.moveSpeed*Math.cos(theta);
            console.log("aaaa");
        }else{
            this.node.x = this.initX;
            this.node.y = this.initY;
            if(!this.playing){
                animationComponent.play("hookRotation");
                this.playing = true;
            }
        }
    },
});
