 const mongoose=require("mongoose");

const user=new mongoose.Schema({


    name:{
        type:String,
    },
    class:{
        type:String,
    },
    roll_no:{
        type:Number
    },
    gender:{
        type:String
    },
    subject:{
        type:String
    },



})

const Register = new mongoose.model("Users" , user)

module.exports = Register