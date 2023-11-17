"use client"
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import "react-toastify/dist/ReactToastify.css";
import LoginPage from './component/page';
import Register from './register/register';

export default function page() {

  const router = useRouter()

  const handleCheckLogin = () => {
      router.push('/ViewAllProduct')
  }
  return (
    <Box sx={
      {
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        position:"relative"
      }
    }>
      <Box sx={{position:"absolute", left:"47%",top:"50px", fontSize:"30px", color:"white", fontWeight:"700"}}>Login</Box>
      {/* <LoginPage handleCheckLogin={handleCheckLogin} /> */}
      <Register/>
    </Box>


  )
}
