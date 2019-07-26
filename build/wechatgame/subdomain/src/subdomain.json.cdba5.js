module.exports = [
  [
    {
      "__type__": "cc.Prefab",
      "_name": "line",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "line1",
      "_children": [
        {
          "__id__": 2
        },
        {
          "__id__": 3
        },
        {
          "__id__": 4
        },
        {
          "__id__": 5
        }
      ],
      "_level": 2,
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "2bLy9PVO5Oyp5MOqErL8mN"
        },
        "fileId": "9akxwBSnlODK56Z63JATxi"
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": -180,
        "y": 120
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "rank",
      "_parent": {
        "__id__": 1
      },
      "_level": 3,
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 2
          },
          "_useOriginalSize": false,
          "_string": "1.",
          "_N$string": "1.",
          "_fontSize": 28,
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "2bLy9PVO5Oyp5MOqErL8mN"
        },
        "fileId": "86fQtTVAxBnIp9+P9H9jcm"
      },
      "_color": {
        "__type__": "cc.Color"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 23.35,
        "height": 40
      },
      "_anchorPoint": {
        "__type__": "cc.Vec2"
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": 46,
        "y": -10
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "avatar",
      "_parent": {
        "__id__": 1
      },
      "_level": 3,
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 3
          },
          "_sizeMode": 0
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "2bLy9PVO5Oyp5MOqErL8mN"
        },
        "fileId": "eeX2JDfIRCMKtby2g4swgu"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 30,
        "height": 30
      },
      "_anchorPoint": {
        "__type__": "cc.Vec2"
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": 96,
        "y": -10
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "name",
      "_parent": {
        "__id__": 1
      },
      "_level": 3,
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 4
          },
          "_useOriginalSize": false,
          "_string": "xxx",
          "_N$string": "xxx",
          "_fontSize": 28,
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "2bLy9PVO5Oyp5MOqErL8mN"
        },
        "fileId": "25+VSNCi5ITJ1vRWRK9bsg"
      },
      "_color": {
        "__type__": "cc.Color"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 42,
        "height": 40
      },
      "_anchorPoint": {
        "__type__": "cc.Vec2"
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": 196,
        "y": -10
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "score",
      "_parent": {
        "__id__": 1
      },
      "_level": 3,
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 5
          },
          "_useOriginalSize": false,
          "_string": "4000",
          "_N$string": "4000",
          "_fontSize": 28,
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "2bLy9PVO5Oyp5MOqErL8mN"
        },
        "fileId": "dbGnIpsXpLyaPGHf3HQyhH"
      },
      "_color": {
        "__type__": "cc.Color"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 62.29,
        "height": 40
      },
      "_anchorPoint": {
        "__type__": "cc.Vec2"
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": 360,
        "y": -10
      }
    }
  ],
  [
    {
      "__type__": "cc.SceneAsset",
      "_name": "rank",
      "scene": {
        "__id__": 1
      },
      "asyncLoadAssets": null
    },
    {
      "__type__": "cc.Scene",
      "_name": "New Node",
      "_children": [
        {
          "__id__": 2
        }
      ],
      "_active": false,
      "_anchorPoint": {
        "__type__": "cc.Vec2"
      },
      "autoReleaseAssets": false
    },
    {
      "__type__": "cc.Node",
      "_name": "Canvas",
      "_parent": {
        "__id__": 1
      },
      "_children": [
        {
          "__id__": 3
        },
        {
          "__id__": 4
        },
        {
          "__id__": 9
        },
        {
          "__id__": 14
        },
        {
          "__id__": 19
        },
        {
          "__id__": 24
        }
      ],
      "_level": 1,
      "_components": [
        {
          "__type__": "cc.Canvas",
          "node": {
            "__id__": 2
          },
          "_designResolution": {
            "__type__": "cc.Size",
            "width": 800,
            "height": 350
          }
        },
        {
          "__type__": "bbfadI3JgpGQ4wQp6m1UBig",
          "node": {
            "__id__": 2
          },
          "line1": {
            "__id__": 4
          },
          "line2": {
            "__id__": 9
          },
          "line3": {
            "__id__": 14
          },
          "line4": {
            "__id__": 19
          },
          "line5": {
            "__id__": 24
          }
        }
      ],
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 800,
        "height": 350
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": 400,
        "y": 175
      },
      "_id": "18U5ols4hBKahxZsk2StAm"
    },
    {
      "__type__": "cc.Node",
      "_name": "Main Camera",
      "_parent": {
        "__id__": 2
      },
      "_level": 2,
      "_components": [
        {
          "__type__": "cc.Camera",
          "node": {
            "__id__": 3
          },
          "_clearFlags": 7,
          "_backgroundColor": {
            "__type__": "cc.Color",
            "r": 255,
            "g": 255,
            "b": 255
          },
          "_depth": -1
        }
      ]
    },
    {
      "__type__": "cc.Node",
      "_name": "line1",
      "_parent": {
        "__id__": 2
      },
      "_children": [
        {
          "__id__": 5
        },
        {
          "__id__": 6
        },
        {
          "__id__": 7
        },
        {
          "__id__": 8
        }
      ],
      "_level": 2,
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 4
        },
        "asset": {
          "__uuid__": "2bLy9PVO5Oyp5MOqErL8mN"
        },
        "fileId": "9akxwBSnlODK56Z63JATxi"
      },
      "_opacity": 0,
      "_position": {
        "__type__": "cc.Vec3",
        "x": -180,
        "y": 120
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "rank",
      "_parent": {
        "__id__": 4
      },
      "_level": 3,
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 5
          },
          "_useOriginalSize": false,
          "_string": "1.",
          "_N$string": "1.",
          "_fontSize": 28,
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 4
        },
        "asset": {
          "__uuid__": "2bLy9PVO5Oyp5MOqErL8mN"
        },
        "fileId": "86fQtTVAxBnIp9+P9H9jcm"
      },
      "_color": {
        "__type__": "cc.Color"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 23.35,
        "height": 40
      },
      "_anchorPoint": {
        "__type__": "cc.Vec2"
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": 10,
        "y": -10
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "avatar",
      "_parent": {
        "__id__": 4
      },
      "_level": 3,
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 6
          },
          "_sizeMode": 0
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 4
        },
        "asset": {
          "__uuid__": "2bLy9PVO5Oyp5MOqErL8mN"
        },
        "fileId": "eeX2JDfIRCMKtby2g4swgu"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 30,
        "height": 30
      },
      "_anchorPoint": {
        "__type__": "cc.Vec2"
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": 40
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "name",
      "_parent": {
        "__id__": 4
      },
      "_level": 3,
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 7
          },
          "_useOriginalSize": false,
          "_string": "xxx",
          "_N$string": "xxx",
          "_fontSize": 28,
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 4
        },
        "asset": {
          "__uuid__": "2bLy9PVO5Oyp5MOqErL8mN"
        },
        "fileId": "25+VSNCi5ITJ1vRWRK9bsg"
      },
      "_color": {
        "__type__": "cc.Color"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 42,
        "height": 40
      },
      "_anchorPoint": {
        "__type__": "cc.Vec2"
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": 100,
        "y": -10
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "score",
      "_parent": {
        "__id__": 4
      },
      "_level": 3,
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 8
          },
          "_useOriginalSize": false,
          "_string": "0",
          "_N$string": "0",
          "_fontSize": 28,
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 4
        },
        "asset": {
          "__uuid__": "2bLy9PVO5Oyp5MOqErL8mN"
        },
        "fileId": "dbGnIpsXpLyaPGHf3HQyhH"
      },
      "_color": {
        "__type__": "cc.Color"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 15.57,
        "height": 40
      },
      "_anchorPoint": {
        "__type__": "cc.Vec2"
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": 360,
        "y": -10
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "line2",
      "_parent": {
        "__id__": 2
      },
      "_children": [
        {
          "__id__": 10
        },
        {
          "__id__": 11
        },
        {
          "__id__": 12
        },
        {
          "__id__": 13
        }
      ],
      "_level": 2,
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 9
        },
        "asset": {
          "__uuid__": "2bLy9PVO5Oyp5MOqErL8mN"
        },
        "fileId": "9akxwBSnlODK56Z63JATxi"
      },
      "_opacity": 0,
      "_position": {
        "__type__": "cc.Vec3",
        "x": -180,
        "y": 60
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "rank",
      "_parent": {
        "__id__": 9
      },
      "_level": 3,
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 10
          },
          "_useOriginalSize": false,
          "_string": "2.",
          "_N$string": "2.",
          "_fontSize": 28,
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 9
        },
        "asset": {
          "__uuid__": "2bLy9PVO5Oyp5MOqErL8mN"
        },
        "fileId": "86fQtTVAxBnIp9+P9H9jcm"
      },
      "_color": {
        "__type__": "cc.Color"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 23.35,
        "height": 40
      },
      "_anchorPoint": {
        "__type__": "cc.Vec2"
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": 10,
        "y": -10
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "avatar",
      "_parent": {
        "__id__": 9
      },
      "_level": 3,
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 11
          },
          "_sizeMode": 0
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 9
        },
        "asset": {
          "__uuid__": "2bLy9PVO5Oyp5MOqErL8mN"
        },
        "fileId": "eeX2JDfIRCMKtby2g4swgu"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 30,
        "height": 30
      },
      "_anchorPoint": {
        "__type__": "cc.Vec2"
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": 40
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "name",
      "_parent": {
        "__id__": 9
      },
      "_level": 3,
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 12
          },
          "_useOriginalSize": false,
          "_string": "xxx",
          "_N$string": "xxx",
          "_fontSize": 28,
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 9
        },
        "asset": {
          "__uuid__": "2bLy9PVO5Oyp5MOqErL8mN"
        },
        "fileId": "25+VSNCi5ITJ1vRWRK9bsg"
      },
      "_color": {
        "__type__": "cc.Color"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 42,
        "height": 40
      },
      "_anchorPoint": {
        "__type__": "cc.Vec2"
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": 100,
        "y": -10
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "score",
      "_parent": {
        "__id__": 9
      },
      "_level": 3,
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 13
          },
          "_useOriginalSize": false,
          "_string": "0",
          "_N$string": "0",
          "_fontSize": 28,
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 9
        },
        "asset": {
          "__uuid__": "2bLy9PVO5Oyp5MOqErL8mN"
        },
        "fileId": "dbGnIpsXpLyaPGHf3HQyhH"
      },
      "_color": {
        "__type__": "cc.Color"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 15.57,
        "height": 40
      },
      "_anchorPoint": {
        "__type__": "cc.Vec2"
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": 360,
        "y": -10
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "line3",
      "_parent": {
        "__id__": 2
      },
      "_children": [
        {
          "__id__": 15
        },
        {
          "__id__": 16
        },
        {
          "__id__": 17
        },
        {
          "__id__": 18
        }
      ],
      "_level": 2,
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 14
        },
        "asset": {
          "__uuid__": "2bLy9PVO5Oyp5MOqErL8mN"
        },
        "fileId": "9akxwBSnlODK56Z63JATxi"
      },
      "_opacity": 0,
      "_position": {
        "__type__": "cc.Vec3",
        "x": -180
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "rank",
      "_parent": {
        "__id__": 14
      },
      "_level": 3,
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 15
          },
          "_useOriginalSize": false,
          "_string": "3.",
          "_N$string": "3.",
          "_fontSize": 28,
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 14
        },
        "asset": {
          "__uuid__": "2bLy9PVO5Oyp5MOqErL8mN"
        },
        "fileId": "86fQtTVAxBnIp9+P9H9jcm"
      },
      "_color": {
        "__type__": "cc.Color"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 23.35,
        "height": 40
      },
      "_anchorPoint": {
        "__type__": "cc.Vec2"
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": 10,
        "y": -10
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "avatar",
      "_parent": {
        "__id__": 14
      },
      "_level": 3,
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 16
          },
          "_sizeMode": 0
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 14
        },
        "asset": {
          "__uuid__": "2bLy9PVO5Oyp5MOqErL8mN"
        },
        "fileId": "eeX2JDfIRCMKtby2g4swgu"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 30,
        "height": 30
      },
      "_anchorPoint": {
        "__type__": "cc.Vec2"
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": 40
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "name",
      "_parent": {
        "__id__": 14
      },
      "_level": 3,
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 17
          },
          "_useOriginalSize": false,
          "_string": "xxx",
          "_N$string": "xxx",
          "_fontSize": 28,
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 14
        },
        "asset": {
          "__uuid__": "2bLy9PVO5Oyp5MOqErL8mN"
        },
        "fileId": "25+VSNCi5ITJ1vRWRK9bsg"
      },
      "_color": {
        "__type__": "cc.Color"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 42,
        "height": 40
      },
      "_anchorPoint": {
        "__type__": "cc.Vec2"
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": 100,
        "y": -10
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "score",
      "_parent": {
        "__id__": 14
      },
      "_level": 3,
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 18
          },
          "_useOriginalSize": false,
          "_string": "0",
          "_N$string": "0",
          "_fontSize": 28,
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 14
        },
        "asset": {
          "__uuid__": "2bLy9PVO5Oyp5MOqErL8mN"
        },
        "fileId": "dbGnIpsXpLyaPGHf3HQyhH"
      },
      "_color": {
        "__type__": "cc.Color"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 15.57,
        "height": 40
      },
      "_anchorPoint": {
        "__type__": "cc.Vec2"
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": 360,
        "y": -10
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "line4",
      "_parent": {
        "__id__": 2
      },
      "_children": [
        {
          "__id__": 20
        },
        {
          "__id__": 21
        },
        {
          "__id__": 22
        },
        {
          "__id__": 23
        }
      ],
      "_level": 2,
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 19
        },
        "asset": {
          "__uuid__": "2bLy9PVO5Oyp5MOqErL8mN"
        },
        "fileId": "9akxwBSnlODK56Z63JATxi"
      },
      "_opacity": 0,
      "_position": {
        "__type__": "cc.Vec3",
        "x": -180,
        "y": -60
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "rank",
      "_parent": {
        "__id__": 19
      },
      "_level": 3,
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 20
          },
          "_useOriginalSize": false,
          "_string": "4.",
          "_N$string": "4.",
          "_fontSize": 28,
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 19
        },
        "asset": {
          "__uuid__": "2bLy9PVO5Oyp5MOqErL8mN"
        },
        "fileId": "86fQtTVAxBnIp9+P9H9jcm"
      },
      "_color": {
        "__type__": "cc.Color"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 23.35,
        "height": 40
      },
      "_anchorPoint": {
        "__type__": "cc.Vec2"
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": 10,
        "y": -10
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "avatar",
      "_parent": {
        "__id__": 19
      },
      "_level": 3,
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 21
          },
          "_sizeMode": 0
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 19
        },
        "asset": {
          "__uuid__": "2bLy9PVO5Oyp5MOqErL8mN"
        },
        "fileId": "eeX2JDfIRCMKtby2g4swgu"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 30,
        "height": 30
      },
      "_anchorPoint": {
        "__type__": "cc.Vec2"
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": 40
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "name",
      "_parent": {
        "__id__": 19
      },
      "_level": 3,
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 22
          },
          "_useOriginalSize": false,
          "_string": "xxx",
          "_N$string": "xxx",
          "_fontSize": 28,
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 19
        },
        "asset": {
          "__uuid__": "2bLy9PVO5Oyp5MOqErL8mN"
        },
        "fileId": "25+VSNCi5ITJ1vRWRK9bsg"
      },
      "_color": {
        "__type__": "cc.Color"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 42,
        "height": 40
      },
      "_anchorPoint": {
        "__type__": "cc.Vec2"
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": 100,
        "y": -10
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "score",
      "_parent": {
        "__id__": 19
      },
      "_level": 3,
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 23
          },
          "_useOriginalSize": false,
          "_string": "0",
          "_N$string": "0",
          "_fontSize": 28,
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 19
        },
        "asset": {
          "__uuid__": "2bLy9PVO5Oyp5MOqErL8mN"
        },
        "fileId": "dbGnIpsXpLyaPGHf3HQyhH"
      },
      "_color": {
        "__type__": "cc.Color"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 15.57,
        "height": 40
      },
      "_anchorPoint": {
        "__type__": "cc.Vec2"
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": 360,
        "y": -10
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "line5",
      "_parent": {
        "__id__": 2
      },
      "_children": [
        {
          "__id__": 25
        },
        {
          "__id__": 26
        },
        {
          "__id__": 27
        },
        {
          "__id__": 28
        }
      ],
      "_level": 2,
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 24
        },
        "asset": {
          "__uuid__": "2bLy9PVO5Oyp5MOqErL8mN"
        },
        "fileId": "9akxwBSnlODK56Z63JATxi"
      },
      "_opacity": 0,
      "_position": {
        "__type__": "cc.Vec3",
        "x": -180,
        "y": -120
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "rank",
      "_parent": {
        "__id__": 24
      },
      "_level": 3,
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 25
          },
          "_useOriginalSize": false,
          "_string": "5.",
          "_N$string": "5.",
          "_fontSize": 28,
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 24
        },
        "asset": {
          "__uuid__": "2bLy9PVO5Oyp5MOqErL8mN"
        },
        "fileId": "86fQtTVAxBnIp9+P9H9jcm"
      },
      "_color": {
        "__type__": "cc.Color"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 23.35,
        "height": 40
      },
      "_anchorPoint": {
        "__type__": "cc.Vec2"
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": 10,
        "y": -10
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "avatar",
      "_parent": {
        "__id__": 24
      },
      "_level": 3,
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 26
          },
          "_sizeMode": 0
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 24
        },
        "asset": {
          "__uuid__": "2bLy9PVO5Oyp5MOqErL8mN"
        },
        "fileId": "eeX2JDfIRCMKtby2g4swgu"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 30,
        "height": 30
      },
      "_anchorPoint": {
        "__type__": "cc.Vec2"
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": 40
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "name",
      "_parent": {
        "__id__": 24
      },
      "_level": 3,
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 27
          },
          "_useOriginalSize": false,
          "_string": "xxx",
          "_N$string": "xxx",
          "_fontSize": 28,
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 24
        },
        "asset": {
          "__uuid__": "2bLy9PVO5Oyp5MOqErL8mN"
        },
        "fileId": "25+VSNCi5ITJ1vRWRK9bsg"
      },
      "_color": {
        "__type__": "cc.Color"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 42,
        "height": 40
      },
      "_anchorPoint": {
        "__type__": "cc.Vec2"
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": 100,
        "y": -10
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "score",
      "_parent": {
        "__id__": 24
      },
      "_level": 3,
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 28
          },
          "_useOriginalSize": false,
          "_string": "0",
          "_N$string": "0",
          "_fontSize": 28,
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 24
        },
        "asset": {
          "__uuid__": "2bLy9PVO5Oyp5MOqErL8mN"
        },
        "fileId": "dbGnIpsXpLyaPGHf3HQyhH"
      },
      "_color": {
        "__type__": "cc.Color"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 15.57,
        "height": 40
      },
      "_anchorPoint": {
        "__type__": "cc.Vec2"
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": 360,
        "y": -10
      }
    }
  ]
];
