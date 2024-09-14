//Sat Sep 14 2024 07:05:10 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const common = require("./jdCommon"),
  CryptoModule = require("./jdCrypto");
async function wuxian_savePrize(llIIll1i) {
  let {
    baseUrl: ll1ilil1,
    cookie: llli11i,
    ua: il11liil,
    activityId: ilII1IIl,
    activityType: lii1i1l,
    venderId: i11iIi11,
    secretPin: i1Illlll,
    prizeName: IIiiI1ii,
    generateId: Ii1Iiili
  } = llIIll1i;
  const i11lIIl1 = _getUserConfig(IIiiI1ii);
  if (typeof i11lIIl1 === "boolean" && !i11lIIl1) return false;
  const {
    receiver: ili1Ii1I,
    phone: lI1IIi,
    province: iIIIiIlI,
    city: iI1I1li1,
    county: li1l1lii,
    address: iliiili1,
    areaCode: l1llIi,
    postalCode: i1l1I111,
    index: lIIiiiil
  } = i11lIIl1;
  let iliIllli;
  Array.isArray(i11iIi11) && (iliIllli = i11iIi11[1], i11iIi11 = i11iIi11[0]);
  const iIIIi1li = ll1ilil1 + "/wxAddress/save",
    I111lI1I = {
      "venderId": i11iIi11,
      "pin": ll1ilil1.includes("cjhy") ? encodeURIComponent(i1Illlll) : i1Illlll,
      "activityId": ilII1IIl,
      "actType": lii1i1l,
      "prizeName": IIiiI1ii,
      "receiver": ili1Ii1I,
      "phone": lI1IIi,
      "province": iIIIiIlI,
      "city": iI1I1li1,
      "county": li1l1lii,
      "areaCode": l1llIi,
      "address": iliiili1,
      "generateId": Ii1Iiili,
      "postalCode": i1l1I111
    },
    lii1iiiI = {
      "url": iIIIi1li,
      "method": "POST",
      "headers": {
        "Accept": "application/json",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": llli11i,
        "Origin": ll1ilil1,
        "Referer": iIIIi1li + "/",
        "User-Agent": il11liil
      },
      "data": I111lI1I,
      "timeout": 30000
    },
    i1i1111l = 3;
  let iIiiIIIi = 0,
    lIiI11li = null;
  while (iIiiIIIi < i1i1111l) {
    const l1iliII = await common.request(lii1iiiI);
    if (!l1iliII.success) {
      lIiI11li = "🚫 savePrize 请求失败 ➜ " + l1iliII.error;
      iIiiIIIi++;
      continue;
    }
    if (!l1iliII.data) {
      lIiI11li = "🚫 savePrize 请求失败 ➜ 无响应数据";
      iIiiIIIi++;
      continue;
    }
    if (l1iliII.data.result) return _successCallback(ili1Ii1I, lI1IIi, lIIiiiil), true;else {
      if (iIiiIIIi === 0 && iliIllli) {
        lii1iiiI.data = {
          "venderId": iliIllli,
          "pin": ll1ilil1.includes("cjhy") ? encodeURIComponent(i1Illlll) : i1Illlll,
          "activityId": ilII1IIl,
          "actType": lii1i1l,
          "prizeName": IIiiI1ii,
          "receiver": ili1Ii1I,
          "phone": lI1IIi,
          "province": iIIIiIlI,
          "city": iI1I1li1,
          "county": li1l1lii,
          "areaCode": l1llIi,
          "address": iliiili1,
          "generateId": Ii1Iiili,
          "postalCode": i1l1I111
        };
        iIiiIIIi++;
        continue;
      }
      lIiI11li = "🚫 savePrize 保存收货地址失败 ➜ " + (l1iliII.data?.["errorMessage"] || JSON.stringify(l1iliII.data));
    }
    break;
  }
  return iIiiIIIi >= i1i1111l && console.log(lIiI11li), false;
}
async function wxSavePrize(IIiIiIlI, l1l1iIi, iiI11Il, IIlli1i, i1IIliiI, IIii1I1I, lIiliIi, I1llillI, IiI1I1Il) {
  return await wuxian_savePrize({
    "baseUrl": IIiIiIlI,
    "cookie": l1l1iIi,
    "ua": iiI11Il,
    "activityId": IIlli1i,
    "activityType": i1IIliiI,
    "venderId": IIii1I1I,
    "secretPin": lIiliIi,
    "prizeName": I1llillI,
    "generateId": IiI1I1Il
  });
}
async function lzdz1_savePrize(lilil) {
  let {
    baseUrl: II1l1IIi,
    requestUrl: IiII1lil,
    uuid: iIilll11,
    cookie: Ilii1lIl,
    ua: iiIllliI,
    activityId: iiiilIl,
    activityType: iIiiil1l,
    venderId: ii1llI1l,
    secretPin: I1ll1i11,
    prizeName: i111ll1l,
    itemsId: iiI1lIii,
    activityUrl: lilIIlii
  } = lilil;
  const IliIliI = _getUserConfig(i111ll1l);
  if (typeof IliIliI === "boolean" && !IliIliI) return false;
  const {
      receiver: lII1llII,
      phone: iiIIl111,
      province: Il1lI1ll,
      city: iiill1iI,
      county: I1IiIlI1,
      address: iIliIl1l,
      areaCode: lIIIi1II,
      postalCode: iilIiI1I,
      index: li1i1l1I
    } = IliIliI,
    i11I1i11 = IiII1lil,
    lllll1ll = {
      "venderId": ii1llI1l,
      "activityId": iiiilIl,
      "uuid": iIilll11,
      "actType": iIiiil1l,
      "prizeName": i111ll1l,
      "receiver": lII1llII,
      "phone": iiIIl111,
      "province": Il1lI1ll,
      "city": iiill1iI,
      "county": I1IiIlI1,
      "areaCode": lIIIi1II,
      "address": iIliIl1l,
      "itemsId": iiI1lIii,
      "generateId": generateId,
      "postalCode": iilIiI1I,
      "idCardNumber": "",
      "pin": I1ll1i11
    },
    III11II1 = {
      "url": i11I1i11,
      "method": "POST",
      "headers": {
        "Accept": "application/json",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": Ilii1lIl,
        "Origin": II1l1IIi,
        "Referer": lilIIlii,
        "User-Agent": iiIllliI
      },
      "data": lllll1ll,
      "timeout": 30000
    },
    lllIllil = 3;
  let Il11lill = 0,
    iI1iI1Il = null;
  while (Il11lill < lllIllil) {
    const liI11iI1 = await common.request(III11II1);
    if (!liI11iI1.success) {
      iI1iI1Il = "🚫 savePrize 请求失败 ➜ " + liI11iI1.error;
      Il11lill++;
      continue;
    }
    if (!liI11iI1.data) {
      iI1iI1Il = "🚫 savePrize 请求失败 ➜ 无响应数据";
      Il11lill++;
      continue;
    }
    if (liI11iI1.data.result) return _successCallback(lII1llII, iiIIl111, li1i1l1I), true;else {
      iI1iI1Il = "🚫 savePrize 保存收货地址失败 ➜ " + (liI11iI1.data?.["errorMessage"] || JSON.stringify(liI11iI1.data));
    }
    break;
  }
  return Il11lill >= lllIllil && console.log(iI1iI1Il), false;
}
async function lzkj_interactsaas_savePrize(IiIil1) {
  let {
    baseUrl: I1lIIII,
    newbaseUrl: l11IilIl,
    ua: lIIiIlI,
    token: iIiIIl1l,
    prizeName: lIiI111l,
    orderCode: IIIilII
  } = IiIil1;
  const l1l1iIl1 = _getUserConfig(lIiI111l);
  if (typeof l1l1iIl1 === "boolean" && !l1l1iIl1) return false;
  const {
      receiver: IIliill1,
      phone: i1Il11li,
      province: lllliiI1,
      city: iIIi1i11,
      county: l1illl1i,
      address: iIllI111,
      index: l111I1li
    } = l1l1iIl1,
    iI1II1iI = l11IilIl + "/api/my/prize/update",
    l11IlilI = {
      "realName": IIliill1,
      "mobile": i1Il11li,
      "address": iIllI111,
      "orderCode": IIIilII,
      "province": lllliiI1,
      "city": iIIi1i11,
      "county": l1illl1i
    },
    ill11ilI = {
      "url": iI1II1iI,
      "method": "POST",
      "headers": {
        "Accept": "application/json",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Content-Type": "application/json;charset=UTF-8",
        "token": iIiIIl1l,
        "Origin": I1lIIII,
        "Referer": iI1II1iI + "/",
        "User-Agent": lIIiIlI
      },
      "data": l11IlilI,
      "timeout": 30000
    },
    lI1il1l1 = 3;
  let lI1liii1 = 0,
    iI1iliiI = null;
  while (lI1liii1 < lI1il1l1) {
    const ll111l1l = await common.request(ill11ilI);
    if (!ll111l1l.success) {
      iI1iliiI = "🚫 savePrize 请求失败 ➜ " + ll111l1l.error;
      lI1liii1++;
      continue;
    }
    if (!ll111l1l.data) {
      iI1iliiI = "🚫 savePrize 请求失败 ➜ 无响应数据";
      lI1liii1++;
      continue;
    }
    if (ll111l1l.data.resp_code === 0) return _successCallback(IIliill1, i1Il11li, l111I1li), true;else {
      if (ll111l1l.data.resp_code === 2) return console.log("🚫 savePrize 保存收货地址失败 ➜ " + (ll111l1l.data.resp_msg || JSON.stringify(ll111l1l.data))), false;else {
        iI1iliiI = "🚫 savePrize 保存收货地址失败 ➜ " + (ll111l1l.data.resp_msg || JSON.stringify(ll111l1l.data));
      }
    }
    break;
  }
  return lI1liii1 >= lI1il1l1 && console.log(iI1iliiI), false;
}
async function loreal_savePrize(iill11li) {
  const {
    baseUrl: iliIilII,
    newbaseUrl: I1Il1i1l,
    cookie: iIil1Ili,
    ua: iIlI1IIi,
    token: Il1lII1I,
    prizeName: il11li1i,
    orderCode: ll1iIlIl
  } = iill11li;
  return await lzkj_interactsaas_savePrize({
    "baseUrl": iliIilII,
    "newbaseUrl": I1Il1i1l,
    "cookie": iIil1Ili,
    "ua": iIlI1IIi,
    "token": Il1lII1I,
    "prizeName": il11li1i,
    "orderCode": ll1iIlIl
  });
}
async function lzkj_interaction_v2_savePrize(lllllII) {
  let {
    baseUrl: Iili1lil,
    newbaseUrl: I11i1llI,
    ua: lI1Iilii,
    token: lIii1lI1,
    activityId: I1lIl1Ii,
    shopId: lI11li1l,
    activityType: l1liIlIl,
    prizeName: Ilillll1,
    addressId: ll1111li,
    activityPrizeId: l1IIIli,
    activityUrl: I1I1ilil
  } = lllllII;
  const il1liIi = _getUserConfig(Ilillll1);
  if (typeof il1liIi === "boolean" && !il1liIi) return false;
  const {
      receiver: lll1l11i,
      phone: i1li1i1I,
      province: iiIiiiI1,
      city: ilI1IlIl,
      county: IIIli11i,
      address: liililil,
      index: ll111
    } = il1liIi,
    Il1i1li = I11i1llI + "/api/" + l1liIlIl + "/userAddressInfo",
    Il1lI1l = {
      "realName": lll1l11i,
      "mobile": i1li1i1I,
      "address": liililil,
      "province": iiIiiiI1,
      "city": ilI1IlIl,
      "county": IIIli11i,
      "addressId": ll1111li,
      "activityPrizeId": l1IIIli
    },
    i11I1I1I = CryptoModule.wuxianDefense.interactionV2.encrypt(Il1lI1l),
    lIll1l1i = {
      "url": Il1i1li,
      "method": "POST",
      "headers": {
        "Accept": "application/json",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Content-Type": "application/json;charset=UTF-8",
        "Origin": Iili1lil,
        "Referer": I1I1ilil,
        "User-Agent": lI1Iilii,
        "Activity-Id": I1lIl1Ii,
        "Activity-Type": l1liIlIl,
        "Pin-Token": lIii1lI1,
        "Shop-Id": lI11li1l
      },
      "data": i11I1I1I,
      "timeout": 30000
    },
    Il1iiii = 3;
  let ililIIi = 0,
    liliIIiI = null;
  while (ililIIi < Il1iiii) {
    const l1il1i1i = await common.request(lIll1l1i);
    if (!l1il1i1i.success) {
      liliIIiI = "🚫 savePrize 请求失败 ➜ " + l1il1i1i.error;
      ililIIi++;
      continue;
    }
    if (!l1il1i1i.data) {
      liliIIiI = "🚫 savePrize 请求失败 ➜ 无响应数据";
      ililIIi++;
      continue;
    }
    if (l1il1i1i.data.data && typeof l1il1i1i.data.data === "string") try {
      l1il1i1i.data.data = CryptoModule.wuxianDefense.interactionV2.decrypt(l1il1i1i.data.data);
    } catch {}
    if (l1il1i1i.data.code === 200) return _successCallback(lll1l11i, i1li1i1I, ll111), true;else liliIIiI = "🚫 savePrize 保存收货地址失败 ➜ " + (l1il1i1i.data?.["message"] || JSON.stringify(l1il1i1i.data));
    break;
  }
  return ililIIi >= Il1iiii && console.log(liliIIiI), false;
}
async function jinggeng_savePrize(iIi1lIlI) {
  let {
    baseUrl: llIilll,
    cookie: IIlIllil,
    ua: iI1IlI1,
    venderId: IIiIlIi1,
    prizeName: I1iII1li,
    orderCode: iiilI11
  } = iIi1lIlI;
  const iI1ll11I = _getUserConfig(I1iII1li);
  if (typeof iI1ll11I === "boolean" && !iI1ll11I) {
    return false;
  }
  const {
      receiver: ll1i1lIl,
      phone: Ill1Iil,
      province: llI111i1,
      city: iiII1Ii1,
      county: i111il11,
      address: IIli1I1l,
      index: ilIl1iI1
    } = iI1ll11I,
    I1lII1 = llIilll + "/ql/front/postBuyerInfo",
    l1l = {
      "receiverName": ll1i1lIl,
      "mobile": Ill1Iil,
      "address": llI111i1 + "+" + iiII1Ii1 + "+" + i111il11 + IIli1I1l,
      "log_id": iiilI11,
      "user_id": IIiIlIi1
    },
    lI11IIi1 = {
      "url": I1lII1,
      "method": "POST",
      "headers": {
        "Accept": "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,en-GB;q=0.6",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": IIlIllil,
        "Origin": llIilll,
        "Referer": I1lII1 + "/",
        "User-Agent": iI1IlI1
      },
      "data": l1l,
      "timeout": 30000
    },
    Illl1i1I = 3;
  let I11il1i1 = 0,
    iiI1111i = null;
  while (I11il1i1 < Illl1i1I) {
    const IIiI1ii1 = await common.request(lI11IIi1);
    if (!IIiI1ii1.success) {
      iiI1111i = "🚫 savePrize 请求失败 ➜ " + IIiI1ii1.error;
      I11il1i1++;
      continue;
    }
    if (!IIiI1ii1.data) {
      iiI1111i = "🚫 savePrize 请求失败 ➜ 无响应数据";
      I11il1i1++;
      continue;
    }
    if (IIiI1ii1.data.succ) return _successCallback(ll1i1lIl, Ill1Iil, ilIl1iI1), true;else {
      if (IIiI1ii1.data.succ === false) return console.log("🚫 保存收货地址失败 ➜ " + (IIiI1ii1.data.msg || JSON.stringify(IIiI1ii1.data))), false;else iiI1111i = "🚫 savePrize 保存收货地址失败 ➜ " + (IIiI1ii1.data.msg || JSON.stringify(IIiI1ii1.data));
    }
    break;
  }
  return I11il1i1 >= Illl1i1I && console.log(iiI1111i), false;
}
function _getUserConfig(IIlIl1Il) {
  try {
    const Il1Ii111 = process.env.WX_ADDRESS || "",
      iiIIIil = process.env.WX_ADDRESS_BLOCK || "";
    if (Il1Ii111 === "") {
      return false;
    }
    const l1IiIlIl = Il1Ii111.split("|"),
      l1i1llIi = Math.floor(Math.random() * l1IiIlIl.length);
    if (l1IiIlIl[l1i1llIi] === "") return console.log("❌ 随机抽取到的收货地址信息为空，请正确使用 \"|\" 管道符以用于分割多个收货地址！\n"), false;
    const [l1li1, illliII1, I11lllli, lIiIilll, il1IiiI, IllI1ii, iliI1iII, iiiillli] = l1IiIlIl[l1i1llIi].split("@");
    if (iiiillli === undefined) return console.log("❌ 随机抽取到的收货地址信息格式存在错误（参数不足或过多）\n"), false;
    for (let I1lIiii1 = 0; I1lIiii1 < 7; I1lIiii1++) {
      if (l1IiIlIl[I1lIiii1] === "") return console.log("❌ 随机抽取到的收货地址信息格式存在错误（参数不能为空）\n"), false;
    }
    if (iiIIIil !== "") {
      const Ii1lIlii = iiIIIil.split("@");
      if (Ii1lIlii.some(iII1ll => IIlIl1Il.includes(iII1ll))) return console.log("\n🚫 触发实物奖品自动登记收货地址屏蔽关键词，跳过~\n"), false;
    }
    return {
      "receiver": l1li1,
      "phone": illliII1,
      "province": I11lllli,
      "city": lIiIilll,
      "county": il1IiiI,
      "address": IllI1ii,
      "areaCode": iliI1iII,
      "postalCode": iiiillli,
      "index": l1i1llIi
    };
  } catch (i1iiIIil) {
    return console.log("❌ 获取用户收货地址配置信息异常 ➜ " + (i1iiIIil.message || i1iiIIil)), false;
  }
}
function _successCallback(ilIiIi1, i11iIi1I, iiIiIl1l) {
  console.log("已自动提交收货地址 ✅\n登记为随机抽取到的第" + (iiIiIl1l + 1) + "套收货地址信息\n联系信息：" + ilIiIi1 + " (" + i11iIi1I.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2") + "）\n");
}
module.exports = {
  "wuxian_savePrize": wuxian_savePrize,
  "wxSavePrize": wxSavePrize,
  "lzkj_interactsaas_savePrize": lzkj_interactsaas_savePrize,
  "loreal_savePrize": loreal_savePrize,
  "lzkj_interaction_v2_savePrize": lzkj_interaction_v2_savePrize,
  "lzdz1_savePrize": lzdz1_savePrize,
  "jinggeng_savePrize": jinggeng_savePrize
};