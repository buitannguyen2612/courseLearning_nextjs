"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import starbg from "./images/loginbg.svg";
import plantbg from './images/planet.png';

export default function Layout({ children }) {

  return (
      <Box
      sx={
        {
          display:"flex",
          justifyContent:"center",
          height:"100vh",
          backgroundColor:"#24024F",
          overflow:"hidden",
          position:"relative"
        }
      }
      >
        <Box
        sx={
          {
            position:"absolute",
            left:"0",
            top:"30px"
          }
        }
        >
        <Image
         src={plantbg}
         width={400}
         height={600}
         alt="eart"
         objectFit="contain"
        />
        </Box>
        <Box
        sx={
          {
            position:"absolute",
            right:"0",
            top:"0"
          }
        }
        >
        <Image
         src={starbg}
         width={400}
         height={600}
         alt="eart"
         objectFit="contain"
        />
        </Box>
        {children}
      </Box>
  )
}