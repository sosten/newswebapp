//Mongoose module to create Schema
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    confirmPassword: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('usersTable', userSchema);