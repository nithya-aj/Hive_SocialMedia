import React from 'react';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom'; // Import useLocation
import { useTheme } from '@emotion/react';
import Navbar from 'components/Navbar/Navbar';
import Sidebar from 'components/Sidebar/Sidebar';
import RightBar from 'components/Rightbar/RightBar';
import NavItems from 'components/MobileSidebar/NavItems';

const MainHome = () => {
  const theme = useTheme();
  const alt = theme.palette.background.alt;
  const main = theme.palette.background.main;
  const location = useLocation()

  const isMessagesRoute = location.pathname.startsWith('/messages');
  const isSettingsRoute = location.pathname.startsWith('/settings');

  return (
    <>
      <Navbar />
      {isMessagesRoute || isSettingsRoute ? (
        <>
          <Grid container sx={{ flexGrow: 1 }} backgroundColor={main}>
            <Grid item lg={2} md={2.5} sm={2.5} sx={{ height: '90vh', display: { xs: 'none', sm: 'block' } }}>
              <Sidebar />
            </Grid>
            <Grid item lg={10} md={9.5} sm={9.5} xs={12} sx={{ pt: '1rem', pr: '1rem' }}>
              <Box sx={{ borderRadius: { sm: '10px', md: '10px' }, height: '90vh', overflow: 'auto', backgroundColor: { sm: alt, xs: main }, border: { sm: `2px solid ${alt}`, xs: `2px solid ${main}` } }}>
                <Outlet />
              </Box>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Grid container sx={{ flexGrow: 1 }} backgroundColor={main}>
            <Grid item lg={2} md={2.5} sm={2.5} sx={{ height: '90vh', display: { xs: 'none', sm: 'block' } }}>
              <Sidebar />
            </Grid>
            <Grid item lg={8} md={7} sm={6.5} xs={12} sx={{ pt: '1rem' }}>
              <Box sx={{ borderRadius: { sm: '10px 10px 0px 0px' }, height: '90vh', overflow: 'auto', backgroundColor: { sm: alt, xs: main }, border: { sm: `2px solid ${alt}`, xs: `2px solid ${main}` } }}>
                <Outlet />
              </Box>
            </Grid>
            <Grid item lg={2} md={2.5} sm={3} sx={{ height: '90vh', display: { xs: 'none', sm: 'block' } }}>
              <RightBar />
            </Grid>
          </Grid>
        </>
      )}
      <Box sx={{ display: { xs: 'flex', sm: 'none' }, height: '4rem', backgroundColor: main, width: '100%', position: 'absolute', bottom: 0, alignItems: 'center', justifyContent: 'space-evenly', px: '1rem' }}>
        <NavItems />
      </Box>
    </>
  );
};

export default MainHome;
