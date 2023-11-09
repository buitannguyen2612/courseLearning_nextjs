"use client"
import { Box, Button, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import computer from '../Images/computerFT.png'

export default function FootView() {
    return (
        <Box sx={{ display: "flex", height: "627px", width: "100%", position: "relative", padding: "0 32px 32px" }}>
            <Box
                sx={{
                    width: "100%",
                    height: "421px",
                    backgroundColor: "#7F56D9",
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                }}
                zIndex={-1}
            >

            </Box>
            <Stack
                direction='column'
                alignItems="flex-start"
                justifyContent="center"
                sx={{
                    width:"700px",
                    paddingTop:"100px"
                }}
                spacing={2}
            >
                <Typography variant='h3' sx={{ color: "#FFF", fontWeight: "600" }}>You're ready to get started
                    with Easy Quizzy yet?</Typography>
                <Typography variant='body2' sx={{ color: "#FFF" }} > Learn once, remember many times. Always be diligent. Good luck!</Typography>
            </Stack>
            <Box
                sx={{
                    flex: "1",
                    position:"absolute",
                    top:'-20px',
                    right:"0px"
                }}
            >
                <Image
                    src={computer}
                    alt="Picture of the author"
                    height={600}
                    width={700}
                    objectFit='contain'
                />
            </Box>
        </Box>
    )
}
