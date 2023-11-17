"use client"
import { Box, Typography } from '@mui/material'
import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Montserrat } from 'next/font/google';
import { useRouter } from 'next/navigation';

const montserrat = Montserrat({ subsets: ["latin"] });

export default function FooterGlobal() {

  const routee = useRouter()

  const Facebook = () =>{
    routee.push('https://www.facebook.com/profile.php?id=100004808430787')
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "420px",
        backgroundColor: "#252424",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{height: "300px", p: "80px 30px 30px 74px", display: "flex", justifyContent: "flex-start", gap: "143px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: "20px",
            color: "white"
          }}
        >
          <Box sx={{ fontSize: "18px", fontWeight: "700", fontFamily: montserrat.style.fontFamily }}>Introduction</Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "7px" }}>
            <Typography sx={{ fontSize: "14px", fontFamily: montserrat.style.fontFamily }}>Introducing the website</Typography>
            <Typography sx={{ fontSize: "14px", fontFamily: montserrat.style.fontFamily }}>Recruitment</Typography>
            <Typography sx={{ fontSize: "14px", fontFamily: montserrat.style.fontFamily }}>Advertisement</Typography>
            <Typography sx={{ fontSize: "14px", fontFamily: montserrat.style.fontFamily }}>Get the app</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: "20px",
            color: "white"
          }}
        >
          <Box sx={{ fontSize: "18px", fontWeight: "700", fontFamily: montserrat.style.fontFamily }}>For students</Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "7px" }}>
            <Typography sx={{ fontSize: "14px", fontFamily: montserrat.style.fontFamily }}>Course</Typography>
            <Typography sx={{ fontSize: "14px", fontFamily: montserrat.style.fontFamily }}>Start learning</Typography>
            <Typography sx={{ fontSize: "14px", fontFamily: montserrat.style.fontFamily }}>Q&A</Typography>
            <Typography sx={{ fontSize: "14px", fontFamily: montserrat.style.fontFamily }}>Q-Chat</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: "20px",
            color: "white"
          }}
        >
          <Box sx={{ fontSize: "18px", fontWeight: "700", fontFamily: montserrat.style.fontFamily }}>For teachers</Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "7px" }}>
            <Typography sx={{ fontSize: "14px", fontFamily: montserrat.style.fontFamily }}>Contact</Typography>
            <Typography sx={{ fontSize: "14px", fontFamily: montserrat.style.fontFamily }}>Policy</Typography>
            <Typography sx={{ fontSize: "14px", fontFamily: montserrat.style.fontFamily }}>Working</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: "20px",
            color: "white"
          }}
        >
          <Box sx={{ fontSize: "18px", fontWeight: "700", fontFamily: montserrat.style.fontFamily }}>Resources</Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "7px" }}>
            <Typography sx={{ fontSize: "14px", fontFamily: montserrat.style.fontFamily }}>Support center</Typography>
            <Typography sx={{ fontSize: "14px", fontFamily: montserrat.style.fontFamily }}>Code of honor</Typography>
            <Typography sx={{ fontSize: "14px", fontFamily: montserrat.style.fontFamily }}>Community Guidelines</Typography>
            <Typography sx={{ fontSize: "14px", fontFamily: montserrat.style.fontFamily }}>Advertising and cookie policy</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "flex-start",
            pb: "40px",
            gap: "20px"
          }}
        >
          <FacebookRoundedIcon sx={{ color: "white", cursor: "pointer" }} fontSize='large'  onClick={() => Facebook()}/>
          <InstagramIcon sx={{ color: "white", cursor: "pointer" }} fontSize='large' />
          <TwitterIcon sx={{ color: "white", cursor: "pointer" }} fontSize='large' />
          <YouTubeIcon sx={{ color: "white", cursor: "pointer" }} fontSize='large' />
        </Box>
      </Box>
      <Box sx={{ borderTop: "solid 1px white", mt: "30px",pt:"30px", display:"flex",justifyContent:"center" }}>
        <Typography sx={{ width:"238px",textAlign: "center", fontSize: "10px", color: "white", fontFamily: montserrat.style.fontFamily }}>Copyright ©2023<br/>
          Mind Puzzle , All rights Reserved.
        </Typography>
      </Box>
    </Box>
  )
}
