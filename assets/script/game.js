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
        levelLabel: cc.Label,
        money1: 0,
        target: 0,
        countDown: cc.Label,
        powerLogo: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.getCollisionManager().enabledDebugDraw = false;
        cc.director.getCollisionManager().enabled=true;
        //this.schedule(this.doCountdownTime,1);

    },

    start () {
        this.broadcostTimes = 30;
        this.schedule(this.doCountdownTime,1);
        this.money1 = Global.currentMoney; 
        this.target = Global.targets[Global.currentLevel-1];
        this.levelLabel.string = "Level " + Global.currentLevel + "\nTarget: $"+this.target;
    },

    //倒计时
    doCountdownTime(){
    if (this.broadcostTimes >= 0 ) {
        this.countDown.string = "-"+this.broadcostTimes+"s";
        this.broadcostTimes -= 1;
        if(this.broadcostTimes == 0){
            if(this.money1>=this.target){
                console.log("You win! Next Level!");
                let fire1 = cc.find("Canvas/fire1").getComponent("fire1");
                Global.currentMoney = this.money1;
                Global.fires = fire1.num;
                Global.betterDiamonds = 0;
                Global.powers = 0;
                Global.luckys = 0;
                Global.stoneBooks = 0;
                if(Global.currentLevel == 5){
                    cc.director.loadScene("pass");
                }else{
                    Global.currentLevel++;
                    cc.director.loadScene("next"); 
                }

            }else{
                Global.loseMoney = this.money1;
                cc.director.loadScene("lose");
            }
        }
    }
},

    update (dt) {
        this.draw.clear();
        let startPos = this.base.convertToWorldSpaceAR(cc.v2(0, 1));
        let endPos = this.hook.convertToWorldSpaceAR(cc.v2(-0.1, -25.3));
        this.draw.lineWidth = 4.5;
        this.draw.moveTo(startPos.x,startPos.y);
        this.draw.lineTo(endPos.x, endPos.y);
        this.draw.stroke();
        
        this.moneyLabel1.string = "$ " + this.money1;
        if(Global.powers>0){
            this.powerLogo.opacity = 255;
        }else{
            this.powerLogo.opacity = 0;
        }
    },
});
