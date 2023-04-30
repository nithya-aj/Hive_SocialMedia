import { Box, Grid } from '@mui/material'
import React from 'react'
import { useTheme } from '@emotion/react';
import SearchBar from 'components/SearchBar';
import LogoWidget from 'pages/widgets/LogoWidget';
import NavItems from 'pages/widgets/NavItems';

const Navbar = () => {

  const theme = useTheme()
  const background = theme.palette.background.default

  return (
    <>
      <Box sx={{ backgroundColor: { background }, padding: '1rem' }}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <LogoWidget />
          </Grid>
          <Grid item xs={7.5}>
            <SearchBar placeholder="Search anything..." />
          </Grid>
          <Grid item xs={2.5}>
            <NavItems />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Navbar