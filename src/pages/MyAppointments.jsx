import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function MyAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/appointments", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setAppointments(res.data);
      } catch (err) {
        alert("Failed to load appointments");
      }
    };
    fetchAppointments();
  }, []);

  const cancelAppointment = async (id) => {
    try {
      await axios.put(
        `http://localhost:5000/api/appointments/cancel/${id}`,
        {},
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      alert("Appointment cancelled");
      setAppointments(appointments.map(a => a._id === id ? { ...a, status: "cancelled" } : a));
    } catch (err) {
      alert("Cancel failed: " + err.response?.data?.message);
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center text-primary mb-4">📋 My Appointments</h3>

      {appointments.length === 0 ? (
        <div className="alert alert-info text-center">No appointments found</div>
      ) : (
        <ul className="list-group">
          {appointments.map((a) => (
            <li
              key={a._id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>
                  {a.doctor.username.startsWith("Dr.") ? a.doctor.username : `Dr. ${a.doctor.username}`}
                </strong> <br />
                <span className="text-muted">{new Date(a.date).toLocaleString()}</span> <br />
                <span className={`badge ${a.status === "booked" ? "bg-success" : "bg-secondary"}`}>
                  {a.status}
                </span>
              </div>

              {a.status === "booked" && (
                <button className="btn btn-danger btn-sm" onClick={() => cancelAppointment(a._id)}>
                  Cancel
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyAppointments;
