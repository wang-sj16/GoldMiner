window.__require=function t(o,e,n){function i(a,c){if(!e[a]){if(!o[a]){var h=a.split("/");if(h=h[h.length-1],!o[h]){var d="function"==typeof __require&&__require;if(!c&&d)return d(h,!0);if(s)return s(h,!0);throw new Error("Cannot find module '"+a+"'")}}var r=e[a]={exports:{}};o[a][0].call(r.exports,function(t){return i(o[a][1][t]||t)},r,r.exports,t,o,e,n)}return e[a].exports}for(var s="function"==typeof __require&&__require,a=0;a<n.length;a++)i(n[a]);return i}({background:[function(t,o,e){"use strict";cc._RF.push(o,"4f1857SKBpE6KiP5vfRCu09","background"),cc.Class({extends:cc.Component,properties:{hook:cc.Node},onTouchStart:function(t){this.hook.getComponent("hook").down=!0},start:function(){this.node.on(cc.Node.EventType.TOUCH_START,this.onTouchStart,this)}}),cc._RF.pop()},{}],diamondPig:[function(t,o,e){"use strict";cc._RF.push(o,"345delRlC9CLZ6YRm1R9GYr","diamondPig"),cc.Class({extends:cc.Component,properties:{speed:0,value:0,hooked:!1,theta:0,moveSpeed:3,toRight:!0},onCollisionEnter:function(t,o){"hook"!==t.node.group||t.node.getComponent("hook").occupied?"items"===t.node.group&&(this.hooked||(this.toRight?(this.toRight=!1,this.animationComponent.stop("diamondPigRunR"),this.animationComponent.play("diamondPigRun")):(this.toRight=!0,this.animationComponent.stop("diamondPigRun"),this.animationComponent.play("diamondPigRunR")))):(this.hook=t.node.getComponent("hook"),this.hook.moveSpeed=this.speed,this.hook.down=!1,this.theta=t.node.getRotation()*(Math.PI/180),this.node.x=t.node.x-(40+this.node.height/2)*Math.sin(this.theta),this.node.y=t.node.y-(40+this.node.height/2)*Math.cos(this.theta),this.hooked=!0,this.hook.occupied=!0,this.hook.item=this.node)},onLoad:function(){this.animationComponent=this.getComponent(cc.Animation)},start:function(){this.canvas=cc.find("Canvas").getComponent("game"),Math.random()>.5?(this.toRight=!0,this.animationComponent.play("diamondPigRunR")):(this.toRight=!1,this.animationComponent.play("diamondPigRun"))},update:function(t){this.hooked?this.hook.occupied?(this.node.x+=this.speed*Math.sin(this.theta),this.node.y+=this.speed*Math.cos(this.theta)):(this.canvas.add1.string="+"+this.value,this.canvas.add1.getComponent("label").play=!0,this.canvas.money1+=this.value,this.node.destroy()):this.toRight?(this.node.x+=this.moveSpeed,this.node.x>440&&(this.toRight=!1,this.animationComponent.stop("diamondPigRunR"),this.animationComponent.play("diamondPigRun"))):(this.node.x-=this.moveSpeed,this.node.x<-440&&(this.toRight=!0,this.animationComponent.stop("diamondPigRun"),this.animationComponent.play("diamondPigRunR")))}}),cc._RF.pop()},{}],fire1:[function(t,o,e){"use strict";cc._RF.push(o,"c3d89e4p49CBbTozCCRCLeI","fire1"),cc.Class({extends:cc.Component,properties:{hook:cc.Node,num:null,audio:{default:null,type:cc.AudioClip},count:cc.Label},onTouchStart:function(t){if(2===this.hook.getComponent("hook").flag&&this.num>0){var o=this.hook.getComponent("hook").item;o&&("bigRock"===o._name||"midRock"===o._name||"smallRock"===o._name?o.getComponent("items").animationComponent.play("rockbomb"):"bigGold"===o._name||"midGold"===o._name||"smallGold"===o._name?o.getComponent("items").animationComponent.play("goldbomb"):"pocket"===o._name?o.getComponent("items").animationComponent.play("pocketbomb"):"diamond"===o._name?o.getComponent("items").animationComponent.play("diamondbomb"):"fireworks"===o._name?o.getComponent("items").animationComponent.play("fireworksbomb"):"treasure"===o._name?o.getComponent("items").animationComponent.play("treasurebomb"):"pig"===o._name?o.getComponent("items").toRight?o.getComponent("items").animationComponent.play("pigbombR"):o.getComponent("items").animationComponent.play("pigbomb"):"diamondPig"===o._name&&(o.getComponent("items").toRight?o.getComponent("items").animationComponent.play("diamondPigbombR"):o.getComponent("items").animationComponent.play("diamondPigbomb")),cc.audioEngine.play(this.audio,!1,1),this.num-=1)}},start:function(){this.node.on(cc.Node.EventType.TOUCH_START,this.onTouchStart,this),this.num=Global.fires},update:function(t){this.count.string="x"+this.num}}),cc._RF.pop()},{}],game:[function(t,o,e){"use strict";cc._RF.push(o,"c885eGD3NNFHJbBq7s6RzEi","game"),cc.Class({extends:cc.Component,properties:{draw:cc.Graphics,player1:cc.Node,base:cc.Node,hook:cc.Node,moneyLabel1:cc.Label,add1:cc.Label,levelLabel:cc.Label,money1:0,target:0,countDown:cc.Label,powerLogo:cc.Node},onLoad:function(){cc.director.getCollisionManager().enabledDebugDraw=!1,cc.director.getCollisionManager().enabled=!0},start:function(){this.broadcostTimes=30,this.schedule(this.doCountdownTime,1),this.money1=Global.currentMoney,this.target=Global.targets[Global.currentLevel-1],this.levelLabel.string="Level "+Global.currentLevel+"\nTarget: $"+this.target},doCountdownTime:function(){if(this.broadcostTimes>=0&&(this.countDown.string="-"+this.broadcostTimes+"s",this.broadcostTimes-=1,0===this.broadcostTimes))if(this.money1>=this.target){console.log("You win! Next Level!");var t=cc.find("Canvas/fire1").getComponent("fire1");Global.currentMoney=this.money1,Global.fires=t.num,Global.betterDiamonds=0,Global.powers=0,Global.luckys=0,Global.stoneBooks=0,5===Global.currentLevel?cc.director.loadScene("pass"):(Global.currentLevel++,cc.director.loadScene("next"))}else Global.loseMoney=this.money1,cc.director.loadScene("lose")},update:function(t){this.draw.clear();var o=this.base.convertToWorldSpaceAR(cc.v2(0,1)),e=this.hook.convertToWorldSpaceAR(cc.v2(-.1,-25.3));this.draw.lineWidth=4.5,this.draw.moveTo(o.x,o.y),this.draw.lineTo(e.x,e.y),this.draw.stroke(),this.moneyLabel1.string="$ "+this.money1,Global.powers>0?this.powerLogo.opacity=255:this.powerLogo.opacity=0}}),cc._RF.pop()},{}],global:[function(t,o,e){"use strict";cc._RF.push(o,"84c8fPw839Fyb+yvSdLSv/B","global"),window.Global={currentLevel:1,currentMoney:0,loseMoney:0,targets:[600,1500,2600,4e3,5500,6900,9e3],fires:0,betterDiamonds:0,powers:0,luckys:0,stoneBooks:0,silent:0},cc._RF.pop()},{}],hook:[function(t,o,e){"use strict";cc._RF.push(o,"459d0eZ8ShCPZzIoUCmBl+D","hook"),cc.Class({extends:cc.Component,properties:{moveSpeed:6,down:!1,flag:0,occupied:!1,downPlaying:!1,item:cc.Node,bigGold:{default:null,type:cc.AudioClip},getDown:{default:null,type:cc.AudioClip},goods:{default:null,type:cc.AudioClip}},onKeyDown:function(t){switch(t.keyCode){case cc.macro.KEY.down:this.down=!0}},onCollisionEnter:function(t,o){this.occupied||("bigGold"===t.node._name||"treasure"===t.node._name?cc.audioEngine.play(this.bigGold,!1,1):"midGold"!==t.node._name&&"pocket"!==t.node._name&&"diamond"!==t.node._name&&"diamondPig"!==t.node._name||cc.audioEngine.play(this.goods,!1,1))},onLoad:function(){this.animationComponent=this.getComponent(cc.Animation),this.initX=this.node.x,this.initY=this.node.y,this.animationComponent.play("hookRotation"),this.playing=!0,cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this)},start:function(){},update:function(t){if(this.down&&2!==this.flag){this.downPlaying||(this.downPlaying=!0,cc.audioEngine.play(this.getDown,!1,1)),this.flag=1,this.playing=!1,this.animationComponent.stop("hookRotation"),this.animationComponent.stop("hookRotation2"),this.animationComponent.stop("hookRotation3");var o=this.node.getRotation()*(Math.PI/180);this.node.x-=this.moveSpeed*Math.sin(o),this.node.y-=this.moveSpeed*Math.cos(o),(this.node.x<-450||this.node.x>450||this.node.y<-240)&&(this.down=!1,this.occupied=!0)}else if(this.node.y<this.initY){this.flag=2,this.playing=!1;var e=this.node.getRotation()*(Math.PI/180);Global.powers>0?6===this.moveSpeed?(this.node.x+=this.moveSpeed*Math.sin(e),this.node.y+=this.moveSpeed*Math.cos(e)):(this.node.x+=5*Math.sin(e),this.node.y+=5*Math.cos(e)):(this.node.x+=this.moveSpeed*Math.sin(e),this.node.y+=this.moveSpeed*Math.cos(e)),this.down=!1}else this.downPlaying=!1,this.flag=3,this.node.x=this.initX,this.node.y=this.initY,this.moveSpeed=6,this.item=null,this.playing||(this.occupied=!1,this.node.getRotation()>30?this.animationComponent.play("hookRotation2"):this.node.getRotation()<-30?this.animationComponent.play("hookRotation3"):this.animationComponent.play("hookRotation"),this.playing=!0)}}),cc._RF.pop()},{}],items:[function(t,o,e){"use strict";cc._RF.push(o,"09721syMk9Jq7F6JuEK2Vzy","items"),cc.Class({extends:cc.Component,properties:{speed:0,value:0,hooked:!1,theta:0,moveSpeed:3,toRight:!0},onCollisionEnter:function(t,o){"hook"!==t.node.group||t.node.getComponent("hook").occupied?"items"===t.node.group&&("pig"===this.node._name?this.hooked||(this.toRight?(this.toRight=!1,this.animationComponent.stop("pigRunR"),this.animationComponent.play("pigRun")):(this.toRight=!0,this.animationComponent.stop("pigRun"),this.animationComponent.play("pigRunR"))):"diamondPig"===this.node._name&&(this.hooked||(this.toRight?(this.toRight=!1,this.animationComponent.stop("diamondPigRunR"),this.animationComponent.play("diamondPigRun")):(this.toRight=!0,this.animationComponent.stop("diamondPigRun"),this.animationComponent.play("diamondPigRunR"))))):(this.hook.moveSpeed=this.speed,this.hook.down=!1,this.theta=t.node.getRotation()*(Math.PI/180),this.node.x=t.node.x-(40+this.node.height/2)*Math.sin(this.theta),this.node.y=t.node.y-(40+this.node.height/2)*Math.cos(this.theta),this.hooked=!0,this.hook.occupied=!0,this.hook.item=this.node)},start:function(){if(this.canvas=cc.find("Canvas").getComponent("game"),this.hook=cc.find("Canvas/hook").getComponent("hook"),this.animationComponent=this.getComponent(cc.Animation),"pig"===this.node._name)Math.random()>.5?(this.toRight=!0,this.animationComponent.play("pigRunR")):(this.toRight=!1,this.animationComponent.play("pigRun"));else if("diamondPig"===this.node._name){Math.random()>.5?(this.toRight=!0,this.animationComponent.play("diamondPigRunR")):(this.toRight=!1,this.animationComponent.play("diamondPigRun"))}else if("pocket"===this.node._name){var t=Math.random(),o=Math.random();this.speed=t<.4?3.5:t<.7?2:1,this.value=o<.3?200:o<.6?80:o<.8?500:-1}else if("treasure"===this.node._name){var e=Math.random(),n=Math.random();this.speed=e<.4?3.5:e<.7?2:1,this.value=n<.2?300:n<.4?150:n<.6?600:n<.8?-1:-2}"diamond"!==this.node._name&&"diamondPig"!==this.node._name||Global.betterDiamonds>0&&(this.value+=200),"smallRock"!==this.node._name&&"midRock"!==this.node._name&&"bigRock"!==this.node._name||Global.stoneBooks>0&&(this.value=2*this.value),this.animationComponent.bombOver=function(){cc.find("Canvas/hook").getComponent("hook").moveSpeed=6,this.node.destroy()}},update:function(t){if(this.hooked)if(this.hook.occupied)Global.powers>0?6===this.moveSpeed?(this.node.x+=this.speed*Math.sin(this.theta),this.node.y+=this.speed*Math.cos(this.theta)):(this.node.x+=5*Math.sin(this.theta),this.node.y+=5*Math.cos(this.theta)):(this.node.x+=this.speed*Math.sin(this.theta),this.node.y+=this.speed*Math.cos(this.theta));else if("fireworks"===this.node._name)cc.find("Canvas/fire1").getComponent("fire1").num++,this.node.destroy();else if("pocket"===this.node._name&&-1===this.value){cc.find("Canvas/fire1").getComponent("fire1").num++,this.node.destroy()}else if("treasure"===this.node._name&&-2===this.value){cc.find("Canvas/fire1").getComponent("fire1").num+=2,this.node.destroy()}else if("treasure"===this.node._name&&-1===this.value){if(Global.powers>0)cc.find("Canvas/fire1").getComponent("fire1").num+=1;else Global.powers=1;this.node.destroy()}else this.canvas.add1.string="+"+this.value,this.canvas.add1.getComponent("label").play=!0,this.canvas.money1+=this.value,this.node.destroy();else"pig"===this.node._name?this.toRight?(this.node.x+=this.moveSpeed,this.node.x>440&&(this.toRight=!1,this.animationComponent.stop("pigRunR"),this.animationComponent.play("pigRun"))):(this.node.x-=this.moveSpeed,this.node.x<-440&&(this.toRight=!0,this.animationComponent.stop("pigRun"),this.animationComponent.play("pigRunR"))):"diamondPig"===this.node._name&&(this.toRight?(this.node.x+=this.moveSpeed,this.node.x>440&&(this.toRight=!1,this.animationComponent.stop("diamondPigRunR"),this.animationComponent.play("diamondPigRun"))):(this.node.x-=this.moveSpeed,this.node.x<-440&&(this.toRight=!0,this.animationComponent.stop("diamondPigRun"),this.animationComponent.play("diamondPigRunR"))))}}),cc._RF.pop()},{}],label:[function(t,o,e){"use strict";cc._RF.push(o,"f8f10Se2R5MkI+03RCpX6T5","label"),cc.Class({extends:cc.Component,properties:{play:!1},start:function(){this.animationComponent=this.getComponent(cc.Animation)},update:function(t){this.play&&(this.animationComponent.play("labelVanish"),this.play=!1)}}),cc._RF.pop()},{}],loading:[function(t,o,e){"use strict";cc._RF.push(o,"9c6f2/jee9KQ6LETgMP+1Wd","loading"),cc.Class({extends:cc.Component,properties:{load:cc.Node,broadcostTimes:2},doCountdownTime:function(){this.broadcostTimes-=1,console.log(this.broadcostTimes),this.broadcostTimes<=0&&this.loadOver&&cc.director.loadScene("start")},start:function(){this.schedule(this.doCountdownTime,1),this.load.getComponent(cc.Animation).play("loading"),cc.loader.downloader.loadSubpackage("img",function(t){if(t)return console.log("load subpackage failed."),console.error(t);console.log("load img successfully."),cc.loader.downloader.loadSubpackage("music",function(t){if(t)return console.log("load subpackage failed."),console.error(t);cc.find("Canvas").getComponent("loading").loadOver=!0,console.log("load music successfully.")})})}}),cc._RF.pop()},{}],loadlevel:[function(t,o,e){"use strict";cc._RF.push(o,"0c5e3D0UM5KA6DlJ4mtv+60","loadlevel"),cc.Class({extends:cc.Component,properties:{level:cc.Label,stonebook:cc.Label,power:cc.Label,fire:cc.Label,lucky:cc.Label,betterDiamond:cc.Label,broadcostTimes:2,audio:{default:null,type:cc.AudioClip}},start:function(){cc.audioEngine.play(this.audio,!1,1),this.schedule(this.doCountdownTime,1);var t=Global.currentLevel;this.level.string="Level "+t+"\nTarget: "+Global.targets[t-1],this.stonebook.string="x"+Global.stoneBooks,this.power.string="x"+Global.powers,this.fire.string="x"+Global.fires,this.lucky.string="x"+Global.luckys,this.betterDiamond.string="x"+Global.betterDiamonds},doCountdownTime:function(){if(this.broadcostTimes>=-1&&(this.broadcostTimes-=1,-1===this.broadcostTimes)){var t="level"+Global.currentLevel;cc.director.loadScene(t)}}}),cc._RF.pop()},{}],losebtn:[function(t,o,e){"use strict";cc._RF.push(o,"745ebYtre9C7ZBLLUhdTf3P","losebtn"),cc.Class({extends:cc.Component,properties:{},onTouchStart:function(t){if("menu"===this.node._name)cc.director.loadScene("start");else if("restart"===this.node._name){var o="level"+Global.currentLevel;cc.director.loadScene(o)}},start:function(){this.node.on(cc.Node.EventType.TOUCH_START,this.onTouchStart,this)}}),cc._RF.pop()},{}],lose:[function(t,o,e){"use strict";cc._RF.push(o,"18ce1mYCrdErohTQM+75yCg","lose"),cc.Class({extends:cc.Component,properties:{label:cc.Label,audio:{default:null,type:cc.AudioClip}},start:function(){cc.audioEngine.play(this.audio,!1,1),this.label.string="YOU LOSE!\n\nSCORE: "+Global.loseMoney,wx.postMessage({message:"UpdateScore",score:Global.loseMoney.toString()})}}),cc._RF.pop()},{}],next:[function(t,o,e){"use strict";cc._RF.push(o,"3e6f8hw54hPdJs+WFXF3bmq","next"),cc.Class({extends:cc.Component,properties:{broadcostTimes:3,audio:{default:null,type:cc.AudioClip}},start:function(){cc.audioEngine.play(this.audio,!1,1),this.schedule(this.doCountdownTime,1)},doCountdownTime:function(){this.broadcostTimes>=0&&(this.broadcostTimes-=1,0===this.broadcostTimes&&cc.director.loadScene("shop"))}}),cc._RF.pop()},{}],passbtn:[function(t,o,e){"use strict";cc._RF.push(o,"d0085DaeL5IT4reCe8HGWj0","passbtn"),cc.Class({extends:cc.Component,properties:{},onTouchStart:function(t){"menu"===this.node._name?cc.director.loadScene("start"):"restart"===this.node._name&&cc.director.loadScene("level1")},start:function(){this.node.on(cc.Node.EventType.TOUCH_START,this.onTouchStart,this)}}),cc._RF.pop()},{}],pass:[function(t,o,e){"use strict";cc._RF.push(o,"77816M/rXJFKai17Et+4gf+","pass"),cc.Class({extends:cc.Component,properties:{label:cc.Label,audio:{default:null,type:cc.AudioClip}},start:function(){cc.audioEngine.play(this.audio,!1,1),this.label.string="STAGE CLEAR!\n\nSCORE: "+Global.currentMoney,wx.postMessage({message:"UpdateScore",score:Global.currentMoney.toString()})}}),cc._RF.pop()},{}],pig:[function(t,o,e){"use strict";cc._RF.push(o,"4815bH1DBpOwYQzHYQuLUij","pig"),cc.Class({extends:cc.Component,properties:{speed:0,value:0,hooked:!1,theta:0,moveSpeed:3,toRight:!0},onCollisionEnter:function(t,o){"hook"!==t.node.group||t.node.getComponent("hook").occupied?"items"===t.node.group&&(this.hooked||(this.toRight?(this.toRight=!1,this.animationComponent.stop("pigRunR"),this.animationComponent.play("pigRun")):(this.toRight=!0,this.animationComponent.stop("pigRun"),this.animationComponent.play("pigRunR")))):(this.hook=t.node.getComponent("hook"),this.hook.moveSpeed=this.speed,this.hook.down=!1,this.theta=t.node.getRotation()*(Math.PI/180),this.node.x=t.node.x-(40+this.node.height/2)*Math.sin(this.theta),this.node.y=t.node.y-(40+this.node.height/2)*Math.cos(this.theta),this.hooked=!0,this.hook.occupied=!0,this.hook.item=this.node)},start:function(){this.canvas=cc.find("Canvas").getComponent("game"),this.animationComponent=this.getComponent(cc.Animation),Math.random()>.5?(this.toRight=!0,this.animationComponent.play("pigRunR")):(this.toRight=!1,this.animationComponent.play("pigRun"))},update:function(t){this.hooked?this.hook.occupied?(this.node.x+=this.speed*Math.sin(this.theta),this.node.y+=this.speed*Math.cos(this.theta)):(this.canvas.add1.string="+"+this.value,this.canvas.add1.getComponent("label").play=!0,this.canvas.money1+=this.value,this.node.destroy()):this.toRight?(this.node.x+=this.moveSpeed,this.node.x>440&&(this.toRight=!1,this.animationComponent.stop("pigRunR"),this.animationComponent.play("pigRun"))):(this.node.x-=this.moveSpeed,this.node.x<-440&&(this.toRight=!0,this.animationComponent.stop("pigRun"),this.animationComponent.play("pigRunR")))}}),cc._RF.pop()},{}],shop:[function(t,o,e){"use strict";cc._RF.push(o,"00f5doL+PtDyrqZvvSjFexw","shop"),cc.Class({extends:cc.Component,properties:{stonebook:cc.Node,power:cc.Node,fire:cc.Node,lucky:cc.Node,betterDiamond:cc.Node,next:cc.Node,stonebookLabel:cc.Label,powerLabel:cc.Label,fireLabel:cc.Label,luckyLabel:cc.Label,betterDiamondLabel:cc.Label,moneyLabel:cc.Label,notice:cc.Label,choose:{default:null,type:cc.AudioClip},ding:{default:null,type:cc.AudioClip}},onTouchStart1:function(t){-1!==this.price1?Global.currentMoney>this.price1?(cc.audioEngine.play(this.choose,!1,1),Global.stoneBooks=1,Global.currentMoney-=this.price1,this.stonebook.destroy(),this.notice.string="GET A STONEBOOK!!"):(cc.audioEngine.play(this.ding,!1,1),this.notice.string="NEED MORE MONEY!!"):(cc.audioEngine.play(this.ding,!1,1),this.notice.string="SOLD OUT!!")},onTouchStart2:function(t){-1!==this.price2?Global.currentMoney>this.price2?(cc.audioEngine.play(this.choose,!1,1),Global.powers=1,Global.currentMoney-=this.price2,this.power.destroy(),this.notice.string="GET POWER!!"):(cc.audioEngine.play(this.ding,!1,1),this.notice.string="NEED MORE MONEY!!"):(cc.audioEngine.play(this.ding,!1,1),this.notice.string="SOLD OUT!!")},onTouchStart3:function(t){-1!==this.price3?Global.currentMoney>this.price3?(cc.audioEngine.play(this.choose,!1,1),Global.fires++,Global.currentMoney-=this.price3,this.fire.destroy(),this.notice.string="GET A BOBM!!"):(cc.audioEngine.play(this.ding,!1,1),this.notice.string="NEED MORE MONEY!!"):(cc.audioEngine.play(this.ding,!1,1),this.notice.string="SOLD OUT!!")},onTouchStart4:function(t){-1!==this.price4?Global.currentMoney>this.price4?(cc.audioEngine.play(this.choose,!1,1),Global.luckys=1,Global.currentMoney-=this.price4,this.lucky.destroy(),this.notice.string="GET LUCK!!"):(cc.audioEngine.play(this.ding,!1,1),this.notice.string="NEED MORE MONEY!!"):(cc.audioEngine.play(this.ding,!1,1),this.notice.string="SOLD OUT!!")},onTouchStart5:function(t){-1!==this.price5?(cc.audioEngine.play(this.choose,!1,1),Global.currentMoney>this.price5?(Global.betterDiamonds=1,Global.currentMoney-=this.price5,this.betterDiamond.destroy(),this.notice.string="GET BETTER DIAMOND!!"):(cc.audioEngine.play(this.ding,!1,1),this.notice.string="NEED MORE MONEY!!")):(cc.audioEngine.play(this.ding,!1,1),this.notice.string="SOLD OUT!!")},onTouchStart6:function(t){cc.director.loadScene("loadlevel")},start:function(){var t=Math.random();t>.6?(this.price1=-1,this.stonebookLabel.string="SOLD OUT"):(this.price1=parseInt(371*Math.random()+30),this.stonebookLabel.string="$"+this.price1),(t=Math.random())>.6?(this.price2=-1,this.powerLabel.string="SOLD OUT"):(this.price2=parseInt(201*Math.random()+200),this.powerLabel.string="$"+this.price2),(t=Math.random())>.6?(this.price3=-1,this.fireLabel.string="SOLD OUT"):(this.price3=parseInt(311*Math.random()+90),this.fireLabel.string="$"+this.price3),(t=Math.random())>.6?(this.price4=-1,this.luckyLabel.string="SOLD OUT"):(this.price4=parseInt(321*Math.random()+80),this.luckyLabel.string="$"+this.price4),(t=Math.random())>.6?(this.price5=-1,this.betterDiamondLabel.string="SOLD OUT"):(this.price5=parseInt(371*Math.random()+50),this.betterDiamondLabel.string="$"+this.price5),this.stonebook.on(cc.Node.EventType.TOUCH_START,this.onTouchStart1,this),this.power.on(cc.Node.EventType.TOUCH_START,this.onTouchStart2,this),this.fire.on(cc.Node.EventType.TOUCH_START,this.onTouchStart3,this),this.lucky.on(cc.Node.EventType.TOUCH_START,this.onTouchStart4,this),this.betterDiamond.on(cc.Node.EventType.TOUCH_START,this.onTouchStart5,this),this.next.on(cc.Node.EventType.TOUCH_START,this.onTouchStart6,this)},update:function(t){this.moneyLabel.string="MONEY: $"+Global.currentMoney}}),cc._RF.pop()},{}],startbtn:[function(t,o,e){"use strict";cc._RF.push(o,"814batwKhpFCZv2U5FQe2OS","startbtn"),cc.Class({extends:cc.Component,properties:{speed:4,value:0,hooked:!1,theta:0},onCollisionEnter:function(t,o){"hook"!==t.node.group||t.node.getComponent("hook").occupied||(this.hook.moveSpeed=this.speed,this.hook.down=!1,this.theta=t.node.getRotation()*(Math.PI/180),this.node.x=t.node.x-(40+this.node.height/2)*Math.sin(this.theta),this.node.y=t.node.y-(40+this.node.height/2)*Math.cos(this.theta),this.hooked=!0,this.hook.occupied=!0,this.hook.item=this.node)},start:function(){this.canvas=cc.find("Canvas").getComponent("start"),this.hook=cc.find("Canvas/hook").getComponent("hook"),this.animationComponent=this.getComponent(cc.Animation)},update:function(t){this.hooked&&(this.hook.occupied?(this.node.x+=this.speed*Math.sin(this.theta),this.node.y+=this.speed*Math.cos(this.theta)):("single"===this.node._name?cc.director.loadScene("loadlevel"):"rank"===this.node._name?(wx.postMessage({message:"Show"}),cc.director.loadScene("rank")):"tutorial"===this.node._name?cc.director.loadScene("tutorial"):this.node._name,this.node.destroy()))}}),cc._RF.pop()},{}],start:[function(t,o,e){"use strict";cc._RF.push(o,"dae89QogahOwKknrur62X+5","start"),cc.Class({extends:cc.Component,properties:{draw:cc.Graphics,player1:cc.Node,base:cc.Node,hook:cc.Node,avatar:cc.Node},onLoad:function(){"undefined"!=typeof wx&&(wx.login({success:function(t){t.code;wx.getSetting({success:function(t){if(t.authSetting["scope.userInfo"])console.log("\u5df2\u7ecf\u6388\u6743"),wx.getUserInfo({success:function(t){console.log(t.userInfo.nickName),cc.loader.load({url:t.userInfo.avatarUrl,type:"png"},function(t,o){t?console.error(t):cc.find("Canvas/avatar").getComponent(cc.Sprite).spriteFrame=new cc.SpriteFrame(o)})}});else{var o=wx.getSystemInfoSync(),e=o.windowWidth,n=o.windowHeight,i=wx.createUserInfoButton({type:"text",text:"Press to login",style:{left:0,top:.4*n,width:e,height:n,lineHeight:40,backgroundColor:"white",color:"black",textAlign:"center",fontSize:30,borderRadius:4}});i.onTap(function(t){var o=t.userInfo;o&&(console.log(o.nickName),cc.loader.load({url:o.avatarUrl,type:"png"},function(t,o){t?console.error(t):cc.find("Canvas/avatar").getComponent(cc.Sprite).spriteFrame=new cc.SpriteFrame(o)}),wx.getOpenDataContext().postMessage({message:"User info get success."}),wx.postMessage({message:"UpdateScore",score:"0"}),i.hide(),i.destroy())})}}})}}),cc.audioEngine.play(this.bgm,!0,1),cc.director.getCollisionManager().enabledDebugDraw=!1,cc.director.getCollisionManager().enabled=!0,Global.currentLevel=1,Global.currentMoney=0,Global.targets=[600,1500,2600,4e3,5500,6900,9e3],Global.fires=0,Global.betterDiamonds=0,Global.powers=0,Global.luckys=0,Global.stoneBooks=0)},update:function(t){this.draw.clear();var o=this.base.convertToWorldSpaceAR(cc.v2(0,1)),e=this.hook.convertToWorldSpaceAR(cc.v2(-.1,-25.3));this.draw.lineWidth=4.5,this.draw.moveTo(o.x,o.y),this.draw.lineTo(e.x,e.y),this.draw.stroke()}}),cc._RF.pop()},{}],subdomain:[function(t,o,e){"use strict";cc._RF.push(o,"33bafVvAqlI86PN0hj9N5Al","subdomain"),cc.Class({extends:cc.Component,properties:{btn:cc.Node,wxSubContextView:cc.Node},onTouchStart:function(t){cc.director.loadScene("start")},start:function(){this.btn.on(cc.Node.EventType.TOUCH_START,this.onTouchStart,this)},update:function(t){}}),cc._RF.pop()},{}],tnt:[function(t,o,e){"use strict";cc._RF.push(o,"ecae1uTvBBKA4C08LWMRC/9","tnt"),cc.Class({extends:cc.Component,properties:{speed:0,value:0,hooked:!1,theta:0,audio:{default:null,type:cc.AudioClip}},onCollisionEnter:function(t,o){"hook"!==t.node.group||t.node.getComponent("hook").occupied||(this.hook=t.node.getComponent("hook"),this.hook.down=!1,this.hooked=!0,this.hook.occupied=!0,this.animationComponent.play("tntbomb"),cc.audioEngine.play(this.audio,!1,1))},start:function(){this.canvas=cc.find("Canvas").getComponent("game"),this.animationComponent=this.getComponent(cc.Animation),this.animationComponent.bombOver=function(){this.node.destroy(),console.log("delete node");var t=cc.find("Canvas").children,o=!0,e=!1,n=void 0;try{for(var i,s=t[Symbol.iterator]();!(o=(i=s.next()).done);o=!0){var a=i.value;"items"!==a.group&&"pig"!==a.group||Math.pow(this.node.x-a.x,2)+Math.pow(this.node.y-a.y,2)<2e4&&a.destroy()}}catch(t){e=!0,n=t}finally{try{!o&&s.return&&s.return()}finally{if(e)throw n}}}},update:function(t){}}),cc._RF.pop()},{}],tutorial_next:[function(t,o,e){"use strict";cc._RF.push(o,"1a91dvAwBJKCZY702kAU0b+","tutorial_next"),cc.Class({extends:cc.Component,properties:{return:cc.Node},onTouchStartReturn:function(t){cc.director.loadScene("start")},start:function(){this.return.on(cc.Node.EventType.TOUCH_START,this.onTouchStartReturn,this)}}),cc._RF.pop()},{}],tutorial:[function(t,o,e){"use strict";cc._RF.push(o,"64f8etnoJ5FVJ5ocrtOiMW3","tutorial"),cc.Class({extends:cc.Component,properties:{next:cc.Node},onTouchStartNext:function(t){cc.director.loadScene("tutorial_next")},start:function(){this.next.on(cc.Node.EventType.TOUCH_START,this.onTouchStartNext,this)}}),cc._RF.pop()},{}]},{},["background","diamondPig","fire1","game","global","hook","items","label","loading","loadlevel","lose","losebtn","next","pass","passbtn","pig","shop","start","startbtn","subdomain","tnt","tutorial","tutorial_next"]);