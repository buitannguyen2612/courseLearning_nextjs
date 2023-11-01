"use client"
import { Box, Card, Typography } from '@mui/material'
import React, { useState } from 'react'
import OwProductCard from '../OwProductCard/page';
export default function OwProductList(props) {

  // detruc props
  const { displayedData } = props

  return (
    <Box sx={
      {
        width: '100%',
        height: '320px',
        marginTop: '30px',
        display: 'flex',
        gap: '10px',
      }
    }>
      {
        displayedData?.length && displayedData !== 'null' ? displayedData.map((item, index) =>
        (
          <OwProductCard key={index} item={item} />
        )
        ) : <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "30px", color: "#6941c6", fontWeight: "600" }}>Buy for more resources</Box>
      }
    </Box>
  )
}
