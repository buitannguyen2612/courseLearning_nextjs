"use client"
import React from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { dataLogin } from '../apiLogin';

export default function LoginPage({handleCheckLogin}) {

    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [dataLog, setDataLog] = useState([dataLogin])
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    // handle click login and check if contain account
    const handleLogin = () => {
      dataLog.forEach(vl => {
        if (vl.some(e => e.username === username) && vl.some(e => e.password === password)) {
            handleCheckLogin()
        }
        else {
          setUsername('')
          setPassword('')
        }
      })
  
    }

  return (
    <Box
    mt="120px"
    sx={
      {
        color: "white",
        display: "flex",
        flexDirection: "column",
        height: "400px",
        gap: "20px",
        width: "400px"
      }
    }
  >
    <TextField id="filled-basic" label="User name" variant="filled"
      sx={
        {
          '& label.Mui-focused': { color: "#7f56d9" }, border: "solid white 1px", '& ::placeholder': { color: "blue" },
          width: "100%",
          '& .MuiFilledInput-underline:after': {
            borderBottomColor: '#7f56d9'
          },
          height: "50px",
          borderRadius:"10px"
        }
      }
      inputProps={{ style: { color: 'white' } }}
      InputLabelProps={{ style: { color: 'white' } }}
      onChange={(e) => setUsername(e.target.value)}
      value={username}
    />

    <FormControl sx={{
      '& label.Mui-focused': { color: "white" }, border: "solid white 1px", '& ::placeholder': { color: "blue" },
      '& .MuiFilledInput-underline:after': {
        borderBottomColor: '#7f56d9'
      },
      height: "50px",
      width: "100%",
      borderRadius:"10px"
    }} variant="filled">
      <InputLabel htmlFor="filled-adornment-password" sx={{ color: "white" }}>Password</InputLabel>
      <FilledInput
        sx={{
          color: "white"
        }}
        id="filled-adornment-password"
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end" sx={{height:"100%", mb:"8px"}}>
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              sx={{ color: "white" }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
    </FormControl>

    <Stack
      direction="row"
      spacing={4}
      justifyContent="space-evenly"
      sx={
        {
          width: "100%",
          height: "50px",
          mt:"30px"
        }
      }
    >
      <Button variant="contained" sx={{ width: "200px", backgroundColor: "#7f56d9", '&:hover': { backgroundColor: "rgba(198, 158, 223, 1)" } }} onClick={handleLogin}>Login</Button>
      <Button variant="contained" sx={{ width: "200px", backgroundColor: "#7f56d9", '&:hover': { backgroundColor: "rgba(198, 158, 223, 1)" } }}>Register</Button>
    </Stack>
  </Box>

  )
}
