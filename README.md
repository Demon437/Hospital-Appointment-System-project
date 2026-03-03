# 🏥 Hospital Appointment System (MERN Stack)

A full-stack Hospital Appointment Booking System built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.

This application allows patients to book appointments with doctors, manage schedules, and provides secure role-based dashboards.

---

## 🚀 Features

### 👤 Authentication

* User Registration (Doctor / Patient)
* Secure Login System (JWT Authentication)
* Protected Routes
* Role-Based Access Control

### 🧑‍⚕️ Doctor Dashboard

* View Assigned Appointments
* Cancel Appointments
* Manage Patient Interactions

### 🧍 Patient Dashboard

* Book Appointments
* View Appointment History
* Cancel Appointments
* Browse Available Doctors

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Bootstrap
* React Hooks
* Axios

### Backend

* Node.js
* Express.js
* RESTful APIs

### Database

* MongoDB (MongoDB Compass)

### Authentication

* JSON Web Token (JWT)

---

## 📂 Project Structure

```
Hospital-Appointment-System-project/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   └── components/
│   └── App.jsx
│
└── README.md
```

---

## 🧪 How to Run Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Demon437/Hospital-Appointment-System-project.git
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Start Backend:

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🎯 What This Project Demonstrates

* Full-Stack MERN Architecture
* REST API Development
* JWT-Based Authentication
* Role-Based Authorization
* CRUD Operations
* Real-world Appointment Workflow
* Clean Frontend-Backend Separation

---

## 🔮 Future Enhancements

* Email/SMS Appointment Notifications
* Online Consultation (Video Integration)
* Payment Integration
* Admin Panel
* Doctor Rating System
* Analytics Dashboard

---

## 👨‍💻 Author

**Manthan**
Full Stack Developer (MERN Stack)

GitHub: https://github.com/Demon437

---

⭐ If you found this project helpful, consider starring the repository.
