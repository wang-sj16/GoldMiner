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
        toRight: true,        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onCollisionEnter:function(other,self){
        if (other.node.group == 'hook' && !other.node.getComponent("hook").occupied){
            this.hook.moveSpeed = this.speed;
            this.hook.down = false;
            this.theta = other.node.getRotation()*(Math.PI / 180);
            this.node.x = other.node.x-(40+this.node.height/2)*Math.sin(this.theta);
            this.node.y = other.node.y-(40+this.node.height/2)*Math.cos(this.theta);
            this.hooked = true;
            this.hook.occupied = true;
            this.hook.item = this.node;
            return ;
        }else if (other.node.group == 'items'){
            if(this.node._name == "pig"){
                if(!this.hooked){
                    if(this.toRight){
                        this.toRight = false;
                        this.animationComponent.stop("pigRunR");
                        this.animationComponent.play("pigRun");
                        
                    }else{
                        this.toRight = true;
                        this.animationComponent.stop("pigRun");
                        this.animationComponent.play("pigRunR");
                    }
                }
                return ;
            }else if(this.node._name == "diamondPig"){
                if(!this.hooked){
                    if(this.toRight){
                        this.toRight = false;
                        this.animationComponent.stop("diamondPigRunR");
                        this.animationComponent.play("diamondPigRun");
                        
                    }else{
                        this.toRight = true;
                        this.animationComponent.stop("diamondPigRun");
                        this.animationComponent.play("diamondPigRunR");
                    }
                }
                return ;
            }
        }
    },

    start () {
        this.canvas = cc.find("Canvas").getComponent("game");
        this.hook = cc.find("Canvas/hook").getComponent("hook");
        this.animationComponent = this.getComponent(cc.Animation);
        if(this.node._name == "pig"){
            var num = Math.random();
            if(num>0.5){
                this.toRight = true;
                this.animationComponent.play("pigRunR");
            }else{
                this.toRight = false;
                this.animationComponent.play("pigRun");
            }
        }else if(this.node._name == "diamondPig"){
            var num = Math.random();
            if(num>0.5){
                this.toRight = true;
                this.animationComponent.play("diamondPigRunR");
            }else{
                this.toRight = false;
                this.animationComponent.play("diamondPigRun");
            }
        }else if(this.node._name == "pocket"){
            let num1 = Math.random();
            let num2 = Math.random();
            if(num1<0.4){
                this.speed = 3.5;
            }else if(num1<0.7){
                this.speed = 2;
            }else{
                this.speed = 1;
            }

            if(num2<0.3){
                this.value = 200;
            }else if(num2<0.6){
                this.value = 80;
            }else if(num2<0.8){
                this.value = 500;
            }else{
                this.value = -1;
            }
        }else if(this.node._name == "treasure"){
            let num1 = Math.random();
            let num2 = Math.random();

            if(num1<0.4){
                this.speed = 3.5;
            }else if(num1<0.7){
                this.speed = 2;
            }else{
                this.speed = 1;
            }

            if(num2<0.2){
                this.value = 300;
            }else if(num2<0.4){
                this.value = 150;
            }else if(num2<0.6){
                this.value = 600;
            }else if(num2<0.8){
                this.value = -1;
            }else{
                this.value = -2;
            }
        }
        if(this.node._name == "diamond" || this.node._name == "diamondPig"){
            if(Global.betterDiamonds > 0){
                this.value += 200;
            }
        }
        if(this.node._name == "smallRock" || this.node._name == "midRock" || this.node._name == "bigRock"){
            if(Global.stoneBooks > 0){
                this.value = 2*this.value;
            }
        }

        this.animationComponent.bombOver = function(){
            console.log("bomb!!!");
            var hook = cc.find("Canvas/hook").getComponent("hook");
            hook.moveSpeed = 6;
            this.node.destroy();
        }
    },

    update (dt) {
        if(!this.hooked){
            if(this.node._name == "pig"){
                if(this.toRight){
                    this.node.x += this.moveSpeed;
                    if(this.node.x>440){
                        this.toRight = false;
                        this.animationComponent.stop("pigRunR");
                        this.animationComponent.play("pigRun");
                    }
                }else{
                    this.node.x -= this.moveSpeed;
                    if(this.node.x<-440){
                        this.toRight = true;
                        this.animationComponent.stop("pigRun");
                        this.animationComponent.play("pigRunR");
                    }
                }
            }else if(this.node._name == "diamondPig"){
                if(this.toRight){
                    this.node.x += this.moveSpeed;
                    if(this.node.x>440){
                        this.toRight = false;
                        this.animationComponent.stop("diamondPigRunR");
                        this.animationComponent.play("diamondPigRun");
                    }
                }else{
                    this.node.x -= this.moveSpeed;
                    if(this.node.x<-440){
                        this.toRight = true;
                        this.animationComponent.stop("diamondPigRun");
                        this.animationComponent.play("diamondPigRunR");
                    }
                }
            }
            
        }else{
            if(this.hook.occupied){

                if(Global.powers>0){
                    if(this.moveSpeed==6){
                        this.node.x += this.speed*Math.sin(this.theta);
                        this.node.y += this.speed*Math.cos(this.theta);
                    }else{
                        this.node.x += 5*Math.sin(this.theta);
                        this.node.y += 5*Math.cos(this.theta);
                    }
                }else{
                    this.node.x += this.speed*Math.sin(this.theta);
                    this.node.y += this.speed*Math.cos(this.theta);
                }
            }else{
                if(this.node._name == "fireworks"){
                    let fire1 = cc.find("Canvas/fire1").getComponent("fire1");
                    fire1.num++;
                    this.node.destroy();
                } else if(this.node._name == "pocket" && this.value == -1){
                    let fire1 = cc.find("Canvas/fire1").getComponent("fire1");
                    fire1.num++;
                    this.node.destroy();
                } else if(this.node._name == "treasure" && this.value == -2){
                    let fire1 = cc.find("Canvas/fire1").getComponent("fire1");
                    fire1.num += 2;
                    this.node.destroy();
                } else if(this.node._name == "treasure" && this.value == -1){
                    if(Global.powers>0){
                        let fire1 = cc.find("Canvas/fire1").getComponent("fire1");
                        fire1.num += 1;
                    }else{
                        Global.powers = 1;
                    }
                    this.node.destroy();
                } else{
                    this.canvas.add1.string = "+" + this.value;
                    this.canvas.add1.getComponent("label").play = true;
                    this.canvas.money1 += this.value;
                    this.node.destroy();
                }
            }
        }
    },
});
