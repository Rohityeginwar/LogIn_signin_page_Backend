let mongoose = require ('mongoose')

let registerSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        
    },
    ConfirmPassword:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    }
})


let RegisterModel = new mongoose.model("Candid_Register" ,registerSchema )

module.exports = RegisterModel