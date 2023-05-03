import { Box, Grid } from '@mui/material'
import React from 'react'
import SideBarItems from './SideBarItems'
import { useTheme } from '@emotion/react'

const HomePageWidget = () => {

    const theme = useTheme()
    const alt = theme.palette.background.alt

    return (
        <>
            <Grid container sx={{ flexGrow: 1 }}>
                <Grid item xs={2} >
                    <SideBarItems />
                </Grid>
                <Grid item xs={7.5} sx={{ backgroundColor: alt, borderRadius: '10px 10px 0px 0px' }}>
                    <p>Grid </p>
                </Grid>
                <Grid item xs={2.5} >
                    <p>Grid </p>
                </Grid>
            </Grid>
        </>
    )
}

export default HomePageWidget