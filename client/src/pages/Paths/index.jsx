import React from 'react'
import { Box } from '@mui/material'
import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { useTheme } from '@emotion/react'
import Navbar from 'components/navbar/Navbar'
import Sidebar from 'components/sidebar/Sidebar'
import RightBar from 'components/rightbar/RightBar'

const Paths = () => {
  const theme = useTheme()
  const alt = theme.palette.background.alt
  const main = theme.palette.background.main
  return (
    <>
      <Navbar />
      <Grid container sx={{ flexGrow: 1 }} backgroundColor={main}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={8} >
          <Box bgcolor={alt} sx={{ borderRadius: '10px 10px 0px 0px', height: '90vh', overflow: 'auto' }}>
            <Outlet />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <RightBar />
        </Grid>
      </Grid>
    </>

  )
}

export default Paths