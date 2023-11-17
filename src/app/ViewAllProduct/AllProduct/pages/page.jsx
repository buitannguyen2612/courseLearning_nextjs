"use client"
import { Box, FormControl, InputLabel, MenuItem, Pagination, Select, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ListAllProduct from '../components/listAllProduct/page'
import { GetData } from './callAPI'

export default function AllCourseUser({ serachText }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [category, setCategory] = useState(0)
    const[dataAllCouese,setDataAll] = useState([])

    const itemsPerPage = 8

    let getAllDaTa = GetData(category)

    useEffect(() => {
        const data = GetData(category)
        if (serachText.length > 0) {
         const searchAll =  data?.filter(vl => {
                return vl.courseName.toLowerCase().includes(serachText)
            });
            setDataAll(searchAll)
        }
        else setDataAll(data)
    }, [serachText])


    // xac dinh so trang
    const pageCount = Math.ceil(dataAllCouese?.length / itemsPerPage);

    // xac dinh san pham nao se duoc render
    const displayedData = dataAllCouese?.slice(
        (currentPage - 1) * itemsPerPage,
        ((currentPage - 1) + 1) * itemsPerPage
    );


    // kiem tra trang action hien tai dang o trang nao
    const handlePagnating = (e, vl) => {
        setCurrentPage(vl)
    }

    // set category my choose
    const handleCategory = (e) => {
        setCategory(e.target.value)
    }



    return (
        <Box sx={{ height: 'auto', width: "100%", marginTop: "30px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <Stack
                direction="column"
                spacing={2}
            >
                <Typography variant='h1' sx={{ fontSize: '30px', color: '#6941c6', fontWeight: '800' }}>All course contain</Typography>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Search By Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={category}
                        onChange={handleCategory}
                        label="Category"
                        defaultValue={0}
                    >
                        <MenuItem value={0}>All Course</MenuItem>
                        <MenuItem value={1}>Case 1</MenuItem>
                        <MenuItem value={2}>Case 2</MenuItem>
                        <MenuItem value={3}>Case 3</MenuItem>
                        <MenuItem value={4}>Case 4</MenuItem>
                        <MenuItem value={5}>Case 5</MenuItem>
                    </Select>
                </FormControl>
            </Stack>
            <ListAllProduct displayedData={displayedData} />
            <Pagination count={pageCount} color="secondary" onChange={handlePagnating} sx={{ marginTop: "30px", width: "100%", display: "flex", justifyContent: "center" }} />
        </Box>
    )
}
