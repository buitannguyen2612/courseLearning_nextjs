import { Box } from "@mui/material";
import AboutUs from "./AboutUs/page";
import ProductNav from "./FamousProduct/pages/page";
import TitleHome from "./TitleHomePage/TitleHome";
import { Montserrat } from "next/font/google";

const monogra = Montserrat({subsets:['latin']})

function Homes() {
  return (
    <Box sx={{ userSelect: "none", fontFamily:monogra.className }}>
      <TitleHome />
      <ProductNav />
      <AboutUs />
    </Box>
  );
}



export default Homes;

