import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import UserAvatar from 'components/UserAvatar';
import { Grid } from '@mui/material';
import { useTheme } from '@emotion/react';

const UserWidget = () => {

  const theme = useTheme()
  const alt = theme.palette.background.alt
  const text = theme.palette.neutral.dark
  const dark = theme.palette.primary.dark

  return (
    <Box sx={{
      padding: '1rem',
      backgroundColor: alt,
      borderRadius: '0.5rem',
      height: '3.2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: "center",
      border:`1px solid ${dark}`
    }}
    >
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <UserAvatar></UserAvatar>
        </Grid>
        <Grid item xs={8} >
          <Typography variant="h5" gutterBottom sx={{ fontWeight: '500', marginBottom: '0', color: text }}>
            Irin Rose
          </Typography>
          <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: '300', marginBottom: '0', color: text }}>
            @Irin_Rose
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default UserWidget 
