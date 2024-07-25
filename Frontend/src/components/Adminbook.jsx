import React, { useState } from 'react'
import './adminbook.css'
import axios from 'axios'
import { useEffect } from 'react'
import { Button,Box,Grid,Typography,Card,CardMedia,CardContent,CardActions,AppBar,Toolbar,Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const Adminbook = () => {
  const[data,setData]=useState([])
  useEffect(()=> {
   
     axios.get("http://localhost:1000/getbook")
      .then((response)=>{
        console.log(response.data),
        setData(response.data)})
  },[]);

// handleDelete
const handleDelete = (id) =>{
  axios.delete(`http://localhost:1000/deletebook/${id}`)
  .then(() =>{
    console.log('Book deleted')
    window.location.reload();
  })
  .catch((error) => {
    console.log("error deleting",error)
  })
  console.log("deleted", id)
}
 const Click=()=>{
  navigate("/Addbook")

 }



const navigate = useNavigate();

  return (
    <>
    <AppBar  position="static"sx={{ background: 'linear-gradient(to right, #8B4513, #8B3513)' }}>
    <Toolbar className='app'>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        Admin dashboard
      </Typography>
      <Button sx={{textDecoration:"none",color:'white'}} onClick={Click}>Addbook</Button>
   
    </Toolbar>
  </AppBar>

    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(45deg, #8B4513 30%, #D2691E 90%)',
      fontFamily: "'Libre Baskerville', serif",
      padding: 3,
    }}>
      <Typography variant="h4" align="center" sx={{ color: '#FFF8DC', fontWeight: 'bold', mb: 4 }}>
        BOOK SECTION
      </Typography>
      <Grid container spacing={3}>
        {data.map((book, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
            <Card sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              bgcolor: 'rgba(255, 248, 220, 0.9)',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
            }}>
              <CardMedia
                component="img"
                height="200"
                image={book.Imageurl}
                alt={book.Bookname}
                sx={{ objectFit: 'contain', pt: 2 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: '#4A0E0E' }}>
                  {book.Bookname}
                </Typography>
                <Typography variant="body2" sx={{ color: '#8B4513', fontWeight: 'bold' }}>
                  Rs-{book.Price}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between', padding: 2 }}>
              <Button sx={{
                    backgroundColor: '#8B4513',
                    color: '#FFF8DC',
                    '&:hover': { backgroundColor: '#A0522D' },
                  }}onClick={() => {navigate('/Updatebook',{state:{post:book}})}}>Update</Button>
              <Button sx={{
                    backgroundColor: '#8B4513',
                    color: '#FFF8DC',
                    '&:hover': { backgroundColor: '#A0522D' },
                  }} onClick={() =>{handleDelete(book._id)}}>Delete</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  )
}

export default Adminbook