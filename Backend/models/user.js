const mongoose=require('mongoose')

const schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    
    },
    email:{
        type:String,
        required:true
    },
    passWord:{
       type:String,
        required:true
    }


})
const userModel1=mongoose.model("user",schema)
module.exports=userModel1