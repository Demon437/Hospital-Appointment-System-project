import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function DoctorDashboard() {
    const navigate = useNavigate();
    const [appointments, setAppointments] = useState([]);

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/appointments", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                setAppointments(res.data);
            } catch (err) {
                alert("Failed to fetch appointments");
            }
        };

        fetchAppointments();
    }, []);

    return (
        <div className="container py-5">
            <div className="card shadow p-4">
                <h2 className="text-center mb-4 text-primary">🩺 Doctor Dashboard</h2>

                <h5 className="text-secondary mb-3">📋 My Appointments</h5>

                {appointments.length === 0 ? (
                    <div className="alert alert-info text-center">No appointments found</div>
                ) : (
                    <ul className="list-group mb-4">
                        {appointments.map((a) => (
                            <li
                                key={a._id}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                <div>
                                    <strong>👤 Patient: {a.patient?.username || "N/A"}</strong><br />
                                    <span className="text-muted">📅 {new Date(a.date).toLocaleString()}</span><br />
                                    <span className={`badge ${a.status === "booked" ? "bg-success" : "bg-secondary"}`}>
                                        {a.status}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}

                <div className="text-center">
                    <button className="btn btn-danger" onClick={logout}>
                        🔓 Logout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DoctorDashboard;
