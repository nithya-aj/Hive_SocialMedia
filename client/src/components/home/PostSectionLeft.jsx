import * as React from 'react';
import Stories from './Stories'
import SharePost from './SharePost'
import Posts from './Post'
import { Box } from '@mui/material';

function PostSectionLeft() {
  return (
    <>
      <Box sx={{ px: { xs: '0.5rem', sm: '0rem' } }}>
        <Stories />
      </Box>
      <SharePost />
      <Posts />
      <Posts />
    </>
  )
}

export default PostSectionLeft 