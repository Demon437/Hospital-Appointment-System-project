# 🏥 Hospital Appointment System - MERN Stack

A full-stack Hospital Appointment Booking System built using **React**, **Node.js**, **Express**, and **MongoDB (Compass)**.

---

## 🔧 Features

- 👤 User Registration (Doctor/Patient)
- 🔐 Login Authentication (JWT based)
- 🧑‍⚕️ Role-based Dashboards (Doctor & Patient)
- 📅 Book Appointments (Patients)
- 🗂 View Appointments (Both Roles)
- ❌ Cancel Appointments (Doctor/Patient)
- 🔍 View all available doctors

---

## ⚙️ Tech Stack

- **Frontend**: React.js + Bootstrap
- **Backend**: Node.js + Express.js
- **Database**: MongoDB (Compass)
- **Authentication**: JSON Web Token (JWT)
- **State**: React Hooks

---

## 🧪 How to Run This Project Locally

### 📁 Folder Structure

mern/
│
├── backend/ # Express + MongoDB
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middlewares/
│ └── server.js
│
├── src/pages/
│ └── App.jsx

---

## 🔌 Backend Setup

```bash
cd backend
npm install


Create .env file:

MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
PORT=5000



Frontend Setup

cd mern
npm install
npm start
```
