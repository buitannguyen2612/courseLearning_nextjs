"use client"
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, Stack, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function Register({ handleCheckLogin }) {

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [repass, setRepass] = useState('')
  const [validRepass, setValid] = useState(false)
  const [registerData, setRegisterData] = useState({
    names: '',
    passw: ''
  })
  const router = useRouter()

  useEffect(() => {
    localStorage.setItem('registeracc', JSON.stringify(registerData));
  }, [registerData])

  // handle show or hide password
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // this is show error toast
  const failToast = (vlue) => {
    return toast.error(vlue)
  }

  // this is suscess toast
  const succ = (value) =>{
    return toast.success(value)
  }

  // submit button
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // register button 
  const handleRegister = () => {
    if (password === repass) {
      setRegisterData({
        ...registerData,
        names: username,
        passw: password
      })
      setValid(false)
      succ('Successfully')
      router.push('/')
    }
    else {
      setValid(true)
      failToast('The repass not be same')
    }
  }

  // component here
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
              borderRadius: "10px"
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
          borderRadius: "10px"
        }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password" sx={{ color: "white" }}>Password</InputLabel>
          <FilledInput
            sx={{
              color: "white"
            }}
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end" sx={{ height: "100%", mb: "8px" }}>
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
        <FormControl sx={{
          '& label.Mui-focused': { color: "white" }, border: "solid white 1px", '& ::placeholder': { color: "blue" },
          '& .MuiFilledInput-underline:after': {
            borderBottomColor: '#7f56d9'
          },
          height: "50px",
          width: "100%",
          borderRadius: "10px"
        }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password" sx={{ color: "white" }}>Repassword</InputLabel>
          <FilledInput
            error={validRepass}
            sx={{
              color: "white"
            }}
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end" sx={{ height: "100%", mb: "8px" }}>
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
            onChange={(e) => setRepass(e.target.value)}
            value={repass}
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
              mt: "30px"
            }
          }
        >
          <Button variant="contained" sx={{ width: "200px", backgroundColor: "#7f56d9", '&:hover': { backgroundColor: "rgba(198, 158, 223, 1)" } }} onClick={handleRegister}>Register</Button>
          <Button variant="contained" sx={{ width: "200px", backgroundColor: "#7f56d9", '&:hover': { backgroundColor: "rgba(198, 158, 223, 1)" } }}>Back to login</Button>
        </Stack>
      </Box>
    </>

  )
}
