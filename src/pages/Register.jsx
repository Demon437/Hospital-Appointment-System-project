import React, { useState } from "react";
import axios from "axios";

function Register() {
    const [form, setForm] = useState({ username: "", password: "", role: "patient" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/auth/register", form);
            alert("Registered Successfully");
        } catch (err) {
            alert("Error: " + err.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="username" onChange={handleChange} placeholder="Username" required />
            <input name="password" type="password" onChange={handleChange} placeholder="Password" required />
            <select name="role" onChange={handleChange}>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
            </select>
            <button type="submit">Register</button>
        </form>
    );
}

export default Register;
