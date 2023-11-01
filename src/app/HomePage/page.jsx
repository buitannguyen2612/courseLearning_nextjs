import { Box } from "@mui/material";
import AboutUs from "./AboutUs/page";
import ProductNav from "./FamousProduct/pages/page";
import TitleHome from "./TitleHomePage/TitleHome";

function Homes() {
  return (
    <Box sx={{ userSelect: "none" }}>
      <TitleHome />
      <ProductNav />
      <AboutUs />
    </Box>
  );
}



export default Homes;

