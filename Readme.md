# 💬 Talksy - Real-Time Chat Application

![Node](https://img.shields.io/badge/Node.js-v14+-green.svg)
![React](https://img.shields.io/badge/React-v18+-blue.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green.svg)
![Socket.io](https://img.shields.io/badge/Socket.io-white.svg)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black.svg)

**Talksy** is a seamless, real-time messaging platform designed to connect people instantly. It offers secure user authentication, real-time communication, and an elegant, responsive user interface.

---

## 🌐 Live Demo

> 🔗 **Live Website:** [Talksy ↗]()  
> _(Deployed on Vercel)_

---

## 📑 Table of Contents

- [✨ Features](#features)
- [🛠️ Tech Stack](#tech-stack)
- [🔧 Prerequisite](#prerequisites)
- [⚙️ Installation & Setup](#installation-and-setup)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [🔐 Environmental Variables](#environment-variables)
- [📡 API Endpoints](#api-endpoints)
- [📂 Folder Structure](#folder-structure)
- [🤝 Contributing](#contributing)

---

<a id="features"></a>
## ✨ Features

- ⚡ **Real-time Messaging:** Instant message delivery and reception powered by Socket.io.
- 🔐 **Secure Authentication:** JWT-based user authentication and bcrypt password hashing.
- 🟢 **Online Status:** See which users are currently online in real-time.
- 🖼️ **Profile Customization:** Users can upload and update their profile pictures using Cloudinary.
- 📱 **Responsive Design:** A beautiful, fully responsive UI built with Tailwind CSS.
- 👀 **Message Read Status:** Know when your messages have been seen.
- 🛡️ **Protected Routes:** Ensure only authenticated users can access the chat and profile settings.

---

<a id="tech-stack"></a>
## 🛠️ Tech Stack

### Frontend

- **React.js** (v19)
- **Vite** (Next Generation Frontend Tooling)
- **Tailwind CSS** (v4)
- **React Router DOM** (Routing)
- **Socket.io-client** (Real-time communication)
- **Axios** (HTTP requests)
- **React Hot Toast** (Notifications)

### Backend

- **Node.js & Express.js**
- **MongoDB & Mongoose** (Database & ODM)
- **Socket.io** (WebSocket server)
- **JSON Web Tokens (JWT)** (Authentication)
- **Bcrypt.js** (Password hashing)
- **Cloudinary** (Image hosting)

### Deployment

- **Vercel** (Frontend)
- **Render** (Backend)

---

<a id="prerequisites"></a>
## 🔧 Prerequisite

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v18.x or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- A [MongoDB](https://www.mongodb.com/) account and cluster URL.
- A [Cloudinary](https://cloudinary.com/) account for image uploads.

---

<a id="installation-and-setup"></a>
## ⚙️ Installation and Setup

Clone the repository

```bash
git clone https://github.com/your-username/talksy.git
cd Talksy
```

<a id="backend-setup"></a>
### Backend Setup

1.  Navigate to the `backend` directory and install dependencies:

```bash
cd backend
npm install
```

2. Start the backend server:

```bash
npm run server
```

_(The server will run on `http://localhost:5000`)_

<a id="frontend-setup"></a>
### Frontend Setup

1. Open a new terminal and navigate to the frontend directory and Install dependencies:

```bash
cd frontend
npm install
```

2. Start the Vite development server:

```bash
npm run dev
```

_(The frontend will be accessible at `http://localhost:5173`)_

---

<a id="environment-variables"></a>
## 🔐 Environmental Variables

1. Create a `.env` file in the **`backend`** directory and add the following keys:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

2. Create a `.env` file in the **`frontend`** directory:

```env
VITE_BACKEND_URL=http://localhost:5000
```

---

<a id="api-endpoints"></a>
## 📡 API Endpoints

### Auth Routes (`/api/auth`)

| Method | Endpoint          | Description                  | Access  |
| :----- | :---------------- | :--------------------------- | :------ |
| `POST` | `/signup`         | Register a new user          | Public  |
| `POST` | `/login`          | Authenticate & get token     | Public  |
| `PUT`  | `/update-profile` | Update user profile image    | Private |
| `GET`  | `/check`          | Verify authentication status | Private |

### Message Routes (`/api/messages`)

| Method | Endpoint    | Description                   | Access  |
| :----- | :---------- | :---------------------------- | :------ |
| `GET`  | `/users`    | Get all users for sidebar     | Private |
| `GET`  | `/:id`      | Get message history with user | Private |
| `POST` | `/send/:id` | Send a message to a user      | Private |
| `PUT`  | `/mark/:id` | Mark messages as seen         | Private |

### Status Routes (`/api/status`)

| Method | Endpoint | Description          | Access |
| :----- | :------- | :------------------- | :----- |
| `GET`  | `/`      | Verify server status | Public |

<a id="folder-structure"></a>
## 📂 Folder Structure

```text
Talksy - Chat App/
├── backend/
│   ├── controllers/       # Route controller functions
│   ├── lib/               # Database and Cloudinary configuration
│   ├── middleware/        # Authentication middlewares
│   ├── models/            # Mongoose database schemas
│   ├── routes/            # Express route definitions
│   ├── server.js          # Entry point for backend & Socket.io setup
│   └── package.json       # Backend dependencies
│
├── frontend/
│   ├── public/            # Static public assets
│   ├── context/           # React Context providers for global state
│   ├── src/               
│   │   ├── assets/        # Images, icons, and static assets
│   │   ├── components/    # Reusable UI components (Sidebar, ChatContainer, etc.)
│   │   ├── lib/           # Utility functions and helpers
│   │   ├── pages/         # Full page views (HomePage, LoginPage, ProfilePage)
│   │   ├── App.jsx        # Main application component & routing setup
│   │   ├── index.css      # Global styles and Tailwind directives
│   │   └── main.jsx       # React DOM rendering entry point
│   ├── index.html         # Main HTML entry point
│   ├── vite.config.js     # Vite bundler configuration
│   └── package.json       # Frontend dependencies and scripts
│
└── Readme.md              # Project Documentation
```

<a id="contributing"></a>
## 🤝 Contributing

Contributions are always welcome!

If you find this project useful, please consider giving it a ⭐ — it really helps and is greatly appreciated.

Feel free to fork the repository and submit a pull request for any enhancements or bug fixes.
