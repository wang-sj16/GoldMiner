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
        draw: cc.Graphics,
        player1: cc.Node,
        base: cc.Node,
        hook: cc.Node,
        moneyLabel1: cc.Label,
        add1: cc.Label,
        money1: 0,
        target: 0,
        countDown: cc.Label,
        broadcostTimes: 10,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.getCollisionManager().enabledDebugDraw = false;
        cc.director.getCollisionManager().enabled=true;
        //this.schedule(this.doCountdownTime,1);

    },

    start () { 
        this.schedule(this.doCountdownTime,1);
        console.log(Global.levelTarget);
    },

    //倒计时
    doCountdownTime(){
    if (this.broadcostTimes >= 0 ) {
        this.countDown.string = "-"+this.broadcostTimes+"s";
        this.broadcostTimes -= 1;
        if(this.broadcostTimes == 0){
            if(this.money1>=this.target){
                console.log("You win! Next Level!");
            }else{
                console.log("You lose! Game Over!");
            }
        }
    }
},

    update (dt) {
        this.draw.clear();
        let worldPos = this.hook.convertToWorldSpaceAR(cc.v2(-0.1, -25.3));
        this.draw.lineWidth = 4.5;
        // 路径起点为0,0
        this.draw.moveTo(this.node.x+this.base.x,this.node.y + 2 +this.base.y);
        this.draw.lineTo(worldPos.x, worldPos.y);
        // 把路径画实，能看见啦！
        this.draw.stroke();
        
        this.moneyLabel1.string = "$ " + this.money1;
    },
});
