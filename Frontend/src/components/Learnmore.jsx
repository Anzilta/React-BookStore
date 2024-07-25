import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './learnmore.css'

const Learnmore = () => {
    const[Details,setDetails]=useState([])
    const location =useLocation()
    useEffect(()=>{
        if(location.state.post){

          
           console.log(location.state.post)
          
        }
        else{
            console.log("no data")
        }
    },[])
  return (
    <div>
        <div className='Topic'>
    
                <div className='Topic-container' >
            <div className='Topic-img'>
                <img src={location.state.post.Imageurl} alt='/'/>
            </div>
            <div className='Topic-body'>
                <h2><b>Name:</b>{location.state.post.Bookname}</h2>
                <h2><b>Author:</b>{location.state.post.Author}</h2>
                <h2><b>Description:</b>{location.state.post.Description}</h2>
                <h2><b>price:</b>{location.state.post.Price}</h2>
            </div>
            </div>
      
        </div>
    </div>
  )
}

export default Learnmore