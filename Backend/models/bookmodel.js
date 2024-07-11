const mongoose=require("mongoose")

const bookschema= new mongoose.Schema({
    Bookname:{ type:String ,required:true},
    Description:{ type:String ,required:true},
    Author:{ type:String ,required:true},
    Imageurl:{ type:String ,required:true},
    Price:{ type:String ,required:true}
    
 
})
const booksmodel= mongoose.model("bookmodel",bookschema)
module.exports=booksmodel