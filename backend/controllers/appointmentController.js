const Appointment = require("../models/Appointment");
const User = require("../models/User");


exports.bookAppointment = async (req, res) => {
    const { doctorId, date } = req.body;
    const patientId = req.user.id;

    try {
        const doctor = await User.findById(doctorId);
        if (!doctor || doctor.role !== "doctor") {
            return res.status(400).json({ message: "Invalid doctor" });
        }

        const appointment = new Appointment({
            doctor: doctorId,
            patient: patientId,
            date,
        });

        await appointment.save();
        res.status(201).json({ message: "Appointment booked successfully", appointment });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.cancelAppointment = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;

    try {
        const appointment = await Appointment.findById(id);
        if (!appointment) return res.status(404).json({ message: "Appointment not found" });

        if (appointment.patient.toString() !== userId && appointment.doctor.toString() !== userId) {
            return res.status(403).json({ message: "Unauthorized" });
        }

        appointment.status = "cancelled";
        await appointment.save();
        res.json({ message: "Appointment cancelled", appointment });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.getAppointments = async (req, res) => {
    const userId = req.user.id;
    const userRole = req.user.role;

    try {
        let appointments;

        if (userRole === "doctor") {
            appointments = await Appointment.find({ doctor: userId })
                .populate("patient", "username") 
                .populate("doctor", "username"); 
        } else if (userRole === "patient") {
            appointments = await Appointment.find({ patient: userId })
                .populate("doctor", "username")
                .populate("patient", "username");
        } else {
            return res.status(403).json({ message: "Invalid role" });
        }

        res.json(appointments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

