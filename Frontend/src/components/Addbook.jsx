import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import './addbook.css'
import axios from "axios"


const Addbook = () => {
  const [Data,setData]=useState({
    Bookname:"",
    Description:"",
    Author:"",
    Imageurl:"",
    Price:""
  })
  const change=(event)=>{
    const { name, value } = event.target;
    setData({...Data, [name]:value});
    console.log(Data)

  }
  const post = (event) => {
    event.preventDefault();
    // post data to DB
    axios.post("http://127.0.0.1:1000/add",Data)
    .then(()=>{
        console.log('Form submitted:',Data)
        window.location.reload()
    })
    .catch((error)=>{
        console.log(error)
    })
    // Here you would typically send the form data to your backend

  };
  return (
    <div>
      <div className='main'>
        <div className='container' >
          <TextField  className='textfield'label="Bookname"  onChange={change} name= "Bookname" value={Data.Bookname} variant="filled" /> 
         <br/>
          <br/>
          <TextField  className='textfield' label="Description" onChange={change}name= "Description"value={Data.Description} variant="filled" /> 
          <br/>
         <br/>
          <TextField  className='textfield'label="Author"   onChange={change}name= "Author"value={Data.Author}  variant="filled"/>
         <br/>
         <br/>
         <TextField  className='textfield'label="Imageurl"  onChange={change} name= "Imageurl" value={Data.Imageurl} variant="filled" /> 
         <br/>
         <br/>
          <TextField  className='textfield'label="Price"  onChange={change} name= "Price" value={Data.Price}   variant="filled" /> 
        
      <Button  onClick={post}>ADD</Button>
      </div>
      </div>
   </div>
  )
}

export default Addbook