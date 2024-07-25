import React from 'react'
import './adminhome.css'
import { Button} from '@mui/material'
import { Link } from 'react-router-dom'

const Adminhome = () => {
  return (
    <div className='homebody'>
          <div className='adminhome'>
        <div className='page'>
            < div className='head'>
            <h2>WELCOME TO ADMIN PAGE</h2>
           <div className='token'>
            <p>Details For Users</p>
            <Button><Link to='/User'style={{textDecoration:"none",color:'white'}}>USER</Link></Button>
            <p>Details For Books</p>
            <Button><Link to='/Adminbook' style={{textDecoration:"none",color:'white'}}>BOOK</Link></Button>
            </div>
          </div>
         <div className='textp'>
            <img src='/read.png'alt='error'></img>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Adminhome