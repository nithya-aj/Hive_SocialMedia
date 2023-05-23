import React from 'react'
import Sidebar from './Sidebar'
import { Grid } from '@mui/material'
import PostSection from './PostSection'

function ChatHome() {
    return (
        <Grid container sx={{ flexGrow: 1 }} >
            <Grid item xs={2} >
                <Sidebar />
            </Grid>
            <Grid item xs={8}>
                <PostSection />
            </Grid>
            <Grid item xs={2}>
                <p>right</p>
            </Grid>
        </Grid>
    )
}

export default ChatHome