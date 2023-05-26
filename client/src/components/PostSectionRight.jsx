import { Box } from '@mui/material'
import React from 'react'
import Stories from './Stories'
import SharePost from './SharePost'
import Posts from './Posts'

function PostSectionRight() {
    return (
        <Box >
            <Stories />
            <SharePost />
            <Posts />
            <Posts />
        </Box>
    )
}

export default PostSectionRight