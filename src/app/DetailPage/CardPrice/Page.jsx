"use client"
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { useState } from 'react'
import { GetDataById } from '../[Detail]/util'

export default function CardPrice({ passParam, handleProps }) {

    const [hoverImg, setHoverImg] = useState(false)

    let data = GetDataById(passParam)

    return (
        <Card
            sx={
                {
                    position: "fixed",
                    top: "170px",
                    right: "65px",
                    maxWidth: "350px",
                    boxShadow: "10",
                    userSelect: "none",
                    paddingBottom: "34px",
                    borderRadius: "10px",
                }
            }
        >
            <Box
                sx={
                    {
                        overflow: "hidden",
                        width: "100%",
                        height: "200px",
                    }
                }
                onMouseEnter={() => setHoverImg(true)}
                onMouseLeave={() => setHoverImg(false)}
            >
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    image={data.imgCourse}
                    sx={
                        {
                            transition: "all 0.2s",
                            transform: hoverImg ? "scale(1.2)" : "scale(1)"
                        }
                    }
                />
            </Box>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "700", color: "#7F56D9" }}>
                    500.000đ
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{textAlign:"justify"}}>
                    {data.des}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Button variant='contained' size="small" sx={{ backgroundColor: "#7F56D9" }} onClick={() => handleProps(data, data.id)}>Buy the course</Button>
            </CardActions>
        </Card>
    )
}
