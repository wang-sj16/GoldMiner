(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/global.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '84c8fPw839Fyb+yvSdLSv/B', 'global', __filename);
// script/global.js

"use strict";

window.Global = {
  currentLevel: 1,
  currentMoney: 0,
  loseMoney: 0,
  targets: [600, 1500, 2600, 4000, 5500, 6900, 9000],
  fires: 0,
  betterDiamonds: 0,
  powers: 0,
  luckys: 0,
  stoneBooks: 0,
  silent: 0
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
        