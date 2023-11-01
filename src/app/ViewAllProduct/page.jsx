import { Box } from '@mui/material'
import AboutUs from './AboutUs/page'
import AllCourseUser from './AllProduct/pages/page'
import OwnProduct from './OwnProduct/pages/page'
import SliderHero from './SliderHero/page'
import FootView from './footViewAll/page'

export default function page() {

  return (
    <Box sx={{ height: 'auto', width: '100%', padding: "100px 20px 0 20px" }}>
      <SliderHero />
      <OwnProduct />
      <AboutUs />
      <AllCourseUser />
      <FootView />
    </Box>
  )
}
