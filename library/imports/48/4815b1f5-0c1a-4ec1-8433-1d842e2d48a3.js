"use strict";
cc._RF.push(module, '4815bH1DBpOwYQzHYQuLUij', 'pig');
// script/pig.js

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
        speed: 0,
        value: 0,
        hooked: false,
        theta: 0,
        moveSpeed: 3,
        toRight: true //1 means go right; -1 means go left
    },
    onCollisionEnter: function onCollisionEnter(other, self) {
        //碰撞则播放爆炸动画
        var animationComponent = this.getComponent(cc.Animation);
        if (other.node.group == 'hook') {
            console.log(self.name);
            other.node.getComponent("hook").moveSpeed = this.speed;
            other.node.getComponent("hook").down = false;
            this.theta = other.node.getRotation() * (Math.PI / 180);
            this.node.x = other.node.x - (40 + this.node.height / 2) * Math.sin(this.theta);
            this.node.y = other.node.y - (40 + this.node.height / 2) * Math.cos(this.theta);
            //console.log(this.node.x + " " + this.node.y);
            this.hooked = true;
            return;
        } else if (other.node.group == 'items') {
            if (!this.hooked) {
                if (this.toRight) {
                    this.toRight = false;
                    animationComponent.stop("pigRunR");
                    animationComponent.play("pigRun");
                } else {
                    this.toRight = true;
                    animationComponent.stop("pigRun");
                    animationComponent.play("pigRunR");
                }
            }
            return;
        }
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onLoad: function onLoad() {
        //var animationComponent = this.getComponent(cc.Animation);
        //animationComponent.play("diamondPigRunR");
    },
    start: function start() {
        var animationComponent = this.getComponent(cc.Animation);
        var num = Math.random();
        console.log(num);
        if (num > 0.5) {
            this.toRight = true;
            animationComponent.play("pigRunR");
        } else {
            this.toRight = false;
            animationComponent.play("pigRun");
        }
    },
    update: function update(dt) {
        var animationComponent = this.getComponent(cc.Animation);
        if (!this.hooked) {
            if (this.toRight) {
                this.node.x += this.moveSpeed;
                if (this.node.x > 440) {
                    this.toRight = false;
                    animationComponent.stop("pigRunR");
                    animationComponent.play("pigRun");
                }
            } else {
                this.node.x -= this.moveSpeed;
                if (this.node.x < -440) {
                    this.toRight = true;
                    animationComponent.stop("pigRun");
                    animationComponent.play("pigRunR");
                }
            }
        } else {
            this.node.x += this.speed * Math.sin(this.theta);
            this.node.y += this.speed * Math.cos(this.theta);
        }
    }
}
// update (dt) {},
);

cc._RF.pop();