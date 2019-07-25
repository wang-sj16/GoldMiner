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
        //score: cc.Label,
        //avatar: cc.Node,
        line1: cc.Node,
        line2: cc.Node,
        line3: cc.Node,
        line4: cc.Node,
        line5: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    strClamp: function(str, maxChars, suffix) {
        var toCodePoint = function(unicodeSurrogates) {
            var r = [], c = 0, p = 0, i = 0;
            while (i < unicodeSurrogates.length) {
                var pos = i;
                c = unicodeSurrogates.charCodeAt(i++);//返回位置的字符的 Unicode 编码 
                if (c == 0xfe0f) {
                    continue;
                }
                if (p) {
                    var value = (0x10000 + ((p - 0xD800) << 10) + (c - 0xDC00));
                    r.push({
                        v: value,
                        pos: pos,
                    }); //计算4字节的unicode
                    p = 0;
                } else if (0xD800 <= c && c <= 0xDBFF) {
                    p = c; //如果unicode编码在oxD800-0xDBff之间，则需要与后一个字符放在一起
                } else {
                    r.push({
                        v: c,
                        pos: pos
                    }); //如果是2字节，直接将码点转为对应的十六进制形式
                }
            }
            return r;
        }

    suffix = suffix==null? '...' : suffix;
    maxChars *= 2;

    var codeArr = toCodePoint(str);
    var numChar = 0;
    var index = 0;
    for (var i = 0; i < codeArr.length; ++i) {
        var code = codeArr[i].v;
        var add = 1;
        if (code >= 128) {
            add = 2;
        }

        //如果超过了限制，则按上一个为准
        if (numChar + add > maxChars){
            break;
        }
        index = i;
        //累加
        numChar += add;
    }
    if(codeArr.length - 1 == index){
        return str;
    }
    var more = suffix? 1:0;
    return str.substring(0, codeArr[index - more].pos + 1) + suffix;
},

    rankRecords: function () {
        const sortby = function (a, b) {
            if (b.KVDataList.length === 0)
                return -1
            if (a.KVDataList.length === 0)
                return 1

            return parseInt(a.KVDataList[0].value) >= parseInt(b.KVDataList[0].value) ? -1 : 1
        }
        this.data.sort(sortby)
    },

    start () {
        if (typeof wx === 'undefined') {
            return;
        }

        this.lines = cc.find('Canvas').children

        wx.onMessage(data => {
            switch (data.message) {
                case 'Show':
                    wx.getFriendCloudStorage({
                        keyList: ['score'],
                        success: res => {
                            this.data = res.data
                            this.rankRecords()
                            let num = this.data.length
                            console.log(num)
                            if(num>5){
                                for (let i=0; i<5; i++){
                                    this.lines[i+1].opacity = 255;
                                    //console.log(this.data[i].KVDataList)
                                    cc.loader.load({url: this.data[i].avatarUrl, type: 'png'}, (err, texture) => {
                                        if (err) {
                                            console.error(err);
                                            return;
                                        }
                                        this.lines[i+1].children[1].getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
                                      });
                                    this.lines[i+1].children[2].getComponent(cc.Label).string = this.strClamp(this.data[i].nickname,8,"…")
                                    this.lines[i+1].children[3].getComponent(cc.Label).string = this.data[i].KVDataList[0].value
                                }
                            }else{
                                for (let i=0; i<num; i++){
                                    this.lines[i+1].opacity = 255;
                                    //console.log(this.data[i].KVDataList)
                                    cc.loader.load({url: this.data[i].avatarUrl, type: 'png'}, (err, texture) => {
                                        if (err) {
                                            console.error(err);
                                            return;
                                        }
                                        this.lines[i+1].children[1].getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
                                      });
                                    this.lines[i+1].children[2].getComponent(cc.Label).string = this.strClamp(this.data[i].nickname,8,"…")
                                    this.lines[i+1].children[3].getComponent(cc.Label).string = this.data[i].KVDataList[0].value
                                }
                            }
                        }
                    })
                    break;

                case 'UpdateScore':
                    wx.getUserCloudStorage({
                        keyList:['score'],
                        success:res=>{
                            if(res.KVDataList.length === 0||parseInt(data.score)>parseInt(res.KVDataList[0].value)){
                                
                                let kvdataList = []
                                kvdataList.push({
                                    key:'score',
                                    value:data.score
                                })
                                console.log("set score")
                                wx.setUserCloudStorage({
                                    KVDataList:kvdataList
                                })
                            }
                        }
                     })
                    }
                });
                
        
    },

    // update (dt) {},
});
