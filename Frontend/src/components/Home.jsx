import React from 'react'
import './home.css'
import { Button} from '@mui/material'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='homepage'>
        <div className='row'>
            < div className='text'>
            <h2>BOOK STORE FOR YOU </h2>
            <p>checkout book from here</p>
            <Button><Link to='/Book'style={{textDecoration:"none",color:'white'}}>view book</Link></Button>
          </div>
         <div className='textp'>
            <img src='/read.png'alt='error'></img>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home