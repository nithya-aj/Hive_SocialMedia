import { Grid } from '@mui/material'
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
            <Grid container pt={'1rem'} sx={{ backgroundColor: main }}>
                <Grid item lg={2} md={2.5} sm={2.5} xs={7} sx={{ display: 'flex', alignItems: 'center', paddingLeft: '1rem' }}>
                    <LogoItems />
                </Grid>
                <Grid item lg={8} md={7} sm={6.5} sx={{ display: { sm: 'flex', xs: 'none' }, alignItems: 'center', justifyContent: 'center' }}>
                    <SearchBar placeholder="Search anything..." width={'100%'} />
                </Grid>
                <Grid item lg={2} md={2.5} sm={3} xs={5} sx={{ display: 'flex', alignItems: 'center', paddingRight: '0.5rem' }}>
                    <NavRight />
                </Grid>
            </Grid>
        </>
    )
}

export default Navbar