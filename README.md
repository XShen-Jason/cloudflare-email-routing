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

## 📄 License

<details>
<summary><b>MIT License</b></summary>

Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

</details>

---

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=XShen-Jason/cloudflare-email-routing.git&type=date&legend=top-left)](https://www.star-history.com/#XShen-Jason/cloudflare-email-routing.git&type=date&legend=top-left)
---
