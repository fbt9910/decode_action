//Fri Aug 16 2024 10:59:14 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
/**
关注有礼-加密


必须条件：配置文件或者环境变量中添加变量：
## 关注有礼-加密-jd_follow.js
//export M_FOLLOW_SHOP_ARGV="12237383_12550303" //活动变量


cron:1 1 1 1 *
============Quantumultx===============
[task_local]
#关注有礼-加密
1 1 1 1 * jd_follow.js, tag=关注有礼-加密, enabled=true
*/
const $ = new Env("\u5173\u6CE8\u6709\u793C-\u52A0\u5BC6");
var OＯ0$ = "jsjiami.com.v6",
  OＯ0$_ = ["\u202EO\uFF2F0$"],
  O00O = [OＯ0$, "AQln", "AMOxw44=", "d0FTw68e", "HsO7w5rDsFU3", "wocJaw==", "w5MsQwrDrw==", "FMO0w6PClMKkwqfChlnCjQ==", "aTjDvmXCrRs=", "Sm3CvUHDsQ==", "wq0GCSXClsKZ", "EjxFDcKY", "H8ODw6/DhXnDjHE=", "wpkDbWXCv8Kyw4vCjA==", "wp1GfEMi", "w7nCvsO1W8OI", "IsKWw4TCoiY=", "KMOPwqHCrMO6", "w6AQwro=", "dyBTwpAA", "5Lq35LmB5rCs5pyZ6LyV5Zqx5pao5o+MIw==", "NsKwwqHCrA==", "wplqVxQ=", "w5AvwpvDnw==", "w5MiQg0=", "wrjCqzHDrl8=", "wrIAw6Vlw5U=", "I8ORwpnDigk=", "wqbDlDHDsD4=", "bgXCmcKCfA==", "d8KuwpHCqA4=", "wq0Fwqxf", "WT59TzfDjHF1w7c=", "HcOHw7nDoXM=", "w4vCv8OAwoDCj8OZw55/QA==", "wrbCpsK1NA==", "HF4aw59l", "wqQ3PCfDmA==", "bMKDMMO6", "w6/Dt+Wkjui1mjVW5Y+g5Zusw5vDkw==", "OiHCqA==", "RsKyw6oDwrzDv8KKKMOm", "IRbCnQ==", "I8OPw7jCtXY=", "wo4yNhPCrQ==", "P0ofH8KHEg==", "I1ALMg==", "w5nCu8OCwoXCiMOdw5ZtUMKEVTrCjcKdw6LDmDcQTg43ZsKyGiUEw6fCvcOELnEIeA==", "w6tMTQ==", "LCbDomVbL8Oww6PDq8KswrXCnFjDtMKPw7ofworDq8OdEjTClAXDkjcfwpDDvsK3wqXDuMONw4/ClMOpw6VEPEnDt8Ogwqw+w73CuAwkwrFqbkPCgArCuzR+w50Ywp/CgMOGQsOGPcKzw5t5wr0NwqY=", "AMKDwq/Cg0fClg==", "FhB+XksCwpdqE10Dwr0=", "bnrCh8KCYg==", "HBVIasK6", "6Iy55b+M5aal5ZCE77y+", "woEkZDYyblYww73orKfms7Hlp47otJjvvb3orZfmob7mnIvnvLjotozphrHorrs=", "w7p0wrjDuw==", "IsKdw5XDnxvCn8Orw5DDsVIpeRpvw7jCn8OLFVnCmA==", "F8OOwqbDmnfDkGbChGTDlMOpAcK+w4Esw4jCnk3ClsKMwrxFV8OnOEpAMsKrw4dwO8OKw4wKw5TCvXFIcMKRUjRvYDtUwpHCncOdFMKPw7VyacOpFDdZwpQsw4Mewq4Lwr0nMk96w7I=", "w5Avw7rCvhw=", "woguwq1pbw==", "w4Frw4PDtXU=", "w653UxBm", "wp3Dt8OxZRU=", "ZMKqNcOSWQ==", "dyBNw7Fh", "CsODw78=", "AnRIasOF", "wpLChm5PWw==", "HBU3FQ==", "w5rDu1A=", "a8OmCAcb", "wrd/wo9D", "ZcOBw4Jcw6g=", "w5Embiwz", "a8O4aXh6", "wprCtCl1wqY=", "w7AITRAZ", "w4rCrsOTwpvCtsORw4V9", "TSXCrw==", "wpLCmA8wJA==", "KMORw4DCrMO6", "D8O0w6XCjcK5w7rDgBDClg8kVkjDtMKNFB7Cp0gXIcODw4vDqzfDp8OHMcKawodnwrMkU8OdCMK9blJuTSBL", "wqQ3Q0Y=", "wodqV2s=", "wpEOIV/CicKzw4rDhSvDsENreFnDj8K3wpjDizsawo3CnxPClsKfSmLDscO1IMO3FzTClcOpwoUkK33CuMKzI27DvcOOwr5tDQPDpz9ww5bDgzvDvAHDph3DqgHDgcO2w5/CiErDtsKGQmZl", "JjFGIQ==", "w5vDp1A=", "wrzCpsKsMA==", "44Kc5o6v56en44C26K+v5YaD6I2F5Y+N5LmF5Lmw6LSI5Y6P5LuzwpjCs8KBWXjCkMKW55qF5o+o5L6955WpcnwLwoJWIueasOS7ruS7i+espeWLteiOu+WPsg==", "UsODTEdYw6fCkMObe8ORwpQOTCbDrHFFwqAnGsKgYCbDqsOZFnslX1vCkz9NZDjDtFfCrjFHwod3Tg==", "w50wwowXKA==", "acORw7DCqHE=", "ODFGP2k=", "wqQpQyfCpw==", "UMKow64=", "extAFg==", "esOVK8OM", "CkXDhsKjwrPCkU5/GXXCs8OGVQ3ClsOiw5gSb1MODMOrCsOwwobDqcKhF8OCw4IeDcKzCMO2BnAjw4rDgcKvw5vDvxHDmA==", "w7MSez7Cnho=", "w6XDjsOi", "wpLChg8uRQ==", "CMO/w53DpA==", "IFEKM8KbB0twTw==", "wqQpQ0bCuQ==", "P0of", "wqAZSlcBCw==", "wqPCjsKv", "6I2u5Y+I5p+v5YqH5aSP6LelNsO3", "d8Kww7DCtnE=", "AnRIasK6", "aSM+", "wqnClMKmAcKdw7JLDMKIw7pawrvDh1fDvE3DuT7DlGbDp2VfTMKNw73CpsOILTTDvMK6wqvChcOgw5XCuFxNwp5nw5fDjsOJGHbCqMKaR0LDtQ==", "K8KKw5XDhh7DjMKwwobDiFc=", "w4vCtyPDjGENwp3DhsOww4ULw5pmEsOGWT/DvHE9w4Jew50XKMO0fQTClWprCwfCgMK5cgEmLcOXwoDDqsKZLsKpwrPDnjdv", "ZW0ge8O/w7zChTRJw64Jwqt0w78lw7lPUsKCTEx0cCZgLk0Kw5NfwrLDksOMwoosw5LCiMOpD8KDwpYLwobCk0IkwpF0a8KswqnCncOfcwxqw5hNY3bDlsO9wrgiw6QkwqvDjgYLD2INb33DnsOVw4pZwqbCugtrwp7Dp8KGNsK6wo8AL1JN", "w6nDu8O9w5nCrg==", "w60Pwq1LccKowpNvwoADQFfCi8OWwqvCmUU8wpPDswMgw680Tn8MwpVxLFAnwrM=", "w6fDgcKKW8OI", "wopcKsKUA0LCpcKGwoTDksKvEcKPQh3Cl8OXw5jDviNVF1pJwr5ywpUpw7/CqcK8wpFnFGfDt8K1TW/DqsOSw5wjw5XChXZbTFIFwotxw6jDjlTDujNURlXDtcO8P8KCw6XCisOYw6zCnhoo", "fF0pLcK9wqXDmzRYwqcfwrR2w7hvwqhFWMKCEmNEbwc9ZkkKw5kHw6/DjcKLw6pqwonDgMOjTcOnw59Iw47Cm0kuw54gK8Oxw7fDn8KRN006woVBIyvDksOiw6d2w6I9wrXDmAoSBjsQeCfChsKKwpUEw4rCgS1RwpHCqsKfN8K8wp42L0NSwrdEVl4Xw7HDqsOAwqLDsQgaHsOjwrhEwq/Dq1J/QcKMw50QwqNMd0B9w5nDvhxrP8KcS2ZLWcOhwoF1w7Yqw7jCiMK8McKFNMKYKCfDumTDkwrDmcOcw7pnLmY/w452wp9pccKSVRHDosKxwpjDl1nCviwNaXZtworCssO+VsO7PsOKY8KaGhDDrxs1EcK7w6sKw5XDtiYUw4rCqR9TwqrDqcKsDsKbwr5ew6lOwp/DpiA6w4FxazDCmSrCp8KTV8KBw4o=", "d8Kuw7DCtg4=", "GVplIRXChQ==", "w6x9fkk=", "6I+k5Y+H5p2G5Yix5aSb6LeCSgU=", "w5klHDHDq3bCg0PDtmvDrTjDssKzw591wqlSYT9Cc8OyK8ODAFAlwrgnw7B6U2J0woJaGx/Dk2Byw4TDmMOUw7F4wrRIbsOSw5bDvRR5GnYQwojDlMOGw67DucKmOzrCpMOdw6drdQ==", "w57DoEMcDMOZYcOvZsOELsO+w6rCgxTCn0TCgsOJw78xVUvCjnR1e8OVFDnDpQ==", "TcKtEsOQcA==", "wrMFwrIgLw==", "esKqK8OSWQ==", "w5A5QxDDpH/CmQjDhQ==", "wpBTKHLCsw==", "PUQVPw==", "w45Ow7rCoH0=", "w7wewq9UfQ==", "GX7CnmJ1", "wpJbY8Kl", "wocVNmtl", "w5Axw7rCvn0=", "wr3CkW1KwprDkx12wqfCum8lwobCrBEuQ8OjUsOWw5lZwoxFQsKUw4vClDnDucOIIxxnw5zClMOowrI7cxHDnGQQw5hgGsKcN8Kpf8ORw4XDnMOpahM=", "w6guwp3CplBww4PClsKfQl51MlzCkw/CkXrCkSNdCidCOD1mw5PCmcKYPSBcw6VLwpFGEXonwp4XBMOoHcOSDMKvbyTDhw==", "QCnCvMKkW8O+w48xw47Duw==", "wrnChMKmBsKMw6ltBg==", "wprCtsKUworCjcOXw5J3TcOWWmXChcOcw7DCiSNRQQQrf8OJCiUbw6vCvMOJfCRdMsKuwpbCgcOXLlZlw6U/IsOmw53CmsKKYcOMVsOXw75OasKeDsKywr8PwovDlnPDuzfDvMOAw6YiAybDvsOqw5hcwo5FQghfbn8Two3DncKYwrTDiQkMwowAw5PDtw==", "wqbDilDDsD4=", "w4PCtCs=", "YMKNOcOm", "bsKNOg==", "BwHCgGIK", "wrN6wqwgMQ==", "woQ/JGrCtg==", "VcK5w5/CisKs", "wqFWKUtQeg==", "wptrwp3DjnjCpcK9wqjDqcO9wr9xXw==", "B1/DhA==", "ZsOFIsOMRAbCq8OVEVzCk0EYw5oVU8KWwq4=", "w53CpcOE", "NksO", "V8K+wqDDqsKiXMO5", "Eg5h", "ZwXChMKBYsOAw6Qbw4/DkMKpwr1TOHI=", "YcKYwpk=", "IcOPw53CscKFwpfCsGzCvCUVZyjDjMOu", "Z8KMKw==", "YF9Ow6wew5jDlsOFw7rDvRMtw67DmzE=", "SDnChsKiScOy", "Wj98Tg==", "w7zDkGgoOsKhG8KH", "MyDCuQ==", "KHXDrcKXwoXDqTQX", "w6k+wofCoUVtw40=", "Blp7", "wrpxwo1NV8Kl", "aTjDu3XCsxzCvQ==", "OsKcw5LDhw==", "QcKEwrTCg1/Dn8Ks", "w6Ybwr7Ci03Csn8=", "wppxwo1NV8KlAsON", "PxzCjMKXZ8O/wrg=", "XMOeVENOwq8=", "wqHCjsK/", "BBB7GVI=", "w6AiXhLDo33CgyTDuA==", "asKKw5nDhgzChcKFwq/DiOivhOawjOWkrei1jO+9jeitpeagu+acgOe8p+i3memEuOivnQ==", "K3hgLMKkd8O5Hy3CpMKncsO0w6R/wpLDvUbCrcKvfyDCpsOdJHQeA8KjwpAaw5kVacKVZUHDqEQaeSzDvA==", "5bmC6ZCf6ZOn5o6f77+zwoFGLcK2wrk8JMOEw7ETJR3CrlDClcKcXsOOT0jCl8KQwoUuw7/Dki4We8KqwpfCig==", "XUo9WgwGw5ckFzQ=", "woPCiMKQGg==", "fMOTccKh", "IArCnQ==", "DFDDn8K2", "ZMKJw5clwoM=", "AkAEwqB7", "extAFgg=", "aMKZwog=", "e8Ofwr1cw7Y=", "wrVxwoU=", "wpLDp25P", "HEnCq8OC", "C8O7w53DoVg3w7Y=", "wrgRZA==", "w4AiXhLDo30=", "wqfCgG9fwpvCmlc=", "ecOYV1xCwrjDtcKwKw==", "IXQ9w7VYwpRR", "Lm1gP8K/", "w6M6wofCpkw=", "KmJwOcKv", "IsOpwrvColk=", "w7nDhXhcTw==", "w5krwpA=", "w64WUw5m", "AQIOAcKdwr0o5b+V5aay44CV5Lum5Lms6LW85Y20", "wqbCj8KsB8KR", "w5jDp8OZAMK2ZDxs", "f8Ojwpdhw7d7CsOE", "ZMOVVMOSRw==", "w7XDs8OowpAjWcOL", "Bx/CgHxr", "w6fDn8O1W8K3", "HsOSw7nDu3jDmXzDj1c=", "w6I0wpQ=", "ZUlJTg==", "w5vDvcOd", "wq3CtlIa", "44KR5o6u56ew44O+T8KpcW4Uwo/ltZ3lpZ/mlKU=", "5LmH5Lm66LSq5Y+g", "T35mw4Up", "w48ufzQYL3oF", "wrYiw5FGwqtvZ34=", "w6fDhXhcLg==", "C0LDvMK8wqTDjg==", "PhzClMKWW8OjwqkYVXg=", "LW15OQ==", "woA+w5tfwoxr5be45aSq5pSAw5PDnFU=", "BmIuw6JkwoZZHg==", "BMOIw6/Dt24=", "MsOzw7TCj8KEwqHCglo=", "extAdxY=", "wod0KHUE", "VcOGw5/DtcON", "Sm3DnF/Cjg==", "U8KzDMOQEQ==", "Ji9YIRY=", "w7AIU29m", "ODEnPw==", "w60Rwq0=", "Gw9w", "TyvCpcKo", "FsKX5aSJ6LSSCsO95Yyg5ZiUI8KU", "wqICEyHCig==", "GcOm5aap6LWPw7PCuOWNvOWarsKlw70=", "C8OPw6XDs3rDkmw=", "woc+w5pR", "VcKJwq/Cl2HDisK9wq8YFV0WScOCGcOeHjXCtG4=", "QDrCuMOgXsO/w5Q4", "cAXCh8Kc", "w4EKwqLClA==", "AcOhw73CjsKv", "ScOfV0d0wrzDj8KERsOcwpoNBxTCpHRNw6IrAg==", "FkFJSQ==", "ZMKqNcKz", "YCA2wpBj", "acORw7DDlw==", "wpohJAs=", "OgtEdQ==", "6I2i5b+n5aWC5ZKb77+9", "PMO3w4TDnQ==", "5bSC57u75YW05rC06L6l5Lqq5ouA6IKu5re15Yiq57mH5py/5Li0772/5rKQ5p6+5aek5YiH", "e8KgwqNCwok=", "dcKHd2Z6", "wo4vwo4aDBM=", "w73Do8OQwpYyWcOROcOndQ==", "w58UwrzDtXU=", "wp7CsMKZLcKm", "w4TDq8OJHsKUcQ==", "RyXCpMKhQsOgw54s", "wropQ0bCuQ==", "w6nCmsKCwqbDkQ==", "C8Ovw7Y=", "5beI57m45YWL5rOf6K+O5bmK6ZGF77+45om+6KO45Yyj5YST5pKv5LyX", "TCVjSjbDnEt7w6HCrg==", "wqbDlDHDsEE=", "NUQUKcKQ", "esKJw4k7w6I=", "WsK2w6wpwr3DvMKG", "w7nDmwcjLg==", "D0LDlQ==", "BcKmw7DCn1g=", "WcKpw78=", "NGR0ccO9w7LCiTxE", "w6URwqTCig==", "BwFlA0M=", "w5LDr8OOCg==", "w6o6wofCpA==", "wrtRFU1aeFUBw4c=", "BVjDlMKnwpTDghU8HQ==", "wpZRw5J3Dg==", "FcOlw6LCiMKmwrQ=", "w5HDp8OcH8KLUT5oNSg=", "XcO/CsOnbTjCrcOm", "SsO5EMOqfiPCkMO7B2s=", "Fl9JScOC", "wqDCosKyIEkS", "BF7DnsK/wq/DnCI/HGA=", "AijDisKjWg==", "woDDkcO4Ug==", "wqRKAA==", "PxzCicKHecO4", "wr9lN8OsLQ==", "w4TDsUQZE8KX", "wozCmA8wRQ==", "wqwAwoQEwqo=", "wrjDlE7DrkE=", "jdZsjzAiaIzmir.cWBqnom.v6RGN=="];
if (function (_0x446264, _0x36438c, _0x48d4cb) {
  function _0x4ddeff(_0x2474b8, _0x20c839, _0x4c59d2, _0x31e895, _0x2e8348, _0x375fd1) {
    _0x20c839 = _0x20c839 >> 8, _0x2e8348 = "po";
    var _0x236474 = "shift",
      _0x5a8594 = "push",
      _0x375fd1 = "\u202E";
    if (_0x20c839 < _0x2474b8) {
      while (--_0x2474b8) {
        _0x31e895 = _0x446264[_0x236474]();
        if (_0x20c839 === _0x2474b8 && _0x375fd1 === "\u202E" && _0x375fd1["length"] === 1) {
          _0x20c839 = _0x31e895, _0x4c59d2 = _0x446264[_0x2e8348 + "p"]();
        } else if (_0x20c839 && _0x4c59d2["replace"](/[dZzAIzrWBqnRGN=]/g, "") === _0x20c839) {
          _0x446264[_0x5a8594](_0x31e895);
        }
      }
      _0x446264[_0x5a8594](_0x446264[_0x236474]());
    }
    return 1044973;
  }
  ;
  return _0x4ddeff(++_0x36438c, _0x48d4cb) >> _0x36438c ^ _0x48d4cb;
}(O00O, 151, 38656), O00O) {
  OＯ0$_ = O00O["length"] ^ 151;
}
;
function O0QQ(_0x4def92, _0x3db317) {
  _0x4def92 = ~~"0x"["concat"](_0x4def92["slice"](1));
  var _0x147aee = O00O[_0x4def92];
  if (O0QQ["OOQOQ0"] === undefined) {
    (function () {
      var _0x4d8fde = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
      var _0x103eef = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      _0x4d8fde["atob"] || (_0x4d8fde["atob"] = function (_0x5f26ea) {
        var _0x14c845 = String(_0x5f26ea)["replace"](/=+$/, "");
        for (var _0xbe2763 = 0, _0xa48a2c, _0x4741bf, _0x592de3 = 0, _0x2d2769 = ""; _0x4741bf = _0x14c845["charAt"](_0x592de3++); ~_0x4741bf && (_0xa48a2c = _0xbe2763 % 4 ? _0xa48a2c * 64 + _0x4741bf : _0x4741bf, _0xbe2763++ % 4) ? _0x2d2769 += String["fromCharCode"](255 & _0xa48a2c >> (-2 * _0xbe2763 & 6)) : 0) {
          _0x4741bf = _0x103eef["indexOf"](_0x4741bf);
        }
        return _0x2d2769;
      });
    })();
    function _0x4c34c6(_0x3a2605, _0x3db317) {
      var _0x4e0182 = [],
        _0x2f13c7 = 0,
        _0xe15162,
        _0x1e1f69 = "",
        _0x2da40e = "";
      _0x3a2605 = atob(_0x3a2605);
      for (var _0x2533a2 = 0, _0x857b9a = _0x3a2605["length"]; _0x2533a2 < _0x857b9a; _0x2533a2++) {
        _0x2da40e += "%" + ("00" + _0x3a2605["charCodeAt"](_0x2533a2)["toString"](16))["slice"](-2);
      }
      _0x3a2605 = decodeURIComponent(_0x2da40e);
      for (var _0x5b9b9 = 0; _0x5b9b9 < 256; _0x5b9b9++) {
        _0x4e0182[_0x5b9b9] = _0x5b9b9;
      }
      for (_0x5b9b9 = 0; _0x5b9b9 < 256; _0x5b9b9++) {
        _0x2f13c7 = (_0x2f13c7 + _0x4e0182[_0x5b9b9] + _0x3db317["charCodeAt"](_0x5b9b9 % _0x3db317["length"])) % 256;
        _0xe15162 = _0x4e0182[_0x5b9b9];
        _0x4e0182[_0x5b9b9] = _0x4e0182[_0x2f13c7];
        _0x4e0182[_0x2f13c7] = _0xe15162;
      }
      _0x5b9b9 = 0;
      _0x2f13c7 = 0;
      for (var _0x254c27 = 0; _0x254c27 < _0x3a2605["length"]; _0x254c27++) {
        _0x5b9b9 = (_0x5b9b9 + 1) % 256;
        _0x2f13c7 = (_0x2f13c7 + _0x4e0182[_0x5b9b9]) % 256;
        _0xe15162 = _0x4e0182[_0x5b9b9];
        _0x4e0182[_0x5b9b9] = _0x4e0182[_0x2f13c7];
        _0x4e0182[_0x2f13c7] = _0xe15162;
        _0x1e1f69 += String["fromCharCode"](_0x3a2605["charCodeAt"](_0x254c27) ^ _0x4e0182[(_0x4e0182[_0x5b9b9] + _0x4e0182[_0x2f13c7]) % 256]);
      }
      return _0x1e1f69;
    }
    O0QQ["QO0O0O"] = _0x4c34c6;
    O0QQ["O0O0OO"] = {};
    O0QQ["OOQOQ0"] = !![];
  }
  var _0xf309bd = O0QQ["O0O0OO"][_0x4def92];
  if (_0xf309bd === undefined) {
    if (O0QQ["QO0OQQ"] === undefined) {
      O0QQ["QO0OQQ"] = !![];
    }
    _0x147aee = O0QQ["QO0O0O"](_0x147aee, _0x3db317);
    O0QQ["O0O0OO"][_0x4def92] = _0x147aee;
  } else {
    _0x147aee = _0xf309bd;
  }
  return _0x147aee;
}
;
const notify = $["isNode"]() ? require("./sendNotify") : "";
const jdCookieNode = $[O0QQ("\u202B0", "WUKK")]() ? require(O0QQ("\u202B1", "0iqg")) : "";
let cookiesArr = [],
  cookie = "";
let follow = process[O0QQ("\u202E2", "OB7!")][O0QQ("\u202E3", "O)9I")] ? process[O0QQ("\u202E4", "R!$f")]["M_FOLLOW_SHOP_ARGV"] : "";
let SHOP_ID = process[O0QQ("\u202E5", "cbt^")][O0QQ("\u202E6", "2P3(")] || "";
let VENDER_ID = process["env"]["VENDER_ID"] || "";
let prizeData_Array = [];
let CookieNum = 4;
if (process[O0QQ("\u202E7", "M!eS")][O0QQ("\u202E8", "fLZf")] && process[O0QQ("\u202E9", "2P3(")][O0QQ("\u202Ea", "usj4")] != 4) {
  CookieNum = process[O0QQ("\u202Bb", "G97Z")][O0QQ("\u202Bc", "&uCy")];
}
if ($[O0QQ("\u202Ed", "fLZf")]()) {
  Object["keys"](jdCookieNode)["forEach"](OQO0O => {
    cookiesArr[O0QQ("\u202Be", "NCIG")](jdCookieNode[OQO0O]);
  });
  if (process[O0QQ("\u202E4", "R!$f")][O0QQ("\u202Bf", "p$fE")] && process[O0QQ("\u202B10", "v4Ks")][O0QQ("\u202E11", "OB7!")] === "false") console["log"] = () => {};
} else {
  let cookiesData = $[O0QQ("\u202E12", "d%y^")]("CookiesJD") || "[]";
  cookiesData = jsonParse(cookiesData);
  cookiesArr = cookiesData[O0QQ("\u202B13", "TlRM")](QQO00 => QQO00[O0QQ("\u202E14", "3tiA")]);
  cookiesArr[O0QQ("\u202B15", "9i21")]();
  cookiesArr[O0QQ("\u202E16", "y#Yk")](...[$[O0QQ("\u202B17", "DPIv")]("CookieJD2"), $[O0QQ("\u202E18", "#B5P")](O0QQ("\u202B19", "3tiA"))]);
  cookiesArr[O0QQ("\u202E1a", "kGEU")]();
  cookiesArr = cookiesArr[O0QQ("\u202B1b", "mw6S")](OQOQO => OQOQO !== "" && OQOQO !== null && OQOQO !== undefined);
}
let time = Date[O0QQ("\u202E1c", "tL%o")]();
let argv = follow[O0QQ("\u202B1d", "M!eS")]("_");
SHOP_ID = argv[0];
VENDER_ID = argv[1];
!(async () => {
  var QQOQ0 = {
    "QOO0": O0QQ("\u202E1e", "iXjp"),
    "OOQ0": O0QQ("\u202E1f", "y#Yk"),
    "QOOOQ": "\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\u4EAC\u4E1C\u8D26\u53F7\u4E00cookie\n\u76F4\u63A5\u4F7F\u7528NobyDa\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6",
    "QQO0Q": O0QQ("\u202B20", "wGQY"),
    "QOOOO": O0QQ("\u202B21", "vskV"),
    "OO00Q": function (Q0QO0, O00O0) {
      return Q0QO0 || O00O0;
    },
    "OO0QQ": function (O0Q0QO, O0Q00O) {
      return O0Q0QO < O0Q00O;
    },
    "OOOO0": function (O00OOQ, QOO00O) {
      return O00OOQ !== QOO00O;
    },
    "OO00O": function (QOO0QQ, QOOOO0) {
      return QOO0QQ + QOOOO0;
    },
    "OQO00": function (O00OOO) {
      return O00OOO();
    },
    "OQOQ0": function (QOO0QO, QQQO0Q) {
      return QOO0QO + QQQO0Q;
    },
    "OO0QO": O0QQ("\u202B22", "M!eS"),
    "QQOQQ": function (QQQOQQ, QQQO0O) {
      return QQQOQQ !== QQQO0O;
    },
    "QQO0O": O0QQ("\u202E23", "QN5Z"),
    "QQOQO": "30.",
    "Q0QOQ": function (QQQOQO, O00OQ0, QOOQQQ) {
      return QQQOQO(O00OQ0, QOOQQQ);
    },
    "Q00O0": "114.",
    "Q0QOO": function (QOOQ0Q, O0QQQQ, O0Q000) {
      return QOOQ0Q(O0QQQQ, O0Q000);
    },
    "QQQO0": function (O0QQ0O) {
      return O0QQ0O();
    },
    "QOOQ0": function (O0QQ0Q, O0QOOO) {
      return O0QQ0Q === O0QOOO;
    },
    "QOO00": O0QQ("\u202E24", "c&d8")
  };
  if (!cookiesArr[0]) {
    $[O0QQ("\u202B25", "kGEU")]($[O0QQ("\u202B26", "OB7!")], QQOQ0[O0QQ("\u202B27", "FjHA")], QQOQ0[O0QQ("\u202E28", "^[SV")], {
      "open-url": QQOQ0[O0QQ("\u202B29", "NCIG")]
    });
    return;
  }
  console[O0QQ("\u202B2a", "2P3(")](QQOQ0[O0QQ("\u202E2b", "ODwz")] + VENDER_ID);
  if (QQOQ0["OO00Q"](!SHOP_ID, !VENDER_ID)) {
    $[O0QQ("\u202B2c", "3tiA")]("\u65E0\u6548\u7684\u53C2\u6570" + follow);
    return;
  }
  for (let QOO0Q0 = 0; QQOQ0["OO0QQ"](QOO0Q0, CookieNum); QOO0Q0++) {
    UA = "JD4iPhone/167853%20(iPhone;%20iOS;%20Scale/3.00)";
    try {
      if (QQOQ0["OOOO0"](O0QQ("\u202E2d", "AzB0"), O0QQ("\u202E2e", "kGEU"))) {
        let O00Q = $[O0QQ("\u202E2f", "Qtm)")](QQOQ0["QOO0"]) || "[]";
        O00Q = jsonParse(O00Q);
        cookiesArr = O00Q[O0QQ("\u202B30", "xDXi")](QQ00 => QQ00[O0QQ("\u202B31", "iXjp")]);
        cookiesArr[O0QQ("\u202E32", "vskV")]();
        cookiesArr["push"](...[$["getdata"](O0QQ("\u202B33", "mw6S")), $[O0QQ("\u202E12", "d%y^")]("CookieJD")]);
        cookiesArr[O0QQ("\u202E34", "^[SV")]();
        cookiesArr = cookiesArr["filter"](QQQO => QQQO !== "" && QQQO !== null && QQQO !== undefined);
      } else {
        if (cookiesArr[QOO0Q0]) {
          cookie = cookiesArr[QOO0Q0];
          $["UserName"] = decodeURIComponent(cookie[O0QQ("\u202E35", "wGQY")](/pt_pin=([^; ]+)(?=;?)/) && cookie[O0QQ("\u202E36", "d%y^")](/pt_pin=([^; ]+)(?=;?)/)[1]);
          $[O0QQ("\u202B37", "wGQY")] = QQOQ0[O0QQ("\u202B38", "j5V&")](QOO0Q0, 1);
          $["isLogin"] = !![];
          $["nickName"] = "";
          await QQOQ0[O0QQ("\u202E39", "p$fE")](TotalBean);
          console[O0QQ("\u202B3a", "0iqg")](QQOQ0[O0QQ("\u202B3b", "7M#i")](O0QQ("\u202B3c", "Zay#") + $[O0QQ("\u202E3d", "tL%o")] + "\u3011", $[O0QQ("\u202B3e", "L6L#")] || $[O0QQ("\u202B3f", "ODwz")]) + QQOQ0[O0QQ("\u202E40", "O)9I")]);
          if (!$[O0QQ("\u202B41", "WpP3")]) {
            if (QQOQ0[O0QQ("\u202E42", "v4Ks")](QQOQ0[O0QQ("\u202B43", "L6L#")], QQOQ0["QQO0O"])) {
              console["log"]("" + JSON[O0QQ("\u202E44", "j5V&")](err));
              console[O0QQ("\u202B45", "d%y^")]($[O0QQ("\u202B46", "Zay#")] + QQOQ0["OOQ0"]);
            } else {
              $[O0QQ("\u202B47", "L6L#")]($[O0QQ("\u202E48", "AzB0")], O0QQ("\u202B49", "#B5P"), O0QQ("\u202B4a", "*xVu") + $[O0QQ("\u202E4b", "&uCy")] + " " + ($[O0QQ("\u202E4c", "7M#i")] || $[O0QQ("\u202E4d", "7VTq")]) + "\n\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\nhttps://bean.m.jd.com/bean/signIndex.action", {
                "open-url": QQOQ0[O0QQ("\u202E4e", "p$fE")]
              });
              if ($[O0QQ("\u202E4f", "OB7!")]()) {
                await notify[O0QQ("\u202E50", "kGEU")]($[O0QQ("\u202B51", "wGQY")] + O0QQ("\u202E52", "7VTq") + $[O0QQ("\u202B53", "^[SV")], "\u4EAC\u4E1C\u8D26\u53F7" + $[O0QQ("\u202B54", "j5V&")] + " " + $[O0QQ("\u202B55", "usj4")] + "\n\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6cookie");
              }
              continue;
            }
          }
          latWs = QQOQ0["OQOQ0"](QQOQ0[O0QQ("\u202E56", "NCIG")], QQOQ0["Q0QOQ"](random, 99999, 10000));
          lngWs = QQOQ0[O0QQ("\u202B57", "WUKK")](QQOQ0[O0QQ("\u202E58", "2P3(")], QQOQ0[O0QQ("\u202B59", "9i21")](random, 99999, 10000));
          await QQOQ0[O0QQ("\u202B5a", "G97Z")](main);
          await $["wait"](5000);
        }
      }
    } catch (O00O0O) {
      if (QQOQ0[O0QQ("\u202B5b", "M!eS")](QQOQ0[O0QQ("\u202E5c", "7M#i")], O0QQ("\u202E5d", "M!eS"))) {
        console[O0QQ("\u202E5e", "#B5P")](JSON["stringify"](data));
      } else {
        $[O0QQ("\u202E5f", "M!eS")]("", "\u274C " + $[O0QQ("\u202E60", "fLZf")] + O0QQ("\u202B61", "mw6S") + O00O0O + "!", "");
        continue;
      }
    }
  }
})()[O0QQ("\u202E62", "K]2M")](QOO0OQ => {
  $[O0QQ("\u202E5e", "#B5P")]("", "\u274C " + $[O0QQ("\u202B26", "OB7!")] + O0QQ("\u202B63", "FjHA") + QOO0OQ + "!", "");
})[O0QQ("\u202E64", "j5V&")](() => {
  $[O0QQ("\u202B65", "7VTq")]();
});
async function main() {
  var O0Q0QQ = {
    "OO0Q0": O0QQ("\u202B66", "DPIv"),
    "Q00OO": function (O0Q00Q, O0QOO0) {
      return O0Q00Q(O0QOO0);
    },
    "Q0QQ0": function (O0QO00, O0QOQ0, QOOO00) {
      return O0QO00(O0QOQ0, QOOO00);
    },
    "O0OQQ": "getShopHomeActivityInfo",
    "Q0Q00": O0QQ("\u202B67", "fLZf"),
    "O0O0Q": "shop_app_home_home",
    "QQQOQ": function (QOQQO0, QO0QOQ) {
      return QOQQO0 !== QO0QOQ;
    },
    "QOO0Q": O0QQ("\u202E68", "fLZf"),
    "QOO0O": O0QQ("\u202E69", "d%y^"),
    "QQQOO": function (O00OQQ, O00O0Q) {
      return O00OQQ == O00O0Q;
    },
    "QOOQQ": function (QOOOQ0, QQQOOO) {
      return QOOOQ0 === QQQOOO;
    },
    "QQ0O0": "OO0Q",
    "OO0OO": O0QQ("\u202B6a", "usj4"),
    "OOQQ0": O0QQ("\u202B6b", "mw6S"),
    "OO0OQ": "F10000",
    "OOQ00": O0QQ("\u202E6c", "(K(@"),
    "OQ0QQ": O0QQ("\u202B6d", "O)9I"),
    "OQ00Q": "vip",
    "OQOO0": O0QQ("\u202E6e", "&uCy"),
    "OQ0QO": O0QQ("\u202E6f", "DPIv"),
    "OQ00O": function (QQQ00Q, QO00OO) {
      return QQQ00Q === QO00OO;
    },
    "QOOQO": O0QQ("\u202E70", "xDXi"),
    "Q0000": function (QO0QQ0, QOOOOQ) {
      return QO0QQ0 <= QOOOOQ;
    },
    "Q00Q0": function (QO0Q00, O0QOOQ) {
      return QO0Q00 - O0QOOQ;
    },
    "Q0QQO": O0QQ("\u202E71", "TlRM"),
    "O0OQ0": "OOQQ",
    "Q0Q0O": function (QQ0OQO, QQ0O0O) {
      return QQ0OQO + QQ0O0O;
    },
    "Q0QQQ": O0QQ("\u202E72", "xDXi"),
    "O0O00": O0QQ("\u202E73", "j5V&"),
    "Q0Q0Q": O0QQ("\u202B74", ")qY)")
  };
  let QQ0OQQ = await O0Q0QQ[O0QQ("\u202E75", "ODwz")](task, O0Q0QQ[O0QQ("\u202E76", "mw6S")], {
    "shopId": SHOP_ID,
    "source": O0Q0QQ["Q0Q00"],
    "latWs": latWs,
    "lngWs": lngWs,
    "displayWidth": "1170.000000",
    "sourceRpc": O0Q0QQ["O0O0Q"],
    "lng": lngWs,
    "lat": latWs,
    "venderId": VENDER_ID
  });
  let O0QOQO = QQ0OQQ[O0QQ("\u202E77", "0G46")][O0QQ("\u202B78", "WpP3")];
  if (QQ0OQQ) {
    if (O0QOQO) {
      if (O0Q0QQ["QQQOQ"](O0Q0QQ[O0QQ("\u202E79", "d%y^")], O0Q0QQ["QOO0O"])) {
        if (O0Q0QQ[O0QQ("\u202B7a", "tL%o")](QQ0OQQ[O0QQ("\u202E7b", "L6L#")][O0QQ("\u202E7c", "fLZf")], !![])) {
          if (O0Q0QQ[O0QQ("\u202E7d", "*xVu")](O0Q0QQ[O0QQ("\u202B7e", "R!$f")], O0Q0QQ["QQ0O0"])) {
            console[O0QQ("\u202E7f", "usj4")](O0QQ("\u202B80", "mw6S"));
            let QQ0O0Q = await task(O0QQ("\u202E81", "NCIG"), {
              "follow": O0Q0QQ[O0QQ("\u202E82", "HNHi")],
              "shopId": SHOP_ID,
              "award": O0QQ("\u202B83", "cbt^"),
              "sourceRpc": O0Q0QQ[O0QQ("\u202E84", "FjHA")]
            });
            if (QQ0O0Q[O0QQ("\u202E85", "FjHA")] === O0Q0QQ[O0QQ("\u202E86", "p$fE")]) {
              console["log"](QQ0O0Q[O0QQ("\u202E87", "OB7!")]);
            } else {
              if (O0Q0QQ[O0QQ("\u202B88", "y#Yk")] !== O0Q0QQ["OQ0QQ"]) {
                console[O0QQ("\u202E89", "FjHA")](JSON[O0QQ("\u202E8a", "(K(@")](QQ0O0Q));
              } else {
                $[O0QQ("\u202E8b", "#B5P")]();
              }
            }
          } else {
            data = JSON[O0QQ("\u202E8c", "M!eS")](data);
            if (data && data[O0QQ("\u202B8d", "L6L#")] && JSON["stringify"](data[O0QQ("\u202B8e", "d%y^")]) === "{}") {
              console["log"](JSON[O0QQ("\u202B8f", "WUKK")](data));
            }
          }
        }
        if (QQ0OQQ["result"][O0QQ("\u202B90", "OB7!")]) {
          body = {
            "giftType": O0Q0QQ["OQ00Q"],
            "follow": 0,
            "shopId": SHOP_ID,
            "activityId": O0QOQO,
            "sourceRpc": O0Q0QQ[O0QQ("\u202E91", "3tiA")],
            "venderId": VENDER_ID
          };
        } else if (QQ0OQQ[O0QQ("\u202E92", "usj4")][O0QQ("\u202E93", "L6L#")]) {
          body = {
            "follow": 0,
            "shopId": SHOP_ID,
            "activityId": O0QOQO,
            "sourceRpc": "shop_app_home_window",
            "venderId": VENDER_ID
          };
        }
        $["shopId"] = SHOP_ID;
        $[O0QQ("\u202E94", "O)9I")] = VENDER_ID;
        $[O0QQ("\u202E95", "O)9I")] = O0QOQO;
        let QOOOOO = await taskNoSign();
        if (O0Q0QQ[O0QQ("\u202E96", "(K(@")](QOOOOO[O0QQ("\u202B97", "QN5Z")][O0QQ("\u202E98", "OB7!")], O0Q0QQ["OQOO0"])) {
          if (O0Q0QQ[O0QQ("\u202B99", "kGEU")] === O0QQ("\u202B9a", "tL%o")) {
            console[O0QQ("\u202B9b", "WUKK")](QOOOOO[O0QQ("\u202E9c", "kGEU")]["followDesc"]);
          } else {
            resolve(data || {});
          }
        } else if (O0Q0QQ[O0QQ("\u202B9d", ")qY)")](QOOOOO[O0QQ("\u202E9e", "p$fE")]["followCode"], O0Q0QQ[O0QQ("\u202B9f", "AzB0")])) {
          if (O0Q0QQ[O0QQ("\u202Ea0", "7VTq")]("OQQO", O0Q0QQ[O0QQ("\u202Ea1", "HNHi")])) {
            body = {
              "giftType": O0QQ("\u202Ba2", "M!eS"),
              "follow": 0,
              "shopId": SHOP_ID,
              "activityId": O0QOQO,
              "sourceRpc": O0Q0QQ["OO0Q0"],
              "venderId": VENDER_ID
            };
          } else {
            console[O0QQ("\u202Ba3", "Qtm)")](QOOOOO);
            if (O0Q0QQ[O0QQ("\u202Ea4", "&uCy")](QOOOOO[O0QQ("\u202Ea5", "Qtm)")]["giftCode"], 200)) {
              console[O0QQ("\u202Ba6", "*xVu")]("");
              var QQQOQ0 = JSON[O0QQ("\u202Ba7", "iXjp")](JSON[O0QQ("\u202Ea8", "usj4")](QOOOOO[O0QQ("\u202Ba9", "9i21")]["alreadyReceivedGifts"]));
              for (let QQQOOQ = 0; O0Q0QQ["Q0000"](QQQOOQ, O0Q0QQ[O0QQ("\u202Baa", "9i21")](QQQOQ0[O0QQ("\u202Eab", "K]2M")], 1)); QQQOOQ++) {
                if (O0Q0QQ[O0QQ("\u202Eac", "wGQY")] === O0Q0QQ["O0OQ0"]) {
                  console["log"](JSON["stringify"](QQ0O0Q));
                } else {
                  var QO0QOO = O0Q0QQ["Q0Q0O"](QQQOQ0[QQQOOQ][O0QQ("\u202Bad", "j5V&")], QQQOQ0[QQQOOQ][O0QQ("\u202Eae", "*xVu")]);
                  console["log"](O0Q0QQ[O0QQ("\u202Baf", "t%G^")] + QO0QOO);
                }
              }
            }
            await $["wait"](1000);
          }
        } else {
          if (O0Q0QQ[O0QQ("\u202Eb0", "L6L#")] !== O0Q0QQ[O0QQ("\u202Eb1", "j5V&")]) {
            O0Q0QQ["Q00OO"](resolve, data);
          } else {
            console[O0QQ("\u202B2c", "3tiA")](JSON["stringify"](QOOOOO));
          }
        }
      } else {
        body = {
          "follow": 0,
          "shopId": SHOP_ID,
          "activityId": O0QOQO,
          "sourceRpc": O0Q0QQ[O0QQ("\u202Eb2", "usj4")],
          "venderId": VENDER_ID
        };
      }
    } else {
      console[O0QQ("\u202Eb3", "RjXd")](O0Q0QQ[O0QQ("\u202Bb4", "&uCy")]);
    }
  } else {
    console[O0QQ("\u202E5e", "#B5P")](O0QQ("\u202Eb5", "9i21"));
  }
}
async function task(QQ00QQ, QQ000Q) {
  var O00QOO = {
    "QQQQ0": function (QQQQQO, O000O0) {
      return QQQQQO === O000O0;
    },
    "OO0O0": O0QQ("\u202Bb6", "usj4"),
    "OOQOQ": function (QQQQ0O, QQQ000) {
      return QQQQ0O === QQQ000;
    },
    "QOQO0": "Q0OO",
    "OQQ0Q": function (QQQ0Q0, O00QOQ) {
      return QQQ0Q0 === O00QOQ;
    },
    "OOQOO": function (QQQ0OQ, QQQQ00) {
      return QQQ0OQ === QQQQ00;
    },
    "OQ000": O0QQ("\u202Bb7", "WUKK"),
    "OQQQQ": O0QQ("\u202Bb8", "#B5P"),
    "OQQ0O": "O0QO",
    "OQQQO": "OQQ0",
    "OQ0Q0": function (O0OOOO, O0OOOQ) {
      return O0OOOO(O0OOOQ);
    },
    "Q00QQ": function (QQ0OOO, Q0OQO0, QQ0OOQ, O0OOQO) {
      return QQ0OOO(Q0OQO0, QQ0OOQ, O0OOQO);
    }
  };
  const O00Q00 = await getSign(QQ00QQ, QQ000Q);
  return new Promise(O000OO => {
    $[O0QQ("\u202Eb9", "iXjp")](O00QOO[O0QQ("\u202Eba", "HNHi")](taskUrl, QQ00QQ, QQ000Q, sign), (O000OQ, O00QQ0, QQQ0QQ) => {
      if (O00QOO[O0QQ("\u202Ebb", "7VTq")](O00QOO[O0QQ("\u202Bbc", "Qtm)")], O00QOO[O0QQ("\u202Ebd", "HNHi")])) {
        try {
          if (O00QOO[O0QQ("\u202Ebe", "fLZf")](O00QOO[O0QQ("\u202Ebf", "DPIv")], O0QQ("\u202Ec0", "0G46"))) {
            console[O0QQ("\u202E5e", "#B5P")](JSON[O0QQ("\u202Bc1", "NCIG")](drawInfo));
          } else {
            if (O000OQ) {
              console[O0QQ("\u202B2a", "2P3(")](O000OQ);
            } else {
              QQQ0QQ = JSON[O0QQ("\u202Bc2", "j5V&")](QQQ0QQ);
              if (QQQ0QQ && QQQ0QQ["data"] && O00QOO["OQQ0Q"](JSON[O0QQ("\u202Ec3", "R!$f")](QQQ0QQ[O0QQ("\u202Ec4", "QN5Z")]), "{}")) {
                if (O00QOO[O0QQ("\u202Ec5", "^[SV")](O00QOO[O0QQ("\u202Bc6", "*xVu")], O00QOO["OQQQQ"])) {
                  $[O0QQ("\u202E7f", "usj4")]("", "\u274C " + $[O0QQ("\u202Bc7", "G97Z")] + O0QQ("\u202Ec8", "AzB0") + e + "!", "");
                } else {
                  console[O0QQ("\u202Bc9", "v4Ks")](JSON[O0QQ("\u202Bca", "FjHA")](QQQ0QQ));
                }
              }
            }
          }
        } catch (QQQ0QO) {
          console[O0QQ("\u202Ecb", "kGEU")](QQQ0QQ);
          $["logErr"](QQQ0QO, O00QQ0);
        } finally {
          if (O00QOO[O0QQ("\u202Bcc", "Qtm)")] === O00QOO[O0QQ("\u202Bcd", "K]2M")]) {
            console[O0QQ("\u202B2a", "2P3(")](QQQ0QQ);
            $[O0QQ("\u202Ece", "cbt^")](e, O00QQ0);
          } else {
            O00QOO["OQ0Q0"](O000OO, QQQ0QQ || {});
          }
        }
      } else {
        cookiesArr[O0QQ("\u202Bcf", "cbt^")](jdCookieNode[item]);
      }
    });
  });
}
function taskUrl(O0OOQ0, O0OO00, QQ0OQ0) {
  var O0QQO0 = {
    "O0OOO": O0QQ("\u202Bd0", "R!$f"),
    "O00QQ": O0QQ("\u202Bd1", "K]2M"),
    "O000O": O0QQ("\u202Ed2", "v4Ks")
  };
  return {
    "url": "https://api.m.jd.com/client.action?functionId=" + O0OOQ0 + O0QQ("\u202Bd3", "DPIv") + encodeURIComponent(JSON[O0QQ("\u202Ec3", "R!$f")](O0OO00)),
    "body": QQ0OQ0,
    "headers": {
      "Host": O0QQ("\u202Ed4", "M!eS"),
      "content-type": O0QQO0[O0QQ("\u202Ed5", "fLZf")],
      "accept": O0QQO0["O00QQ"],
      "user-agent": UA,
      "accept-language": O0QQO0[O0QQ("\u202Bd6", "cbt^")],
      "Cookie": cookie
    }
  };
}
function cxid() {
  var QQ0O00 = {
    "QQ0Q0": function (Q0O0O0, Q0OQOQ) {
      return Q0O0O0 + Q0OQOQ;
    },
    "Q0OOO": O0QQ("\u202Bd7", "d%y^"),
    "Q0OOQ": function (Q0OQOO, QQ0Q00) {
      return Q0OQOO === QQ0Q00;
    },
    "O000Q": O0QQ("\u202Ed8", "7M#i"),
    "O0OO0": "OQ00",
    "O0000": O0QQ("\u202Bd9", "0iqg"),
    "O0QQQ": O0QQ("\u202Bda", "y#Yk"),
    "O0Q0Q": "application/x-www-form-urlencoded",
    "O00Q0": "*/*",
    "Q0OQ0": O0QQ("\u202Bdb", "j5V&")
  };
  return new Promise(QQ00OO => {
    var QQ0QQ0 = {
      "QQ000": function (QQ00OQ, O00000) {
        return QQ0O00[O0QQ("\u202Edc", "#B5P")](QQ00OQ, O00000);
      },
      "QQQ0O": QQ0O00["Q0OOO"],
      "OOQO0": function (O00QQQ, QOOQQ0) {
        return QQ0O00[O0QQ("\u202Bdd", "3tiA")](O00QQQ, QOOQQ0);
      },
      "OQ0OQ": QQ0O00[O0QQ("\u202Bde", "d%y^")],
      "QOQOQ": function (O00Q0Q, O000Q0) {
        return O00Q0Q === O000Q0;
      },
      "OQ0OO": QQ0O00[O0QQ("\u202Bdf", "7M#i")],
      "OQQ00": QQ0O00[O0QQ("\u202Ee0", "QN5Z")],
      "OQQQ0": function (QOO0OO) {
        return QOO0OO();
      }
    };
    let O00QQO = {
      "url": "https://api.m.jd.com/client.action?functionId=whx_getMShopDetail&body=%7B%22shopId%22%3A%221000414244%22%2C%22stamp%22%3A%221%22%2C%22%24taroTimestamp%22%3A" + time + "%2C%22source%22%3A%22m-shop%22%7D&t=" + time + "&appid=shop_view&clientVersion=11.0.0&client=wh5&area=1_72_2799_0&uuid=16531140799271703486119",
      "headers": {
        "origin": QQ0O00[O0QQ("\u202Be1", "O)9I")],
        "content-type": QQ0O00["O0Q0Q"],
        "accept": QQ0O00["O00Q0"],
        "user-agent": UA,
        "accept-language": QQ0O00[O0QQ("\u202Be2", "&uCy")],
        "Cookie": cookie
      }
    };
    $[O0QQ("\u202Be3", "j5V&")](O00QQO, async (O00Q0O, QQOO0O, QQOOQO) => {
      var QQOO00 = {
        "QOQOO": function (QOOQOQ, QQQQO0) {
          return QQ0QQ0[O0QQ("\u202Ee4", "cbt^")](QOOQOQ, QQQQO0);
        },
        "QO0O0": QQ0QQ0[O0QQ("\u202Ee5", "AzB0")]
      };
      try {
        if (QQ0QQ0["OOQO0"]("OO00", O0QQ("\u202Be6", "cbt^"))) {
          console["log"](followShop["msg"]);
        } else {
          if (O00Q0O) {
            console[O0QQ("\u202Ee7", "p$fE")]("" + JSON["stringify"](O00Q0O));
            console[O0QQ("\u202E5e", "#B5P")](QQ0QQ0[O0QQ("\u202Ee8", "mw6S")]($[O0QQ("\u202Ee9", "3tiA")], QQ0QQ0[O0QQ("\u202Eea", "ODwz")]));
          } else {
            QQOOQO = JSON[O0QQ("\u202Beb", "7M#i")](QQOOQO);
          }
        }
      } catch (QOO0O0) {
        $["logErr"](QOO0O0, QQOO0O);
      } finally {
        if (QQ0QQ0[O0QQ("\u202Eec", "mw6S")](QQ0QQ0[O0QQ("\u202Eed", "vskV")], QQ0QQ0["OQQ00"])) {
          var Q000 = QQOO00[O0QQ("\u202Eee", "7M#i")](prizeData_Array[i]["redWord"], prizeData_Array[i][O0QQ("\u202Eef", "R!$f")]);
          console[O0QQ("\u202Bf0", "fLZf")](QQOO00[O0QQ("\u202Bf1", "AzB0")] + Q000);
        } else {
          QQ0QQ0[O0QQ("\u202Ef2", "usj4")](QQ00OO);
        }
      }
    });
  });
}
async function taskNoSign() {
  var O0OO0O = {
    "QOQ00": O0QQ("\u202Ef3", "usj4"),
    "OQQOQ": function (O0Q0O0, O0OOQQ) {
      return O0Q0O0 === O0OOQQ;
    },
    "OQQOO": O0QQ("\u202Ef4", "*xVu"),
    "OOO0O": "OOOO",
    "OQ0O0": function (QQ0QQO, O0QQOQ) {
      return QQ0QQO !== O0QQOQ;
    },
    "OOOQQ": O0QQ("\u202Bf5", "WUKK"),
    "OOOQO": "OOQO",
    "QQ0QO": function (O0OO0Q, QQ00Q0) {
      return O0OO0Q(QQ00Q0);
    },
    "QQ00O": function (Q0O0OO, Q0OQQ0) {
      return Q0O0OO || Q0OQQ0;
    },
    "O0QQO": O0QQ("\u202Bf6", "*xVu"),
    "O0Q0O": O0QQ("\u202Ef7", "M!eS"),
    "O00OO": function (Q0O0OQ) {
      return Q0O0OQ();
    }
  };
  return new Promise(Q0OQ00 => {
    var QQ0000 = {
      "QQ0QQ": O0OO0O["O0QQO"]
    };
    if (O0OO0O["O0Q0O"] !== O0OO0O["O0Q0O"]) {
      $[O0QQ("\u202Ef8", "p$fE")]($[O0QQ("\u202Bf9", "QN5Z")], O0QQ("\u202Bfa", "RjXd"), O0QQ("\u202Efb", "mw6S"), {
        "open-url": O0OO0O[O0QQ("\u202Bfc", "RjXd")]
      });
      return;
    } else {
      $["post"](O0OO0O[O0QQ("\u202Bfd", "DPIv")](taskUrlNoSign), (QQ0Q0O, O0QQQO, O0Q0Q0) => {
        if (O0OO0O["OQQOQ"](O0OO0O[O0QQ("\u202Efe", "M!eS")], O0OO0O[O0QQ("\u202Bff", "*xVu")])) {
          CookieNum = process[O0QQ("\u202B100", "FjHA")]["FOLLOW_SHOP_NUM"];
        } else {
          try {
            if (QQ0Q0O) {
              console["log"](QQ0Q0O);
            } else {
              if (O0OO0O["OQQOQ"](O0QQ("\u202E101", "NCIG"), O0QQ("\u202E102", "O)9I"))) {
                return {
                  "url": O0QQ("\u202B103", "OB7!") + function_id + O0QQ("\u202E104", "xDXi") + encodeURIComponent(JSON[O0QQ("\u202Ec3", "R!$f")](body)),
                  "body": sign,
                  "headers": {
                    "Host": "api.m.jd.com",
                    "content-type": "application/x-www-form-urlencoded",
                    "accept": O0QQ("\u202B105", "tL%o"),
                    "user-agent": UA,
                    "accept-language": QQ0000[O0QQ("\u202B106", "AzB0")],
                    "Cookie": cookie
                  }
                };
              } else {
                O0Q0Q0 = JSON["parse"](O0Q0Q0);
                if (O0Q0Q0 && O0Q0Q0["data"] && JSON["stringify"](O0Q0Q0[O0QQ("\u202E107", "Qtm)")]) === "{}") {
                  console[O0QQ("\u202Bc9", "v4Ks")](JSON[O0QQ("\u202E108", "cbt^")](O0Q0Q0));
                }
              }
            }
          } catch (O0000O) {
            if (O0OO0O["OQ0O0"](O0OO0O[O0QQ("\u202E109", "*xVu")], O0OO0O["OOOQO"])) {
              console[O0QQ("\u202E10a", "cbt^")](O0Q0Q0);
              $[O0QQ("\u202B10b", "t%G^")](O0000O, O0QQQO);
            } else {
              console[O0QQ("\u202B10c", "tL%o")](O0QQ("\u202B10d", "3tiA"));
            }
          } finally {
            O0OO0O[O0QQ("\u202E10e", "DPIv")](Q0OQ00, O0OO0O[O0QQ("\u202B10f", "cbt^")](O0Q0Q0, {}));
          }
        }
      });
    }
  });
}
function taskUrlNoSign() {
  var O00OO0 = {
    "Q0O0O": "api.m.jd.com",
    "QO000": O0QQ("\u202B110", "wGQY")
  };
  return {
    "url": "https://api.m.jd.com/client.action?g_ty=ls&g_tk=518274330",
    "body": O0QQ("\u202E111", "tL%o") + $["shopId"] + "\",\"activityId\":\"" + $[O0QQ("\u202E112", "y#Yk")] + O0QQ("\u202B113", "HNHi") + $["venderId"] + O0QQ("\u202E114", "(K(@"),
    "headers": {
      "Host": O00OO0[O0QQ("\u202B115", "R!$f")],
      "content-type": O0QQ("\u202E116", "RjXd"),
      "accept": O00OO0[O0QQ("\u202B117", "L6L#")],
      "user-agent": UA,
      "accept-language": O0QQ("\u202E118", ")qY)"),
      "Cookie": cookie
    }
  };
}
function getUa() {
  var QQQQQ0 = {
    "QOQQQ": function (QQQ0OO, QQOO0Q) {
      return QQQ0OO(QQOO0Q);
    }
  };
  UA = "jdapp;iPhone;10.2.2;14.3;" + QQQQQ0["QOQQQ"](randomString, 40) + O0QQ("\u202E119", "(K(@");
}
function random(QQOOQQ, QQQ0O0) {
  var QQQQOO = {
    "QO0Q0": function (QQQQOQ, QOOQO0) {
      return QQQQOQ * QOOQO0;
    },
    "QOQQO": function (O0Q0OO, O0QQ00) {
      return O0Q0OO - O0QQ00;
    }
  };
  return Math["floor"](QQQQOO[O0QQ("\u202E11a", "DPIv")](Math[O0QQ("\u202E11b", "TlRM")](), QQQQOO["QOQQO"](QQQ0O0, QQOOQQ))) + QQOOQQ;
}
function getSign(O0QQQ0, QQ00QO) {
  var O0Q0OQ = {
    "Q0OQQ": function (QQ000O, Q0OQQO) {
      return QQ000O + Q0OQQO;
    },
    "Q0O0Q": function (Q0O0Q0, OO0O00) {
      return Q0O0Q0 + OO0O00;
    },
    "O00OQ": " getSign API\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5",
    "O0QQ0": function (OO0OQ0, QOQO00) {
      return OO0OQ0 === QOQO00;
    },
    "O0QOO": "object",
    "O0QOQ": function (QOQOQ0, OOQ00Q) {
      return QOQOQ0 !== OOQ00Q;
    },
    "QO0QQ": O0QQ("\u202B11c", "iXjp"),
    "QOOO0": O0QQ("\u202E11d", "^[SV"),
    "QO00Q": "QQ0Q",
    "QO0QO": function (OOQOOO, O0O0O0) {
      return OOQOOO(O0O0O0);
    },
    "OOOOQ": "api.m.jd.com",
    "OOOOO": O0QQ("\u202E11e", "iXjp"),
    "OQOQQ": O0QQ("\u202B11f", "p$fE")
  };
  let O0OQOO = {
    "fn": O0QQQ0,
    "body": QQ00QO
  };
  let O0OQOQ = {
    "url": O0Q0OQ["OQOQQ"],
    "body": JSON["stringify"](O0OQOO),
    "headers": {
      "Content-Type": "application/json"
    },
    "timeout": 30000
  };
  return new Promise(async OO0OOQ => {
    var OO0OOO = {
      "OQQO0": O0Q0OQ[O0QQ("\u202E120", "G97Z")],
      "OOOQ0": O0Q0OQ[O0QQ("\u202B121", "0G46")]
    };
    $["post"](O0OQOQ, (QOQOOQ, QOQOOO, O0OQOO) => {
      try {
        if (QOQOOQ) {
          console["log"](O0Q0OQ[O0QQ("\u202E122", "O)9I")]("", JSON[O0QQ("\u202E123", "iXjp")](QOQOOQ)));
          console["log"](O0Q0OQ[O0QQ("\u202B124", "K]2M")]($[O0QQ("\u202E125", "cbt^")], O0Q0OQ[O0QQ("\u202E126", "#B5P")]));
        } else {
          O0OQOO = JSON[O0QQ("\u202B127", "RjXd")](O0OQOO);
          if (O0Q0OQ["O0QQ0"](typeof O0OQOO, O0Q0OQ[O0QQ("\u202E128", "v4Ks")]) && O0OQOO && O0OQOO[O0QQ("\u202E129", ")qY)")]) {
            if (O0Q0OQ[O0QQ("\u202E12a", "WUKK")](O0Q0OQ[O0QQ("\u202E12b", "#B5P")], O0Q0OQ["QO0QQ"])) {
              return {
                "url": O0QQ("\u202E12c", "vskV"),
                "body": O0QQ("\u202E12d", "d%y^") + $["shopId"] + "\",\"activityId\":\"" + $[O0QQ("\u202B12e", "fLZf")] + "\",\"sourceRpc\":\"shop_app_home_window\",\"venderId\":\"" + $[O0QQ("\u202B12f", "tL%o")] + O0QQ("\u202E130", "R!$f"),
                "headers": {
                  "Host": OO0OOO[O0QQ("\u202B131", "HNHi")],
                  "content-type": "application/x-www-form-urlencoded",
                  "accept": O0QQ("\u202E132", "HNHi"),
                  "user-agent": UA,
                  "accept-language": OO0OOO["OOOQ0"],
                  "Cookie": cookie
                }
              };
            } else {
              if (O0OQOO[O0QQ("\u202B133", "G97Z")]) sign = O0OQOO["body"] || "";
            }
          } else {
            console[O0QQ("\u202B134", "G97Z")](O0Q0OQ[O0QQ("\u202B135", "v4Ks")]);
          }
        }
      } catch (QO0OQO) {
        $["logErr"](QO0OQO, QOQOOO);
      } finally {
        if (O0Q0OQ[O0QQ("\u202B136", "0G46")](O0Q0OQ[O0QQ("\u202B137", "xDXi")], O0Q0OQ[O0QQ("\u202B138", "2P3(")])) {
          console["log"](JSON[O0QQ("\u202Ec3", "R!$f")](O0OQOO));
        } else {
          O0Q0OQ["QO0QO"](OO0OOQ, O0OQOO);
        }
      }
    });
  });
}
;
;
OＯ0$ = "jsjiami.com.v6";
function TotalBean() {
  return new Promise(async e => {
    const n = {
      url: "https://wq.jd.com/user_new/info/GetJDUserInfoUnion?sceneval=2",
      headers: {
        Host: "wq.jd.com",
        Accept: "*/*",
        Connection: "keep-alive",
        Cookie: cookie,
        "User-Agent": UA,
        "Accept-Language": "zh-cn",
        Referer: "https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&",
        "Accept-Encoding": "gzip, deflate, br"
      }
    };
    $.get(n, (n, o, a) => {
      try {
        if (n) $.logErr(n);else if (a) {
          if (1001 === (a = JSON.parse(a))["retcode"]) return void ($.isLogin = !1);
          0 === a["retcode"] && a.data && a.data.hasOwnProperty("userInfo") && ($.nickName = a.data.userInfo.baseInfo.nickname), 0 === a["retcode"] && a.data && a.data["assetInfo"] && ($.beanCount = a.data && a.data["assetInfo"]["beanNum"]);
        } else console.log("\u4EAC\u4E1C\u670D\u52A1\u5668\u8FD4\u56DE\u7A7A\u6570\u636E");
      } catch (e) {
        $.logErr(e);
      } finally {
        e();
      }
    });
  });
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t));else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============\uD83D\uDCE3\u7CFB\u7EDF\u901A\u77E5\uD83D\uDCE3=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}