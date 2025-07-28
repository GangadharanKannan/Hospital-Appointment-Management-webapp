const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log("Database Connected"))
    await mongoose.connect(`${process.env.MONGODB_URI}/HelloDoc`)
}

module.exports = connectDB;