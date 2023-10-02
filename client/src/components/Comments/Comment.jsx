import { Avatar, Box, Grid, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';

const Comment = ({ comment }) => {
  const theme = useTheme()
  const medium = theme.palette.neutral.medium

  return (
    <Grid container >
      <Grid item xs={2} lg={1.3} md={1.5} >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: '5px' }}>
          <Avatar alt="Remy Sharp" src="https://source.unsplash.com/featured/300x198" sx={{ height: '2.3rem', width: '2.3rem' }} />
        </Box>
      </Grid>
      <Grid item xs={10} lg={10.7} md={10.5}>
        <ListItemText sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography sx={{ color: medium }}>
              Ali Connors
            </Typography>
            <Typography sx={{ color: medium, fontSize: '9px' }} variant='caption'>
              3 days ago
            </Typography>
          </Box>
          <Box sx={{ mt: '2px' }}>
            <Typography variant='body2' sx={{ color: medium, fontSize: '12px' }}>
              {comment.text}
            </Typography>
          </Box>
        </ListItemText>
      </Grid>
    </Grid>
  )
}

export default Comment