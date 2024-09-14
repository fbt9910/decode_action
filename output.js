//Sat Sep 14 2024 05:58:10 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const lIIill = require("got"),
  I11iIi = require("./krgetSign"),
  I1ilII = process.env.JD_CACHE_INTERVAL || "25";
let I11iIl = parseInt(I1ilII) * 60 * 1000;
const l1l11l = require("./cache/index"),
  IilIil = new l1l11l(I11iIl, process.env.JD_ISV_TOKEN_CUSTOM_CACHE || process.env.JD_TOKEN_CUSTOM_CACHE || __dirname + "/cache/token.json"),
  l1iIi = ["http://api.nolanstore.cc/sign", "http://kr.kingran.cf/sign"],
  l1l11i = l1iIi[lilIl(0, l1iIi.length)],
  illIll = process.env.JD_SIGN_KRAPI || "",
  iIli1I = process.env.JD_PROXY_OPEN === "true",
  Iiil1 = process.env.JD_PROXY_TUNNRL || "",
  iiilli = process.env.JD_NO_PROXY || "127.0.0.1,*.baidu.com",
  l1iIIl = process.env.JD_TOKEN_INTERVAL || "30",
  iiilll = process.env.JD_NEWTOKEN_INTERVAL || "0";
let lI11Il = false;
if (iIli1I) {
  lI11Il = true;
  try {
    require("global-agent/bootstrap");
    global.GLOBAL_AGENT.HTTP_PROXY = Iiil1 || "";
    global.GLOBAL_AGENT.NO_PROXY = "*.kingran.cf," + iiilli;
    Iiil1 == "" ? (console.log("⚠ 当前检测到已开启代理，但未填写代理地址变量"), console.log("⚠ 请知晓代理地址仅支持代理池模式(auto-proxy-pool)"), console.log("⚠ 变量：export JD_PROXY_TUNNRL='http://ip:port' 不填直连\n")) : (console.log("☑️ 代理已开启，建议设置Token等待时间为 0 秒"), console.log("☑️ 代理地址为：" + global.GLOBAL_AGENT.HTTP_PROXY + "\n"));
  } catch (iIli11) {
    console.log("请安装global-agent依赖，才能启用代理！\n");
  }
} else console.log("⚠ 检测当前模式未开启代理，默认直连运行"), console.log("⚠ 开启代理变量：export JD_PROXY_OPEN='true' \n");
console.log("☑️ Token失败等待 " + l1iIIl + " 秒 | 成功等待 " + iiilll + " 秒 | 缓存时间 " + I1ilII + " 分钟\n");
const lIII1i = process.env.JD_TOKEN_REDIS_CACHE_URL || "",
  l11i11 = process.env.JD_TOKEN_REDIS_CACHE_KEY || "",
  IilIl1 = !(process.env.JD_TOKEN_REDIS_CACHE_SUBMIT === "false"),
  lIII1l = /<pt_pin>/.test(l11i11);
let l1iIIi = null;
if (lIII1i) {
  let Iiiil = null;
  try {
    Iiiil = require("redis");
  } catch (Iiiii) {
    console.log("❌ getToken Redis模块加载失败 ➜ " + Iiiii.message);
  }
  if (Iiiil) try {
    l1iIIi = Iiiil.createClient({
      "url": lIII1i
    });
    l1iIIi.on("ready", () => {});
    l1iIIi.on("error", l11i1I => {
      l1iIIi = null;
    });
    l1iIIi.connect(IiII => {
      if (IiII) l1iIIi = null;else {}
    });
  } catch (llIIli) {}
}
function lilIi(lIII1I = "", illIlI) {
  let l1il1I = illIlI.exec(lIII1I);
  if (l1il1I && l1il1I.length > 0) return l1il1I[0].trim();
  return "";
}
function l1l11I(li1, illIl1) {
  let IilIll = new Date().getHours();
  if (IilIll >= 0 && IilIll <= 23) {
    return li1;
  }
  return li1 + "_" + illIl1;
}
function lilIl(IiilI, ii1I11) {
  return Math.floor(Math.random() * (ii1I11 - IiilI)) + IiilI;
}
async function IilIlI(i11I1l, lil) {
  async function i11I1i(iI1liI) {
    return new Promise(l1lIiI => setTimeout(l1lIiI, iI1liI));
  }
  let llliil = "",
    liIl1 = lilIi(i11I1l, /(?<=pt_pin=)([^;]+)/);
  if (liIl1) {
    let llliiI = l1l11I(liIl1, lil);
    llliil = IilIil.get(llliiI) || "";
    if (llliil) return console.log("已读取本地缓存token\n"), llliil;
    if (l1iIIi) {
      const IilIiI = encodeURIComponent(lIII1l ? l11i11.replace(/<pt_pin>/g, liIl1) : "" + l11i11 + liIl1);
      llliil = (await l1iIIi.get(IilIiI)) || "";
      if (llliil) return llliil;
    }
    if (llliil === "") {
      let IlII1 = await I11iIi("isvObfuscator", {
        "url": lil,
        "id": ""
      });
      if (IlII1) try {
        if (illIll) {
          body = IlII1?.["data"]?.["convertUrl"];
        } else {
          body = IlII1?.["body"];
        }
        const lli = await lIIill.post("https://api.m.jd.com/client.action?functionId=isvObfuscator", {
          "headers": {
            "Host": "api.m.jd.com",
            "Content-Type": "application/x-www-form-urlencoded",
            "Cookie": i11I1l,
            "User-Agent": "JD4iPhone/167650 (iPhone; iOS 13.7; Scale/3.00)",
            "Accept-Language": "zh-Hans-CN;q=1",
            "Accept-Encoding": "gzip, deflate, br"
          },
          "body": body,
          "timeout": 30000
        }).catch(async llli1 => {
          if (llli1?.["response"]) {
            console.log("🚫 getToken API请求失败 ➜ Response code " + (llli1.response.statusCode || "") + " (" + (llli1.response.statusMessage || "") + ")");
            if (llli1?.["response"]?.["statusCode"] == 403) {
              let IilIii = parseInt(l1iIIl) * 1000;
              await i11I1i(IilIii);
            }
          } else llli1?.["response"]?.["body"] ? console.log("🚫 getToken API请求失败\n" + (llli1?.["response"]?.["body"] || "") + "\n") : console.log("🚫 getToken API请求失败\n" + (llli1 || "") + "\n");
        });
        if (lli && typeof lli === "object") {
          if (lli?.["body"]) {
            let iIli1l = JSON.parse(lli?.["body"]);
            if (iIli1l?.["code"] === "0") {
              llliil = iIli1l?.["token"];
              IilIil.put(llliiI, llliil, I11iIl);
              if (l1iIIi && IilIl1) {
                const liiIIl = encodeURIComponent(lIII1l ? l11i11.replace(/<pt_pin>/g, liIl1) : "" + l11i11 + liIl1),
                  iil1iI = llliil,
                  IlIllI = Math.floor((Date.now() + I11iIl) / 1000);
                try {
                  await l1iIIi.set(liiIIl, iil1iI);
                  await l1iIIi.EXPIREAT(liiIIl, IlIllI);
                  console.log("☑️ getToken Redis缓存成功\n");
                } catch (il1i1I) {
                  console.log("❌ getToken Redis缓存失败 ➜ " + (il1i1I.message || il1i1I));
                }
              }
              let i1i1II = parseInt(iiilll) * 1000;
              await i11I1i(i1i1II);
            } else iIli1l?.["code"] === "3" && iIli1l?.["errcode"] === 264 ? console.log("🚫 getToken API请求失败 ➜ 账号无效") : console.log("🚫 getToken API接口返回异常 ➜ " + JSON.stringify(iIli1l));
          } else console.log("🚫 getToken API请求失败 ➜ 接口返回为空");
        }
      } catch (iIII1I) {
        console.log("🚫 getToken API在处理请求时遇到了错误");
        console.log(iIII1I);
      } else console.log("🚫 getToken API请求错误 ➜ 签名获取失败");
    }
  }
  return llliil;
}
module.exports = IilIlI;