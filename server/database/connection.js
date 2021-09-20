const { log } = require('debug/src/browser');
const mongoose = require('mongoose');

const connectDB = async () => {

    const con = await mongoose.connect(process.env.MONGO_URL,
        err => {
            if (err) throw err;
            console.log('connected to MongoDB')
        });

    console.log(`MongoDB connected: ${con.connection.host}`)

}

module.exports = connectDB