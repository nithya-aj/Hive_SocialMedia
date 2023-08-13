import { useTheme } from '@emotion/react'
import { Avatar, Box, Pagination, Stack, Typography } from '@mui/material'
import FlexCenter from 'components/widget/FlexCenter';
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
  const purple = theme.palette.neutral.purple

  return (
    <Box sx={{ p: '1rem', backgroundColor: 'transparent', height: '100%' }}>
      <Box sx={{ height: '100%', borderRadius: '10px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box sx={{
          height: '2.5rem', width: '100%', backgroundColor: darkbg, display: 'flex',
          alignItems: 'center', justifyContent: 'space-between'
        }}
        >
          <Typography sx={{
            height: '2.5rem', display: 'flex', alignItems: 'center', width: '32%', justifyContent: 'center'
            , color: main, cursor: 'pointer', ":hover": { backgroundColor: purple, color: darkbg }
          }}> 
            398 Followers</Typography>
          <Typography sx={{
            height: '2.5rem', display: 'flex', alignItems: 'center', width: '32%', justifyContent: 'center'
            , color: main, cursor: 'pointer', ":hover": { backgroundColor: purple, color: darkbg }
          }}>
            398 Following</Typography>
          <Typography sx={{
            height: '2.5rem', display: 'flex', alignItems: 'center', width: '32%', justifyContent: 'center'
            , color: main, cursor: 'pointer', ":hover": { backgroundColor: purple, color: darkbg }
          }}>
            People you might like</Typography>
        </Box>
        <Box sx={{ height: '100%', py: '1rem' }}>
          <Box sx={{ backgroundColor: darkbg, width: '32%', p: '1rem', display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar />
              <Box>
                <Typography>Alex</Typography>
                <Typography>Founder & ceo at doogle</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
              <FlexCenter sx={{ p: '0.5rem', width: '6rem', borderRadius: '8px', border: `1px solid ${alt}` }}>Ignore</FlexCenter>
              <FlexCenter sx={{ p: '0.5rem', width: '6rem', borderRadius: '8px', border: `1px solid ${alt}` }}>Unfollow</FlexCenter>
            </Box>
          </Box>
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