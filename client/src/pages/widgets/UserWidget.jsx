import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import UserAvatar from 'components/UserAvatar';
import { useTheme } from '@emotion/react';

const UserWidget = () => {

  const theme = useTheme()
  const alt = theme.palette.background.alt
  const text = theme.palette.neutral.dark
  const dark = theme.palette.primary.dark

  return (
    <Box sx={{display:'flex',alignItems:'center', justifyContent:'center'}}>
      <Box sx={{
        backgroundColor: alt,
        borderRadius: '0.5rem',
        height: '3.2rem',
        border: `1px solid ${dark}`,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        padding:'0.2rem',
        width: { md: '3rem', lg:'10rem'}
      }}>
        <Box>
          <UserAvatar></UserAvatar>
        </Box>
        <Box sx={{ paddingLeft: '0.6rem', display: { xs: 'none', lg: 'block' } }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: '500', marginBottom: '0', color: text }}>
            Irin Rose
          </Typography>
          <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: '300', marginBottom: '0', color: text }}>
            @Irin_Rose
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default UserWidget 
