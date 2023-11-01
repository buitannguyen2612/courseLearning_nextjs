import { Avatar, Box, Rating, Stack, Typography } from '@mui/material'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import React from 'react'
import { getProfleByID } from '../[profileid]/callApi'

export default function HeroPage({ paramData }) {

    const data = getProfleByID(paramData)
    return (
        <Stack
            direction="column"
            spacing={0}
            sx={
                {
                    height: "500px",
                    position: "relative"
                }
            }
        >
            <Box
                sx={{
                    flex: "1", backgroundImage: "linear-gradient(139deg, rgba(177,219,246,1) 0%, rgba(126,119,229,1) 18%, rgba(200,195,242,1) 47%, rgba(189,226,240,1) 100%)",
                    borderTopLeftRadius: "10px", borderTopRightRadius: "10px"
                }}
            >
            </Box>
            <Box
                sx={{ flex: "1", display: "flex", flexDirection: "column", alignItems: "center" }}
            >
                <Typography variant='h6' sx={{ height: "max-content", width: "max-content", mt: "100px", fontWeight: "700" }}>{data.authorName}</Typography>

                <Rating name="read-only" value={3} readOnly fontSize="inherit" />
                <Box sx={{ width:"100%", mt:"30px", display:"flex",justifyContent:"center", gap:"50px"}}>
                    <Box sx={{display:"flex", alignItems:"center", gap:"5px"}}><FmdGoodIcon/>{data.location}</Box>
                    <Box sx={{display:"flex", alignItems:"center", gap:"5px"}}><CalendarMonthIcon/>{data.DOB}</Box>
                    <Box sx={{display:"flex", alignItems:"center", gap:"5px"}}><ContactEmergencyIcon/>{data.email}</Box>
                </Box>
            </Box>
            <Avatar
                alt="Remy Sharp"
                src={data.avatar}
                sx={{ width: 200, height: 200, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
            />
        </Stack>
    )
}
