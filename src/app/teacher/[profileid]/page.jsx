import { Box } from '@mui/material'
import React from 'react'
import HeroPage from '../heroPage/page'
import BodyTeacher from '../bodyTeacher/page'

export default function page({ params }) {

  const paramData = params.profileid

  return (
    <Box
      sx={
        {
          width: "80%",
          borderRadius: "10px",
          boxShadow:"10"
        }
      }
    >
      <HeroPage paramData={paramData}/>
      {/* <BodyTeacher paramData={paramData}/> */}
    </Box>
  )
}
