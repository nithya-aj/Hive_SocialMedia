import { useTheme } from '@emotion/react';
import { Avatar, Box, Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import { IoMdSettings } from "react-icons/io";

function Notifications() {
  const theme = useTheme()
  const main = theme.palette.background.main
  const textMain = theme.palette.neutral.main
  const fontSm = theme.palette.neutral.fontSm
  return (
    <Box sx={{ height: '100%', p: '1rem 1rem 0rem' }}>
      <Box sx={{ overflowY: 'scroll', borderRadius: '10px 10px 0px 0px', display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
        <Box sx={{ height: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: '1.5rem', backgroundColor: main }}>
          <Typography variant='body1' sx={{ fontSize: '1rem', color: textMain }}>Notification</Typography>
          <IconButton aria-label="settings">
            <IoMdSettings style={{ cursor: 'pointer', fontSize: '1rem', color: textMain }} />
          </IconButton>
        </Box>
        <Box sx={{ height: '3.5rem', display: 'flex', alignItems: 'center', px: '1.5rem', backgroundColor: main }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar src="https://source.unsplash.com/featured/300x138" />
            <Box >
              <Typography sx={{ fontSize: '0.9rem', color: textMain }}>Yarzdan commented on your photo</Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: '300', color: fontSm }}>4 minute ago</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ height: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: '1.5rem', backgroundColor: main }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar src="https://source.unsplash.com/featured/300x177" />
            <Box >
              <Typography sx={{ fontSize: '0.9rem', color: textMain }}>Yarzdan followed you</Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: '300', color: fontSm }}>4 minute ago</Typography>
            </Box>
          </Box>
          <Box>
            <Button variant='outlined' sx={{ textTransform: 'none', width: '7rem' }}>Follow Back</Button>
          </Box>
        </Box>
        <Box sx={{ height: '3.5rem', display: 'flex', alignItems: 'center', px: '1.5rem', backgroundColor: main }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar src="https://source.unsplash.com/featured/300x118" />
            <Box >
              <Typography sx={{ fontSize: '0.9rem', color: textMain }}>Yarzdan commented on your photo</Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: '300', color: fontSm }}>4 minute ago</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ height: '3.5rem', display: 'flex', alignItems: 'center', px: '1.5rem', backgroundColor: main }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar src="https://source.unsplash.com/featured/300x178" />
            <Box >
              <Typography sx={{ fontSize: '0.9rem', color: textMain }}>Yarzdan commented on your photo</Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: '300', color: fontSm }}>4 minute ago</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ height: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: '1.5rem', backgroundColor: main }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar src="https://source.unsplash.com/featured/300x171" />
            <Box >
              <Typography sx={{ fontSize: '0.9rem', color: textMain }}>Yarzdan followed you</Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: '300', color: fontSm }}>4 minute ago</Typography>
            </Box>
          </Box>
          <Box>
            <Button variant='outlined' disabled sx={{ textTransform: 'none', width: '7rem' }}>Followed</Button>
          </Box>
        </Box>
        <Box sx={{ height: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: '1.5rem', backgroundColor: main }}>
        </Box>
        <Box sx={{ height: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: '1.5rem', backgroundColor: main }}>
        </Box>
        <Box sx={{ height: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: '1.5rem', backgroundColor: main }}>
        </Box>
        <Box sx={{ height: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: '1.5rem', backgroundColor: main }}>
        </Box>
        <Box sx={{ height: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: '1.5rem', backgroundColor: main }}>
        </Box>
        <Box sx={{ height: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: '1.5rem', backgroundColor: main }}>
        </Box>
        <Box sx={{ height: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: '1.5rem', backgroundColor: main }}>
        </Box>
      </Box>
    </Box >
  )
}

export default Notifications