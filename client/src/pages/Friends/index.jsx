import { useTheme } from '@emotion/react'
import { Box, Pagination, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Friends() {

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const theme = useTheme()
  const darkbg = theme.palette.background.darkbg
  const main = theme.palette.neutral.main
  const purple = theme.palette.neutral.purple

  return (
    <Box sx={{ p: '1rem', backgroundColor: 'transparent', height: '100%' }}>
      <Box sx={{ height: '100%', borderRadius: '10px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box sx={{
          height: '2.5rem', width: '100%', backgroundColor: darkbg, display: 'flex',
          alignItems: 'center', justifyContent: 'space-between'
        }}
        >
          <Typography component={Link} to={'followers'} sx={{
            height: '2.5rem', display: 'flex', alignItems: 'center', width: '32%', justifyContent: 'center'
            , color: main, cursor: 'pointer', ":hover": { backgroundColor: purple, color: darkbg }, textDecoration: 'none'
          }}>
            398 Followers</Typography>
          <Typography component={Link} to={'following'} sx={{
            height: '2.5rem', display: 'flex', alignItems: 'center', width: '32%', justifyContent: 'center'
            , color: main, cursor: 'pointer', ":hover": { backgroundColor: purple, color: darkbg }, textDecoration: 'none'
          }}>
            398 Following</Typography>
          <Typography component={Link} to={'suggestions'} sx={{
            height: '2.5rem', display: 'flex', alignItems: 'center', width: '32%', justifyContent: 'center'
            , color: main, cursor: 'pointer', ":hover": { backgroundColor: purple, color: darkbg }, textDecoration: 'none'
          }}>
            People you might like</Typography>
        </Box>
        <Box sx={{ py: '1rem', height: '100%' }}>
          <Outlet />
        </Box>
        <Box sx={{
          height: '2.5rem', width: '100%', backgroundColor: darkbg, display: 'flex',
          alignItems: 'center', justifyContent: 'space-evenly', color: main
        }}
        >
          <Stack spacing={2}>
            <Pagination count={10} page={page} onChange={handleChange} />
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default Friends