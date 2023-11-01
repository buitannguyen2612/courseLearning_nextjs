"use client"
import { Box } from '@mui/material';
import LoginPage from './component/page';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/navigation';

export default function page() {

  const router = useRouter()

  const showToast = () => {
    toast.success("Success Login !");

  }

  const handleCheckLogin = () => {
    showToast()
    setTimeout(() => {
      router.push('/ViewAllProduct')
    }, 3000);

  }
  return (
    <Box sx={
      {
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center"
      }
    }>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <LoginPage handleCheckLogin={handleCheckLogin} />
    </Box>


  )
}
