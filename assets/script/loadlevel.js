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
        level: cc.Label,
        stonebook: cc.Label,
        power: cc.Label,
        fire: cc.Label,
        lucky: cc.Label,
        betterDiamond: cc.Label,
        countDown: cc.Label,
        broadcostTimes: 3,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.schedule(this.doCountdownTime,1);
        var level = Global.currentLevel;
        this.level.string = "Level " + level + "\nTarget: " + Global.targets[level-1];
        this.stonebook.string = "x" + Global.stoneBooks;
        this.power.string = "x" + Global.powers;
        this.fire.string = "x" + Global.fires;
        this.lucky.string = "x" + Global.luckys;
        this.betterDiamond.string = "x" + Global.betterDiamonds;
    },

        //倒计时
        doCountdownTime(){
            if (this.broadcostTimes >= -1 ) {
                this.countDown.string = this.broadcostTimes+"s";
                this.broadcostTimes -= 1;
                if(this.broadcostTimes == -1){
                    let scene = "level" + Global.currentLevel;
                    cc.director.loadScene(scene);
                }
            }
        },

});
