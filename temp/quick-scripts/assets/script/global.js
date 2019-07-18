(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/global.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '84c8fPw839Fyb+yvSdLSv/B', 'global', __filename);
// script/global.js

"use strict";

window.Global = {
    currentLevel: 1,
    currentMoney: 0,
    levelTarget: [800, 1500, 2600, 3300],
    betterDiamond: [false, false, false, false, false],
    havePower: [false, false, false, false, false],
    haveLuck: [false, false, false, false, false],
    stoneBook: [false, false, false, false, false]
};

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=global.js.map
        