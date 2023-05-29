import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import { Grid } from '@mui/material'
import PostSection from './PostSection'
import RightBar from '../rightbar/RightBar'
import { useTheme } from '@emotion/react';

function ChatHome() {

    const theme = useTheme()
    const main = theme.palette.background.main

    return (
        <Grid container sx={{ flexGrow: 1, bgcolor: main }} >
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