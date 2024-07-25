import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './updatebook.css'
import axios from "axios"
import { useLocation, useNavigate } from 'react-router-dom'


const Updatebook= () => {
const navigate = useNavigate();
const location = useLocation()
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
  const Update = (event) => {
    event.preventDefault();
    // post data to DB
    axios.put(`http://127.0.0.1:1000/updatebook/${Data._id}`,Data)
    .then(()=>{
        console.log('Form submitted:',Data)
        navigate('/Adminbook')
    })
    .catch((error)=>{
        console.log(error)
    })
    // Here you would typically send the form data to your backend

  };

  useEffect(() =>{
    if(location.state.post){
        console.log("first", location.state.post)
        setData(location.state.post)
    }
    else{
        console.log("no daata")
    }
  },[location.state])
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
          <br/>
          <br/>
         
        
      <Button  onClick={Update}>Update</Button>
      </div>
      </div>
   </div>
  )
}

export default Updatebook