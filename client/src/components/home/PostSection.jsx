import { useTheme } from '@emotion/react'
import { Box, Grid } from '@mui/material'
import React from 'react'
import PostSectionRight from './PostSectionRight'
import PostSectionLeft from './PostSectionLeft'

const PostSection = () => {

  const theme = useTheme()
  const alt = theme.palette.background.alt

  return (
    <Box bgcolor={alt} sx={{ borderRadius: '10px 10px 0px 0px', height: '90vh', overflow: 'auto' }}>
      <Grid container sx={{ padding: '1.5rem 1.5rem 0rem 1.5rem' }}>
        <Grid item xs={8} sx={{ flexGrow: 1, paddingRight: '0.7rem' }}>
          <PostSectionRight />
        </Grid>
        <Grid item xs={4} sx={{ flexShrink: 0, paddingLeft: '0.7rem' }}>
          <PostSectionLeft />
        </Grid>
      </Grid>
    </Box>
  )
}

export default PostSection 