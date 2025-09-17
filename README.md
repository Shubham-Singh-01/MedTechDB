<div align="center">

# 🏥 MedTech 🌐

### *Revolutionizing Healthcare Information Sharing — Easy, Secure & Accessible*

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge\&logo=react\&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Latest-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge\&logo=express\&logoColor=white)](https://expressjs.com/)
[![Web3](https://img.shields.io/badge/Web3.js-4.8.0-F16822?style=for-the-badge\&logo=web3dotjs\&logoColor=white)](https://web3js.readthedocs.io/)
[![Solidity](https://img.shields.io/badge/Solidity-0.8.25-363636?style=for-the-badge\&logo=solidity\&logoColor=white)](https://soliditylang.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge\&logo=bootstrap\&logoColor=white)](https://getbootstrap.com/)

![Project Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-5.0.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

</div>

---

## 🌟 Overview

**MedTech** is a next-generation healthcare information platform built to empower individuals with **reliable, secure, and accessible health data**. The platform focuses on **reproductive health**, **women’s healthcare**, and **underserved communities**, ensuring **privacy, autonomy, and inclusivity**.

<div align="center">

### 🧑‍⚕️ Empowering healthier decisions, one click at a time!

</div>

## 🌐 Live Demo

<p align="center">
  <a href="https://medtech.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Hosted%20on-Vercel-000?logo=vercel&logoColor=white" alt="Vercel Badge">
  </a><br/>
  <sub>Frontend hosted on Vercel</sub>
</p>

<p align="center">
  <a href="https://medtech.onrender.com/" target="_blank">
    <img src="https://img.shields.io/badge/Backend%20on-Render-0033AD?logo=render&logoColor=white" alt="Render Badge">
  </a><br/>
  <sub>Backend & Full API hosted on Render (may sleep)</sub>
</p>

<p align="center">
  Experience a secure, user-friendly healthcare information system that bridges critical gaps in accessibility.
</p>

---

<br/>

## ✨ Key Features

<div align="center">

|                  Feature                  | Description                                                    |
| :---------------------------------------: | :------------------------------------------------------------- |
|       📖 **User-Friendly Platform**       | Simple, intuitive UI for quick access to reliable health info  |
|   👩‍⚕️ **Focus on Reproductive Health**  | Prioritizing women’s health & reproductive care resources      |
|         🔒 **Privacy & Security**         | End-to-end encryption & strict privacy policies                |
| 🌍 **Empowering Underserved Communities** | Bridging access gaps in rural and underprivileged regions      |
|        ♿ **Accessibility for All**        | Inclusive design for every individual regardless of background |

</div>

---

## 🛠️ Technology Stack

<div align="center">

### Frontend

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square\&logo=react\&logoColor=black)](https://reactjs.org/)
[![React Router](https://img.shields.io/badge/React_Router-6.17.0-CA4245?style=flat-square\&logo=react-router\&logoColor=white)](https://reactrouter.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=flat-square\&logo=bootstrap\&logoColor=white)](https://getbootstrap.com/)
[![Icons](https://img.shields.io/badge/React_Bootstrap_Icons-Latest-4285F4?style=flat-square)](https://react-icons.github.io/react-icons/)

### Backend

[![Node.js](https://img.shields.io/badge/Node.js-Latest-339933?style=flat-square\&logo=nodedotjs\&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18.2-000000?style=flat-square\&logo=express\&logoColor=white)](https://expressjs.com/)
[![Web3](https://img.shields.io/badge/Web3.js-4.8.0-F16822?style=flat-square\&logo=web3dotjs\&logoColor=white)](https://web3js.readthedocs.io/)
[![Solidity](https://img.shields.io/badge/Solidity-0.8.25-363636?style=flat-square\&logo=solidity\&logoColor=white)](https://soliditylang.org/)
[![Truffle](https://img.shields.io/badge/Truffle-5.11.5-5E4672?style=flat-square\&logo=truffle\&logoColor=white)](https://trufflesuite.com/)

</div>

---

## 📡 API Endpoints

### 🔐 Authentication

```
POST /api/auth/register   - Register a new user
POST /api/auth/login      - Authenticate & receive token
GET  /api/auth/profile    - Retrieve user details (protected)
```

### 📊 Healthcare Data

```
GET    /api/resources       - Fetch healthcare resources
POST   /api/resources       - Add new resource
PUT    /api/resources/:id   - Update resource
DELETE /api/resources/:id   - Delete resource
```

---

## 🔒 Security

* **Encryption First** — All sensitive user data encrypted with modern algorithms
* **Token-Based Authentication** — Secure JWT session management
* **Role-Based Access Control** — Restrict unauthorized access
* **Input Validation** — Strong sanitization against injections & XSS

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v14+)
* npm installed

### Installation

1️⃣ **Clone repository**

```bash
git clone https://github.com/Shubham-Singh-01/MedTech.git
cd MedTech
```

2️⃣ **Install dependencies**

```bash
npm install && cd backend && npm install && cd ..
```

3️⃣ **Start development servers**

```bash
npm run both
```

4️⃣ **Open in browser**
Navigate to: `http://localhost:3000`

---

## 🏛️ Project Architecture

```
MedTech/
├── 📁 backend/
│   ├── 📁 routes/
│   │   ├── 📄 auth.js        # Authentication APIs
│   │   └── 📄 resources.js   # Healthcare resources CRUD APIs
│   ├── 📁 models/
│   │   ├── 📄 User.js        # User schema
│   │   └── 📄 Resource.js    # Healthcare resources schema
│   └── 📄 index.js           # Express server entry
│
├── 📁 frontend/
│   ├── 📁 src/
│   │   ├── 📄 App.js         # React app entry
│   │   ├── 📄 Home.js        # Home page
│   │   ├── 📄 About.js       # About page
│   │   ├── 📄 Login.js       # User login
│   │   ├── 📄 Signup.js      # User registration
│   │   └── 📄 Navbar.js      # Navigation bar
│   └── 📄 index.js           # React entry point
```

---

## 🔮 Roadmap

* 📱 **Mobile App** — React Native integration
* 🌗 **Dark/Light Mode** — Theme customization
* 👥 **Community Features** — Forums, chat & support groups
* 🧠 **AI Insights** — Personalized health recommendations
* 🌍 **Multilingual Support** — Breaking language barriers

---

<div align="center">

## 📜 License

Released under the [MIT License](LICENSE)

## 🤝 Contributing

Contributions are welcome! Check [issues](https://github.com/Shubham-Singh-01/MedTech/issues).

---

### Crafted with ❤️ by Shubham Singh

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge\&logo=linkedin)](https://linkedin.com/in/singh200410)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge\&logo=github)](https://github.com/Shubham-Singh-01)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-00A98F?style=for-the-badge\&logo=safari)](https://ss-folio.vercel.app)

</div>
