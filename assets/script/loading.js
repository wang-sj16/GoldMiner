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
        load: cc.Node,
        broadcostTimes: 2,
    },

    // LIFE-CYCLE CALLBACKS:

    //倒计时
    doCountdownTime(){
        this.broadcostTimes -= 1;
        console.log(this.broadcostTimes);
        if(this.broadcostTimes <= 0 && this.loadOver){
            cc.director.loadScene("start"); 
        }
    },

    start () {
        this.schedule(this.doCountdownTime,1);
        let animationComponent = this.load.getComponent(cc.Animation);
        animationComponent.play("loading");

        cc.loader.downloader.loadSubpackage('img', function (err) {
            if (err) {
                console.log('load subpackage failed.');
                return console.error(err);
              }
              console.log('load img successfully.');
              cc.loader.downloader.loadSubpackage('music', function (err) {
                if (err) {
                    console.log('load subpackage failed.');
                    return console.error(err);
                  }
                  cc.find("Canvas").getComponent("loading").loadOver = true;
                  console.log('load music successfully.');
                });
            });

    },

});
