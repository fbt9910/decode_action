//Fri Jul 12 2024 23:35:30 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const CryptoJS = require("crypto-js"),
  querystring = require("querystring"),
  common = require("./jdCommon"),
  wuxianDefense = function () {
    const Il1iIliI = [],
      iiIl1I1 = ["/wxScratchActive/start", "/wxPointDrawActivity/start", "/wxPointBlindBox/start", "/wxGashaponActive/start", "/wxDollGrabbing/start", "/wxDrawActivity/start", "/wx/completeInfoActivity/save", "/activity/daily/wx/grabGift", "/sign/wx/signUp", "/sign/sevenDay/wx/signUp", "/wxTeam/saveCaptain", "/wxTeam/saveMember"],
      iiI1IiI = [...Il1iIliI, ...iiIl1I1],
      lIlll1li = ["B6dB3QqGZP1lKNICTaiAeNJSHKNepO5GGgtL6FUceqSlpFZCdx2SZ5MPPbzrgy91HeR0dnJazcMrvMgPF7bhFrfsGaApJKk4JohEEhoJ4kKJpAaGsfrFhb7FPgMvrMczaJnd0ReH19ygrzbPPM5ZS2xdCZFplSqecUF6LtgGG5OpeNKHSJNeAiaTCINKl1PZGqQ3Bd6B", "EUhzJoyKP7VydtpyBwNUGU2tqzI0QB0LIpQ10Fk3hX2ZcPoGRpACqmzcTQbKd98i3U7raFz2rMl2kys0ODgtAh22E3i57wmh38RbbR83hmw75i3E22hAtgDO0syk2lMr2zFar7U3i89dKbQTczmqCApRGoPcZ2Xh3kF01QpIL0BQ0Izqt2UGUNwByptdyV7PKyoJzhUE", "xexcHoyVwOs5TYTQVvU0iXn56ryKVdWedLTpq3KEKmbUHfwzuZjIpZOPVXMEappFhjdqwtp1bBrWaRBCfPFwCq2W8SsyvwqZ6sIGGIs6ZqwvysS8W2qCwFPfCBRaWrBb1ptwqdjhFppaEMXVPOZpIjZuzwfHUbmKEK3qpTLdeWdVKyr65nXi0UvVQTYT5sOwVyoHcxex", "2Llnegc5i4flqd4HZPFK210yh61boBxRSdnNVMeudKimx92Qi4aPuHP12HmEImbWrXjLgBGqy1bSnKvLhqMqhknyuse4nFoeLTkJJkTLeoFn4esuynkhqMqhLvKnSb1yqGBgLjXrWbmIEmH21PHuPa4iQ29xmiKdueMVNndSRxBob16hy012KFPZH4dqlf4i5cgenlL2", "dZzoMZF6xtt3voTFDbPzEZ7GeM8t7uY05d4K4xfhtdxELh96dDRB4oRYA2smET5dy1dafGkXOz2V7tNOVi0vSqfuhI99IKprVK6QQ6KVrpKI99IhufqSv0iVONt7V2zOXkGfad1yd5TEms2AYRo4BRDd69hLExdthfx4K4d50Yu7t8MeG7ZEzPbDFTov3ttx6FZMozZd", "SNYr3bWMtQulWZO2FEwuhSFp3EXPR1TujPRJwUFlxBh9Pvf2MeTEpR7a3dU6e9rNUMyBh2osDdK4Vdm4gZ0XcRCoHZPi2jiXT2dCCd2TXij2iPZHoCRcX0Zg4mdV4KdDso2hByMUNr9e6Ud3a7RpETeM2fvP9hBxlFUwJRPjuT1RPXE3pFShuwEF2OZWluQtMWb3rYNS", "4viQ2FrYHcrH44gqvPLo6KtiFu56AW1eXbDBZrBepzdLKE33Ey4TwFERnkVLnbHAXbKqAi0HFP9Eu7yg8WNlI7q2dvXGGiPaMbrBBrbMaPiGGXvd2q7IlNW8gy7uE9PFH0iAqKbXAHbnLVknREFwT4yE33EKLdzpeBrZBDbXe1WA65uFitK6oLPvqg44HrcHYrF2Qiv4", "0VIoSHBNVAW8De7NquFyEUm0o9xNnQJGn2OR1yOK9djWALhyP3a1XoQEwTnXuzypRuwsaLPUlertksOY6LYmnbQmPgdDQRXXKdKooKdKXXRQDdgPmQbnmYL6YOsktrelUPLaswuRpyzuXnTwEQoX1a3PyhLAWjd9KOy1RO2nGJQnNx9o0mUEyFuqN7eD8WAVNBHSoIV0", "fdJPBiTra9E0qg2HJrobeEC2SkOfSzbw6nG5J5ACx42GQDBsCyGfxNlHHYhl7EmkdvYaKAXUVXSKcTT1KhyYaj9Q4YtyhnOA7cLrrLc7AOnhytY4Q9jaYyhK1TTcKSXVUXAKaYvdkmE7lhYHHlNxfGyCsBDQG24xCA5J5Gn6wbzSfOkS2CEeborJH2gq0E9arTiBPJdf", "kLOA93PyUOX3QdlLuZ9JgNq1peyIITAQSnKzuLBZ2NthOSseAJMGCecvSLVKAww61Y31hJ4l7kAOcjLmtqQNJlNyJb5yu9d9vqWUUWqv9d9uy5bJyNlJNQqtmLjcOAk7l4Jh13Y16wwAKVLSvceCGMJAesSOhtN2ZBLuzKnSQATIIyep1qNgJ9ZuLldQ3XOUyP39AOLk"];
    function iiiiIi1(IIlI1iII, lI1Il11I, IllilIii) {
      let ill1lIiI = Date.now() + parseInt(IllilIii);
      if (typeof IIlI1iII !== "object") {
        IIlI1iII = JSON.parse(IIlI1iII);
      }
      IIlI1iII.nowTime = ill1lIiI;
      let i1I1ll1i = lI1Il11I + ill1lIiI;
      const {
          keyBytes: liilIi,
          ivBytes: li1111I1
        } = liiIll1i(i1I1ll1i),
        l1li1Ii = CryptoJS.AES.encrypt(JSON.stringify(IIlI1iII), liilIi, {
          "iv": li1111I1,
          "mode": CryptoJS.mode.ECB,
          "padding": CryptoJS.pad.Pkcs7
        });
      return l1li1Ii.toString();
    }
    function i1Il1i11(iIll1lli, ilIilllI, IIll1lll) {
      let Il1I1i1i = Date.now() + parseInt(IIll1lll),
        ii11IlII = ilIilllI + Il1I1i1i;
      const {
          keyBytes: IiIlii11,
          ivBytes: liIl11iI
        } = liiIll1i(ii11IlII),
        illIIl1I = CryptoJS.AES.decrypt(iIll1lli, IiIlii11, {
          "iv": liIl11iI,
          "mode": CryptoJS.mode.ECB,
          "padding": CryptoJS.pad.Pkcs7
        }),
        i11II11 = CryptoJS.enc.Utf8.stringify(illIIl1I).toString();
      try {
        return JSON.parse(i11II11);
      } catch {
        return i11II11;
      }
    }
    function iI111iI(Il1i11ii) {
      const lliIiI1 = Object.fromEntries(iiI1IiI.map(li1i1I1i => [li1i1I1i, true]));
      return lliIiI1[Il1i11ii] !== undefined;
    }
    function lill1il1(ill111) {
      ill111 = ill111.split("").reverse().join("");
      const I1Iiiii1 = new Uint8Array(12),
        liI1i1ll = new TextEncoder().encode(ill111);
      for (let III1i1l = 0; III1i1l < liI1i1ll.length; III1i1l += 2) {
        let lilIIll1 = liI1i1ll[III1i1l] << 5 | liI1i1ll[III1i1l + 1] & 255;
        lilIIll1 %= 63;
        I1Iiiii1[III1i1l >> 1] = lilIIll1;
      }
      let lilll1ii = "";
      for (let lIIIIil1 = 0; lIIIIil1 < I1Iiiii1.length; lIIIIil1++) {
        lilll1ii += (I1Iiiii1[lIIIIil1] + 256).toString(2).slice(1);
      }
      let l1Iill1I = "",
        iil111II = "";
      for (let ilI1Ilil = 0; ilI1Ilil < 16; ilI1Ilil++) {
        if (ilI1Ilil !== 0) {
          const Ii11i1l1 = ilI1Ilil * 6,
            I1Il11Ii = lilll1ii.substring(Ii11i1l1, Ii11i1l1 + 6);
          let i1lI11 = parseInt(I1Il11Ii, 2);
          const ilil1l1l = iil111II.split("");
          for (let iIIliIlI = 0; iIIliIlI < ilil1l1l.length; iIIliIlI++) {
            if (ilil1l1l[iIIliIlI] === "1") {
              i1lI11 = (i1lI11 >> 6 - iIIliIlI | i1lI11 << iIIliIlI) & 63;
            }
          }
          iil111II = (i1lI11 & 63).toString(2).padStart(6, "0");
        } else iil111II = lilll1ii.substring(0, 6);
        l1Iill1I += iil111II;
      }
      for (let llIl1ili = 0; llIl1ili < 12; llIl1ili++) {
        const iiii1111 = llIl1ili * 8;
        I1Iiiii1[llIl1ili] = parseInt(l1Iill1I.substring(iiii1111, iiii1111 + 8), 2);
      }
      return btoa(String.fromCharCode.apply(null, I1Iiiii1));
    }
    function liiIll1i(I1i1IiII) {
      const iliillli = I1i1IiII.substring(0, I1i1IiII.length - 5);
      let IiIIiil = "";
      for (let IliIiIl1 = 0; IliIiIl1 < iliillli.length; IliIiIl1++) {
        let lliIIi1 = iliillli.charCodeAt(IliIiIl1),
          iIiilI1I = lliIIi1 % 10,
          IIili11l = lIlll1li[iIiilI1I][IliIiIl1];
        IiIIiil += IIili11l;
      }
      var liiIl1 = IiIIiil.length,
        I1lI1lil = Math.floor(liiIl1 / 24),
        lilli11i = "";
      for (var i1II1ilI = 0; i1II1ilI < 24; i1II1ilI++) {
        var lIiiIIi1 = (i1II1ilI + 1) * I1lI1lil;
        i1II1ilI === 23 && (lIiiIIi1 = liiIl1);
        var illlI1iI = IiIIiil.substring(i1II1ilI * I1lI1lil, lIiiIIi1),
          I1ll1I1 = [];
        for (var i1lIlIIi = 0; i1lIlIIi < illlI1iI.length; i1lIlIIi++) {
          I1ll1I1.push(illlI1iI.charCodeAt(i1lIlIIi));
        }
        var l1Iil11l = I1ll1I1.reduce(function (ll1l111l, il1iIIiI) {
            return ll1l111l + il1iIIiI;
          }, 0),
          ill1iIil = Math.floor(l1Iil11l / I1ll1I1.length);
        lilli11i += String.fromCharCode(ill1iIil);
      }
      IiIIiil = lilli11i;
      const Ii1l1Ii = lill1il1(IiIIiil),
        liI1i1l = CryptoJS.enc.Utf8.parse(Ii1l1Ii),
        I1IiiIll = CryptoJS.enc.Utf8.parse("");
      return {
        "keyBytes": liI1i1l,
        "ivBytes": I1IiiIll
      };
    }
    const i1I111Ii = function () {
      const lilIlii = CryptoJS.enc.Utf8.parse("Hd5W5ONsYKmGm9QA"),
        i1Ii1i = CryptoJS.enc.Utf8.parse("2JjUvJEAsA2Yog==");
      function I1Ii1Iil(lII1Iii) {
        if (typeof lII1Iii !== "string") {
          lII1Iii = JSON.stringify(lII1Iii);
        }
        const lli1i1I1 = CryptoJS.enc.Utf8.parse(lII1Iii),
          IliIliii = CryptoJS.AES.encrypt(lli1i1I1, lilIlii, {
            "iv": i1Ii1i,
            "mode": CryptoJS.mode.CBC,
            "padding": CryptoJS.pad.Pkcs7
          });
        return CryptoJS.enc.Base64.stringify(IliIliii.ciphertext);
      }
      function lIi1Ill1(Ii1iIIi1) {
        const I1I1Ill = CryptoJS.enc.Base64.parse(Ii1iIIi1),
          lIlIIiii = CryptoJS.enc.Base64.stringify(I1I1Ill),
          IIIIiili = CryptoJS.AES.decrypt(lIlIIiii, lilIlii, {
            "iv": i1Ii1i,
            "mode": CryptoJS.mode.CBC,
            "padding": CryptoJS.pad.Pkcs7
          }),
          III1IIlI = CryptoJS.enc.Utf8.stringify(IIIIiili).toString();
        try {
          return JSON.parse(III1IIlI);
        } catch {
          return III1IIlI;
        }
      }
      return {
        "encrypt": I1Ii1Iil,
        "decrypt": lIi1Ill1
      };
    }();
    return {
      "encrypt": iiiiIi1,
      "decrypt": i1Il1i11,
      "isDefenseApi": iI111iI,
      "interactionV2": i1I111Ii
    };
  }();
async function jsTk(ill1Iili, lIi1III1, l1li1iii = {}, i11l111 = {}) {
  let i1IIiIl = {
    "eid": "",
    "jsToken": "",
    "fp": ""
  };
  function i1iiII11(Ii11l1ii) {
    Ii11l1ii = JSON.stringify(Ii11l1ii);
    Ii11l1ii = encodeURIComponent(Ii11l1ii);
    var IiIIIIi = "",
      iIiilIl = 0;
    do {
      var IIiI1I = Ii11l1ii.charCodeAt(iIiilIl++);
      var liiill1I = Ii11l1ii.charCodeAt(iIiilIl++);
      var liIliiIi = Ii11l1ii.charCodeAt(iIiilIl++);
      var ilIiIill = IIiI1I >> 2;
      IIiI1I = (IIiI1I & 3) << 4 | liiill1I >> 4;
      var iilI11Il = (liiill1I & 15) << 2 | liIliiIi >> 6;
      var lil1liII = liIliiIi & 63;
      isNaN(liiill1I) ? iilI11Il = lil1liII = 64 : isNaN(liIliiIi) && (lil1liII = 64);
      IiIIIIi = IiIIIIi + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(ilIiIill) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(IIiI1I) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(iilI11Il) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(lil1liII);
    } while (iIiilIl < Ii11l1ii.length);
    return IiIIIIi + "/";
  }
  try {
    const I11lI111 = HASH.hash128([ill1Iili.substring(0, 90), "zh-CN", "applewebkit_chrome", "605.1.15", "NA", "NA", 32, "932x430", -480, "sessionStorageKey", "localStorageKey", "indexedDbKey", "openDatabase", "NA", "iPhone", 10, "NA", "", null, null].join("~~~"), 31);
    i1IIiIl.fp = I11lI111;
    const ii1l1lli = i1iiII11(Object.assign({}, {
        "pin": "",
        "oid": "",
        "bizId": "jd-babelh5",
        "fc": "",
        "mode": "strict",
        "p": /^https:/.test(lIi1III1) ? "s" : "h",
        "fp": I11lI111,
        "ctype": 1,
        "v": "3.2.1.1",
        "f": "3",
        "o": lIi1III1.replace(/^https?:\/\//, ""),
        "qs": "",
        "jsTk": "",
        "qi": "",
        "stk": ""
      }, l1li1iii)),
      i1liilil = i1iiII11(Object.assign({}, {
        "ts": {
          "deviceTime": Date.now(),
          "deviceEndTime": Date.now() + 20
        },
        "ca": {
          "tdHash": ""
        },
        "m": {
          "compatMode": "CSS1Compat"
        },
        "fo": ["Bauhaus 93", "Chalkduster", "Impact", "Menlo", "Papyrus", "Rockwell"],
        "n": {
          "standalone": false,
          "hardwareConcurrency": 4,
          "webdriver": false,
          "maxTouchPoints": 5,
          "cookieEnabled": true,
          "appCodeName": "Mozilla",
          "appName": "Netscape",
          "appVersion": /\/(.+)/g.exec(ill1Iili) && /\/(.+)/g.exec(ill1Iili)[1] || ill1Iili,
          "platform": "iPhone",
          "product": "Gecko",
          "productSub": "20030107",
          "userAgent": ill1Iili,
          "vendor": "Apple Computer, Inc.",
          "vendorSub": "",
          "language": "zh-CN",
          "onLine": true,
          "pdfViewerEnabled": true,
          "javaEnabled": false,
          "enumerationOrder": ["sendBeacon", "standalone", "hardwareConcurrency", "clipboard", "audioSession", "credentials", "geolocation", "mediaCapabilities", "mediaSession", "mediaDevices", "permissions", "wakeLock", "locks", "webdriver", "maxTouchPoints", "userActivation", "cookieEnabled", "appCodeName", "appName", "appVersion", "platform", "product", "productSub", "userAgent", "vendor", "vendorSub", "language", "languages", "onLine", "plugins", "mimeTypes", "pdfViewerEnabled", "storage", "requestMediaKeySystemAccess", "getGamepads", "javaEnabled", "canShare", "share"]
        },
        "p": [],
        "w": {
          "devicePixelRatio": 1,
          "screenTop": 0,
          "screenLeft": 0
        },
        "s": {
          "availHeight": 844,
          "availWidth": 390,
          "colorDepth": 24,
          "height": 844,
          "width": 390,
          "pixelDepth": 24
        },
        "sc": {
          "ActiveBorder": "rgb(118, 118, 118)",
          "ActiveCaption": "rgb(0, 0, 0)",
          "AppWorkspace": "rgb(255, 255, 255)",
          "Background": "rgb(255, 255, 255)",
          "ButtonFace": "rgb(239, 239, 239)",
          "ButtonHighlight": "rgb(239, 239, 239)",
          "ButtonShadow": "rgb(239, 239, 239)",
          "ButtonText": "rgb(0, 0, 0)",
          "CaptionText": "rgb(0, 0, 0)",
          "GrayText": "rgb(128, 128, 128)",
          "Highlight": "rgba(51, 181, 229, 0.4)",
          "HighlightText": "rgb(255, 255, 255)",
          "InactiveBorder": "rgb(118, 118, 118)",
          "InactiveCaption": "rgb(255, 255, 255)",
          "InactiveCaptionText": "rgb(128, 128, 128)",
          "InfoBackground": "rgb(255, 255, 255)",
          "InfoText": "rgb(0, 0, 0)",
          "Menu": "rgb(255, 255, 255)",
          "MenuText": "rgb(0, 0, 0)",
          "Scrollbar": "rgb(255, 255, 255)",
          "ThreeDDarkShadow": "rgb(118, 118, 118)",
          "ThreeDFace": "rgb(239, 239, 239)",
          "ThreeDHighlight": "rgb(118, 118, 118)",
          "ThreeDLightShadow": "rgb(118, 118, 118)",
          "ThreeDShadow": "rgb(118, 118, 118)",
          "Window": "rgb(255, 255, 255)",
          "WindowFrame": "rgb(118, 118, 118)",
          "WindowText": "rgb(0, 0, 0)"
        },
        "ss": {
          "cookie": true,
          "localStorage": true,
          "sessionStorage": true,
          "globalStorage": false,
          "indexedDB": true
        },
        "tz": -480,
        "lil": "",
        "wil": ""
      }, i11l111)),
      li1Illll = {
        "url": "https://gia.jd.com/jsTk.do",
        "method": "POST",
        "headers": {
          "Accept": "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,en-GB;q=0.6",
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          "Connection": "keep-alive",
          "Host": "gia.jd.com",
          "Origin": common.parseUrl(lIi1III1)?.["origin"] || "https://pro.m.jd.com",
          "Referer": lIi1III1,
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-site",
          "User-Agent": ill1Iili
        },
        "params": {
          "a": ii1l1lli
        },
        "data": {
          "d": i1liilil
        },
        "proxy": null,
        "timeout": 60000,
        "debug": false
      };
    let i111il11 = 0,
      IIiliIli = null;
    const l1lilIi1 = 1;
    while (i111il11 < l1lilIi1) {
      const IiiI1ll = await common.request(li1Illll);
      if (!IiiI1ll.success) {
        IIiliIli = "❌ jsTk 请求失败 ➜ " + IiiI1ll.error;
        i111il11++;
        continue;
      }
      if (!IiiI1ll.data) {
        IIiliIli = "🚫 jsTk 请求失败 ➜ 无响应数据";
        i111il11++;
        continue;
      }
      try {
        const llllIlI = IiiI1ll.data;
        if (llllIlI?.["data"]?.["eid"] && llllIlI?.["data"]?.["token"]) return i1IIiIl.eid = llllIlI.data.eid, i1IIiIl.jsToken = llllIlI.data.token, i1IIiIl;
        IIiliIli = "🚫 jsTk 请求异常 ➜ " + JSON.stringify(llllIlI);
      } catch (IlIlI1Il) {
        IIiliIli = "❌ jsTk 在处理接口响应时遇到了错误 ➜ " + (IlIlI1Il.message || IlIlI1Il);
      }
      i111il11++;
    }
    if (i111il11 >= l1lilIi1) {
      console.log(IIiliIli);
    }
  } catch (lliil1) {
    console.log("❌ 在处理 jsTk 时遇到了错误 ➜ " + (lliil1.message || lliil1));
  }
  return i1IIiIl;
}
function getJdEnvInfo(iI11iiIl, iII1l1iI) {
  function I1ill11i() {
    try {
      for (var ilIIillI = [], IiIll1I1 = 0; 32 > IiIll1I1; IiIll1I1++) ilIIillI[IiIll1I1] = "0123456789abcdef".charAt(Math.floor(16 * Math.random()));
      ilIIillI[14] = "4";
      ilIIillI[19] = "0123456789abcdef".charAt(ilIIillI[19] & 3 | 8);
      ilIIillI[8] = ilIIillI[13] = ilIIillI[18] = ilIIillI[23];
      return ilIIillI.join("");
    } catch (IiI1II1) {
      return "";
    }
  }
  try {
    const lllIllII = new URL(iII1l1iI),
      ill1Ili = lllIllII.pathname.slice(0, lllIllII.pathname.lastIndexOf("/") + 1);
    return {
      "version": "1.0.0",
      "data": common.Base64.encode(JSON.stringify({
        "userAgent": iI11iiIl,
        "url": lllIllII.hostname.concat(ill1Ili),
        "urlQStr": lllIllII.search.slice(1),
        "language": "zh-CN",
        "browser": "applewebkit_chrome",
        "browserVersion": null,
        "os": "NA",
        "osVersion": "NA",
        "screenResolution": "932x430",
        "timezoneOffset": -8,
        "sessionStorage": "true",
        "localStorage": "true",
        "indexedDb": "true",
        "openDatabase": "false",
        "hardwareConcurrency": 4,
        "doNotTrack": "NA",
        "platform": "iPhone",
        "canvasFp": I1ill11i(),
        "webglFp": "",
        "fp": HASH.hash128([iI11iiIl.substring(0, 90), "zh-CN", "applewebkit_chrome", "605.1.15", "NA", "NA", 32, "932x430", -480, "sessionStorageKey", "localStorageKey", "indexedDbKey", "openDatabase", "NA", "iPhone", 10, "NA", "", null, null].join("~~~"), 31),
        "randomId": I1ill11i()
      }), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=")
    };
  } catch (ill1lIIi) {
    return null;
  }
}
class H5st {
  constructor() {
    this._defaultVersion = "4.7";
    this._supportVersions = ["3.1", "4.1", "4.2", "4.3", "4.4", "4.7"];
    this._keyCharsetMap = {
      "algo": "wm0!@w-s#ll1flo(",
      "algo4_7": "(olf1ll#s-w@!0mw",
      3.1: "wm0!@w_s#ll1flo(",
      4.1: "HL4|FW#Chc3#q?0)",
      4.2: "DNiHi703B0&17hh1",
      4.3: "&d74&yWoV.EYbWbZ",
      4.4: "r1T.6Vinpb.k+/a)",
      4.7: "X[FMV04Nfvd?Y6M_"
    };
    this._keyMap = {};
    for (const llllilil in this._keyCharsetMap) {
      this._keyMap[llllilil] = CryptoJS.enc.Utf8.parse(this._keyCharsetMap[llllilil]);
    }
    this._iv = CryptoJS.enc.Utf8.parse("0102030405060708");
    this._fvMap = {
      3.1: "v3.2.0",
      4.1: "v0.1.6",
      4.2: "h5_npm_v4.2.0",
      4.3: "h5_file_v4.3.3",
      4.4: "h5_file_v4.4.0",
      4.7: "h5_file_v4.7.4"
    };
    this._timePaddingMap = {
      3.1: "",
      4.1: "04",
      4.2: "74",
      4.3: "22",
      4.4: "88",
      4.7: "47"
    };
    this._genLocalTKCipherMap = {
      4.7: {
        "secret1": "4*iK&33Z|+6)",
        "prefix": "FX",
        "secret2": "zR>U5mz40W99&8sg"
      }
    };
    this._genAlgoSuffixStrMap = {
      4.7: "Mp(2C1"
    };
    this._useAlgoTokenCache = true;
    this._useLocalTKAlgo = true;
    this._tokenStorageMap = Object.fromEntries(this._supportVersions.map(ill1iIi => [ill1iIi, {}]));
    this._genAlgoMethodStorageMap = Object.fromEntries(this._supportVersions.map(Iii1illI => [Iii1illI, {}]));
    this._fpMap = new Map();
    this._latestAppVersionData = {
      "build": "169427",
      "version": "13.1.3"
    };
    this._latestIOSVersion = "17.5.1";
    this._algorithm4_7 = {
      "enc": CryptoJS.enc
    };
    const l1liIi1 = ["MD5", "SHA1", "SHA256", "SHA512"],
      IlIil11 = ["HmacMD5", "HmacSHA1", "HmacSHA256", "HmacSHA512"];
    let IilllIII = "7n5<G*",
      iIlIllil = 5;
    for (let ilii1lIl of l1liIi1) {
      this._algorithm4_7[ilii1lIl] = function (l1lii111) {
        return CryptoJS[ilii1lIl](l1lii111 + IilllIII);
      };
    }
    for (let i1Ii1II of IlIil11) {
      this._algorithm4_7[i1Ii1II] = function (i11l1lil, iiIl1iI1) {
        return CryptoJS[i1Ii1II](i11l1lil + IilllIII, iiIl1iI1.slice(0, iIlIllil).split("").map(i1ii1iiI => String.fromCharCode(158 - i1ii1iiI.charCodeAt(0))).reverse().join("") + iiIl1iI1.slice(iIlIllil));
      };
    }
    this._algorithm4_7.enc.Base64.encode = function (I1111Iil) {
      let llllll = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split("").filter(Boolean),
        iIliiIl = "WVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcbaZYX".split("").filter(Boolean),
        li1Iii = Object.fromEntries(llllll.map((I1111, iiiilII) => [I1111, iIliiIl[iiiilII]])),
        i11lI1II = I1111Iil.ciphertext.toString(),
        li1iI11l = 3 - I1111Iil.ciphertext.sigBytes % 3;
      for (let liil1I1l of Array(li1iI11l)) {
        i11lI1II += "0" + li1iI11l;
      }
      let llli1I1l = new Buffer.from(i11lI1II, "hex").toString("Base64").split("").reverse().join("");
      return llli1I1l.split("").map(llill1l => li1Iii[llill1l] || llill1l).join("").replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
    };
    this._algorithmMap = {
      4.7: this._algorithm4_7
    };
    this.ADLER32 = this.load_module_ADLER32();
  }
  async ["getH5st"](iiI1lII) {
    let llIl1Ii = Object.assign({}, iiI1lII, {
      "h5st": "",
      "params": "",
      "paramsData": {}
    });
    try {
      if (!(typeof iiI1lII === "object" && iiI1lII !== null)) return console.log("❌ getH5st 传入参数有误"), llIl1Ii;else {
        const II1i1Ill = ["appId", "appid", "body", "functionId"],
          iilliiIl = II1i1Ill.filter(llliiI1 => !iiI1lII[llliiI1]);
        if (iilliiIl.length > 0) return console.log("❌ getH5st 传入参数有误，缺少必要参数：" + iilliiIl.join(", ")), llIl1Ii;
      }
      if (!this._supportVersions.includes(iiI1lII?.["version"])) {
        iiI1lII.version = this._defaultVersion;
      }
      const iii11lli = this._initParams(iiI1lII),
        {
          appid: I11ll1l1,
          body: I1Illli,
          client: IIi1ll1l,
          clientVersion: lIIil1Il,
          functionId: IlIi1
        } = iiI1lII;
      let II1lll1I = this._tokenStorageMap[iii11lli.version][iii11lli.appId],
        Il1i1iI = this._genAlgoMethodStorageMap[iii11lli.version][iii11lli.appId];
      if (!II1lll1I || !Il1i1iI) {
        let iiiiIill = false;
        switch (iii11lli.version) {
          case "4.7":
            iiiiIill = true;
            break;
        }
        if (this._useLocalTKAlgo && iiiiIill) {
          II1lll1I = this._genLocalTK(iii11lli.fp, this._genLocalTKCipherMap[iii11lli.version]);
          const li11iII1 = this._genAlgo,
            IIIIIlIl = this._genAlgoSuffixStrMap[iii11lli.version];
          Il1i1iI = function (...IliIl11I) {
            return li11iII1(...IliIl11I, IIIIIlIl);
          };
        } else {
          const iiIlIIi1 = await this._requestAlgorithm(iii11lli);
          II1lll1I = iiIlIIi1.token;
          Il1i1iI = new Function("return ".concat(iiIlIIi1.algo))();
        }
        this._useAlgoTokenCache && (this._tokenStorageMap[iii11lli.version][iii11lli.appId] = II1lll1I, this._genAlgoMethodStorageMap[iii11lli.version][iii11lli.appId] = Il1i1iI);
      }
      if (!II1lll1I && !Il1i1iI) return llIl1Ii;
      const ilI1l1Ii = {
        "appid": I11ll1l1,
        "body": I1Illli,
        "client": IIi1ll1l,
        "clientVersion": lIIil1Il,
        "functionId": IlIi1
      };
      iiI1lII?.["t"] && typeof iiI1lII.t === "boolean" ? (iiI1lII.t = Date.now(), ilI1l1Ii.t = iiI1lII.t) : iiI1lII.t = "";
      if (!ilI1l1Ii.client) delete ilI1l1Ii.client;
      if (!ilI1l1Ii.clientVersion) delete ilI1l1Ii.clientVersion;
      const ili1lll = this._makeSign(ilI1l1Ii, II1lll1I, Il1i1iI, iii11lli),
        il1IiiI = {
          "functionId": IlIi1,
          "body": JSON.stringify(I1Illli),
          "t": "",
          "appid": I11ll1l1,
          "client": "",
          "clientVersion": "",
          "h5st": ili1lll?.["h5st"] || ""
        };
      for (const lll1II1l of ["t", "client", "clientVersion"]) {
        if (iiI1lII[lll1II1l]) {
          il1IiiI[lll1II1l] = iiI1lII[lll1II1l];
        } else {
          delete il1IiiI[lll1II1l];
        }
      }
      Object.assign(llIl1Ii, {
        "h5st": ili1lll?.["h5st"] || "",
        "params": querystring.stringify(il1IiiI),
        "paramsData": il1IiiI
      });
    } catch (IIlIlli1) {
      console.log("❌ 在生成 H5 签名时遇到了错误 " + (IIlIlli1.message || IIlIlli1));
    }
    return llIl1Ii;
  }
  ["_initParams"](l1lIl1II) {
    const lllI1i11 = l1lIl1II.version,
      iliilil = {
        "version": lllI1i11,
        "appId": l1lIl1II?.["appId"] || "",
        "fv": this._fvMap[lllI1i11],
        "fp": "",
        "ua": "",
        "sua": "",
        "av": "",
        "url": "",
        "og": "",
        "referer": l1lIl1II?.["referer"] || "",
        "pin": l1lIl1II?.["pin"] || "",
        "cookie": l1lIl1II?.["cookie"] || "",
        "timestamp": l1lIl1II?.["timestamp"] || Date.now()
      };
    if (l1lIl1II?.["ua"]) {
      let llI1llll = l1lIl1II.ua,
        iI1iiII1 = llI1llll.match(/^[\s\S]*?\(([\s\S]*?)\)/),
        ilI1IlII = llI1llll.match(/(?<=\/)[0-9]\.0[^'"\n]+/g);
      if (iI1iiII1?.["length"] > 0 && ilI1IlII?.["length"] > 0) {
        iliilil.ua = llI1llll;
        iliilil.sua = iI1iiII1[1];
        iliilil.av = ilI1IlII[0];
      }
    }
    if (!iliilil.ua) {
      let iilIll1I = this._genUA(),
        iIIII1i1 = iilIll1I.match(/^[\s\S]*?\(([\s\S]*?)\)/),
        lI11il11 = iilIll1I.match(/(?<=\/)[0-9]\.0[^'"\n]+/g);
      iIIII1i1?.["length"] > 0 && lI11il11?.["length"] > 0 && (iliilil.ua = iilIll1I, iliilil.sua = iIIII1i1[1], iliilil.av = lI11il11[0]);
    }
    iliilil.version = lllI1i11;
    iliilil.fp = this._fpMap.get(iliilil.ua) || "";
    !iliilil.fp && (iliilil.fp = this["" + "_makeFp".concat(iliilil.version.replace(".", "_"))](), iliilil.ua.startsWith("jd") && this._fpMap.set(iliilil.ua, iliilil.fp));
    if (l1lIl1II?.["url"]) {
      try {
        const l1i1IiI = new URL(l1lIl1II.url);
        iliilil.url = l1i1IiI.href;
        iliilil.og = l1i1IiI.origin;
      } catch {}
    }
    return iliilil;
  }
  async ["_requestAlgorithm"](l111l11l) {
    try {
      const lll1lIil = this._getExpandParamsData(l111l11l);
      let il1l1ii;
      switch (l111l11l.version) {
        case "4.7":
          il1l1ii = this._keyMap.algo4_7;
          break;
        default:
          il1l1ii = this._keyMap.algo;
          break;
      }
      const Illil11l = this._AESEncrypt(JSON.stringify(lll1lIil, null, 2), il1l1ii, l111l11l.version),
        llIIlI1I = {
          "version": l111l11l.version,
          "fp": l111l11l.fp,
          "appId": l111l11l.appId,
          "timestamp": Date.now(),
          "platform": "web",
          "expandParams": Illil11l,
          "fv": l111l11l.fv
        },
        IIllilll = {
          "url": "https://cactus.jd.com/request_algo?g_ty=ajax",
          "method": "POST",
          "headers": {
            "Content-Type": "application/json;charset=utf-8",
            "Origin": "https://cactus.jd.com",
            "Host": "cactus.jd.com",
            "Accept": "*/*",
            "User-Agent": l111l11l?.["ua"] || "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1 Edg/122.0.0.0"
          },
          "data": llIIlI1I,
          "proxy": null,
          "timeout": 60000,
          "debug": false
        };
      let llii1liI = 0,
        IIiI1li = null;
      const IIli1lII = 1;
      while (llii1liI < IIli1lII) {
        const l1lilllI = await common.request(IIllilll);
        if (!l1lilllI.success) {
          IIiI1li = "❌ request_algo 请求失败 ➜ " + l1lilllI.error;
          llii1liI++;
          continue;
        }
        if (!l1lilllI.data) {
          IIiI1li = "🚫 request_algo 请求失败 ➜ 无响应数据";
          llii1liI++;
          continue;
        }
        try {
          const i1l1Ii1l = l1lilllI.data;
          if (i1l1Ii1l?.["data"] && i1l1Ii1l?.["data"]?.["result"]) {
            const I111II = i1l1Ii1l.data.result?.["algo"],
              lIliii1i = i1l1Ii1l.data.result?.["tk"];
            if (I111II && lIliii1i) return {
              "token": lIliii1i,
              "algo": I111II
            };
          }
          IIiI1li = "🚫 request_algo 请求异常 ➜ " + JSON.stringify(i1l1Ii1l);
        } catch (I1lI1I11) {
          IIiI1li = "❌ request_algo 在处理接口响应时遇到了错误 ➜ " + (I1lI1I11.message || I1lI1I11);
        }
        llii1liI++;
      }
      if (llii1liI >= IIli1lII) {
        console.log(IIiI1li);
      }
    } catch (IIi11ii) {
      console.log("❌ request_algo 在处理API请求时遇到了错误 " + (IIi11ii.message || IIi11ii));
    }
    return {
      "token": "",
      "algo": ""
    };
  }
  ["_getExpandParamsData"](iIlIiiIl) {
    const lIiIili1 = 430,
      liI1I1iI = 932,
      IIlIIlii = 430,
      i1ili1il = 932;
    switch (iIlIiiIl.version) {
      case "3.1":
        return {
          "wc": 0,
          "wd": 0,
          "l": "zh-CN",
          "ls": "zh-CN,zh",
          "ml": 0,
          "pl": 0,
          "av": iIlIiiIl.av,
          "ua": iIlIiiIl.ua,
          "sua": iIlIiiIl.sua,
          "pp": iIlIiiIl.pin ? {
            "p1": iIlIiiIl.pin,
            "p2": iIlIiiIl.pin
          } : {},
          "pp1": "",
          "pm": {
            "ps": "prompt",
            "np": "default"
          },
          "w": lIiIili1,
          "h": liI1I1iI,
          "ow": IIlIIlii,
          "oh": i1ili1il,
          "url": iIlIiiIl.url,
          "og": iIlIiiIl.og,
          "pr": 1.25,
          "re": iIlIiiIl.referer,
          "ai": iIlIiiIl.appId,
          "fp": iIlIiiIl.fp
        };
      case "4.1":
        return {
          "wc": 0,
          "wd": 0,
          "l": "zh-CN",
          "ls": "zh-CN,zh",
          "ml": 0,
          "pl": 0,
          "av": iIlIiiIl.av,
          "ua": iIlIiiIl.ua,
          "sua": iIlIiiIl.sua,
          "pp": {},
          "pp1": iIlIiiIl.cookie,
          "pm": {
            "ps": "prompt",
            "np": "default"
          },
          "w": lIiIili1,
          "h": liI1I1iI,
          "ow": IIlIIlii,
          "oh": i1ili1il,
          "url": iIlIiiIl.url,
          "og": iIlIiiIl.og,
          "pr": 1.25,
          "re": iIlIiiIl.referer,
          "random": this._genRandomStr(10),
          "referer": iIlIiiIl.referer,
          "v": iIlIiiIl.fv,
          "ai": iIlIiiIl.appId,
          "fp": iIlIiiIl.fp
        };
      case "4.2":
        return {
          "wc": 0,
          "wd": 0,
          "l": "zh-CN",
          "ls": "zh-CN,zh",
          "ml": 0,
          "pl": 0,
          "av": iIlIiiIl.av,
          "ua": iIlIiiIl.ua,
          "sua": iIlIiiIl.sua,
          "pp": iIlIiiIl.pin ? {
            "p1": iIlIiiIl.pin,
            "p2": iIlIiiIl.pin
          } : {},
          "extend": {
            "pm": 0,
            "wd": 0,
            "l": 0,
            "ls": 2,
            "wk": 0,
            "bu1": "9.9.9"
          },
          "pp1": iIlIiiIl.pin ? "" : iIlIiiIl.cookie,
          "pm": {
            "ps": "prompt",
            "np": "default"
          },
          "w": lIiIili1,
          "h": liI1I1iI,
          "ow": IIlIIlii,
          "oh": i1ili1il,
          "url": iIlIiiIl.url,
          "og": iIlIiiIl.og,
          "pr": 1.25,
          "re": iIlIiiIl.referer,
          "random": this._genRandomStr(10),
          "referer": iIlIiiIl.referer,
          "v": iIlIiiIl.fv,
          "ai": iIlIiiIl.appId,
          "fp": iIlIiiIl.fp
        };
      case "4.3":
        return {
          "wc": 0,
          "wd": 0,
          "l": "zh-CN",
          "ls": "zh-CN,zh",
          "ml": 2,
          "pl": 5,
          "av": iIlIiiIl.av,
          "ua": iIlIiiIl.ua,
          "sua": iIlIiiIl.sua,
          "pp": iIlIiiIl.pin ? {
            "p1": iIlIiiIl.pin,
            "p2": iIlIiiIl.pin,
            "p3": iIlIiiIl.pin
          } : {},
          "extend": {
            "wd": 0,
            "l": 0,
            "ls": 5,
            "wk": 0,
            "bu1": "0.1.9",
            "bu2": 0,
            "bu3": 100,
            "bu4": 0
          },
          "pp1": iIlIiiIl.pin ? "" : iIlIiiIl.cookie,
          "pm": {
            "ps": "prompt",
            "np": "default"
          },
          "w": lIiIili1,
          "h": liI1I1iI,
          "ow": IIlIIlii,
          "oh": i1ili1il,
          "url": iIlIiiIl.url,
          "og": iIlIiiIl.og,
          "pr": 1,
          "re": iIlIiiIl.referer,
          "random": this._genRandomStr(10),
          "referer": iIlIiiIl.referer,
          "v": iIlIiiIl.fv,
          "ai": iIlIiiIl.appId,
          "fp": iIlIiiIl.fp
        };
      case "4.4":
        return {
          "wc": 0,
          "wd": 0,
          "l": "zh-CN",
          "ls": "zh-CN,zh",
          "ml": 0,
          "pl": 0,
          "av": iIlIiiIl.av,
          "ua": iIlIiiIl.ua,
          "sua": iIlIiiIl.sua,
          "pp": iIlIiiIl.pin ? {
            "p1": iIlIiiIl.pin,
            "p2": iIlIiiIl.pin
          } : {},
          "extend": {
            "wd": 0,
            "l": 0,
            "ls": 5,
            "wk": 0,
            "bu1": "0.1.7",
            "bu2": 0,
            "bu3": 100,
            "bu4": 0
          },
          "pp1": iIlIiiIl.pin ? "" : iIlIiiIl.cookie,
          "w": lIiIili1,
          "h": liI1I1iI,
          "ow": IIlIIlii,
          "oh": i1ili1il,
          "url": iIlIiiIl.url,
          "og": iIlIiiIl.og,
          "pr": 1,
          "re": iIlIiiIl.referer,
          "random": this._genRandomStr(10),
          "referer": iIlIiiIl.referer,
          "v": iIlIiiIl.fv,
          "ai": iIlIiiIl.appId,
          "fp": iIlIiiIl.fp
        };
      case "4.7":
        return {
          "wc": 0,
          "wd": 0,
          "l": "zh-CN",
          "ls": "zh-CN,zh",
          "ml": 0,
          "pl": 0,
          "av": iIlIiiIl.av,
          "ua": iIlIiiIl.ua,
          "sua": iIlIiiIl.sua,
          "pp": iIlIiiIl.pin ? {
            "p1": iIlIiiIl.pin,
            "p2": iIlIiiIl.pin
          } : {},
          "extend": {
            "wd": 0,
            "l": 0,
            "ls": 0,
            "wk": 0,
            "bu1": "0.1.7",
            "bu2": 0,
            "bu3": 60,
            "bu4": 0,
            "bu5": 0
          },
          "pp1": iIlIiiIl.pin ? "" : iIlIiiIl.cookie,
          "w": lIiIili1,
          "h": liI1I1iI,
          "ow": IIlIIlii,
          "oh": i1ili1il,
          "url": iIlIiiIl.url,
          "og": iIlIiiIl.og,
          "pf": "iPhone",
          "pr": 1,
          "re": iIlIiiIl.referer,
          "random": this._genRandomStr(10),
          "referer": iIlIiiIl.referer,
          "v": iIlIiiIl.fv,
          "bu2": "",
          "canvas": "",
          "webglFp": "",
          "ccn": 20,
          "ai": iIlIiiIl.appId,
          "fp": iIlIiiIl.fp
        };
      default:
        return {};
    }
  }
  ["_makeSign"](lIiiIIll, liiiiliI, illl1lIl, II11IIII) {
    try {
      const I1lilI1I = II11IIII.version,
        Il1i1Ill = new Date(II11IIII.timestamp),
        iill1ll1 = "" + Il1i1Ill.getFullYear() + String(Il1i1Ill.getMonth() + 1).padStart(2, "0") + String(Il1i1Ill.getDate()).padStart(2, "0") + String(Il1i1Ill.getHours()).padStart(2, "0") + String(Il1i1Ill.getMinutes()).padStart(2, "0") + String(Il1i1Ill.getSeconds()).padStart(2, "0") + String(Il1i1Ill.getMilliseconds()).padStart(3, "0"),
        llilIll1 = iill1ll1.concat(this._timePaddingMap[I1lilI1I]);
      let iil1IIl = Object.entries(lIiiIIll).map(([i1lII1il, I1illl11]) => {
        if (i1lII1il === "body") {
          I1illl11 = CryptoJS.SHA256(JSON.stringify(I1illl11)).toString();
        }
        return {
          "key": i1lII1il,
          "value": I1illl11
        };
      });
      const i1IiIil = this._algorithmMap[I1lilI1I] || CryptoJS;
      let I1i1i1Il = "",
        lllillI = "",
        IIi1ili1 = "";
      const iii1iIi1 = iil1IIl.map(II1iiiiI => II1iiiiI.key + ":" + II1iiiiI.value).join("&"),
        IlI11iil = illl1lIl(liiiiliI, II11IIII.fp, llilIll1, II11IIII.appId, i1IiIil).toString() || "";
      switch (I1lilI1I) {
        case "3.1":
          I1i1i1Il = i1IiIil.HmacSHA256("".concat(iii1iIi1), "".concat(IlI11iil)).toString();
          break;
        case "4.1":
          I1i1i1Il = i1IiIil.MD5("".concat(IlI11iil).concat(iii1iIi1).concat(IlI11iil)).toString();
          break;
        case "4.2":
          I1i1i1Il = i1IiIil.SHA256("".concat(IlI11iil).concat(iii1iIi1).concat(IlI11iil)).toString();
          break;
        case "4.3":
          I1i1i1Il = i1IiIil.HmacSHA256("".concat(iii1iIi1), "".concat(IlI11iil)).toString();
          break;
        case "4.4":
          I1i1i1Il = i1IiIil.MD5("".concat(IlI11iil).concat(iii1iIi1).concat(IlI11iil)).toString();
          break;
        case "4.7":
          I1i1i1Il = i1IiIil.MD5("".concat(IlI11iil).concat(iii1iIi1).concat(IlI11iil)).toString();
          break;
      }
      let IlI1II1I = {};
      switch (I1lilI1I) {
        case "3.1":
          IlI1II1I = {
            "sua": II11IIII.sua,
            "pp": II11IIII.pin ? {
              "p1": II11IIII.pin,
              "p2": II11IIII.pin
            } : {},
            "fp": II11IIII.fp
          };
          break;
        case "4.1":
          IlI1II1I = {
            "sua": II11IIII.sua,
            "pp": {},
            "random": this._genRandomStr(10),
            "referer": II11IIII.referer,
            "v": II11IIII.fv,
            "fp": II11IIII.fp
          };
          break;
        case "4.2":
          IlI1II1I = {
            "sua": II11IIII.sua,
            "pp": II11IIII.pin ? {
              "p1": II11IIII.pin,
              "p2": II11IIII.pin
            } : {},
            "extend": {
              "pm": 0,
              "wd": 0,
              "l": 0,
              "ls": 2,
              "wk": 0,
              "bu1": "9.9.9"
            },
            "random": this._genRandomStr(10),
            "referer": II11IIII.referer,
            "v": II11IIII.fv,
            "fp": II11IIII.fp
          };
          break;
        case "4.3":
          IlI1II1I = {
            "sua": II11IIII.sua,
            "pp": II11IIII.pin ? {
              "p1": II11IIII.pin,
              "p2": II11IIII.pin,
              "p3": II11IIII.pin
            } : {},
            "extend": {
              "wd": 0,
              "l": 0,
              "ls": 5,
              "wk": 0,
              "bu1": "0.1.8",
              "bu2": -1,
              "bu3": 100,
              "bu4": 0
            },
            "random": this._genRandomStr(10),
            "v": II11IIII.fv,
            "fp": II11IIII.fp
          };
          break;
        case "4.4":
          IlI1II1I = {
            "sua": II11IIII.sua,
            "pp": II11IIII.pin ? {
              "p1": II11IIII.pin,
              "p2": II11IIII.pin
            } : {},
            "extend": {
              "wd": 0,
              "l": 0,
              "ls": 5,
              "wk": 0,
              "bu1": "0.1.7",
              "bu2": -1,
              "bu3": 6,
              "bu4": 0,
              "bu5": 0
            },
            "random": this._genRandomStr(10),
            "v": II11IIII.fv,
            "fp": II11IIII.fp
          };
          break;
        case "4.7":
          IlI1II1I = {
            "sua": II11IIII.sua,
            "pp": II11IIII.pin ? {
              "p1": II11IIII.pin,
              "p2": II11IIII.pin
            } : {},
            "extend": {
              "wd": 0,
              "l": 0,
              "ls": 0,
              "wk": 0,
              "bu1": "0.1.7",
              "bu2": -1,
              "bu3": 60,
              "bu4": 0,
              "bu5": 0
            },
            "random": this._genRandomStr(10),
            "v": II11IIII.fv,
            "fp": II11IIII.fp
          };
          break;
      }
      lllillI = this._AESEncrypt(JSON.stringify(IlI1II1I, null, 2), this._keyMap[I1lilI1I], I1lilI1I);
      switch (II11IIII.version) {
        case "4.7":
          IIi1ili1 = i1IiIil.MD5("".concat(IlI11iil).concat("appid:" + lIiiIIll.appid + "&functionId:" + lIiiIIll.functionId).concat(IlI11iil)).toString();
          break;
      }
      const ii1Ii11 = ["".concat(iill1ll1), "".concat(II11IIII.fp), "".concat(II11IIII.appId), "".concat(liiiiliI), "".concat(I1i1i1Il), "".concat(I1lilI1I), "".concat(String(II11IIII.timestamp)), "".concat(lllillI)];
      switch (II11IIII.version) {
        case "4.7":
          ii1Ii11.push(IIi1ili1);
          break;
      }
      return {
        "_stk": iil1IIl.map(Iiliii1I => Iiliii1I.key).join(","),
        "_ste": 1,
        "h5st": ii1Ii11.join(";")
      };
    } catch (Ii11i1Ii) {
      console.log("❌ getH5st 生成签名时遇到了错误 " + (Ii11i1Ii.message || Ii11i1Ii));
    }
    return {
      "_stk": "",
      "_ste": 0,
      "h5st": ""
    };
  }
  ["_genLocalTK"](li11i1II, iii1I1lI) {
    const Iiillll1 = () => {
        const Ilii1l11 = ["1", "2", "3"],
          I1I1li1 = ["+", "x"],
          I1I1Iii1 = 2 + Math.floor(4 * Math.random());
        let I1llIi = "";
        for (let IIlliIIl = 0; IIlliIIl < I1I1Iii1; IIlliIIl++) {
          I1llIi += Ilii1l11[Math.floor(Math.random() * 3)];
          IIlliIIl < I1I1Iii1 - 1 && (I1llIi += I1I1li1[Math.floor(Math.random() * 2)]);
        }
        I1llIi.length < 9 && (I1llIi += this._genRandomStr().substring(0, 9 - I1llIi.length));
        const ii1IIii1 = CryptoJS.enc.Utf8.parse(I1llIi);
        return CryptoJS.enc.Base64.stringify(ii1IIii1).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
      },
      IIiIIiil = lIliliii => {
        function IililiI(ilil11i) {
          return ilil11i.map(l111lIiI => {
            var liiIliii = "00" + (255 & l111lIiI).toString(16);
            return liiIliii.slice(-2);
          }).join("");
        }
        function IIi1iiII(IIl11lli) {
          var Ii1i1ii1 = new Uint8Array(IIl11lli.length);
          return Ii1i1ii1.forEach((Il1Ii11l, l1IliiI, li1iiliI) => {
            li1iiliI[l1IliiI] = IIl11lli.charCodeAt(l1IliiI);
          }), IililiI(Ii1i1ii1);
        }
        function lIII111(ilI1l1i) {
          var lI11lll = function () {
            var lill1lli = new ArrayBuffer(2);
            return new DataView(lill1lli).setInt16(0, 256, !0), 256 === new Int16Array(lill1lli)[0];
          }();
          var lIliIi1i = Math.floor(ilI1l1i / Math.pow(2, 32));
          var ii1iilil = ilI1l1i % Math.pow(2, 32);
          var I1llIlii = new ArrayBuffer(8);
          var lIIlili1 = new DataView(I1llIlii);
          lI11lll ? (lIIlili1.setUint32(0, ii1iilil, lI11lll), lIIlili1.setUint32(4, lIliIi1i, lI11lll)) : (lIIlili1.setUint32(0, lIliIi1i, lI11lll), lIIlili1.setUint32(4, ii1iilil, lI11lll));
          return new Uint8Array(I1llIlii);
        }
        var l1I11il1 = "",
          liIIIlII = Date.now(),
          l1iiIi1i = iii1I1lI.secret1,
          Illl1Ill = function (Iil11I1I, i1Ii1l1I, iiIlilll, llIil1il) {
            var lllIIii1 = new Uint8Array(16);
            lllIIii1.forEach((I1iiIii1, liii1Iii, iIiII1l) => {
              iIiII1l[liii1Iii] = Iil11I1I.charCodeAt(liii1Iii);
            });
            var ii1illIl = lIII111(i1Ii1l1I),
              lil1Ili = new Uint8Array(2);
            lil1Ili.forEach((IllliIi1, ii1l1IlI, l1ilIi1) => {
              l1ilIi1[ii1l1IlI] = iiIlilll.charCodeAt(ii1l1IlI);
            });
            var iiIIl1I1 = new Uint8Array(12);
            iiIIl1I1.forEach((iiliIiil, I11l1iii, Il1iii1l) => {
              Il1iii1l[I11l1iii] = llIil1il.charCodeAt(I11l1iii);
            });
            var l1iI11i = new Uint8Array(38);
            l1iI11i.set(lil1Ili);
            l1iI11i.set(iiIIl1I1, 2);
            l1iI11i.set(ii1illIl, 14);
            l1iI11i.set(lllIIii1, 22);
            var IliI1li = llI1llI.buf(l1iI11i);
            IliI1li >>>= 0;
            var I1ilIl1i = "00000000" + IliI1li.toString(16);
            return I1ilIl1i.substring(I1ilIl1i.length - 8);
          }(lIliliii, liIIIlII, iii1I1lI.prefix, l1iiIi1i);
        return l1I11il1 += IIi1iiII(Illl1Ill), l1I11il1 += IIi1iiII(iii1I1lI.prefix), l1I11il1 += IIi1iiII(l1iiIi1i), l1I11il1 += IililiI(lIII111(liIIIlII)), l1I11il1 += IIi1iiII(lIliliii), this._AESEncrypt(CryptoJS.enc.Hex.parse(l1I11il1), CryptoJS.enc.Utf8.parse(iii1I1lI.secret2), "4.7");
      },
      iil1IiI1 = Ii1I11li => {
        const {
            magic: liliIIi,
            version: lIII11ii,
            platform: i1IliiIi,
            expires: iIiIiIiI,
            producer: i1I1illl,
            expr: iIlll1,
            cipher: Iill111i
          } = Ii1I11li,
          iiil1Il1 = [liliIIi, lIII11ii, i1IliiIi, iIiIiIiI, i1I1illl, iIlll1, Iill111i].join("");
        let ilI1iil = llI1llI.str(iiil1Il1);
        ilI1iil >>>= 0;
        let lII1liI1 = "00000000" + ilI1iil.toString(16);
        return lII1liI1.substring(lII1liI1.length - 8);
      },
      illilIii = {
        "magic": "tk",
        "version": "03",
        "platform": "w",
        "expires": "41",
        "producer": "l"
      },
      llI1llI = this.ADLER32;
    illilIii.expr = Iiillll1();
    illilIii.cipher = IIiIIiil(li11i1II);
    illilIii.adler32 = iil1IiI1(illilIii);
    const {
      magic: il11llil,
      version: l1l1Ii,
      platform: i1Iliil1,
      expires: liII1li,
      producer: i1111il1,
      expr: llllili1,
      cipher: li11lI1l,
      adler32: Iilli1I1
    } = illilIii;
    return [il11llil, l1l1Ii, i1Iliil1, Iilli1I1, liII1li, i1111il1, llllili1, li11lI1l].join("");
  }
  ["_genAlgo"](I11i11I1, lil1ilIl, IiIIlIiI, ll11ii11, lI1Ii1ll, l1lIiiIl) {
    function illii11i(lll1I1ll) {
      var I1iIli1I = lll1I1ll.length,
        IiiIlll = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        IlI1lll1 = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 62, null, null, null, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, null, null, null, 64, null, null, null, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, null, null, null, null, null, null, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];
      if (!IlI1lll1) {
        IlI1lll1 = [];
        for (var lI11llil = 0; lI11llil < IiiIlll.length; lI11llil++) IlI1lll1[IiiIlll.charCodeAt(lI11llil)] = lI11llil;
      }
      var llI1ll = IiiIlll.charAt(64);
      if (llI1ll) {
        var l1I1ill1 = lll1I1ll.indexOf(llI1ll);
        -1 !== l1I1ill1 && (I1iIli1I = l1I1ill1);
      }
      return function (IIIlI11I, l1iiiliI, i1llI1) {
        for (var liIIlil = [], ii1111I1 = 0, l11iiiIl = 0; l11iiiIl < l1iiiliI; l11iiiIl++) if (l11iiiIl % 4) {
          var i1iii1ii = i1llI1[IIIlI11I.charCodeAt(l11iiiIl - 1)] << l11iiiIl % 4 * 2 | i1llI1[IIIlI11I.charCodeAt(l11iiiIl)] >>> 6 - l11iiiIl % 4 * 2;
          liIIlil[ii1111I1 >>> 2] |= i1iii1ii << 24 - ii1111I1 % 4 * 8;
          ii1111I1++;
        }
        return CryptoJS.enc.Utf8.stringify({
          "words": liIIlil,
          "sigBytes": ii1111I1
        });
      }(lll1I1ll, I1iIli1I, IlI1lll1);
    }
    function llIlI1(i11I11II, ili1li11) {
      let IiiIIii1;
      switch (i11I11II) {
        case "1":
          IiiIIii1 = lI1Ii1ll.MD5;
          break;
        case "2":
          IiiIIii1 = lI1Ii1ll.SHA256;
          break;
        case "3":
          IiiIIii1 = lI1Ii1ll.HmacSHA256;
          break;
      }
      return i11I11II === "3" ? IiiIIii1(ili1li11, I11i11I1).toString() : IiiIIii1(ili1li11).toString();
    }
    const l1IIiiIi = "".concat(I11i11I1).concat(lil1ilIl).concat(IiIIlIiI).concat(ll11ii11).concat(l1lIiiIl);
    let iIl111lI = "";
    return illii11i(I11i11I1.slice(16, 28)).match(new RegExp("^[123]([x+][123])+"))[0].split("").forEach((iiII1Il, i1Ili1I, IIi1IIIi) => {
      if (["1", "2", "3"].includes(iiII1Il)) {
        if (i1Ili1I === 0) iIl111lI = llIlI1(iiII1Il, l1IIiiIi);else {
          if (i1Ili1I >= 2) {
            const lliIll1 = IIi1IIIi[i1Ili1I - 1];
            if (lliIll1 === "+") iIl111lI += llIlI1(iiII1Il, l1IIiiIi);else lliIll1 === "x" && (iIl111lI = llIlI1(iiII1Il, iIl111lI));
          }
        }
      }
    }), iIl111lI;
  }
  ["_AESEncrypt"](ilII11ii, Il1ilIlI, lIli1) {
    const lI1l1ili = CryptoJS.enc.Utf8.parse(ilII11ii),
      Iii1I111 = CryptoJS.AES.encrypt(lI1l1ili, Il1ilIlI, {
        "iv": this._iv,
        "mode": CryptoJS.mode.CBC,
        "padding": CryptoJS.pad.Pkcs7
      });
    switch (lIli1) {
      case "4.7":
        return this._algorithmMap[lIli1].enc.Base64.encode(Iii1I111);
      default:
        return Iii1I111.ciphertext.toString();
    }
  }
  ["_genRandomStr"](ll1iiIll = 32, iilII1i = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-") {
    const iIiIlii1 = iilII1i.length;
    let iliI1Ill = "";
    for (let IillIil = 0; IillIil < ll1iiIll; IillIil++) {
      iliI1Ill += iilII1i.charAt(Math.floor(Math.random() * iIiIlii1));
    }
    return iliI1Ill;
  }
  ["_genUA"]() {
    let liii = "",
      iI1I1lli = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      l11iiil = "0123456789abcdef";
    for (let iIiIlIl of iI1I1lli) {
      if (iIiIlIl == "x") liii += l11iiil.charAt(Math.floor(Math.random() * l11iiil.length));else iIiIlIl == "X" ? liii += l11iiil.charAt(Math.floor(Math.random() * l11iiil.length)).toUpperCase() : liii += iIiIlIl;
    }
    const i11lIiIl = ["jdapp", "iPhone", this._latestAppVersionData.version, "", "rn/" + liii, "M/5.0", "appBuild/" + this._latestAppVersionData.build, "jdSupportDarkMode/0", "ef/1", "ep/%7B%22ciphertype%22%3A5%2C%22cipher%22%3A%7B%22ud%22%3A%22DG%3D%3D%22%2C%22sv%22%3A%22CG%3D%3D%22%2C%22iad%22%3A%22%22%7D%2C%22ts%22%3A" + Math.floor(Date.now() / 1000) + "%2C%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22version%22%3A%221.0.3%22%2C%22appname%22%3A%22com.360buy.jdmobile%22%2C%22ridx%22%3A-1%7D", "Mozilla/5.0 (iPhone; CPU iPhone OS " + this._latestIOSVersion.replace(".", "_") + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "supportJDSHWK/1", ""];
    return i11lIiIl.join(";");
  }
  ["_makeFp3_1"]() {
    function lilii11i(IiIli1l, il1lilll) {
      return IiIli1l + Math.floor(Math.random() * (il1lilll + 1 - IiIli1l));
    }
    function l1liI111(ilIiIiII, ll1iill1) {
      for (var lI1lll1I = [], l11lll1I = 0; l11lll1I < ilIiIiII.length; l11lll1I++) {
        var l1IliIli = ilIiIiII[l11lll1I];
        if (lilii11i(0, ilIiIiII.length - l11lll1I - 1) < ll1iill1 - lI1lll1I.length && (lI1lll1I.push(l1IliIli), lI1lll1I.length == ll1iill1)) break;
      }
      for (var il1i1I11 = "", l1li1l1I = 0; l1li1l1I < lI1lll1I.length; l1li1l1I += 1) {
        var iIlli1 = Math.random() * (lI1lll1I.length - l1li1l1I) | 0;
        il1i1I11 += lI1lll1I[iIlli1];
        lI1lll1I[iIlli1] = lI1lll1I[lI1lll1I.length - l1li1l1I - 1];
      }
      return il1i1I11;
    }
    function ll1I1ll(lI1IIi11, ilIli1lI) {
      for (var Il1iIlIl = 0; Il1iIlIl < ilIli1lI.length; Il1iIlIl += 1) {
        var i1il1i1 = lI1IIi11.indexOf(ilIli1lI[Il1iIlIl]);
        -1 !== i1il1i1 && (lI1IIi11 = lI1IIi11.replace(ilIli1lI[Il1iIlIl], ""));
      }
      return lI1IIi11;
    }
    var iI1l1lIi = "0123456789",
      i1IiiI1i = l1liI111(iI1l1lIi, 3),
      i1liil1l = lilii11i(0, 9),
      IlI1liIl = ll1I1ll(iI1l1lIi, i1IiiI1i),
      IIili1 = {};
    IIili1.size = i1liil1l;
    IIili1.num = IlI1liIl;
    var lilii11i = this._genRandomStr(IIili1.size, IIili1.num) + i1IiiI1i + this._genRandomStr(14 - (i1liil1l + 3) + 1, IlI1liIl) + i1liil1l,
      liI1lllI = lilii11i.split(""),
      IIl11I1 = [];
    while (liI1lllI.length > 0) {
      IIl11I1.push(9 - parseInt(liI1lllI.pop() || ""));
    }
    return IIl11I1.join("");
  }
  ["_makeFp4_1"]() {
    return this._makeFp4("uct6d0jhqw", 6, 9, 14);
  }
  ["_makeFp4_2"]() {
    return this._makeFp4("6d0jhqw3pa", 4, 11, 14);
  }
  ["_makeFp4_3"]() {
    return this._makeFp4("kl9i1uct6d", 3, 12, 10);
  }
  ["_makeFp4_4"]() {
    return this._makeFp4("1uct6d0jhq", 4, 11, 8);
  }
  ["_makeFp4_7"]() {
    return this._makeFp4("1uct6d0jhq", 5, 10, 15);
  }
  ["_makeFp4"](i1lI11iI, i1Ilil1I, iIiiiIii, l1llIii) {
    function llI1lI1I(IIiIii, lilliII1) {
      return IIiIii + Math.floor(Math.random() * (lilliII1 + 1 - IIiIii));
    }
    function i1ilii1I(ili11lii, iIiIll1) {
      for (var il1iiili = [], IlIliili = 0; IlIliili < ili11lii.length; IlIliili++) {
        var iIiil1ll = ili11lii[IlIliili];
        if (llI1lI1I(0, ili11lii.length - IlIliili - 1) < iIiIll1 - il1iiili.length && (il1iiili.push(iIiil1ll), il1iiili.length == iIiIll1)) break;
      }
      for (var IIllilI1 = "", iIliIIl = 0; iIliIIl < il1iiili.length; iIliIIl += 1) {
        var I1lIll1 = Math.random() * (il1iiili.length - iIliIIl) | 0;
        IIllilI1 += il1iiili[I1lIll1];
        il1iiili[I1lIll1] = il1iiili[il1iiili.length - iIliIIl - 1];
      }
      return IIllilI1;
    }
    function IlIlliil(l1iliiii, iIi11111) {
      for (var l1IiiIl = 0; l1IiiIl < iIi11111.length; l1IiiIl += 1) {
        var l1Iii1lI = l1iliiii.indexOf(iIi11111[l1IiiIl]);
        -1 !== l1Iii1lI && (l1iliiii = l1iliiii.replace(iIi11111[l1IiiIl], ""));
      }
      return l1iliiii;
    }
    var illlli = i1lI11iI,
      Il1i11Il = i1ilii1I(illlli, i1Ilil1I),
      l1Ii1ii1 = llI1lI1I(0, 9),
      lliii11l = IlIlliil(illlli, Il1i11Il),
      i1I1IIii = {};
    i1I1IIii.size = l1Ii1ii1;
    i1I1IIii.num = lliii11l;
    var llI1lI1I = this._genRandomStr(i1I1IIii.size, i1I1IIii.num) + Il1i11Il + this._genRandomStr(iIiiiIii - l1Ii1ii1, lliii11l) + l1Ii1ii1,
      il1IlIi1 = llI1lI1I.split(""),
      IIll1ili = il1IlIi1.slice(0, l1llIii),
      illIl1Il = il1IlIi1.slice(l1llIii),
      l1lIiIIi = [];
    while (IIll1ili.length > 0) {
      l1lIiIIi.push((35 - parseInt(IIll1ili.pop(), 36)).toString(36));
    }
    return l1lIiIIi = l1lIiIIi.concat(illIl1Il), l1lIiIIi.join("");
  }
  ["load_module_ADLER32"]() {
    let illI11l = {};
    illI11l.version = "1.3.1";
    function iIlIiIIi(iiIi1Il1, i11IIliI) {
      var Iiii1i = 1,
        IIlIi = 0,
        I1iIIl1l = iiIi1Il1.length,
        l1llill = 0;
      typeof i11IIliI === "number" && (Iiii1i = i11IIliI & 65535, IIlIi = i11IIliI >>> 16);
      for (var IIllIiIi = 0; IIllIiIi < I1iIIl1l;) {
        l1llill = Math.min(I1iIIl1l - IIllIiIi, 2654) + IIllIiIi;
        for (; IIllIiIi < l1llill; IIllIiIi++) {
          Iiii1i += iiIi1Il1.charCodeAt(IIllIiIi) & 255;
          IIlIi += Iiii1i;
        }
        Iiii1i = 15 * (Iiii1i >>> 16) + (Iiii1i & 65535);
        IIlIi = 15 * (IIlIi >>> 16) + (IIlIi & 65535);
      }
      return IIlIi % 65521 << 16 | Iiii1i % 65521;
    }
    function IIIl1Iil(liiiii1i, Il1iliI1) {
      var IIl111li = 1,
        i1lll1li = 0,
        ll1Il1I = liiiii1i.length,
        l11ill11 = 0;
      if (typeof Il1iliI1 === "number") {
        IIl111li = Il1iliI1 & 65535;
        i1lll1li = Il1iliI1 >>> 16 & 65535;
      }
      for (var llI111I1 = 0; llI111I1 < ll1Il1I;) {
        l11ill11 = Math.min(ll1Il1I - llI111I1, 2654) + llI111I1;
        for (; llI111I1 < l11ill11; llI111I1++) {
          IIl111li += liiiii1i[llI111I1] & 255;
          i1lll1li += IIl111li;
        }
        IIl111li = 15 * (IIl111li >>> 16) + (IIl111li & 65535);
        i1lll1li = 15 * (i1lll1li >>> 16) + (i1lll1li & 65535);
      }
      return i1lll1li % 65521 << 16 | IIl111li % 65521;
    }
    function I11liliI(iIi111i1, lIillili) {
      var iI1iiIIi = 1,
        iIliII1i = 0,
        iIilIII1 = iIi111i1.length,
        liIlIlIl = 0,
        i11iIliI = 0,
        I11liI1I = 0;
      typeof lIillili === "number" && (iI1iiIIi = lIillili & 65535, iIliII1i = lIillili >>> 16);
      for (var ili111I = 0; ili111I < iIilIII1;) {
        liIlIlIl = Math.min(iIilIII1 - ili111I, 2918);
        while (liIlIlIl > 0) {
          i11iIliI = iIi111i1.charCodeAt(ili111I++);
          if (i11iIliI < 128) iI1iiIIi += i11iIliI;else {
            if (i11iIliI < 2048) iI1iiIIi += 192 | i11iIliI >> 6 & 31, iIliII1i += iI1iiIIi, --liIlIlIl, iI1iiIIi += 128 | i11iIliI & 63;else {
              if (i11iIliI >= 55296 && i11iIliI < 57344) {
                i11iIliI = (i11iIliI & 1023) + 64;
                I11liI1I = iIi111i1.charCodeAt(ili111I++) & 1023;
                iI1iiIIi += 240 | i11iIliI >> 8 & 7;
                iIliII1i += iI1iiIIi;
                --liIlIlIl;
                iI1iiIIi += 128 | i11iIliI >> 2 & 63;
                iIliII1i += iI1iiIIi;
                --liIlIlIl;
                iI1iiIIi += 128 | I11liI1I >> 6 & 15 | (i11iIliI & 3) << 4;
                iIliII1i += iI1iiIIi;
                --liIlIlIl;
                iI1iiIIi += 128 | I11liI1I & 63;
              } else {
                iI1iiIIi += 224 | i11iIliI >> 12 & 15;
                iIliII1i += iI1iiIIi;
                --liIlIlIl;
                iI1iiIIi += 128 | i11iIliI >> 6 & 63;
                iIliII1i += iI1iiIIi;
                --liIlIlIl;
                iI1iiIIi += 128 | i11iIliI & 63;
              }
            }
          }
          iIliII1i += iI1iiIIi;
          --liIlIlIl;
        }
        iI1iiIIi = 15 * (iI1iiIIi >>> 16) + (iI1iiIIi & 65535);
        iIliII1i = 15 * (iIliII1i >>> 16) + (iIliII1i & 65535);
      }
      return iIliII1i % 65521 << 16 | iI1iiIIi % 65521;
    }
    return illI11l.bstr = iIlIiIIi, illI11l.buf = IIIl1Iil, illI11l.str = I11liliI, illI11l;
  }
}
const HASH = function () {
  function l1llIIiI(iI11iIli, lii11Ii1) {
    iI11iIli = [iI11iIli[0] >>> 16, 65535 & iI11iIli[0], iI11iIli[1] >>> 16, 65535 & iI11iIli[1]];
    lii11Ii1 = [lii11Ii1[0] >>> 16, 65535 & lii11Ii1[0], lii11Ii1[1] >>> 16, 65535 & lii11Ii1[1]];
    var liilil1i = [0, 0, 0, 0];
    return liilil1i[3] += iI11iIli[3] + lii11Ii1[3], liilil1i[2] += liilil1i[3] >>> 16, liilil1i[3] &= 65535, liilil1i[2] += iI11iIli[2] + lii11Ii1[2], liilil1i[1] += liilil1i[2] >>> 16, liilil1i[2] &= 65535, liilil1i[1] += iI11iIli[1] + lii11Ii1[1], liilil1i[0] += liilil1i[1] >>> 16, liilil1i[1] &= 65535, liilil1i[0] += iI11iIli[0] + lii11Ii1[0], liilil1i[0] &= 65535, [liilil1i[0] << 16 | liilil1i[1], liilil1i[2] << 16 | liilil1i[3]];
  }
  function lIl1ll1i(I1IIiIl, l11lil1l) {
    I1IIiIl = [I1IIiIl[0] >>> 16, 65535 & I1IIiIl[0], I1IIiIl[1] >>> 16, 65535 & I1IIiIl[1]];
    l11lil1l = [l11lil1l[0] >>> 16, 65535 & l11lil1l[0], l11lil1l[1] >>> 16, 65535 & l11lil1l[1]];
    var i1iiiI1I = [0, 0, 0, 0];
    return i1iiiI1I[3] += I1IIiIl[3] * l11lil1l[3], i1iiiI1I[2] += i1iiiI1I[3] >>> 16, i1iiiI1I[3] &= 65535, i1iiiI1I[2] += I1IIiIl[2] * l11lil1l[3], i1iiiI1I[1] += i1iiiI1I[2] >>> 16, i1iiiI1I[2] &= 65535, i1iiiI1I[2] += I1IIiIl[3] * l11lil1l[2], i1iiiI1I[1] += i1iiiI1I[2] >>> 16, i1iiiI1I[2] &= 65535, i1iiiI1I[1] += I1IIiIl[1] * l11lil1l[3], i1iiiI1I[0] += i1iiiI1I[1] >>> 16, i1iiiI1I[1] &= 65535, i1iiiI1I[1] += I1IIiIl[2] * l11lil1l[2], i1iiiI1I[0] += i1iiiI1I[1] >>> 16, i1iiiI1I[1] &= 65535, i1iiiI1I[1] += I1IIiIl[3] * l11lil1l[1], i1iiiI1I[0] += i1iiiI1I[1] >>> 16, i1iiiI1I[1] &= 65535, i1iiiI1I[0] += I1IIiIl[0] * l11lil1l[3] + I1IIiIl[1] * l11lil1l[2] + I1IIiIl[2] * l11lil1l[1] + I1IIiIl[3] * l11lil1l[0], i1iiiI1I[0] &= 65535, [i1iiiI1I[0] << 16 | i1iiiI1I[1], i1iiiI1I[2] << 16 | i1iiiI1I[3]];
  }
  function iIlIlli(ii1iiIi1, lIIilII) {
    return 32 === (lIIilII %= 64) ? [ii1iiIi1[1], ii1iiIi1[0]] : lIIilII < 32 ? [ii1iiIi1[0] << lIIilII | ii1iiIi1[1] >>> 32 - lIIilII, ii1iiIi1[1] << lIIilII | ii1iiIi1[0] >>> 32 - lIIilII] : [ii1iiIi1[1] << (lIIilII -= 32) | ii1iiIi1[0] >>> 32 - lIIilII, ii1iiIi1[0] << lIIilII | ii1iiIi1[1] >>> 32 - lIIilII];
  }
  function IliIiIll(l1llliIi, i11llIIl) {
    return 0 === (i11llIIl %= 64) ? l1llliIi : i11llIIl < 32 ? [l1llliIi[0] << i11llIIl | l1llliIi[1] >>> 32 - i11llIIl, l1llliIi[1] << i11llIIl] : [l1llliIi[1] << i11llIIl - 32, 0];
  }
  function Iilli1iI(lI1I1liI, lIllllil) {
    return [lI1I1liI[0] ^ lIllllil[0], lI1I1liI[1] ^ lIllllil[1]];
  }
  function lIl11il(iII1l11) {
    return iII1l11 = Iilli1iI(iII1l11, [0, iII1l11[0] >>> 1]), iII1l11 = Iilli1iI(iII1l11 = lIl1ll1i(iII1l11, [4283543511, 3981806797]), [0, iII1l11[0] >>> 1]), Iilli1iI(iII1l11 = lIl1ll1i(iII1l11, [3301882366, 444984403]), [0, iII1l11[0] >>> 1]);
  }
  return {
    "hash128": function (i1i1iIII, i1Ii1i11) {
      for (var ll1iIIii, iIII1ili, I1iIllil = i1Ii1i11 || 0, ii1I1Il = (i1Ii1i11 = (i1i1iIII = i1i1iIII || "").length % 16, i1i1iIII.length - i1Ii1i11), ll1Ii1li = [0, I1iIllil], I1iIllil = [0, I1iIllil], IllIIIiI = [2277735313, 289559509], IillIIi1 = [1291169091, 658871167], Iii1i1l1 = 0; Iii1i1l1 < ii1I1Il; Iii1i1l1 += 16) ll1iIIii = [255 & i1i1iIII.charCodeAt(Iii1i1l1 + 4) | (255 & i1i1iIII.charCodeAt(Iii1i1l1 + 5)) << 8 | (255 & i1i1iIII.charCodeAt(Iii1i1l1 + 6)) << 16 | (255 & i1i1iIII.charCodeAt(Iii1i1l1 + 7)) << 24, 255 & i1i1iIII.charCodeAt(Iii1i1l1) | (255 & i1i1iIII.charCodeAt(Iii1i1l1 + 1)) << 8 | (255 & i1i1iIII.charCodeAt(Iii1i1l1 + 2)) << 16 | (255 & i1i1iIII.charCodeAt(Iii1i1l1 + 3)) << 24], iIII1ili = [255 & i1i1iIII.charCodeAt(Iii1i1l1 + 12) | (255 & i1i1iIII.charCodeAt(Iii1i1l1 + 13)) << 8 | (255 & i1i1iIII.charCodeAt(Iii1i1l1 + 14)) << 16 | (255 & i1i1iIII.charCodeAt(Iii1i1l1 + 15)) << 24, 255 & i1i1iIII.charCodeAt(Iii1i1l1 + 8) | (255 & i1i1iIII.charCodeAt(Iii1i1l1 + 9)) << 8 | (255 & i1i1iIII.charCodeAt(Iii1i1l1 + 10)) << 16 | (255 & i1i1iIII.charCodeAt(Iii1i1l1 + 11)) << 24], ll1iIIii = iIlIlli(ll1iIIii = lIl1ll1i(ll1iIIii, IllIIIiI), 31), ll1Ii1li = l1llIIiI(ll1Ii1li = iIlIlli(ll1Ii1li = Iilli1iI(ll1Ii1li, ll1iIIii = lIl1ll1i(ll1iIIii, IillIIi1)), 27), I1iIllil), ll1Ii1li = l1llIIiI(lIl1ll1i(ll1Ii1li, [0, 5]), [0, 1390208809]), iIII1ili = iIlIlli(iIII1ili = lIl1ll1i(iIII1ili, IillIIi1), 33), I1iIllil = l1llIIiI(I1iIllil = iIlIlli(I1iIllil = Iilli1iI(I1iIllil, iIII1ili = lIl1ll1i(iIII1ili, IllIIIiI)), 31), ll1Ii1li), I1iIllil = l1llIIiI(lIl1ll1i(I1iIllil, [0, 5]), [0, 944331445]);
      switch (ll1iIIii = [0, 0], iIII1ili = [0, 0], i1Ii1i11) {
        case 15:
          iIII1ili = Iilli1iI(iIII1ili, IliIiIll([0, i1i1iIII.charCodeAt(Iii1i1l1 + 14)], 48));
        case 14:
          iIII1ili = Iilli1iI(iIII1ili, IliIiIll([0, i1i1iIII.charCodeAt(Iii1i1l1 + 13)], 40));
        case 13:
          iIII1ili = Iilli1iI(iIII1ili, IliIiIll([0, i1i1iIII.charCodeAt(Iii1i1l1 + 12)], 32));
        case 12:
          iIII1ili = Iilli1iI(iIII1ili, IliIiIll([0, i1i1iIII.charCodeAt(Iii1i1l1 + 11)], 24));
        case 11:
          iIII1ili = Iilli1iI(iIII1ili, IliIiIll([0, i1i1iIII.charCodeAt(Iii1i1l1 + 10)], 16));
        case 10:
          iIII1ili = Iilli1iI(iIII1ili, IliIiIll([0, i1i1iIII.charCodeAt(Iii1i1l1 + 9)], 8));
        case 9:
          iIII1ili = lIl1ll1i(iIII1ili = Iilli1iI(iIII1ili, [0, i1i1iIII.charCodeAt(Iii1i1l1 + 8)]), IillIIi1), I1iIllil = Iilli1iI(I1iIllil, iIII1ili = lIl1ll1i(iIII1ili = iIlIlli(iIII1ili, 33), IllIIIiI));
        case 8:
          ll1iIIii = Iilli1iI(ll1iIIii, IliIiIll([0, i1i1iIII.charCodeAt(Iii1i1l1 + 7)], 56));
        case 7:
          ll1iIIii = Iilli1iI(ll1iIIii, IliIiIll([0, i1i1iIII.charCodeAt(Iii1i1l1 + 6)], 48));
        case 6:
          ll1iIIii = Iilli1iI(ll1iIIii, IliIiIll([0, i1i1iIII.charCodeAt(Iii1i1l1 + 5)], 40));
        case 5:
          ll1iIIii = Iilli1iI(ll1iIIii, IliIiIll([0, i1i1iIII.charCodeAt(Iii1i1l1 + 4)], 32));
        case 4:
          ll1iIIii = Iilli1iI(ll1iIIii, IliIiIll([0, i1i1iIII.charCodeAt(Iii1i1l1 + 3)], 24));
        case 3:
          ll1iIIii = Iilli1iI(ll1iIIii, IliIiIll([0, i1i1iIII.charCodeAt(Iii1i1l1 + 2)], 16));
        case 2:
          ll1iIIii = Iilli1iI(ll1iIIii, IliIiIll([0, i1i1iIII.charCodeAt(Iii1i1l1 + 1)], 8));
        case 1:
          ll1iIIii = lIl1ll1i(ll1iIIii = Iilli1iI(ll1iIIii, [0, i1i1iIII.charCodeAt(Iii1i1l1)]), IllIIIiI), ll1Ii1li = Iilli1iI(ll1Ii1li, ll1iIIii = lIl1ll1i(ll1iIIii = iIlIlli(ll1iIIii, 31), IillIIi1));
      }
      return ll1Ii1li = l1llIIiI(ll1Ii1li = Iilli1iI(ll1Ii1li, [0, i1i1iIII.length]), I1iIllil = Iilli1iI(I1iIllil, [0, i1i1iIII.length])), I1iIllil = l1llIIiI(I1iIllil, ll1Ii1li), ll1Ii1li = l1llIIiI(ll1Ii1li = lIl11il(ll1Ii1li), I1iIllil = lIl11il(I1iIllil)), I1iIllil = l1llIIiI(I1iIllil, ll1Ii1li), ("00000000" + (ll1Ii1li[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (ll1Ii1li[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (I1iIllil[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (I1iIllil[1] >>> 0).toString(16)).slice(-8);
    }
  };
}();
module.exports = {
  "wuxianDefense": wuxianDefense,
  "jsTk": jsTk,
  "getJdEnvInfo": getJdEnvInfo,
  "H5st": new H5st()
};