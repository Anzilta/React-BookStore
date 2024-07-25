import { Button } from '@mui/material'
import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import './user.css'
import { useNavigate } from 'react-router-dom'

const User = () => {
  const navigate=useNavigate()
    const[Data,setData]=useState([])
    useEffect(()=> {
     
       axios.get("http://localhost:1000/getuser2")
        .then((response)=>{
          console.log(response.data),
          setData(response.data)})
     

},[])
const handleDelete=(id)=>{
  axios.delete(`http://localhost:1000/deleteuser/${id}`)
  .then(()=>{
    console.log("user data deleted",id)
    window.location.reload();
  })
  .catch((error)=>{
    console.log(error)
  })

}
  return (
    <div className='about'>
        <div className='totalbody'>
            <h2><b>USER DETAILS</b></h2>
            </div>
            <div className='details'>
            {Data.map((data,i)=>(
                <div className='card-user'key={i}>
                  <div className='grid-item'>
                <h1>{data.name}</h1>
                <div className='para'>
                <p>email:{data.email}</p>
                <p>ph:{data.phoneNumber}</p>
                <p>place:{data.place}</p>
                <p>age:{data.age}</p>
                <p>education:{data.education}</p>
                </div>
                </div>
                <div className='switch'>
                    <Button onClick={()=>{navigate("/Updateuser",{state:{post:data}})}}>Update</Button>
                    <Button onClick={()=>{handleDelete(data._id)}}>Delete</Button>
                </div>

                </div>

            ))}
            </div>

        
    </div>
  )
}

export default User