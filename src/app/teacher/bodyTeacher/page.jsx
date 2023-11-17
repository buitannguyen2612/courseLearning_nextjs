import { Box, Typography } from '@mui/material'
import React from 'react'
import { getProfleByID } from '../[profileid]/callApi'
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ["latin"] });

export default function BodyTeacher({paramData}) {

    const data = getProfleByID(paramData)

  return (
    <Box
    sx={
        {
            borderTop:"1px #c8c8c8 solid",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignContent:"center",
            height:"300px"
        }
    }
    >
        <Typography sx={{fontFamily:montserrat.style.fontFamily}}>{data.description}</Typography>
    </Box>
  )
}
