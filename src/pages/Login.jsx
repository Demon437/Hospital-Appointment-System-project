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

  const backgroundStyle = {
    minHeight: "100vh",
    backgroundImage: "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="container-fluid vh-100" style={backgroundStyle}>
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-5">
          <div
            className="card border-0 shadow-lg text-white p-4"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(8px)",
              borderRadius: "1rem",
            }}
          >
            <div className="text-center mb-4">
              <h2 className="fw-bold">Welcome Back 👋</h2>
              <p className="text-light mb-0">Please login to your account</p>
            </div>

            {error && (
              <div className="alert alert-danger text-center py-2" role="alert">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label text-white">Username</label>
                <div className="input-group">
                  <span className="input-group-text bg-light">
                    <i className="bi bi-person-fill"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    placeholder="Enter your username"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label text-white">Password</label>
                <div className="input-group">
                  <span className="input-group-text bg-light">
                    <i className="bi bi-lock-fill"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-100 fw-semibold">
                Login
              </button>
            </form>

            <div className="text-center mt-3">
              <small className="text-white">
                Don’t have an account? <Link to="/register" className="text-info">Register here</Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
