const mongoose = require('mongoose');

var schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    status: String

});

const User = mongoose.model('user', schema);

module.exports = User;