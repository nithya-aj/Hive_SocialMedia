import { Grid } from '@mui/material'
import React from 'react'
import PostSectionRight from './PostSectionRight'
import PostSectionLeft from './PostSectionLeft'

const PostSection = () => {

  return (
    <Grid container sx={{ padding: '0rem 1.5rem 0rem 1.5rem' }} bgcolor={{ xl: 'red', lg: 'yellow', md: 'pink', sm: 'orange', xs: 'lightsalmon' }}>
      <Grid item lg={8.5} xs={12} sx={{ flexGrow: 1, paddingRight: '0.7rem' }}>
        <PostSectionLeft />
      </Grid>
      <Grid item xs={3.5} sx={{ flexShrink: 0, paddingLeft: '0.7rem', display: { lg: 'block', xs: 'none' } }}>
        <PostSectionRight />
      </Grid>
    </Grid>
  )
}

export default PostSection  