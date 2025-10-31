export default {
  async fetch(request, env) {
    // ---------------------- HTML UI ----------------------
    if (request.method === "GET") {
      return new Response(`<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>Email Routing Helper</title>
<style>
  :root {
    --bg: #f6f8fa; --card-bg: #ffffff; --primary: #4CAF50; --btn-hover: #43a047;
    --error-bg: #ffebee; --error-text: #c62828; --success-bg: #e8f5e9; --success-text: #2e7d32;
  }
  body {
    font-family: system-ui;
    background: var(--bg);
    margin: 0;
    padding: 20px;
  }
  .box {
    max-width: 520px;
    margin: auto;
    background: var(--card-bg);
    padding: 30px 22px; /* Increased padding for better spacing */
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,.05);
  }
  h2 {
    margin-bottom: 18px;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
  }
  label {
    font-size: 14px;
    font-weight: 600;
    display: block;
    margin-bottom: 6px;
  }
  input {
    width: 100%;
    padding: 11px;
    border: 1px solid #d0d7de;
    border-radius: 8px;
    font-size: 14px;
    margin-bottom: 14px;
    box-sizing: border-box; /* Ensures inputs don't go out of the box */
  }
  input:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 3px rgba(76,175,80,.4);
  }
  button {
    width: 100%;
    padding: 12px;
    background: var(--primary);
    color: white;
    font-size: 15px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 8px;
  }
  button:hover:not(:disabled) {
    background: var(--btn-hover);
  }
  button:disabled {
    background: #9acdab;
    cursor: not-allowed;
  }
  .msg {
    margin-top: 18px;
    padding: 14px;
    border-radius: 10px;
    display: none;
    font-size: 14px;
  }
  .msg.error {
    background: var(--error-bg);
    color: var(--error-text);
  }
  .msg.success {
    background: var(--success-bg);
    color: var(--success-text);
  }
  .footer {
    text-align: center;
    font-size: 12px;
    color: #777;
    margin-top: 12px;
  }
  .lang {
    text-align: right;
    font-size: 12px;
    margin-bottom: 4px;
    cursor: pointer;
    user-select: none;
  }
</style>
</head>
<body>

<div class="lang" id="langToggle">🌐 English</div>

<div class="box">
  <h2 id="title"></h2>

  <label id="lblDomain"></label>
  <input id="domain" placeholder="例如：google.com">

  <label id="lblDest"></label>
  <input id="dest" placeholder="例如：admin@gmail.com">

  <button id="submit"></button>

  <div id="msg" class="msg"></div>

  <div class="footer" id="footer"></div>
</div>

<script>
const i18n = {
  zh: {
    title: "Cloudflare 邮件路由初始化",
    domain: "您托管在Cloudflare上的域名",
    dest: "您的接收邮箱",
    placeholderDomain: "例如：google.com",
    placeholderDest: "例如：admin@gmail.com",
    start: "开始配置",
    processing: "处理中...",
    footer: "⚡ 自动创建 MX / catch-all / admin@ 转发",
    langSwitch: "🌐 English"
  },
  en: {
    title: "Cloudflare Email Routing Setup",
    domain: "The Domain Name You Host On Cloudflare",
    dest: "Your Destination Email",
    placeholderDomain: "e.g., google.com",
    placeholderDest: "e.g., admin@gmail.com",
    start: "Apply Settings",
    processing: "Processing...",
    footer: "⚡ Auto-create MX / catch-all / admin@ forwarding",
    langSwitch: "🌐 中文"
  }
};

let lang = localStorage.getItem("lang") || (navigator.language.startsWith("zh") ? "zh" : "en");

function applyLang() {
  const t = i18n[lang];
  document.getElementById("title").textContent = t.title;
  document.getElementById("lblDomain").textContent = t.domain;
  document.getElementById("lblDest").textContent = t.dest;
  document.getElementById("domain").placeholder = t.placeholderDomain;
  document.getElementById("dest").placeholder = t.placeholderDest;
  document.getElementById("submit").textContent = t.start;
  document.getElementById("footer").textContent = t.footer;
  document.getElementById("langToggle").textContent = t.langSwitch;
}
applyLang();

document.getElementById("langToggle").onclick = () => {
  lang = lang === "zh" ? "en" : "zh";
  localStorage.setItem("lang", lang);
  applyLang();
};

const btn = document.getElementById("submit");
const msg = document.getElementById("msg");

btn.onclick = async () => {
  msg.style.display = "none";
  msg.textContent = "";
  btn.disabled = true;
  btn.textContent = i18n[lang].processing;

  // 校验表单是否为空
  const domain = document.getElementById("domain").value.trim();
  const dest = document.getElementById("dest").value.trim();

  if (!domain || !dest) {
    // 提示用户填充所有字段
    msg.style.display = "block";
    msg.className = "msg error";
    msg.innerHTML = "❌ 请填写所有字段！";
    btn.disabled = false;
    btn.textContent = i18n[lang].start;
    return; // 停止执行后续代码
  }

  const body = {
    domain,
    dest,
    lang
  };

  const resp = await fetch("/", {
    method: "POST",
    body: JSON.stringify(body)
  });

  const data = await resp.json();
  msg.style.display = "block";

  if (data.error) {
    msg.className = "msg error";
    msg.innerHTML = "❌ " + data.error + "<br><br>" +
      (data.solutions ? data.solutions.map(s => "• " + s).join("<br>") : "");
  } else {
    msg.className = "msg success";
    msg.innerHTML = "✅ " + data.success;
  }

  btn.disabled = false;
  btn.textContent = i18n[lang].start;
};

</script>
</body>
</html>`, { headers: { "Content-Type": "text/html;charset=UTF-8" } });
    }

    // ---------------------- API JSON Handler ----------------------
    if (request.method === "POST") {
      const { domain, dest, lang="zh" } = await request.json();
      const t = {
        notFound:{
          zh:`未找到域名 ${domain}`, 
          en:`Domain ${domain} not found in your Cloudflare account`
        },
        verifyEmail:{
          zh:`邮箱 ${dest} 需要验证，请点击 Cloudflare 邮件中的验证链接`,
          en:`Email ${dest} must be verified. Please click the verification link sent by Cloudflare`
        },
        success:{
          zh:`域名 ${domain} 已配置成功，并将邮件转发到 ${dest}`,
          en:`Domain ${domain} has been configured and will forward email to ${dest}`
        }
      };

      const ERR = (msg,solutions)=>new Response(JSON.stringify({error:msg,solutions}),{status:400,headers:{"Content-Type":"application/json"}});
      const OK = msg=>new Response(JSON.stringify({success:msg}),{headers:{"Content-Type":"application/json"}});

      const token = env.CF_API_TOKEN;
      const api = (m,u,b)=>fetch("https://api.cloudflare.com/client/v4"+u,{
        method:m,headers:{"Authorization":"Bearer "+token,"Content-Type":"application/json"},
        body:b?JSON.stringify(b):undefined
      }).then(r=>r.json());

      const z = await api("GET", `/zones?name=${domain}`);
      const zone = z.result?.[0];
      if(!zone){
        return ERR(t.notFound[lang], lang==="zh"
          ?["确认域名已添加到 Cloudflare","域名 NS 已指向 Cloudflare","等待 DNS 生效后再试"]
          :["Make sure domain is added to Cloudflare","Set NS to Cloudflare","Wait for DNS propagation"]);
      }

      const ZONE_ID = zone.id, ACCOUNT_ID = zone.account.id;
      await api("POST", `/zones/${ZONE_ID}/email/routing/enable`);
      await api("POST", `/accounts/${ACCOUNT_ID}/email/routing/addresses`, { email: dest });

      const list = await api("GET", `/accounts/${ACCOUNT_ID}/email/routing/addresses`);
      const item = list.result.find(x=>x.email===dest);

      if (!item?.verified) {
        return ERR(t.verifyEmail[lang], lang==="zh"
          ?["检查收件箱和垃圾箱","Cloudflare 目标地址处点【重新发送验证邮件】","验证后再次提交"]
          :["Check inbox and spam folder","Click 'Resend verification email' in Cloudflare","Submit again after verifying"]);
      }

      await api("PUT", `/zones/${ZONE_ID}/email/routing/rules/catch_all`, {
        enabled:true,name:"catch-all to worker email-server",
        matchers:[{type:"all"}],
        actions:[{type:"worker",value:["email-server"]}]
      });

      await api("POST", `/zones/${ZONE_ID}/email/routing/rules`, {
        name:`admin@${domain} to ${dest}`,enabled:true,
        matchers:[{type:"literal",field:"to",value:`admin@${domain}`}],
        actions:[{type:"forward",value:[dest]}]
      });

      return OK(t.success[lang]);
    }

    return new Response("405");
  }
};
