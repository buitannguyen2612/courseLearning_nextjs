"use client";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const theme = createTheme({
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },
});

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Box>{children}</Box>
    </ThemeProvider>
  );
}
