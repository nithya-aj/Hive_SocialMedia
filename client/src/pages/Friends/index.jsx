import { useTheme } from '@emotion/react'
import { Box, Pagination, Stack, Typography } from '@mui/material'
import React from 'react'

function Friends() {

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const theme = useTheme()
  const darkbg = theme.palette.background.darkbg
  const alt = theme.palette.background.alt
  const main = theme.palette.neutral.main

  return (
    <Box sx={{ p: '1rem', backgroundColor: 'transparent', height: '100%' }}>
      <Box sx={{ height: '100%', backgroundColor: alt, borderRadius: '10px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box sx={{
          height: '2.5rem', width: '100%', backgroundColor: darkbg, display: 'flex',
          alignItems: 'center', justifyContent: 'space-between', color: main
        }}
        >
          <Typography sx={{
            height: '2.5rem', display: 'flex', alignItems: 'center', width: '32%', justifyContent: 'center',
            ":hover": { backgroundColor: alt }, cursor: 'pointer'
          }}>
            398 Followers</Typography>
          <Typography sx={{
            height: '2.5rem', display: 'flex', alignItems: 'center', width: '32%', justifyContent: 'center',
            ":hover": { backgroundColor: alt }, cursor: 'pointer'
          }}>
            398 Following</Typography>
          <Typography sx={{
            height: '2.5rem', display: 'flex', alignItems: 'center', width: '32%', justifyContent: 'center',
            ":hover": { backgroundColor: alt }, cursor: 'pointer'
          }}>
            People you might like</Typography>
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