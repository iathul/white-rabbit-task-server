const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        trim: true,
        default: ''
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    introduction: {
        type: String,
        required: true,
        trim:true
    },
    phoneNumber: {
        type:Number,
        required: true,
    },
    experience: {
        type:String,
        required: true,
        trim:true
    },
    achievements: {
        type:String,
        required: true,
        trim: true
    } 
})

module.exports = mongoose.model('User', userSchema)