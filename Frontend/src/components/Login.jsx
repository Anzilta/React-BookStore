
import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography, Box, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import axios from 'axios';

const Login = () => {
  const { setAuthenticated, setUserId } = useAuth();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [input, setInput] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      const checkUser = async () => {
        try {
          let response = await axios.get('http://127.0.0.1:1000/getadmin', { params: { email: input.email } });
          try {
            const adminData = response.data[0];
            if (adminData.Email === input.email && adminData.Password === input.password) {
              setAuthenticated(true);
              setUserId(adminData.Email);
              navigate('/Adminhome');
              return;
            }
          } catch (error) {
            console.log("admin error", error);
          }

          response = await axios.get('http://127.0.0.1:1000/getuser', { params: { email: input.email } });
          const { email, passWord } = response.data;

          if (email === input.email && passWord === input.password) {
            setAuthenticated(true);
            setUserId(email);
            navigate('/Book');
            return;
          }

          console.log('Email or password not matched');
        } catch (error) {
          console.error('Error:', error);
        } finally {
          setSubmitted(false);
        }
      };

      checkUser();
    }
  }, [submitted, input.email, input.password, setAuthenticated, setUserId, navigate]);

  return (
    <div >
    <Box className="hai"
    
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage:`url("/img1.png")`,
        fontFamily: "'Libre Baskerville', serif",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 2,
          maxWidth: 400,
          width: '100%',
          backgroundColor:'white',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
        }}
      >
        <Typography variant='h4' align='center' sx={{ color: '#4A0E0E', fontWeight: 'bold', mb: 3 }}>
          Login to Library
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant='outlined'
            fullWidth
            required
            autoFocus
            name='email'
            value={input.email}
            onChange={handleChange}
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#8B4513' },
                '&:hover fieldset': { borderColor: '#D2691E' },
              },
              '& .MuiInputLabel-root': { color: '#4A0E0E' },
            }}
          />
          <TextField
            type='password'
            label="Password"
            variant='outlined'
            fullWidth
            required
            name='password'
            value={input.password}
            onChange={handleChange}
            sx={{
              mb: 3,
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#8B4513' },
                '&:hover fieldset': { borderColor: '#D2691E' },
              },
              '& .MuiInputLabel-root': { color: '#4A0E0E' },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              background: 'linear-gradient(45deg, #8B4513 30%, #D2691E 90%)',
              color: '#FFF8DC',
              fontWeight: 'bold',
              '&:hover': {
                background: 'linear-gradient(45deg, #A0522D 30%, #CD853F 90%)',
              },
            }}
          >
            Login
          </Button>
        </form>
        <div className='signup'>
        <Button><Link to="/Signup" style={{ textDecoration: "none", color: '#8B4513' }}>
                Already have no account? Signup
              </Link></Button>
              </div>
      </Paper>
    </Box>
    </div>
  );
};

export default Login;