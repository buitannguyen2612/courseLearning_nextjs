"use client"
import { Box } from '@mui/material'
import UserNavPage from '../UserNavPage/page'
import AboutUs from './AboutUs/page'
import AllCourseUser from './AllProduct/pages/page'
import OwnProduct from './OwnProduct/pages/page'
import SliderHero from './SliderHero/page'
import FootView from './footViewAll/page'
import { useState } from 'react'

export default function page() {

  const [serachText, setSeach] = useState('')

  return (
    <Box sx={{ height: 'auto', width: '100%' }}>
      <UserNavPage setSeach={setSeach} />
      <Box sx={{ padding: "100px 20px 0 20px" }}>
        <SliderHero />
        <OwnProduct serachText={serachText}/>
        <AboutUs />
        <AllCourseUser serachText={serachText}/>
        <FootView />
      </Box>
    </Box>
  )
}
