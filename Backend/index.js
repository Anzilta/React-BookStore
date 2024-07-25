const express = require("express")
const app = express();
// const bookRoute=require("./routes/booksRoutes")
const bookmodel=require("./models/bookmodel")
const cart=require("./models/cart")
const user = require("./models/user");
const admin=require("./models/admin")
require("./connection")
const cors=require("cors");


app.use(cors())
app.use(express.json());



// post sinup
app.post('/',async(req,res)=>{
    try {
        await user(req.body).save()
        res.send("data sent")
   
        
    } catch (error) {
        res.send(error)
        
    }


})
// admin post
app.post('/admin',async(req,res)=>{
    try {
        await admin(req.body).save()
        res.send("data sent")
        
    } catch (error) {
        res.send(error)
        
    }})
    // admin get
    app.get("/getadmin",async(req,res)=>{                    
        let {email} = req.query
        try {
            const admin1=await admin.find()
            res.send(admin1)
        } catch (error) {
            res.send(error)
        }})
// get user email
app.get("/getuser",async(req,res)=>{                    
    let {email} = req.query
    try {
        const user1=await user.findOne({email})
        res.send(user1)
    } catch (error) {
        res.send(error)
    }})
    // get admin email
    app.get("/getadmin",async(req,res)=>{                    
        let {email} = req.query
        try {
            const admin1=await admin.findOne({email})
            res.send(admin1)
        } catch (error) {
            res.send(error)
        }})
// get user
app.get("/getuser2",async(req,res)=>{                    
    
    try {
        const user2=await user.find()
        res.send(user2)
    } catch (error) {
        res.send(error)
    }})
    // update user by id
    app.put("/updateuser/:id",async(req,res)=>{
        const id=req.params.id
    const{name,place,age,phoneNumber,email,passWord,education }=req.body
    let user1
        try {
           user1= await user.findByIdAndUpdate(id,{   
        name,
        place,
        age,
        phoneNumber,
        email,
        passWord,
        education
       
        
          
        })
           await user1.save().then(()=> res.send("updated successfully"))
          
        }
        catch (error) {
            console.log(error)
            
        }
    })
    // deleteuser
    app.delete("/deleteuser/:id",async(req,res)=>
        {
           
            try {
                await user.findByIdAndDelete(req.params.id).then(()=>{
                    res.send("deleted succussfully")
                })
                
            } catch (error) {
                
            }
        })
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
    })
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

//  add to cart
app.post('/cart',async(req,res)=>{
    try {
        console.log(req.body)
        await cart(req.body).save()
        res.send("data sent")
        
    } catch (error) {
        res.send(error)
        
    }


    
})
app.listen(1000,()=>{
    console.log("SERVER STARTED SUCCESSFULLY");
})
