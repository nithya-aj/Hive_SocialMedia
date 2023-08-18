import { useTheme } from '@emotion/react';
import { Avatar, Box, Radio, Typography } from '@mui/material'
import React from 'react'
import { IoMdSettings } from "react-icons/io";

function Notifications() {
  const theme = useTheme()
  const main = theme.palette.background.main
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <Box sx={{ height: '100%', p: '1rem 1rem 0rem' }}>
      <Box sx={{ overflowY: 'scroll', borderRadius: '10px 10px 0px 0px', display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
        <Box sx={{ height: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: '1.5rem', backgroundColor: main }}>
          <Typography>Notification</Typography>
          <IoMdSettings />
        </Box>
        <Box sx={{ height: '3.5rem', display: 'flex', alignItems: 'center', px: '1.5rem', backgroundColor: main }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar src="https://source.unsplash.com/featured/300x178" />
            <Box >
              <Typography>Yarzdan commented on your photo</Typography>
              <Typography>4 minute ago</Typography>
            </Box>
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
    </Box>
  )
}

export default Notifications