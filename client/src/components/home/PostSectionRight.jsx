import { Box } from '@mui/material'
import React from 'react'
import UpdateProfile from './PostRight/UpdateProfile';
import FriendsReq from './PostRight/FriendsReq';

function PostSectionRight() {
    return (
        <Box sx={{
            position: 'sticky', top: '1.5rem', borderRadius: '10px', overflow: 'hidden', gap: 2,
            display: 'flex', flexDirection: 'column'
        }}>
            <UpdateProfile />
            <FriendsReq />
        </Box>
    )
}

export default PostSectionRight