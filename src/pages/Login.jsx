import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"; 
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      username,
      password,
    });
    localStorage.setItem("token", res.data.token);

    if (res.data.user.role === "doctor") {
      navigate("/doctor-dashboard");
    } else {
      navigate("/dashboard"); 
    }

  } catch (err) {
    setError("Invalid username or password");
  }
};



  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4">Login</h3>

        {error && (
          <div className="alert alert-danger text-center p-2" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

       
        <div className="text-center mt-3">
          Don't have an account? <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
