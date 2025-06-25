import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function BookAppointment() {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/users?role=doctor", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setDoctors(res.data);
      } catch (err) {
        alert("Failed to fetch doctors");
      }
    };
    fetchDoctors();
  }, []);

  const handleBook = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/appointments/book",
        { doctorId: selectedDoctor, date },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      alert("Appointment booked successfully!");
      setSelectedDoctor("");
      setDate("");
    } catch (err) {
      alert("Error: " + err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h3 className="mb-4 text-primary text-center">📅 Book an Appointment</h3>
      <form onSubmit={handleBook} className="card p-4 shadow">
        <div className="mb-3">
          <label className="form-label">Select Doctor</label>
          <select
            className="form-select"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            required
          >
            <option value="">-- Choose Doctor --</option>
            {doctors.map((doc) => (
              <option key={doc._id} value={doc._id}>{doc.username}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Choose Date & Time</label>
          <input
            type="datetime-local"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-success">
            ✅ Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookAppointment;
