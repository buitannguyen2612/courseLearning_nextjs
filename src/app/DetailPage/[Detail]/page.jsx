"use client"
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import CardPrice from '../CardPrice/Page';
import CourseSubject from '../CourseSubject/Page';
import Describe from '../Describe/page';
import DetailBody from '../DetailBody/page';
import DetailHero from '../DetailHero/page';
import { useRouter } from 'next/navigation';

export default function page({ params }) {

  const [passParam, setParam] = useState(params.Detail)
  const [data, setData] = useState()
  const [dataID, setdataID] = useState()
  const router = useRouter()

  const handleProps = (value, dataid) => {
    setData(value)
    setdataID(dataid)
  }

  // kiem tra localstorage and set into local
  useEffect(() => {
    console.log(data);
    if (data == undefined) {
      return
    }
    else {
      const existingArray = JSON.parse(localStorage.getItem('buy')) || [];
      const newObject = data;
      existingArray.push(newObject);
      localStorage.setItem('buy', JSON.stringify(existingArray));
      router.push(`/ViewAllProduct?idcourse=${dataID}`)
    }

  }, [data])


  return (
    <Box
      sx={
        {
          position: "relative"
        }
      }
    >
      <DetailHero passParam={passParam} />
      <DetailBody />
      <Describe />
      <CourseSubject />
      <CardPrice passParam={passParam} handleProps={handleProps} />
    </Box>
  )
}
