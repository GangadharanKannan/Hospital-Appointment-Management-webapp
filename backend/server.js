const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/mongodb');
const connectCloudinary = require('./config/cloudinary');
const adminRouter = require('./routes/adminRoute');
const doctorRouter = require('./routes/doctorRoute');
const userRouter = require('./routes/userRoute');

dotenv.config();

const app = express();
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

app.use(express.json());
app.use(cors());

app.use('/api/admin',adminRouter);
app.use('/api/doctor',doctorRouter);
app.use("/api/user", userRouter);


app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(port)