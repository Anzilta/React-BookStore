import React, { useState, useEffect } from 'react'
import './home.css'
import { AppBar, Toolbar, Typography, Button, Card, CardContent, CardActions, Grid, Container} from '@mui/material';
// import { Button} from '@mui/material'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { styled } from '@mui/system';


const Home = () => {
  const GradientBackground = styled('div')({
    background: 'linear-gradient(45deg, #8B4513 30%, #D2691E 90%)',    minHeight: '100vh',
    padding: '24px 0',
  });

  
  
  const StyledCard = styled(Card)({
    backgroundColor:"white",
  height:"720px",
    backdropFilter: 'blur(10px)',
    '&:hover': {
      transform: 'translatey(-5px)',
    
      boxShadow: '0px 10px 8px #999;',
    },
  });
  
  const[Data,setData]=useState([])
  useEffect(()=> {
   
     axios.get("http://localhost:1000/getbook")
      .then((response)=>{
        console.log(response.data),
        setData(response.data)})
   
    
  },[]);
  return (
    <div>
      <GradientBackground>
    <AppBar  position="static">
      <Toolbar className='bar'>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Bookstore Library
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/login">Login</Button>
      
      </Toolbar>
    </AppBar>

    <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Latest Books
      </Typography>
      <Grid container spacing={4}>
        {Data.map((book,i) => (
          <Grid item key={i} xs={12} sm={6} md={4}>
            <Card>
            <StyledCard>
              <CardContent>
                <Typography variant="h6" component="div">
                  {book.Bookname}
                </Typography>
                <Typography color="text.secondary">
                  By {book.Author}
                </Typography>
                
                <Typography className="Homeimg" variant="body2">
                  <img src={book.Imageurl}/>
                </Typography>
                <Typography variant="body2">
                Price: {book.Price}
                </Typography>
                {/* <Typography variant="body2" color={book.available ? "success.main" : "error.main"}>
                  {book.available ? "Available" : "Not Available"}
                </Typography> */}
              </CardContent>
              <CardActions>
                <Button><Link to='/Login'style={{textDecoration:"none",color:'black'}}>View Details </Link></Button>
              </CardActions>
              </StyledCard>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </GradientBackground>
  </div>
);
  
    }
export default Home