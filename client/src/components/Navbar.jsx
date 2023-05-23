import { Grid } from '@mui/material'
import React from 'react'
import SearchBar from './SearchBar';
import LogoItems from './LogoItems';
import NavRight from './NavRigth';

const Navbar = () => {

    return (
        <>
            <Grid container py={'0.5rem'}>
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