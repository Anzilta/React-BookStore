// const router=require("express").Router();
// const bookmodel=require("../models/bookmodel")

// router.post("/add",async(req,res)=>{
//     try {
//         const data = req.body
//         const newbook=new bookmodel(data)
//         await newbook.save().then(()=>
//     {
//         res.send({message: 'BOOK ADDED SUCCCUSSFULLY'})

//     })
        
//     } catch (error) {
//         console.log(error)
        
//     }
// })

// module.Router=router;
// router.post('/',async(req,res)=>{
//     try {
//         await bookmodel(req.body).save()
//         res.send("data sent")
        
//     } catch (error) {
//         res.send(error)
        
//     }})