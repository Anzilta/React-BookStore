const express = require("express")
const app = express();
// const bookRoute=require("./routes/booksRoutes")
const bookmodel=require("./models/bookmodel")
require("./connection")
const cors=require("cors");
const user = require("./models/user");

app.use(cors())
app.use(express.json())



// post sinup
app.post('/',async(req,res)=>{
    try {
        await user(req.body).save()
        res.send("data sent")
        
    } catch (error) {
        res.send(error)
        
    }


})
// user get
app.get("/getuser",async(req,res)=>{
    let user1
    try {
        user1=await user.findOne()
        res.send(user1)
    } catch (error) {
        
    }})
// api post book
app.post('/add',async(req,res)=>{
    try {
        await bookmodel(req.body).save()
        res.send("data sent")
        
    } catch (error) {
        res.send(error)
        
    }})
    
  
// api get book

app.get("/getbook",async(req,res)=>{
    let books
    try {
        books=await bookmodel.find()
        res.send(books)
    } catch (error) {
        
    }
    // api get book with id
    app.get("/getbook/:id",async(req,res)=>{
        let book
        const id= req.params.id
        try {
            
            book=await bookmodel.findById(id)
            res.send(book)
            
        } catch (error) {
            
        }

    })
    // update book with id

    app.put("/updatebook/:id",async(req,res)=>{
        const id=req.params.id
    const{ Bookname,Description,Author,Imageurl,Price}=req.body
    let book
        try {
           book= await bookmodel.findByIdAndUpdate(id,{
             Bookname,
            Description,
            Author,
            Imageurl,
            Price
        })
           await book.save().then(()=> res.send("updated successfully"))
          
        }
        catch (error) {
            console.log(error)
            
        }
    })
    // delete book with id 
    app.delete("/deletebook/:id",async(req,res)=>
    {
       
        try {
            await bookmodel.findByIdAndDelete(req.params.id).then(()=>{
                res.send("deleted succussfully")
            })
            
        } catch (error) {
            
        }
    })

    // app.delete('/lost/:id',async(req,res)=>{ 
    //     try {
    //         console.log(req.params.id)
    //         await bookmodel.findByIdAndDelete(req.params.id)
    //         req.send({message:"data deleted"})
    //     } 
    //     catch (error) {
    //         res.send("not deleted")
            
    //     }
    
    // })
    
})
app.listen(1000,()=>{
    console.log("SERVER STARTED SUCCESSFULLY");
})
