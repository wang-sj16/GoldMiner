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
        flag: 0,
        occupied: false,
    },

    onKeyDown (event) {
        // set a flag when key pressed
        switch(event.keyCode) {
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

    onLoad: function(){
        this.animationComponent = this.getComponent(cc.Animation);
        this.initX = this.node.x;
        this.initY = this.node.y;
        this.animationComponent.play("hookRotation");
        this.playing = true;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);

    },

    start () {

    },

    update (dt) {
        if(this.down && this.flag!=2){
            this.flag = 1;
            this.playing = false;
            this.animationComponent.stop("hookRotation");
            this.animationComponent.stop("hookRotation2");
            this.animationComponent.stop("hookRotation3");
            let theta = this.node.getRotation()*(Math.PI / 180);
            this.node.x -= this.moveSpeed*Math.sin(theta);
            this.node.y -= this.moveSpeed*Math.cos(theta);

            if((this.node.x<-450) || (this.node.x>450) || (this.node.y<-240)){
                this.down = false;
                this.occupied = true;
            }
        }else {
            if(this.node.y<this.initY){
                this.flag = 2;
                this.playing = false;
                let theta = this.node.getRotation()*(Math.PI / 180);
                this.node.x += this.moveSpeed*Math.sin(theta);
                this.node.y += this.moveSpeed*Math.cos(theta);
                this.down = false;
            }else{
                this.flag = 3;
                this.node.x = this.initX;
                this.node.y = this.initY;
                this.moveSpeed = 6;
                if(!this.playing){
                    this.occupied = false;
                    if(this.node.getRotation()>30){
                        this.animationComponent.play("hookRotation2");
                    }else if(this.node.getRotation()<-30){
                        this.animationComponent.play("hookRotation3");
                    }else{
                        this.animationComponent.play("hookRotation");
                    }
                    this.playing = true;
                }
            }
        } 
    },
});
