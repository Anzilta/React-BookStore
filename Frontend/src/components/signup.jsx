import React, { useState } from 'react';
import './signup.css'
import axios from "axios"
import { Link ,useNavigate} from 'react-router-dom';

import {
  
  Typography,
  TextField,
  Button,
  Grid,
  Box,
} from '@mui/material';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    place: '',
    age: '',
    email: '',
    education: '',
    phoneNumber: '',
    passWord: '',
  });
  

const navigate=useNavigate();
  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData({...formData, [event.target.name]: event.target.value});
    console.log(formData)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // post data to DB
    axios.post("http://127.0.0.1:1000/",formData)
    .then(()=>{
        console.log(formData)
        navigate("/Login")

    })
    .catch((error)=>{
        console.log(error)
    })
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Add your form submission logic here

  };

  return (
    <>
 <div className='contain'>
  <div className='body'>
    
      <Box
        sx={{
          marginTop: 8,
          backgroundColor:'transperent',
          color: 'black',
          display: 'flex',
          width:"600px",
          flexDirection: 'column',
          alignItems: 'center',    
          justifyContent:'center'   ,  
          borderRadius:'10px',
        }}
      >
        <Typography component="h1" variant="h">
          SIGN UP
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField 
                required
                fullWidth
                id="name"
                label=<b>NAME</b>
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="place"
                label=<b>PLACE</b>
                name="place"
                value={formData.place}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="age"
                label=<b>AGE</b>
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="phoneNumber"
                label=<b>PHONE NUMBER</b>
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label=<b>EMAIL</b>
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="password"
                type='password'
                label=<b>PASSWORD</b>
                name="passWord"
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="education"
                label=<b>EDUCATION</b>
                name="education"
                value={formData.education}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <div className='button'>
          <Button type="submit" >
            {/* <Link to="/Login" style={{textDecoration:"none", color:"black" }}> */}
            
            Sign Up
            {/* </Link> */}
          </Button>
          </div>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button ><Link to="/Login" style={{textDecoration:"none", color:"black" }}>already have a account?login </Link></Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
  
    </div>
    </div>
    </>
  );
};

export default Signup;