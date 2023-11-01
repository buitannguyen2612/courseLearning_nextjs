"use client"
import { Box } from '@mui/material'
import React from 'react'
import ChapterList from '../ChapterList/page';
import { getCourseByID } from '../../[LearningID]/callingChapterAPI';

export default function Chapter({ paramsPage }) {

  const chapterData = getCourseByID(paramsPage)
  console.log(chapterData);

  return (
    <Box sx={{ flex: "1",height:"100vh", overflowY:"scroll", pt:"70px","&::-webkit-scrollbar":{width:"2px"}, "&::-webkit-scrollbar-thumb":{ backgroundColor: "lightgrey",  borderRadius: "4px"},borderRight:"1px solid #dedfe0"}}>
      <Box sx={{height:"50px", textAlign:"center", lineHeight:"50px", fontSize:"25px", fontWeight:"700", color:"#7f56d9"}}>{chapterData.Name}</Box>
      <ChapterList chapterData={chapterData}/>
    </Box>
  )
}
