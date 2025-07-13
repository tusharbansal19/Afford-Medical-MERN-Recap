# 💻 MERN Stack Project – Full Concept Recap 

Welcome to the **MERN Stack Project**, a complete boilerplate and recap of core concept

> **M**ongoDB, **E**xpress.js, **R**eact.js, and **N**ode.js


---

## 🚀 Key Concepts of the MERN Stack

---

### 🏗️ Full-Stack Architecture

* **MongoDB**: Flexible NoSQL database used to store documents
* **Express.js**: Backend web framework on top of Node.js for APIs
* **React.js**: JavaScript library for building interactive user interfaces
* **Node.js**: JavaScript runtime for executing server-side logic

These technologies form a decoupled full-stack app where:

* **React (Client)** fetches and displays data
* **Express/Node (Server)** processes logic and handles API routes
* **MongoDB (Database)** stores and retrieves structured data

---

## 📦 Backend (Node.js + Express.js)

### 🔧 Setup

```bash
cd backend
npm install
```

### 🔹 Features

* Express app initialized with RESTful routes
* MongoDB connection via Mongoose
* Modular structure: `routes/`, `controllers/`, `models/`
* `.env` for secure config management

### ▶️ Start Backend

```bash
npm start
```

> Runs on: `http://localhost:5000`

---

## 💻 Frontend (React.js)

### 🔧 Setup

```bash
cd frontend
npm install
```

### 🔹 Features

* Axios-based HTTP requests to backend APIs
* Functional components with hooks (useState, useEffect)
* React Router for navigation
* Local state management for forms and data
* Responsive layout and reusable UI components

### ▶️ Start Frontend

```bash
npm start
```

> Runs on: `http://localhost:3000`

---



> Connection string used in `.env`:

```
MONGO_URI=mongodb://127.0.0.1:27017/mern_test
```

---

## 📡 API Endpoints Reference

| Method | Endpoint         | Description       | Request Body                   | Response |
| ------ | ---------------- | ----------------- | ------------------------------ | -------- |
| GET    | `/api/users`     | Fetch all users   | —                              | JSON     |
| POST   | `/api/users`     | Create a new user | `{ name, email, password }`    | JSON     |
| PUT    | `/api/users/:id` | Update user by ID | `{ name?, email?, password? }` | JSON     |
| DELETE | `/api/users/:id` | Delete user by ID | —                              | JSON     |

> CRUD operations follow REST conventions.

---

## 🛠️ Git Workflow

| Command                     | Purpose                          |
| --------------------------- | -------------------------------- |
| `git init`                  | Initialize a Git repository      |
| `git add .`                 | Stage all files                  |
| `git commit -m "message"`   | Commit changes                   |
| `git remote add origin URL` | Link to remote GitHub repository |
| `git push origin main`      | Push to GitHub                   |
| `git pull origin main`      | Pull latest code                 |
| `git checkout -b feature-x` | Create new branch for features   |

---

## ⚡ Core Skill Highlights

* ✅ Implemented complete CRUD with clean modular structure
* ✅ Applied environment separation with `.env` and `dotenv`
* ✅ Hands-on with real MongoDB (local) and test collection
* ✅ Created frontend+backend integration from scratch
* ✅ Designed RESTful APIs with error handling and edge-case tests

---

## 🚀 What This Proves

This project isn't just a template; it's a **complete recap of core MERN stack concepts**. It reflects:

* Full understanding of frontend-backend-database integration
* Efficient code architecture for scalability and maintainability
* Clear grasp of Git, Node, Express, React, and Mongo best practices

---

## 👨‍💼 Author

**Tushar Bansal**
CS Engineer | MERN Stack Developer
Email: [tusharbansal3366@gmail.com](mailto:tusharbansal3366@gmail.com)




