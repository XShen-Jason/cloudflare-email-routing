### 🌐 Language | 语言

**[English](#english-version)** | **[中文说明](#中文说明)**

---

## English Version

## 🌐 Cloudflare Email Routing — One-Click Setup UI

Turn any domain into a working mailbox — without servers, SMTP, or backend.

✨ **Features**

* ✅ One-click enable Cloudflare Email Routing
* ✅ Auto-create MX / SPF / catch-all rules
* ✅ `admin@domain` forwarding
* ✅ Multi-language UI (English / 中文)
* ✅ Deploy to Cloudflare Pages + Worker
* ✅ Beginner-friendly — no coding needed

---

## 🚀 Live Demo

> **🔗 [https://routing.yourdomain.com](https://routing.yourdomain.com)**

---

## 📸 UI Screenshot

> Replace after uploading
> ![screenshot](assets/demo.png)

---

## 📚 What this does

| Feature                    | Description                        |
| -------------------------- | ---------------------------------- |
| Auto-setup email routing   | Configures Cloudflare email system |
| Verify domain & email      | Checks Cloudflare + mailbox        |
| Create destination address | Set receive mailbox                |
| Catch-all → forward        | Forward all domain emails          |
| Auto `admin@`              | Quick email admin mapping          |
| No-code UI                 | Made for beginners                 |

---

## 🧑‍🏫 Tutorial — Host Domain on Cloudflare

### 1️⃣ Register / Log in

👉 [https://dash.cloudflare.com](https://dash.cloudflare.com)

### 2️⃣ Add domain

**Add Site → enter domain → Free Plan**

### 3️⃣ Change name servers

| Cloudflare NS             |
| ------------------------- |
| `daisy.ns.cloudflare.com` |
| `hal.ns.cloudflare.com`   |

Wait a few minutes ✅

---

## 📦 Deploy & Use

### ✅ Step 1 — Fork this repo

### ✅ Step 2 — Create Cloudflare Pages

Pages → Create project → connect repo
**Build / Output: leave empty**

Example URL: `https://yourproject.pages.dev`

### ✅ Step 3 — Bind Worker

Pages → Settings → Functions → Worker Binding

| Name           | Worker             |
| -------------- | ------------------ |
| `email-router` | Select your Worker |

### ✅ Step 4 — Add API Token

Cloudflare → My Profile → API Tokens → **Create Token**

Add this variable in Pages:

| Name           | Value      |
| -------------- | ---------- |
| `CF_API_TOKEN` | your token |

---

## 🎯 Use it

Open your Pages URL → enter:

| Field       | Meaning        |
| ----------- | -------------- |
| Domain      | Your CF domain |
| Destination | Real mailbox   |

Then click ✅ one-click config

---

## ❓ FAQ

### ❌ Domain not found?

* Must use Cloudflare NS
* Wait DNS propagation
* Domain must be yours (not free subdomain)

### ❗ Free subdomain like `xxx.dpdns.org`?

Not supported — unless the **root domain is on your Cloudflare**

---

## 🛡️ Limits

| Rule                              | Info             |
| --------------------------------- | ---------------- |
| Max destinations                  | ~200 per account |
| Domain must be in your CF account | required         |

---

## ⚖️ License

MIT

---

## 💬 Feedback

Issues / PR welcome ⭐

---

## 中文说明

## 🌐 Cloudflare 一键邮箱转发 — 可视化面板

无需服务器 / SMTP / 后端，即可把任意域名变成邮箱！

✨ **功能特色**

* ✅ 一键开通 Cloudflare 邮件路由
* ✅ 自动创建 MX / SPF / 全域名转发
* ✅ 自动创建 `admin@` 邮件
* ✅ 中英双语界面
* ✅ Cloudflare Pages + Worker
* ✅ 新手友好，无需编程

---

## 🚀 在线体验

> **🔗 [https://routing.yourdomain.com](https://routing.yourdomain.com)**

---

## 📸 截图

> 上传后替换
> ![screenshot](assets/demo.png)

---

## 📚 本工具能做什么

| 功能            | 说明       |
| ------------- | -------- |
| 自动开通邮件路由      | 省去手动设置   |
| 校验域名与邮箱       | 提示配置是否正确 |
| 添加目标邮箱        | 设置真实收件地址 |
| 全域名转发         | 收所有邮箱地址  |
| `admin@` 快速创建 | 自动处理管理邮箱 |
| 图形界面          | 给小白用     |

---

## 🧑‍🏫 教程：托管域名到 Cloudflare

### 1️⃣ 登录 Cloudflare

[https://dash.cloudflare.com](https://dash.cloudflare.com)

### 2️⃣ 添加域名

**Add Site → 输入域名 → 免费套餐**

### 3️⃣ 修改 DNS

| Cloudflare 域名服务器          |
| ------------------------- |
| `daisy.ns.cloudflare.com` |
| `hal.ns.cloudflare.com`   |

等待几分钟 ✅

---

## 📦 部署与使用

### ✅ Step 1 — Fork 项目

### ✅ Step 2 — Pages 创建项目

Build / Output 均留空
得到：`https://xxxx.pages.dev`

### ✅ Step 3 — 绑定 Worker

| 名称             | Worker      |
| -------------- | ----------- |
| `email-router` | 选择你的 Worker |

### ✅ Step 4 — API Token

Cloudflare → API Tokens → **创建**

Pages → 环境变量

| Name           | Value    |
| -------------- | -------- |
| `CF_API_TOKEN` | 复制 token |

---

## 🎯 使用方法

打开 Pages 地址 → 输入

| 字段          | 说明   |
| ----------- | ---- |
| Domain      | 你的域名 |
| Destination | 收件邮箱 |

点击 ✅ 自动配置

---

## ❓ 常见问题

### ❌ 找不到域名？

* NS 必须指向 Cloudflare
* 等待解析生效
* 不能用别人送的子域

### ❗ `xxx.dpdns.org`?

免费二级域**不支持**邮箱路由
除非整个主域托管到 CF

---

## 🛡️ 限制

| 规则          | 说明       |
| ----------- | -------- |
| 最多约 200 个邮箱 | CF 账号限制  |
| 必须托管在你账号里   | 才能修改 DNS |

---

## ⚖️ License

MIT

---

## 💬 反馈

欢迎 Issue / PR / Star ⭐

---
