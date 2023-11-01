"use client";
import { Box } from "@mui/material";
import UserNavPage from "../UserNavPage/page";

export default function Layout({ children }) {
  return (
      <Box>
        <UserNavPage/>
        {children}
      </Box>
  )
}