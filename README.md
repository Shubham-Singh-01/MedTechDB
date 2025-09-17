<div align="center">

# ☁️ CLOUD DECK 📝
### *Your secure document storage in the cloud - accessible anywhere, anytime*

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)](https://jwt.io/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![AWS S3](https://img.shields.io/badge/AWS%20S3-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white)](https://aws.amazon.com/s3/)

![Project Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.8.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

</div>

---

## 🌟 Overview

**Cloud Deck** is a cutting-edge web application revolutionizing the cloud-storage experience with secure cloud synchronization. Built with the powerful MERN stack, this application empowers users to create, edit, organize, and access their data (documents,uploads, etc,.) from any device with enterprise-grade security.

<div align="center">

### 💼 Perfect for professionals, students, and creative minds alike!

</div>

## 🌐 Live Demo

<p align="center">
  <a href="https://cloud-deck.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Hosted%20on-Vercel-000?logo=vercel&logoColor=white" alt="Vercel Badge">
  </a><br/>
  <sub>Vercel hosts the frontend only</sub>
</p>

<p align="center">
  <a href="https://cloud-deck-4mrz.onrender.com/" target="_blank">
    <img src="https://img.shields.io/badge/Full%20App%20on-Render-0033AD?logo=render&logoColor=white" alt="Render Badge">
  </a><br/>
  <sub>Render hosts the Full application (May Sleep)</sub>
</p>

<p align="center">
  Access the fully deployed version of the project — fast, responsive, and always up-to-date.
</p>


---
<br/>

## ✨ Key Features

<div align="center">

| Feature | Description |
|:-------:|:------------|
| 🔐 **Secure Authentication** | Military-grade JWT-based authentication with encrypted password storage |
| ☁️ **Cloud Sync** | Seamlessly access your uploads on any device, anytime |
| 🏷️ **Smart Tags** | Powerful categorization system with custom tags for perfect organization |
| 📱 **Responsive Design** | Elegant interface that adapts beautifully to any screen size |
| ⚡ **Lightning Fast** | Optimized backend architecture for instantaneous data retrieval |
| 🛡️ **Data Protection** | Your uploads are protected with industry-standard security protocols |

</div>

---

## 🛠️ Technology Stack

<div align="center">

### Frontend
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![React Router](https://img.shields.io/badge/React_Router-6.17.0-CA4245?style=flat-square&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-Latest-66E3FF?style=flat-square)](https://lucide.dev/)

### Backend
[![Node.js](https://img.shields.io/badge/Node.js-Latest-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18.2-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Latest-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-Latest-880000?style=flat-square&logo=mongoose&logoColor=white)](https://mongoosejs.com/)
[![JWT](https://img.shields.io/badge/JWT-Latest-000000?style=flat-square&logo=json-web-tokens&logoColor=white)](https://jwt.io/)
[![bcrypt](https://img.shields.io/badge/bcrypt.js-Latest-003B57?style=flat-square)](https://github.com/dcodeIO/bcrypt.js/)
[![AWS S3](https://img.shields.io/badge/AWS%20S3-Storage-000000?style=flat-square&logo=amazonaws&logoColor=white)](https://aws.amazon.com/s3/)


</div>

---

## 📡 API Endpoints

### 🔐 Authentication
```
POST /api/auth/Createuser  - Register a new user
POST /api/auth/login       - Authenticate and receive JWT token
POST /api/auth/getuser     - Get logged-in user details (protected)
```

### 📝 Documents
```
GET    /api/uploads           - Retrieve all uploads for logged-in user
POST   /api/uploads           - Create a new upload
PUT    /api/uploads/:id       - Update an existing upload
DELETE /api/uploads/:id       - Delete a upload
```
*Additional endpoints for CRUD operations on documents (in active development)*

---

## 🔒 Enterprise-Grade Security

- **Advanced Encryption** - Password protection using bcrypt with salt rounds
- **Stateless Authentication** - JWT-based token system with signature verification
- **Route Protection** - Middleware guarding against unauthorized access
- **Input Sanitization** - Comprehensive validation using express-validator
- **Robust Error Handling** - Detailed error responses with appropriate HTTP codes

---

## 🚀 Getting Started in Minutes

### Prerequisites
- Node.js (v14+) and npm installed
- MongoDB instance (local)

<div align="center">

### Quick Installation

</div>

1️⃣ **Clone the repository**
```bash
git clone https://github.com/Shubham-Singh-01/Cloud_Deck.git
cd cloud-deck
```

2️⃣ **Install dependencies**
```bash
npm install && cd backend && npm install && cd ..
```

3️⃣ **Configure database**
- Update MongoDB URI in `backend/db.js` if needed

4️⃣ **Launch development servers**
```bash
npm run both
```

5️⃣ **Open application**
- Navigate to `http://localhost:3000` in your browser

---

## 🏛️ Project Architecture

```
CLOUD DECK/
├── 📁 backend/
│   ├── 📁 middleware/
│   │   └── 📄 fetchuser.js            # Authentication middleware for validating user JWT tokens
│   ├── 📁 models/
│   │   ├── 📄 Document.js             # Schema for uploads storage and management
│   │   └── 📄 User.js                 # User model with authentication methods
│   ├── 📁 routes/
│   │   ├── 📄 auth.js                 # Authentication endpoints (login, signup, etc.)
│   │   └── 📄 uploads.js              # API endpoints for Documents CRUD operations
│   ├── 📄 .env                        # Environment variables for backend configuration
│   ├── 📄 db.js                       # Database connection and configuration
│   └── 📄 index.js                    # Express server entry point
├── 📁 frontend/
│   ├── 📁 src/
│   │   ├── 📁 Context/
│   │   │   └── 📁 Auth/
│   │   │       └── 📄 AuthContext.js  # React context for authentication state management
│   │   ├── 📁 Pages/
│   │   │   ├── 📁 Routing/
│   │   │   │   └── 📄 ProtectedRoute.js # Component for securing routes requiring authentication
│   │   │   ├── 📄 About.js            # About page component
│   │   │   ├── 📄 Home.js             # Home page component
│   │   │   ├── 📄 Login.js            # Login page with authentication form
│   │   │   ├── 📄 Navbar.js           # Navigation bar component
│   │   │   ├── 📄 Signup.js           # User registration page
│   │   │   └── 📄 Start.js            # Landing page component after Login
│   │   ├── 📁 Styles/
│   │   │   ├── 📄 About.css           # Styles for About page
│   │   │   ├── 📄 Home.css            # Styles for Home page
│   │   │   ├── 📄 LoginSignup.css     # Shared styles for login and signup forms
│   │   │   ├── 📄 Navbar.css          # Styles for navigation component
│   │   │   └── 📄 Start.css           # Styles for Start page
│   │   └── 📁 utils/
│   │       └── 📄 api.js              # API utility functions for backend communication
│   ├── 📄 App.js                      # Main React application component
│   └── 📄 index.js                    # React entry point

```

---

## 🔮 Roadmap: The Future of Cloud Deck

- 📝 **Rich Text Editor** - Advanced formatting with markdown support
- 👥 **Real-time Collaboration** - Share and co-edit uploads with team members
- 🌓 **Theme Customization** - Personalized dark/light modes and color schemes
- 📱 **Cross-Platform App** - Native mobile experience using React Native
- 📎 **File Attachments** - Seamless uploads and image integration
- 🔍 **Intelligent Search** - Powerful full-text search with smart suggestions
- 📊 **Analytics Dashboard** - Visualize your productivity and upload-taking patterns

---

<div align="center">

## 📜 License

Released under the [MIT License](LICENSE) - Free to use and modify

## 🤝 Contributing

Your contributions can make Cloud Deck even better! Check our [issues page](https://github.com/Shubham-Singh-01/Cloud_Deck/issues).

---

### Crafted with ❤️ by Shubham Singh :)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/singh200410)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github)](https://github.com/Shubham-Singh-01)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-00A98F?style=for-the-badge&logo=safari)](https://ss-folio.vercel.app)

</div>
