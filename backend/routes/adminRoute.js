const express = require('express');
const { addDoctor, loginAdmin, allDoctors, appointmentsAdmin, appointmentCancel, adminDashboard } = require('../controllers/adminController');
const upload = require('../middleware/multer');
const authAdmin = require('../middleware/authAdmin');
const {changeAvailability} = require('../controllers/doctorController');

const adminRouter = express.Router()

adminRouter.post('/add-doctor', authAdmin,upload.single('image'), addDoctor);
adminRouter.post("/login", loginAdmin);
adminRouter.post("/all-doctors", authAdmin, allDoctors);
adminRouter.post("/change-availability", authAdmin, changeAvailability);
adminRouter.get("/appointments", authAdmin, appointmentsAdmin);
adminRouter.post('/cancel-appointment', authAdmin, appointmentCancel);
adminRouter.get('/dashboard', authAdmin, adminDashboard)

module.exports = adminRouter;