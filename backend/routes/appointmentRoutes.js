const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointmentController");
const verifyToken = require("../middlewares/authMiddleware");

router.post("/book", verifyToken, appointmentController.bookAppointment);
router.put("/cancel/:id", verifyToken, appointmentController.cancelAppointment);
router.get("/", verifyToken, appointmentController.getAppointments);

module.exports = router;
