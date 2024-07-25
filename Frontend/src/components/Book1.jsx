import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {AppBar,Toolbar,Link, Button, Typography, Box, Card, CardMedia, CardContent, CardActions, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
const Book1 = () => {
  const { setAuthenticated, setUserId, userId } = useAuth();
  const [data, setData] = useState([]);
   const navigate=useNavigate()
   const [cartData, setCartData] = useState({Email:'', Bookname:'', Imageurl:'',Price:''})


  useEffect(() => {
    axios.get("http://localhost:1000/getbook")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  const addToCart = () => {
    axios.post("http://localhost:1000/cart", cartData)
    .then((response) => {
      console.log("added to cart", response)
    })
    .catch((error) => {
      console.log("error adding in cart", error)
    })
    console.log("Added to cart", cartData);
    // Implement add to cart functionality here
  };
  const Logout = (event) => {
    event.preventDefault();
    setAuthenticated(false);
    navigate("/")
  };

  return (
    <>
    
     <AppBar   position="static"sx={{ background: 'linear-gradient(to right, #8B4513, #8B3513)' }}>
      <Toolbar className='app'>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Bookstore Library
        </Typography>
        <Button> <Link to='/Cart'style={{textDecoration:"none",color:'white'}}>Cart</Link></Button>
        <Button  onClick ={Logout} sx={{
             
              color: 'white',
             
            }}>Logout</Button>
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
              bgcolor: 'white',
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
                <Button
                  size="small"
                  onClick={() => navigate("/Learnmore", { state: { post: book } })}
                  sx={{
                    backgroundColor: '#8B4513',
                    color: '#FFF8DC',
                    '&:hover': { backgroundColor: '#A0522D' },
                  }}
                >
                  Learn More
                </Button>
                <Button
                  size="small"
                  onClick={()=>{
                    setCartData({Email:userId, Bookname:book.Bookname, Imageurl:book.Imageurl,Price:book.Price })
                    addToCart()}}
                  sx={{
                    backgroundColor: '#D2691E',
                    color: '#FFF8DC',
                    '&:hover': { backgroundColor: '#CD853F' },
                  }}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    
</>
  );
};

export default Book1;