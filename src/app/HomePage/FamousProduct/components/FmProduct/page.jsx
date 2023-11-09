"use client"
import { Avatar, Box, Button, Card, CardContent, CardMedia, Rating, Stack, Typography } from '@mui/material';
import { Montserrat } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const monogra = Montserrat({ subsets: ['latin'] })


function FmProduct({ item }) {
  const [isHover, setIshover] = useState(false)

  const roter = useRouter()
  // handle hover of img box
  const handleMouseEnter = () => {
    setIshover(true)
  }

  // handle hover of img box
  const handleMouseLeave = () => {
    setIshover(false)
  }

  const navtoLogin = () => {
    roter.push('/login')
  }

  return (
    <Card
      sx={{
        width: '381px',
        height: '500px',
        boxShadow: "10",
        cursor: "pointer",
        padding: "12px 12px"
      }}
      className={monogra.className}

    >
      <Box
        sx={
          {
            height: "200px",
            width: "100%",
            overflow: "hidden"
          }
        }
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardMedia
          sx={
            {
              height: '100%',
              transform: isHover ? "scale(1.2)" : "scale(1)",
              transition: "all 0.2s"
            }
          }
          image={item.imgCourse}
          title="green iguana"
        />
      </Box>
      <CardContent sx={{ p: 0 }}>
        <Typography marginBottom='20px' variant="h6" component="div" sx={{ fontWeight: "600", color: "#6941C6", fontFamily: monogra.style.fontFamily }}>
          {item.courseName}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: "justify", fontFamily: monogra.style.fontFamily }} >
          {item.des.slice(0, 150)}
        </Typography>
      </CardContent>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 1 }}
        alignItems='center'
      >
        <Rating name="read-only" value={2} readOnly />
        <Typography variant="body2" color="text.secondary">(122)</Typography>
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ sm: 2, md: 1 }}
        alignItems="center"
        justifyContent='space-between'
        marginTop='50px'
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ sm: 2, md: 1 }}
          alignItems="center"
        >
          <Avatar alt="Remy Sharp" src={item.avatar} />
          <Stack
            direction={{ xs: "colum", sm: "column" }}
            spacing={{ sm: 2, md: 1 }}
            alignItems="flex-start"
            sx={{ maxWidth: '300px' }}
          >
            <Typography variant='subtitle2' sx={{ fontWeight: "600", fontFamily: monogra.style.fontFamily }}>Author</Typography>
            <Typography variant='body2' sx={{ fontFamily: monogra.style.fontFamily }}>Name</Typography>
          </Stack>
        </Stack>

        <Button variant="contained" size='small' sx={{ backgroundColor: "#7F56D9", '&:hover': { backgroundColor: '#7f56d9' }, }} onClick={() => navtoLogin()}>Try now</Button>
      </Stack>
    </Card>

  )
}

export default FmProduct