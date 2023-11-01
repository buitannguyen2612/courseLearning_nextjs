"use client";
import UserNavPage from "@/app/UserNavPage/page";
import { Box } from "@mui/material";

export default function Layout({ children }) {
  return (
    <>
      <UserNavPage />
      <Box sx={{paddingTop:"100px", display:"flex", justifyContent:"center"}}>{children}</Box>
    </>
  );
}
