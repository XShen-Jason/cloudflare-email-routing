<div align="center">

### 🌐 Language | 语言

[🌟 English](README.md) | [🌏 中文](README_CN.md) 

</div>

## English Version

## 🌐 Cloudflare Email Routing — One-Click Setup UI

Turn any domain into a working mailbox — without servers, SMTP, or backend.

✨ **Features**

* ✅ One-click enable Cloudflare Email Routing
* ✅ Auto-create MX / SPF / catch-all rules
* ✅ `admin@domain` forwarding
* ✅ Multi-language UI (English / 中文)
* ✅ Deploy to Cloudflare Worker
* ✅ Beginner-friendly — no coding needed

❗ **Requirements**:
* ⚠️ You need a Cloudflare account  
* ⚠️ You need to own a domain name

---

## 🚀 Live Demo

> **🔗 [https://email-routing.qtzh.dpdns.org/](https://email-routing.qtzh.dpdns.org/)**

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

| Type           | Name           | Value    |
| -------------- | -------------- | -------- |
| Secret         | `CF_API_TOKEN` | your token |

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
