import { Grid } from '@mui/material'
import React from 'react'
import SideBarItems from './SideBarItems'
import { useTheme } from '@emotion/react'
import MobileNavItems from 'components/MobileNavItems'

const HomePageWidget = () => {

    const theme = useTheme()
    const alt = theme.palette.background.alt

    return (
        <>
            <Grid container sx={{ flexGrow: 1 }}>
                <Grid item lg={2} md={1.5} sm={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <SideBarItems />
                </Grid>
                <Grid item lg={7.5} md={7.5} xs={12} sm={7.5} sx={{ backgroundColor: alt, borderRadius: '10px 10px 0px 0px' }}>
                    <p>Grid home</p>
                </Grid>
                <Grid item lg={2.5} md={3} sm={2.5} sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <p>Grid right</p>
                </Grid>
            </Grid>
            <MobileNavItems />
        </>
    )
}

export default HomePageWidget  