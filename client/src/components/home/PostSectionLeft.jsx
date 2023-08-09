import * as React from 'react';
import Stories from './Stories'
import SharePost from './SharePost'
import Posts from './Post'
import { Box } from '@mui/material';

function PostSectionLeft() {
  return (
    <Box >
      <Stories />
      <SharePost />
      <Posts />
      <Posts />
    </Box>
  )
}

export default PostSectionLeft 