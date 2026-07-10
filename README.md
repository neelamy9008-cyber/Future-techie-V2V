# 🛡️ SheShield AI – Smart Women's Safety Platform

SheShield AI is a modern web application developed to enhance women's safety through emergency assistance, secure communication, and community reporting. The project provides an intuitive interface for users to register, manage emergency contacts, trigger SOS alerts, and access safety-related features.

> 🚀 Built as a Hackathon MVP using React, Node.js, Express, and Tailwind CSS.

---

# 📖 Table of Contents

- Project Overview
- Problem Statement
- Proposed Solution
- Features
- Technology Stack
- Project Architecture
- Folder Structure
- Installation Guide
- Running the Project
- API Endpoints
- Screenshots
- Future Scope
- Team Members
- License

---

# 🎯 Project Overview

Women often face safety concerns while traveling alone or in unfamiliar locations. Existing emergency applications are either difficult to use or provide limited functionality.

SheShield AI aims to solve this problem by offering:

- Secure user authentication
- Emergency contact management
- Community incident reporting
- One-click SOS system
- Safe Route recommendation (Demo)
- Modern responsive interface

---

# ❗ Problem Statement

Women require a reliable and accessible platform that can assist them during emergencies while also providing preventive safety features.

Current solutions often lack:

- Quick emergency response
- Community-driven safety alerts
- Easy emergency contact management
- Simple user experience
- Integrated safety dashboard

---

# 💡 Proposed Solution

SheShield AI provides an integrated safety platform where users can:

- Register and log in securely
- Maintain emergency contacts
- Trigger emergency SOS alerts
- Report unsafe incidents
- View safer travel routes (Demo)
- Access all features from a centralized dashboard

---

# ✨ Features

## 👤 User Authentication

- User Registration
- User Login
- Form Validation
- Responsive Authentication UI

---

## 📞 Emergency Contacts

- Add Emergency Contacts
- Store Contact Information
- Easy Contact Management

---

## 🚨 SOS Alert System

- One-click SOS Trigger
- SOS History (Backend)
- Emergency Alert API

---

## 📝 Community Reports

Users can submit safety-related reports.

Examples:

- Unsafe Area
- Harassment
- Suspicious Activity
- Poor Street Lighting

---

## 🛣 Safe Route (Demo)

The backend returns:

- Safest Route
- Estimated Distance
- Estimated Time
- Safety Score

---

## 📊 Dashboard

The dashboard serves as the application's control center and provides navigation to all modules.

---

# 🛠 Technology Stack

## Frontend

- React.js
- Vite
- JavaScript (ES6+)
- Tailwind CSS
- React Router DOM
- React Icons
- Axios

---

## Backend

- Node.js
- Express.js

---

## Middleware

- CORS
- Dotenv
- Express JSON Middleware

---

## Development Tools

- Visual Studio Code
- Git
- GitHub
- npm
- Nodemon

---

# 🏗 Project Architecture

```
                React Frontend
                      │
          Axios HTTP Requests
                      │
               Express Backend
                      │
      ------------------------------
      │       │       │       │
   Auth    SOS   Contacts  Reports
                      │
             Safe Route API
```

---

# 📂 Folder Structure

```
SheShield-AI/
│
├── backend/
│   ├── routes/
│   │     ├── authRoutes.js
│   │     ├── contactRoutes.js
│   │     ├── reportRoutes.js
│   │     ├── sosRoutes.js
│   │     └── safeRouteRoutes.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── src/
│   ├── api/
│   │     └── api.js
│   │
│   ├── pages/
│   │     ├── Login.jsx
│   │     ├── Signup.jsx
│   │     ├── Dashboard.jsx
│   │     ├── Emergency.jsx
│   │     ├── SafeRoute.jsx
│   │     └── ...
│   │
│   ├── components/
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── public/
├── package.json
└── README.md
```

---

# ⚙ Installation Guide

## Clone the Repository

```bash
git clone https://github.com/neelamy9008-cyber/Future-techie-V2V.git
```

---

## Frontend Setup

```bash
cd Future-techie-V2V
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## Backend Setup

Open another terminal.

```bash
cd backend
npm install
npm run dev
```

Backend runs at:

```
http://localhost:5000
```

---

# 🚀 Running the Project

### Start Frontend

```bash
npm run dev
```

### Start Backend

```bash
cd backend
npm run dev
```

Open your browser:

```
http://localhost:5173
```

---

# 🔗 API Endpoints

## Authentication

| Method | Endpoint | Description |
|----------|-----------------------|----------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

---

## Emergency Contacts

| Method | Endpoint |
|----------|----------------|
| POST | /api/contacts/add |
| GET | /api/contacts |

---

## Community Reports

| Method | Endpoint |
|----------|----------------|
| POST | /api/reports/add |
| GET | /api/reports |

---

## SOS

| Method | Endpoint |
|----------|-----------------------|
| POST | /api/sos/trigger |
| GET | /api/sos/history |

---

## Safe Route

| Method | Endpoint |
|----------|----------------|
| POST | /api/route |

---

# 📸 Screenshots

> Add screenshots here.

Example:

```
screenshots/
    login.png
    signup.png
    dashboard.png
    emergency.png
    saferoute.png
```

---

# 🚧 Current Limitations

The following features are not fully implemented in this MVP:

- Google Maps Integration
- Live GPS Tracking
- MongoDB Database Storage
- JWT Authentication
- Voice Recognition
- SMS/Email Alerts
- AI-Based Route Prediction

---

# 🔮 Future Scope

Future enhancements include:

- Google Maps API
- Real-time GPS Tracking
- AI Safe Route Prediction
- Live Location Sharing
- Voice-Activated SOS
- Emergency SMS Notifications
- Push Notifications
- MongoDB Integration
- JWT Authentication
- Admin Dashboard
- Incident Analytics

---

# 📚 Concepts Used

- React Components
- React Hooks
- REST APIs
- Express Routing
- Middleware
- State Management
- Responsive UI Design
- Axios API Calls
- JSON Handling

---

# 👥 Team Members

| Member | Responsibility |
|----------|-----------------------------|
| Member 1 | Frontend Development |
| Member 2 | Backend Development |
| Member 3 | Documentation & Presentation |
| Member 4 | Testing & Deployment |

*(Replace with actual team member names if applicable.)*

---

# 🏆 Hackathon Highlights

- Modern Responsive UI
- Modular Architecture
- RESTful Backend APIs
- Easy to Extend
- Beginner-Friendly Codebase
- Clean Folder Structure

---

# 📄 License

This project was developed for educational and hackathon purposes.

Feel free to modify and extend it for learning and research.