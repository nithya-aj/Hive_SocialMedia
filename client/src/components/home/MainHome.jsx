import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import { Grid } from '@mui/material'
import PostSection from './PostSection'
import RightBar from '../rightbar/RightBar'

function ChatHome() {
    return (
        <Grid container sx={{ flexGrow: 1 }} >
            <Grid item xs={2}>
                <Sidebar />
            </Grid>
            <Grid item xs={8} >
                <PostSection />
            </Grid>
            <Grid item xs={2}>
                <RightBar />
            </Grid>
        </Grid>
    )
}

export default ChatHome