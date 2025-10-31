<div align="center">

### 🌐 Language | 语言

[🌟 English](README.md) | [🌏 中文](README_CN.md) 

</div>

## 中文说明

## 🌐 Cloudflare 一键邮箱转发 — 可视化面板

无需服务器 / SMTP / 后端，即可把任意域名变成邮箱！

✨ **功能特色**

* ✅ 一键开通 Cloudflare 邮件路由
* ✅ 自动创建 MX / SPF / 全域名转发
* ✅ 自动创建 `admin@` 邮箱
* ✅ 中英双语界面
* ✅ Cloudflare Worker
* ✅ 新手友好，无需编程

❗**要求**
* ⚠️ 需注册Cloudflare
* ⚠️ 需有一个域名
---

## 🚀 在线体验

> **🔗 [https://email-routing.qtzh.dpdns.org/](https://email-routing.qtzh.dpdns.org/)**

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

Pages → 环境变量(变量和机密)

| Type           | Name           | Value    |
| -------------- | -------------- | -------- |
| Secret         | `CF_API_TOKEN` | 复制 token |

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

---

## 🛡️ 限制

| 规则          | 说明       |
| ----------- | -------- |
| 最多约 200 个邮箱 | CF 账号限制  |
| 必须托管在你账号里   | 才能修改 DNS |

---

## 📄 许可证

<details>
<summary><b>MIT 许可证</b></summary>

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

## ⭐ 项目统计

[![Star History Chart](https://api.star-history.com/svg?repos=XShen-Jason/cloudflare-email-routing.git&type=date&legend=top-left)](https://www.star-history.com/#XShen-Jason/cloudflare-email-routing.git&type=date&legend=top-left)
