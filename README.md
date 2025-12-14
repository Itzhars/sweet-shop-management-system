# 🍬 Sweet Shop Management System

A **full-stack Sweet Shop Management System** built as part of the **Incubyte TDD Assessment**.
The application provides secure authentication, role-based access control, and complete sweet inventory management with a clean and scalable architecture.

---

## 🎯 Objective

The objective of this project is to design, build, and test a **production-ready full-stack application** demonstrating:

* RESTful API design
* Database modeling and persistence
* Role-based authorization
* Test-Driven Development (TDD)
* Clean coding practices
* Responsible usage of AI tools

---

## 🚀 Features

### 🔐 Authentication & Authorization

* User registration and login
* JWT-based authentication
* Role-based access (Admin / User)

### 🍭 Sweet Management

* View all available sweets
* Search sweets by name, category, or price range
* Add new sweets (Admin only)
* Update sweet details (Admin only)
* Delete sweets (Admin only)

### 📦 Inventory Management

* Purchase sweets (quantity decreases)
* Restock sweets (Admin only)
* Purchase button disabled when stock is zero

### 🧪 Quality & Testing

* Backend developed using **Test-Driven Development (TDD)**
* Unit and integration tests using Jest & Supertest

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js
* TypeScript
* Prisma ORM
* SQLite
* JWT Authentication
* bcryptjs
* Jest + Supertest

### Frontend

* React (Vite)
* JavaScript
* Fetch API

---

## 📁 Folder Structure

```
sweet-shop-management-system/
│
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── dev.db
│   │
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── auth.controller.ts
│   │   │   └── sweet.controller.ts
│   │   │
│   │   ├── routes/
│   │   │   ├── auth.routes.ts
│   │   │   └── sweet.routes.ts
│   │   │
│   │   ├── middleware/
│   │   │   ├── auth.middleware.ts
│   │   │   └── role.middleware.ts
│   │   │
│   │   ├── utils/
│   │   │   ├── prisma.ts
│   │   │   └── jwt.ts
│   │   │
│   │   ├── app.ts
│   │   └── server.ts
│   │
│   ├── tests/
│   │   ├── auth.test.ts
│   │   └── sweet.test.ts
│   │
│   ├── .env
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── SweetList.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   └── Admin.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── README.md
└── .gitignore
```

---

## 🔑 API Endpoints

### Authentication

| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| POST   | /api/auth/register | Register a new user |
| POST   | /api/auth/login    | Login user          |

### Sweets Management (Protected)

| Method | Endpoint           | Access | Description    |
| ------ | ------------------ | ------ | -------------- |
| GET    | /api/sweets        | User   | Get all sweets |
| GET    | /api/sweets/search | User   | Search sweets  |
| POST   | /api/sweets        | Admin  | Add new sweet  |
| PUT    | /api/sweets/:id    | Admin  | Update sweet   |
| DELETE | /api/sweets/:id    | Admin  | Delete sweet   |

### Inventory

| Method | Endpoint                 | Access | Description    |
| ------ | ------------------------ | ------ | -------------- |
| POST   | /api/sweets/:id/purchase | User   | Purchase sweet |
| POST   | /api/sweets/:id/restock  | Admin  | Restock sweet  |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone <repository-url>
cd sweet-shop-management-system
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npx prisma migrate dev
npm run dev
```

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🧪 Running Tests

```bash
cd backend
npm test
```

---

## 🤖 My AI Usage

I used **AI tools (ChatGPT)** responsibly during the development of this project to:

* Brainstorm API design and folder structure
* Generate initial boilerplate code for controllers and tests
* Improve test case coverage and edge-case handling
* Refactor code for better readability and maintainability

All AI-generated code was **reviewed, modified, and integrated manually** to ensure correctness and originality. AI significantly improved my development speed while maintaining clean coding standards.

For commits where AI assistance was used, proper **AI co-authorship** was added as per Incubyte guidelines.

---

✅ *This project was developed following Incubyte guidelines with clean architecture, TDD, and responsible AI usage.*
