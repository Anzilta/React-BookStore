import React, { useState } from 'react'
import './book.css'
import axios from 'axios'
import { useEffect } from 'react'

const Book1 = () => {
  const[Data,setData]=useState([])
  useEffect(()=> {
   
     axios.get("http://localhost:1000/getbook")
      .then((response)=>{
        console.log(response.data),
        setData(response.data)})
   
    
  },[]);
  return (
    <div >
    <div className='text'>
      <h4>BOOK SECTION</h4>
    </div>
    <div className='data'>
      {Data.map((data,i)=>(
        <div className='container'>
        <div className='card' key={i}>
          <img src={data.Imageurl} alt='/'></img>
          <div className='card-body'>
        <h6>{data.Bookname}</h6>
        </div>
        <div className='para'>
        <p>{data.Author}</p>
        <p>{data.Description}</p>
        <p>{data.Price}</p>
        </div>
        </div>
        </div>
      ))}
    </div>
  
    </div>
  )
}

export default Book1