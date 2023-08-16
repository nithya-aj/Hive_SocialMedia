import { useTheme } from '@emotion/react'
import { Box, Pagination, Stack } from '@mui/material'
import FlexCenter from 'components/widget/FlexCenter';
import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Friends() {
  const theme = useTheme()
  const darkbg = theme.palette.background.darkbg
  const main = theme.palette.neutral.main
  const purple = theme.palette.neutral.purple

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const TabLink = ({ to, children }) => (
    <FlexCenter
      component={Link}
      to={to}
      sx={{
        width: '32%',
        height: '100%',
        color: main,
        cursor: 'pointer',
        ":hover": { border: `1px solid ${purple}`, borderRadius: '4px 0px 0px 0px' },
        textDecoration: 'none'
      }}
    >
      {children}
    </FlexCenter>
  );

  return (
    <Box sx={{ p: '1rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ height: '2.5rem', borderRadius: '4px 4px 0px 0px', display: 'flex', alignItems: 'center', marginBottom: 'auto', backgroundColor: darkbg, gap: 3, overflow: 'hidden' }}>
        <TabLink to="followers">Followers</TabLink>
        <TabLink to="following">Following</TabLink>
        <TabLink to="suggestions">Suggestions</TabLink>
      </Box>
      <Box sx={{ height: '100%', py: '1rem', flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Box sx={{ height: '2.5rem', backgroundColor: darkbg, borderRadius: '0px 0px 4px 4px', display: 'flex', alignItems: 'center', marginTop: 'auto', justifyContent: 'center' }}>
        <Stack spacing={2}>
          <Pagination count={10} page={page} onChange={handleChange} />
        </Stack>
      </Box>
    </Box>
  )
}

export default Friends