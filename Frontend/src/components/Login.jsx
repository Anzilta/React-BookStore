import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
import './login.css'; // Assuming you have your CSS file for styling

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents default form submission
    // Handle form submission logic here (e.g., validate inputs, send to server)
    console.log('Form submitted!');
  };

  return (
    <div className='container'>
       
      <div className='login-form'>
      <Typography variant='h2' align='center' >
          LOGIN
        </Typography>
       
        <form onSubmit={handleSubmit}>
          <div className='pass'>
            <TextField
              label=<b>EMAIL</b>
              variant='filled'
              fullWidth
              required
              autoFocus
            />
          </div>
          <div className='pass'>
            <TextField
              type='password'
              label=<b>PASSWORD</b>
              variant='filled'
              fullWidth
              required
            />
          </div>
          <div className='button'>
            <Button >
              Login
            </Button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
