"use strict";
cc._RF.push(module, '00f5doL+PtDyrqZvvSjFexw', 'shop');
// script/shop.js

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

    properties: {
        stonebook: cc.Node,
        power: cc.Node,
        fire: cc.Node,
        lucky: cc.Node,
        betterDiamond: cc.Node,
        next: cc.Node,

        stonebookLabel: cc.Label,
        powerLabel: cc.Label,
        fireLabel: cc.Label,
        luckyLabel: cc.Label,
        betterDiamondLabel: cc.Label,
        moneyLabel: cc.Label,
        notice: cc.Label

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onTouchStart1: function onTouchStart1(event) {
        if (this.price1 != -1) {
            if (Global.currentMoney > this.price1) {
                Global.stoneBooks = 1;
                Global.currentMoney -= this.price1;
                this.stonebook.destroy();
                this.notice.string = "GOOD JOB!!";
            } else {
                this.notice.string = "NEED MORE MONEY!!";
            }
        } else {
            this.notice.string = "SOLD OUT!!";
        }
    },
    onTouchStart2: function onTouchStart2(event) {
        if (this.price2 != -1) {
            if (Global.currentMoney > this.price2) {
                Global.powers = 1;
                Global.currentMoney -= this.price2;
                this.power.destroy();
                this.notice.string = "GOOD JOB!!";
            } else {
                this.notice.string = "NEED MORE MONEY!!";
            }
        } else {
            this.notice.string = "SOLD OUT!!";
        }
    },
    onTouchStart3: function onTouchStart3(event) {
        if (this.price3 != -1) {
            if (Global.currentMoney > this.price3) {
                Global.fires++;
                Global.currentMoney -= this.price3;
                this.fire.destroy();
                this.notice.string = "GOOD JOB!!";
            } else {
                this.notice.string = "NEED MORE MONEY!!";
            }
        } else {
            this.notice.string = "SOLD OUT!!";
        }
    },
    onTouchStart4: function onTouchStart4(event) {
        if (this.price4 != -1) {
            if (Global.currentMoney > this.price4) {
                Global.luckys = 1;
                Global.currentMoney -= this.price4;
                this.lucky.destroy();
                this.notice.string = "GOOD JOB!!";
            } else {
                this.notice.string = "NEED MORE MONEY!!";
            }
        } else {
            this.notice.string = "SOLD OUT!!";
        }
    },
    onTouchStart5: function onTouchStart5(event) {
        if (this.price5 != -1) {
            if (Global.currentMoney > this.price5) {
                Global.betterDiamonds = 1;
                Global.currentMoney -= this.price5;
                this.betterDiamond.destroy();
                this.notice.string = "GOOD JOB!!";
            } else {
                this.notice.string = "NEED MORE MONEY!!";
            }
        } else {
            this.notice.string = "SOLD OUT!!";
        }
    },
    onTouchStart6: function onTouchStart6(event) {
        Global.currentLevel++;
        cc.director.loadScene("loadlevel");
    },
    start: function start() {
        this.stonebookNum = Global.stoneBooks;
        this.powerNum = Global.powers;
        this.fireNum = Global.fires;
        this.luckyNum = Global.luckys;
        this.betterDiamondNum = Global.betterDiamonds;

        if (this.stonebookNum > 0) {
            this.price1 = -1;
            this.stonebookLabel.string = "SOLD OUT";
        } else {
            this.price1 = parseInt(Math.random() * (400 - 30 + 1) + 30);
            this.stonebookLabel.string = "$" + this.price1;
        }

        if (this.powerNum > 0) {
            this.price2 = -1;
            this.powerLabel.string = "SOLD OUT";
        } else {
            this.price2 = parseInt(Math.random() * (400 - 30 + 1) + 30);
            this.powerLabel.string = "$" + this.price2;
        }

        if (this.luckyNum > 0) {
            this.price4 = -1;
            this.luckyLabel.string = "SOLD OUT";
        } else {
            this.price4 = parseInt(Math.random() * (400 - 30 + 1) + 30);
            this.luckyLabel.string = "$" + this.price4;
        }

        if (this.betterDiamondNum > 0) {
            this.price5 = -1;
            this.betterDiamondLabel.string = "SOLD OUT";
        } else {
            this.price5 = parseInt(Math.random() * (400 - 30 + 1) + 30);
            this.betterDiamondLabel.string = "$" + this.price5;
        }
        this.price3 = parseInt(Math.random() * (400 - 30 + 1) + 30);
        this.fireLabel.string = "$" + this.price3;

        this.stonebook.on(cc.Node.EventType.TOUCH_START, this.onTouchStart1, this);
        this.power.on(cc.Node.EventType.TOUCH_START, this.onTouchStart2, this);
        this.fire.on(cc.Node.EventType.TOUCH_START, this.onTouchStart3, this);
        this.lucky.on(cc.Node.EventType.TOUCH_START, this.onTouchStart4, this);
        this.betterDiamond.on(cc.Node.EventType.TOUCH_START, this.onTouchStart5, this);
        this.next.on(cc.Node.EventType.TOUCH_START, this.onTouchStart6, this);
    },
    update: function update(dt) {
        this.moneyLabel.string = "MONEY: $" + Global.currentMoney;
    }
});

cc._RF.pop();