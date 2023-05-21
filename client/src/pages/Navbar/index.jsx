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
      <Box sx={{ backgroundColor: { background }, py: '1rem' }}>
        <Grid container >
          <Grid item lg={2} md={1.5} xs={2} sm={2}>
            <LogoWidget />
          </Grid>
          <Grid item lg={7.5} md={7.5} xs={7.5} sm={7.5}>
            <SearchBar placeholder="Search anything..." />
          </Grid>
          <Grid item lg={2.5} md={3} xs={2.5} sm={2.5}>
            <NavItems />
          </Grid>
        </Grid>
      </Box> 
    </>
  )
}

export default Navbar