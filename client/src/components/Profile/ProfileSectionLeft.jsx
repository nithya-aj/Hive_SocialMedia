import { useTheme } from '@emotion/react'
import { Avatar, Box } from '@mui/material'
import Post from 'components/home/Post'
import SharePost from 'components/home/SharePost'
import React from 'react'

const ProfileSectionLeft = () => {
  const theme = useTheme()
  const main = theme.palette.background.main
  const alt = theme.palette.background.alt
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Box sx={{ borderRadius: '10px 10px 0px 0px', height: '10rem', overflow: 'hidden' }}>
        <Box sx={{
          position: 'relative', height: '6rem', backgroundImage: "url('https://source.unsplash.com/featured/300x48')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
          <Avatar sx={{ height: "5rem", width: '5rem', position: 'absolute', top: '3rem', left: '2rem', border: `3px solid ${alt}` }} src='https://source.unsplash.com/featured/300x118' />
        </Box>
      </Box>
      <SharePost />
      <Post />
    </Box>
  )
}

export default ProfileSectionLeft