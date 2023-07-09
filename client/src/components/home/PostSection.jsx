import { Grid } from '@mui/material'
import React from 'react'
import PostSectionRight from './PostSectionRight'
import PostSectionLeft from './PostSectionLeft'

const PostSection = () => {

  return (
    <Grid container sx={{ padding: '1.5rem 1.5rem 0rem 1.5rem' }}>
      <Grid item xs={8.5} sx={{ flexGrow: 1, paddingRight: '0.7rem' }}>
        <PostSectionLeft />
      </Grid>
      <Grid item xs={3.5} sx={{ flexShrink: 0, paddingLeft: '0.7rem' }}>
        <PostSectionRight />
      </Grid>
    </Grid>
  )
}

export default PostSection 