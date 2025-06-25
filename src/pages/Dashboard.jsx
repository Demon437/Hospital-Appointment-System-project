import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card shadow-lg p-4 text-center" style={{ maxWidth: "500px", width: "100%" }}>
        <h2 className="mb-4 text-primary">👨‍⚕️ Welcome to Dashboard</h2>

        <div className="d-grid gap-3">
          <button className="btn btn-success" onClick={() => navigate("/book")}>
            📅 Book Appointment
          </button>

          <button className="btn btn-info" onClick={() => navigate("/appointments")}>
            🗂 My Appointments
          </button>

          <button className="btn btn-danger" onClick={logout}>
            🔓 Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
