<!-- Banner -->
<p align="center">
  <img src="https://img.shields.io/badge/Full%20Stack-Interview%20Platform-blueviolet?style=for-the-badge" alt="Talent IQ" />
</p>

<h1 align="center">Talent IQ 🚀💡</h1>
<p align="center">
  <b>Empowering better technical interviews</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License" />
  <img src="https://img.shields.io/badge/Backend-Node.js%20%7C%20Express-brightgreen?style=flat-square" alt="Backend" />
  <img src="https://img.shields.io/badge/Frontend-React%20%7C%20Vite-blue?style=flat-square" alt="Frontend" />
  <img src="https://img.shields.io/badge/Monorepo-pnpm-yellow?style=flat-square" alt="pnpm" />
</p>

---

## ✨ Overview

Talent IQ is a modern, full-stack interview platform designed to streamline the technical hiring process for both candidates and interviewers. Built with a scalable architecture, it provides a seamless experience for coding interviews, real-time collaboration, and candidate evaluation.

---

## 🌟 Features

- 💻 **Live coding environment** with real-time collaboration
- 👤 **Candidate authentication** and profile management
- 📚 **Question bank** and interview scheduling
- ⚡ **Code execution** and evaluation
- 🧑‍💼 **Interviewer dashboard** and feedback system
- 🎨 **Modern UI** built with React and Vite
- 🔗 **RESTful API backend** with Node.js and Express
- 🔒 **Secure authentication** and environment variable management

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, JavaScript, CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB (example, update as needed)
- **Package Management:** pnpm (monorepo)
- **Other:** ESLint, dotenv

---

## 🗂️ Monorepo Structure

```
talent-IQ/
├── backend/         # Node.js/Express backend API
│   ├── src/
│   │   ├── lib/
│   │   ├── models/
│   │   └── server.js
│   ├── package.json
│   └── .env
├── frontend/        # React + Vite frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .env
├── package.json     # Monorepo root
├── pnpm-workspace.yaml
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- 🟢 Node.js (v18+ recommended)
- 🟣 pnpm (for monorepo management)

### Setup Instructions

#### 1️⃣ Clone the repository

```bash
git clone https://github.com/ashu-dwd/talent-IQ.git
cd talent-IQ
```

#### 2️⃣ Install dependencies

```bash
pnpm install
```

#### 3️⃣ Configure environment variables

- Copy `.env.example` to `.env` in both `backend/` and `frontend/` directories.
- Fill in the required environment variables as shown below.

<details>
<summary>🔑 <b>Example: backend/.env (with comments)</b></summary>

```env
# Server configuration
PORT=3000                   # Port for backend server
NODE_ENV=production         # Environment (development/production)

# Database
DB_URI=mongodb+srv://...    # MongoDB connection string

# Third-party API keys
INNGEST_EVENT_KEY=...       # Inngest event key (for event-driven workflows)
INNGEST_SIGNING_KEY=...     # Inngest signing key (for webhook/event verification)
STREAM_API_KEY=...          # Stream API key (for chat/collaboration features)
STREAM_API_SECRET=...       # Stream API secret

# Authentication (Clerk)
CLERK_PUBLISHABLE_KEY=...   # Clerk publishable key (frontend)
CLERK_SECRET_KEY=...        # Clerk secret key (backend)

# Frontend URL
CLIENT_URL=http://localhost:5173  # URL of the frontend app
```

</details>

- **Tip:** Never commit your actual secrets to version control! Use `.env.example` for structure only.

#### 4️⃣ Start the backend server

```bash
cd backend
pnpm start
```

#### 5️⃣ Start the frontend development server

```bash
cd ../frontend
pnpm dev
```

- The frontend will typically run at [http://localhost:5173](http://localhost:5173) 🌐
- The backend will typically run at [http://localhost:3000](http://localhost:3000) 🛠️

---

## 📝 Usage

- 📝 Register or log in as a candidate or interviewer.
- 📅 Schedule or join interviews.
- 👨‍💻 Use the live coding environment for technical assessments.
- 🧑‍⚖️ Interviewers can provide feedback and evaluate candidates.

---

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests for new features, bug fixes, or improvements.

1. 🍴 Fork the repository
2. 🌱 Create a new branch (`git checkout -b feature/your-feature`)
3. 💾 Commit your changes (`git commit -am 'Add new feature'`)
4. 🚀 Push to the branch (`git push origin feature/your-feature`)
5. 📨 Open a pull request

---

## 📄 License

This project is licensed under the MIT License.

---

<p align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2J6b2Z2d3F2d2Z2d3F2d2Z2d3F2d2Z2d3F2d2Z2d3F2d2Z2/g9582DNuQppxC/giphy.gif" width="120" alt="rocket" />
</p>

<p align="center">
  <b>Talent IQ</b> – 🚀 Empowering better technical interviews! 💡
</p>
