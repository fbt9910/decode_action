//Sat Sep 14 2024 08:04:17 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0xc41bd2 = require("crypto-js"),
  _0x360ef0 = require("got"),
  _0x5840cb = process.env.SIGN_URL ? process.env.SIGN_URL : "";
if (_0x5840cb) console.log("🈯当前使用指定sign：" + _0x5840cb + "\n");else {}
function _0x102910(_0x2540f8 = "") {
  return _0x2540f8;
}
function _0x567588(_0x24d3fb) {
  let _0xbf2c96 = [];
  for (let _0x5c5382 of _0x24d3fb.split("")) {
    let _0x54563b = _0x5c5382.charCodeAt();
    _0xbf2c96 = _0xbf2c96.concat([(_0x54563b & 128) >> 7, (_0x54563b & 64) >> 6, (_0x54563b & 32) >> 5, (_0x54563b & 16) >> 4, (_0x54563b & 8) >> 3, (_0x54563b & 4) >> 2, (_0x54563b & 2) >> 1, _0x54563b & 1]);
  }
  return _0xbf2c96;
}
function _0x305d85(_0xea93fe) {
  let _0x299f86 = Array.from({
    "length": parseInt(_0xea93fe.length / 8)
  }).map(_0x151d7b => 0);
  for (let _0x4c62ab in _0x299f86) {
    _0x299f86[_0x4c62ab] = _0xea93fe[_0x4c62ab * 8] << 7 | _0xea93fe[_0x4c62ab * 8 + 1] << 6 | _0xea93fe[_0x4c62ab * 8 + 2] << 5 | _0xea93fe[_0x4c62ab * 8 + 3] << 4 | _0xea93fe[_0x4c62ab * 8 + 4] << 3 | _0xea93fe[_0x4c62ab * 8 + 5] << 2 | _0xea93fe[_0x4c62ab * 8 + 6] << 1 | _0xea93fe[_0x4c62ab * 8 + 7];
  }
  return _0x102910(_0x299f86);
}
function _0x3e9cf7(_0xbf6f86) {
  let _0x25f24c = [55, 146, 68, 104, 165, 61, 204, 127, 187, 15, 217, 136, 238, 154, 233, 90],
    _0x577cdc = "80306f4370b39fd5630ad0529f77adb6",
    _0x2ec9bc = Array.from({
      "length": _0xbf6f86.length
    }).map(_0x103950 => 0),
    _0x1c8dfb,
    _0x43bbc7,
    _0x1f98e7,
    _0x5d312f;
  for (i in _0x2ec9bc) {
    _0x1c8dfb = _0xbf6f86[i].charCodeAt();
    _0x1f98e7 = _0x25f24c[i & 15];
    _0x5d312f = _0x577cdc[i & 7].charCodeAt();
    _0x1c8dfb = _0x1f98e7 ^ _0x1c8dfb;
    _0x1c8dfb = _0x1c8dfb ^ _0x5d312f;
    _0x1c8dfb = _0x1c8dfb + _0x1f98e7;
    _0x1f98e7 = _0x1f98e7 ^ _0x1c8dfb;
    _0x43bbc7 = _0x577cdc[i & 7].charCodeAt();
    _0x1f98e7 = _0x1f98e7 ^ _0x43bbc7;
    _0x2ec9bc[i] = _0x1f98e7 & 255;
  }
  return _0x102910(_0x2ec9bc);
}
function _0x26a0d3(_0x15d5f9) {
  let _0x439993 = [[0, 0], [1, 4], [2, 61], [3, 15], [4, 56], [5, 40], [6, 6], [7, 59], [8, 62], [9, 58], [10, 17], [11, 2], [12, 12], [13, 8], [14, 32], [15, 60], [16, 13], [17, 45], [18, 34], [19, 14], [20, 36], [21, 21], [22, 22], [23, 39], [24, 23], [25, 25], [26, 26], [27, 20], [28, 1], [29, 33], [30, 46], [31, 55], [32, 35], [33, 24], [34, 57], [35, 19], [36, 53], [37, 37], [38, 38], [39, 5], [40, 30], [41, 41], [42, 42], [43, 18], [44, 47], [45, 27], [46, 9], [47, 44], [48, 51], [49, 7], [50, 49], [51, 63], [52, 28], [53, 43], [54, 54], [55, 52], [56, 31], [57, 10], [58, 29], [59, 11], [60, 3], [61, 16], [62, 50], [63, 48]],
    _0x3496a6 = _0x567588(_0x15d5f9),
    _0x330f39 = Array.from({
      "length": _0x3496a6.length
    }).map(_0x5504a2 => 0);
  for (let _0x3deaa8 in _0x330f39) {
    _0x330f39[_0x439993[_0x3deaa8][1]] = _0x3496a6[_0x439993[_0x3deaa8][0]];
  }
  return _0x305d85(_0x330f39);
}
switch (_0x5840cb) {
  case "nb":
    const _0x180303 = {
      "nb": nb
    };
    _0xf1f6le = _0x180303;
    break;
}
function _0x513e29(_0x115472) {
  let _0x41b134 = [[0, 6, 0, 1], [1, 4, 1, 0], [2, 5, 0, 1], [3, 0, 0, 1], [4, 2, 0, 1], [5, 3, 0, 1], [6, 1, 1, 0], [7, 7, 0, 1]],
    _0x1180e2 = _0x567588(_0x115472),
    _0x53bfd5 = [0, 0, 0, 0, 0, 0, 0, 0];
  for (var _0x30993d in _0x53bfd5) {
    _0x1180e2[_0x30993d] == 0 ? _0x53bfd5[_0x41b134[_0x30993d][1]] = _0x41b134[_0x30993d][2] : _0x53bfd5[_0x41b134[_0x30993d][1]] = _0x41b134[_0x30993d][3];
  }
  return _0x305d85(_0x53bfd5);
}
function _0x139553(_0x147cc7) {
  let _0x9d424d = [];
  for (let _0x1dd74f = 0; _0x1dd74f < _0x147cc7.length; _0x1dd74f += 8) {
    let _0x3004ae = _0x147cc7.slice(_0x1dd74f, _0x1dd74f + 8);
    _0x3004ae.length == 1 ? _0x9d424d = _0x9d424d.concat(_0x513e29(_0x3004ae)) : _0x9d424d = _0x9d424d.concat(_0x26a0d3(_0x3004ae));
  }
  return _0x9d424d;
}
function _0x1fc00d(_0x266244, _0x1e6e3a, _0x3543e3) {
  let _0x5055be = [0, 1, 2];
  _0x3543e3 == 1 && (_0x5055be = [1, 2, 0]);
  _0x3543e3 == 2 && (_0x5055be = [2, 0, 1]);
  let _0x4464ec = _0x5055be[_0x1e6e3a];
  if (_0x4464ec == 0) return _0x139553(_0x266244);
  if (_0x4464ec == 2) return _0x3e9cf7(_0x266244);
}
function _0x3c12ab(_0x4e3389) {
  let _0x5a949a = "",
    _0x529b40 = [],
    _0x2f4d42 = "";
  const _0x20bfb6 = "KLMNOPQRSTABCDEFGHIJUVWXYZabcdopqrstuvwxefghijklmnyz0123456789+/";
  for (let _0x43db03 = 0; _0x43db03 < _0x4e3389.length; _0x43db03++) {
    _0x5a949a += ("00000000" + _0x4e3389.charCodeAt(_0x43db03).toString(2)).slice(-8);
  }
  for (let _0x11f980 = 0; _0x11f980 < _0x5a949a.length; _0x11f980 += 6) {
    _0x529b40.push("000000" + _0x5a949a.substr(_0x11f980, 6));
  }
  for (let _0x18b694 = 0; _0x18b694 < _0x529b40.length; _0x18b694++) {
    _0x2f4d42 += _0x20bfb6[parseInt(_0x529b40[_0x18b694], 2)];
  }
  if (_0x2f4d42.length % 4 == 2) _0x2f4d42 += "==";else _0x2f4d42.length % 4 == 3 && (_0x2f4d42 += "=");
  return _0x2f4d42;
}
function _0x169d63(_0x1aa667) {
  let _0x40762a = {
    "hdid": "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
    "ts": Date.now(),
    "ridx": -1,
    "cipher": {
      "area": "CP8mXzLpCK==",
      "d_model": "UwVubWvBDNLJ",
      "wifiBssid": "dW5hbw93bq==",
      "osVersion": "CJS=",
      "d_brand": "WQvrb21f",
      "screen": "CtS3DsenCNqm",
      "uuid": _0x3c12ab(_0x1aa667),
      "aid": _0x3c12ab(_0x1aa667),
      "openudid": _0x3c12ab(_0x1aa667)
    },
    "ciphertype": 5,
    "version": "1.2.0",
    "appname": "com.jingdong.app.mall"
  };
  return encodeURIComponent(JSON.stringify(_0x40762a));
}
function _0x28f2ff() {
  var _0x54ef4c = new Date().getTime();
  typeof performance !== "undefined" && typeof performance.now === "function" && (_0x54ef4c += performance.now());
  var _0x1ba3e9 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (_0xaeb4bf) {
    var _0x509987 = (_0x54ef4c + Math.random() * 16) % 16 | 0;
    return _0x54ef4c = Math.floor(_0x54ef4c / 16), (_0xaeb4bf == "x" ? _0x509987 : _0x509987 & 3 | 8).toString(16);
  });
  return _0x1ba3e9;
}
async function _0x137505(_0x2ba192, _0x23c5e1, _0x18e184, _0x54c8e1) {
  if (_0x5840cb != "" && _0x54c8e1 == undefined) {
    let _0x531314 = await _0x360ef0.post(_0x5840cb, {
      "json": {
        "fn": _0x2ba192,
        "body": _0x23c5e1
      },
      "retry": {
        "limit": 1,
        "methods": ["GET", "POST"]
      },
      "hooks": {
        "beforeRetry": [(_0x6381c8, _0x3b54bd) => {
          if (_0x3b54bd) {}
        }]
      },
      "timeout": {
        "request": 30000
      }
    }).json().catch(_0x13b00e => {
      return console.log(_0x13b00e.message), console.log("指定sign获取失败,请检查！\n"), "";
    });
    if (_0x531314?.["body"]) return _0x531314?.["body"];else {
      if (_0x531314?.["data"]?.["convertUrl"]) {
        return _0x531314?.["data"]?.["convertUrl"];
      }
    }
  } else {
    let _0xfc477 = "android",
      _0x288068 = _0x18e184 || "11.0.2",
      _0x56a522 = [[0, 2], [1, 1], [2, 0]],
      _0x58e9f4,
      _0x2bd035;
    [_0x58e9f4, _0x2bd035] = _0x56a522[Math.floor(Math.random() * _0x56a522.length)];
    let _0x1f3f0b = "1" + _0x58e9f4 + _0x2bd035,
      _0x5da982 = new Date().getTime();
    _0x23c5e1 = typeof _0x23c5e1 == "string" ? _0x23c5e1 : JSON.stringify(_0x23c5e1);
    let _0x1f2d5f = new Buffer.from(_0x23c5e1).toString("latin1"),
      _0x4c1d44 = _0x28f2ff(),
      _0x4edafe = _0x169d63(_0x4c1d44),
      _0xd90e04 = "functionId=" + _0x2ba192 + "&body=" + _0x1f2d5f + "&uuid=" + _0x4c1d44 + "&client=" + _0xfc477 + "&clientVersion=" + _0x288068 + "&st=" + _0x5da982 + "&sv=" + _0x1f3f0b,
      _0x47df81 = _0x1fc00d(_0xd90e04, _0x58e9f4, _0x2bd035),
      _0x140e3d = new Buffer.from(_0x47df81).toString("base64"),
      _0x1a9e89 = _0xc41bd2.MD5(_0x140e3d).toString();
    return "clientVersion=" + _0x288068 + "&client=" + _0xfc477 + "&networkType=wifi&ef=1&ep=" + _0x4edafe + "&st=" + _0x5da982 + "&sign=" + _0x1a9e89 + "&sv=" + _0x1f3f0b + "&body=" + encodeURIComponent(_0x23c5e1);
  }
}
async function _0x59d3d7(_0x452d21, _0x412332, _0x31e062) {
  let _0x53a717 = "",
    _0x3e5cf1 = {
      "fn": _0x452d21,
      "body": _0x412332
    };
  return _0x31e062 && (_0x3e5cf1.ver = _0x31e062), _0x53a717 = await _0x360ef0.post("https://6dy.jdpro.site/sign", {
    "json": _0x3e5cf1,
    "retry": {
      "limit": 1,
      "methods": ["GET", "POST"]
    },
    "hooks": {
      "beforeRetry": [(_0x362a37, _0xcbbac9) => {
        if (_0xcbbac9) {}
      }]
    },
    "timeout": {
      "request": 30000
    }
  }).json().catch(async _0x2cabae => {
    console.log("获取失败\n");
  }), _0x53a717.body;
}
async function _0x14206b(_0x30431d, _0x26df88) {
  let _0x59ee1e = await _0x360ef0.post("http://api.nolanstore.cc/sign", {
    "json": {
      "fn": _0x30431d,
      "body": _0x26df88
    },
    "retry": {
      "limit": 1,
      "methods": ["GET", "POST"]
    },
    "hooks": {
      "beforeRetry": [(_0x410e05, _0x772ce3) => {
        if (_0x772ce3) {}
      }]
    },
    "timeout": {
      "request": 30000
    }
  }).json().catch(_0x13df6a => {
    console.log(_0x13df6a.message);
    console.log("sign获取失败,请检查网络！\n");
  });
  return _0x59ee1e.body;
}
module.exports = _0x137505;