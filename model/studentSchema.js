const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({

    firstName : {
        type:String,
        required:true
    },

    lastName : {
        type:String,
        required:true
    },

    email : {
        type:String,
        required:true
    },

    standard : {
        type:String,
        required:true
    },
    rollnumber : {
        type:Number,
        required:true
    },

    number : {
        type:Number,
        required:true
    },
    address :{
        type:String,
        required:true
    },

    createdAt : {
        type : Date,
        default: Date.now
    },

})

const student = mongoose.model("student", studentSchema);
module.exports = student;