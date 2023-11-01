"use client"
import { Box, Rating, Stack, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import React from 'react'
import { GetDataById } from '../[Detail]/util';
import Link from 'next/link';

export default function DetailHero({passParam}) {

    let data = GetDataById(passParam)

    return (
        <Box
            sx={
                {
                    backgroundColor: "#24024F",
                    width: "100%",
                    height: "375px",
                    padding: "59px 55px"
                }
            }
        >
            <Stack
                direction="column"
                spacing={1}
                alignItems='flex-start'
                sx={
                    {
                        maxWidth:"700px",
                        width:"50%"
                    }
                }
            >
                <Typography variant='h2' sx={{ fontWeight: "600", color: "#FFF" }}>{data.courseName}</Typography>
                <Typography variant='body2' sx={{ color: "#FFF", fontSize: "18px", fontWeight: "400", lineHeight: "177%" }}>{data.des}</Typography>
                <Typography variant='caption' sx={{color:"#FFF", marginTop:"20px"}}>Mentor: <Link style={{color:"white", fontSize:"18px"}} href={{pathname:`/teacher/${data.id}`}}>{data.last_name} {data.first_name}</Link></Typography>
                <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                >
                    <Typography variant='caption' sx={{fontSize:"14px", color:"#9C81D5", fontWeight:"700"}}>4.3</Typography>
                    <Rating name="read-only" value={3} readOnly emptyIcon={<StarIcon style={{ opacity: 0.55, color:"white" }} fontSize="inherit" />}  />
                    <Typography variant='caption' sx={{fontSize:"14px", color:"#FFF"}}>(123)</Typography>
                </Stack>
            </Stack>
        </Box>
    )
}
