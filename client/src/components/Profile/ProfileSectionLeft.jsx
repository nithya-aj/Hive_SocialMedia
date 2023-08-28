import { useTheme } from '@emotion/react'
import { Avatar, Box, Button, IconButton, useMediaQuery } from '@mui/material'
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
  const isExtraSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Box sx={{ borderRadius: '10px 10px 0px 0px', overflow: 'hidden', pb: '2rem' }}>
        <Box sx={{
          position: 'relative', height: '8rem', backgroundImage: "url('https://source.unsplash.com/featured/300x48')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          p: '0.5rem',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'
        }}>
          <Avatar sx={{ height: "6.5rem", width: '6.5rem', position: 'absolute', top: '3.1rem', left: '2rem', border: `3px solid ${alt}` }} src='https://source.unsplash.com/featured/300x118' />
          <Box sx={{
            height: "1.6rem", width: '1.6rem', backgroundColor: main, position: 'absolute', top: '7.1rem', left: '7.3rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: `1px solid ${orange}`
          }}>
            <IconButton ><IoMdCloudUpload size={'1rem'} /></IconButton>
          </Box>

          {isExtraSmall ? (
            <Box sx={{
              height: "1.6rem", width: '1.6rem', backgroundColor: main, alignSelf: 'flex-end',
              display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%'
            }}>
              <IconButton ><IoMdCloudUpload size={'1rem'} /></IconButton>
            </Box>
          ) : (
            <Button variant='contained' sx={{
              display: 'flex', alignItems: 'center', gap: '0.3rem', textTransform: 'none', alignSelf: 'flex-end', p: '4px 8px', backgroundColor: purple,
              color: main, ":hover": { backgroundColor: mediumpurple }
            }}>
              <IoMdCloudUpload size={'1.1rem'} />
              Edit Cover Photo
            </Button>
          )}

        </Box>
      </Box>
      <SharePost />
      <Post />
    </Box >
  )
}

export default ProfileSectionLeft