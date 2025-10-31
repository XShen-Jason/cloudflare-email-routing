## 🌐 Cloudflare Email Routing — One-Click Setup UI

### 一键配置 Cloudflare 邮件路由（可视化界面）

Turn any domain into a working mailbox — without servers, SMTP, or backend.
无需服务器 / SMTP / 后端，即可把任意域名变成邮箱！

✨ Features | 功能

* ✅ One-click enable Cloudflare Email Routing
* ✅ Auto-create MX / SPF / catch-all rules
* ✅ admin@domain forwarding
* ✅ Multi-language UI (English / 中文)
* ✅ Deploy to Cloudflare Pages + Worker
* ✅ Beginner-friendly — no coding

---

## 🚀 Live Demo / 在线体验
> **🔗 [https://routing.yourdomain.com](https://routing.yourdomain.com)**

---

## 📸 UI Screenshot

> 上传图片后替换👇
> ![screenshot](assets/demo.png)

---

## 📚 What this does / 本项目能做什么

| 英文                                            | 中文                   |
| --------------------------------------------- | -------------------- |
| Automatically set up Cloudflare email routing | 自动开通 Cloudflare 邮箱路由 |
| Verify domain & email                         | 检查域名与邮箱              |
| Create destination address                    | 添加目标邮箱               |
| Set catch-all → forward                       | 配置全域名转发规则            |
| Set admin@ forward                            | 自动创建 `admin@` 转发     |
| Simple UI for non-technical users             | 给新人用的可视化界面           |

---

## 🧑‍🏫 Tutorial — Host Domain on Cloudflare

### 教程：把域名托管到 Cloudflare

#### 1️⃣ Register / Log in

> 登录 Cloudflare：[https://dash.cloudflare.com](https://dash.cloudflare.com)

#### 2️⃣ Add your domain

**Add Site → 输入域名 → Free Plan**

#### 3️⃣ Change domain DNS (IMPORTANT)

去域名注册商，把 NS 修改为：

| NS 服务器                    |
| ------------------------- |
| `daisy.ns.cloudflare.com` |
| `hal.ns.cloudflare.com`   |

⚠️ 必须等 DNS 生效（通常几分钟）

---

## 📦 Deploy & Use

### 部署与使用

#### ✅ Step 1 — Fork / Clone repo

点击 GitHub **Fork** 或下载代码

#### ✅ Step 2 — Create Cloudflare Pages project

Cloudflare Pages → Create project
选择 GitHub 仓库 → Framework = None

**Build command:** *empty*
**Output folder:** *empty*

部署完成后会得到一个 URL 🙌

> 例：`https://yourproject.pages.dev`

#### ✅ Step 3 — Bind Worker

在 Pages 设置：
**Functions > Add a Worker binding**

| Name           | Worker        |
| -------------- | ------------- |
| `email-router` | 选择你部署的 Worker |

> （你之前生成 Worker 的用户已经有了，这里只绑定）

#### ✅ Step 4 — Add API Token

Cloudflare Dashboard → My Profile → API Tokens →
**Create token → Template: `Edit Cloudflare Workers` + Email routing permissions**

然后在 **Pages → Settings → Environment Variables** 添加：

| Name           | Value           |
| -------------- | --------------- |
| `CF_API_TOKEN` | your token here |

---

## 🎯 Use the Tool

### 开始使用！

打开你的 Pages URL：
输入：

| 字段                | 说明                  |
| ----------------- | ------------------- |
| Domain            | 你托管在 Cloudflare 的域名 |
| Destination email | 接收邮件的真实邮箱           |

点击 ✅ 一键配置

若目标邮箱未验证 → Cloudflare 会发验证邮件
验证后再点一次即可

---

## ❓ Common Questions | 常见问题

### ❌ Domain not found?

* Make sure NS is Cloudflare
* Wait DNS propagation
* Domain must be paid or free second-level

###❗ Sub-domain like `xxx.dpdns.org`?

Cloudflare Email Routing **only works on domains fully hosted on Cloudflare**
第三方免费子域**不支持邮件路由**（除非整个主域托管到 CF）

---

## 🛡️ Limits | 限制

| Rule                                  | Explanation                 |
| ------------------------------------- | --------------------------- |
| Max destinations                      | ~200 per Cloudflare account |
| One domain must be in your CF account | 必须托管在你账号下                   |

---

## ⚖️ License

MIT

---

## 💬 Feedback / 反馈

欢迎 issue / PR / Star ⭐
