"use client"
import { List, ListItemButton, ListItemText } from '@mui/material'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function DocumentPage({ item }) {

  const [active, setActive] = useState(false)
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const handleRender = () => {
    router.push(`${pathname}?documentID=${item.id}&ChapterId=${item.ChapterId}`)
  }

  let documentID = searchParams.get('documentID')
  let chapterID = searchParams.get('ChapterId')

  return (

    <List dense component="div" disablePadding onClick={handleRender} sx={{ backgroundColor:item.id == documentID && item.ChapterId == chapterID?"rgba(127, 86, 217, 0.2)":''}}>
      <ListItemButton sx={{justifyContent: "flex-start", height: "60px", pl:"90px" }}>
        <ListItemText sx={{textAlign:"start"}} primary={item.Name} />
      </ListItemButton>
    </List>

  )
}
