import { useTheme } from '@emotion/react'
import { Box } from '@mui/material'
import FlexCenter from 'components/widget/FlexCenter';
import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom';

function Friends() {
  const theme = useTheme()
  const darkbg = theme.palette.background.darkbg
  const main = theme.palette.neutral.main
  const purple = theme.palette.neutral.purple

  const TabLink = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname.includes(to)

    return (
      <FlexCenter
        component={Link}
        to={to}
        sx={{
          width: '32%',
          height: '100%',
          color: main,
          cursor: 'pointer',
          ":hover": { border: `1px solid ${purple}`, borderRadius: '0px' },
          textDecoration: 'none',
          border: isActive ? `1px solid ${purple}` : 'transparent'
        }}
      >
        {children}
      </FlexCenter>
    );
  };


  return (
    <Box sx={{ p: '1rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ height: '3rem', borderRadius: '0px', display: 'flex', alignItems: 'center', marginBottom: 'auto', backgroundColor: darkbg, gap: 3, overflow: 'hidden' }}>
        <TabLink to="followers">Followers</TabLink>
        <TabLink to="following">Following</TabLink>
        <TabLink to="suggestions">Suggestions</TabLink>
      </Box>
      <Box sx={{ height: '100%', p: '2rem 0rem 1rem 0rem', flexGrow: 1 }}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default Friends