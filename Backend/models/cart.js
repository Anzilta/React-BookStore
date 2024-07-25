const mongoose=require("mongoose")

const cartschema= new mongoose.Schema({
    Email:{type:String,required:true},
    Bookname:{ type:String ,required:true},
    Imageurl:{ type:String ,required:true},
    Price:{ type:String ,required:true}
    
 
})
const cart= mongoose.model("cart",cartschema)
module.exports=cart