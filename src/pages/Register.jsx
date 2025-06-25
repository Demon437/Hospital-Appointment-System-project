import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
  const [form, setForm] = useState({ username: "", password: "", role: "patient" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      alert("Registered Successfully");
      navigate("/"); 
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ maxWidth: "450px", width: "100%" }}>
        <h3 className="text-center mb-4 text-primary">Register</h3>

        {error && (
          <div className="alert alert-danger text-center">{error}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              name="username"
              className="form-control"
              value={form.username}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Select Role</label>
            <select
              name="role"
              className="form-select"
              value={form.role}
              onChange={handleChange}
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          <button type="submit" className="btn btn-success w-100">
            Register
          </button>
        </form>

        <div className="text-center mt-3">
          Already have an account? <Link to="/">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
