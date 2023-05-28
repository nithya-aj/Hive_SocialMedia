import { Box, Grid } from '@mui/material'
import React from 'react'
import SearchBar from '../widget/SearchBar';
import LogoItems from './LogoItems';
import NavRight from './NavRigth';
import { useTheme } from '@emotion/react';

const Navbar = () => {

    const theme = useTheme()
    const main = theme.palette.background.main

    return (
        <>
            <Grid container py={'1rem'} sx={{ backgroundColor: main }}>
                <Grid item xs={2} >
                    <LogoItems />
                </Grid>
                <Grid item xs={8} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <SearchBar placeholder="Search anything..." width={'100%'} />
                </Grid>
                <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <NavRight />
                </Grid>
            </Grid>
        </>
    )
}

export default Navbar