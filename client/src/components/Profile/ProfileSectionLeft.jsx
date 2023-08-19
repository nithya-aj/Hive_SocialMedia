import { useTheme } from '@emotion/react'
import { Avatar, Box, Button, IconButton, Typography } from '@mui/material'
import Post from 'components/home/Post'
import SharePost from 'components/home/SharePost'
import React from 'react'
import { IoMdCloudUpload } from "react-icons/io";

const ProfileSectionLeft = () => {
  const theme = useTheme()
  const main = theme.palette.background.main
  const alt = theme.palette.background.alt
  const orange = theme.palette.neutral.orange
  const purple = theme.palette.neutral.purple
  const mediumpurple = theme.palette.neutral.mediumpurple
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Box sx={{ borderRadius: '10px 10px 0px 0px', height: '13rem', overflow: 'hidden' }}>
        <Box sx={{
          position: 'relative', height: '8rem', backgroundImage: "url('https://source.unsplash.com/featured/300x48')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          p: '0.5rem',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'
        }}>
          <Avatar sx={{ height: "6.5rem", width: '6.5rem', position: 'absolute', top: '4.7rem', left: '2rem', border: `3px solid ${alt}` }} src='https://source.unsplash.com/featured/300x118' />
          <Box sx={{
            height: "2rem", width: '2rem', backgroundColor: main, position: 'absolute', top: '8.5rem', left: '6.5rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: `1px solid ${orange}`
          }}>
            <IconButton ><IoMdCloudUpload size={'1.1rem'} /></IconButton>
          </Box>
          <Button variant='contained' sx={{
            display: 'flex', alignItems: 'center', gap: '0.3rem', textTransform: 'none', alignSelf: 'flex-end', p: '4px 8px', backgroundColor: purple,
            color: main, ":hover": { backgroundColor: mediumpurple }
          }}>
            <IoMdCloudUpload size={'1.1rem'} />
            Edit Cover Photo
          </Button>
        </Box>
        <Typography></Typography>
      </Box>
      <SharePost />
      <Post />
    </Box>
  )
}

export default ProfileSectionLeft