const validator = require('validator');
const bcrypt = require('bcrypt');
const cloudinary = require('cloudinary').v2;
const doctorModel = require('../models/doctorModel');
const jwt = require('jsonwebtoken');
const appointmentModel = require('../models/appointmentModel');
const userModel = require('../models/userModel');

//API for adding doctor
const addDoctor = async (req,res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
        const imageFile = req.file;

        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address){
            return res.json({success:false, message:"Missing details"});
        }

        if (!validator.isEmail(email)) {
            return res.json({success:false, message:"Please enter a valid email"})
        }

        if (password.length < 8) {
            return res.json({success:false, message:"Please enter a strong password"})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const imgUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:'image'});
        const imageUrl = imgUpload.secure_url;

        const doctorData = {
            name,
            email,
            password: hashedPassword,
            image: imageUrl,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            date: Date.now()
        }

        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save()

        res.json({success:true, message:"Doctor Added"})

    } catch (error) {
        res.json({success:false, message: error.message})
    }

}

//api for admin login
const loginAdmin = async (req,res) => {
    try {
        const { email, password} = req.body;

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            res.json({success:true, token})
        } else {
            res.json({success:false, message: "Invalid Credentials"})
        }
    } catch (error) {
        res.json({success:false, message: error.message})
    }
}

// api to get all doctor list for admin panel
const allDoctors = async (req,res) => {
    try {
        const doctors = await doctorModel.find({}).select('-password')
        res.json({success:true, doctors})
    } catch (error) {
        res.json({success:false, message: error.message})     
    }
}

// api to get all appointment
const appointmentsAdmin = async (req,res) => {
    try {
        const appointments = await appointmentModel.find({});

        res.json({success:true, appointments})
    } catch (error) {
        res.json({success:false, message: error.message})
    }
}

// api to cancel appointments
const appointmentCancel = async (req, res) => {
  try {
    const { appointmentId } = req.body;

    const appointmentData = await appointmentModel.findById(appointmentId);

    await appointmentModel.findByIdAndUpdate(appointmentId, {
      cancelled: true,
    });

    const { docId, slotDate, slotTime } = appointmentData;

    const doctorData = await doctorModel.findById(docId);

    let slots_booked = doctorData.slots_booked;

    slots_booked[slotDate] = slots_booked[slotDate].filter(
      (e) => e !== slotTime
    );

    await doctorModel.findByIdAndUpdate(docId, { slots_booked });

    res.json({ success: true, message: "Appointment Cancelled" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// api for dashboard details
const adminDashboard = async (req, res) => {
    try {
        const doctors = await doctorModel.find({})
        const users = await userModel.find({})
        const appointments = await appointmentModel.find({})

        const dashData = {
            doctors: doctors.length,
            appointments: appointments.length,
            patient: users.length,
            latestAppointments: appointments.reverse().slice(0,5)
        }

        res.json({success:true, dashData})
    } catch (error) {
        res.json({success:false, message:error.message})
    }
}

module.exports = {addDoctor, loginAdmin, allDoctors, appointmentsAdmin, appointmentCancel, adminDashboard}