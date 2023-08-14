import { useTheme } from '@emotion/react'
import { Grid } from '@mui/material'
import FriendsCard from 'components/widget/FriendsCard'
import React from 'react'

const Followers = () => {
    const theme = useTheme()
    const darkbg = theme.palette.background.darkbg
    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'space-between', height: '100%', gap: '1.3rem' }}>
            <Grid item xs={3.83} sx={{ backgroundColor: darkbg, p: '1rem', display: 'flex', flexDirection: 'column', height: '30%', gap: 3 }}>
                <FriendsCard />
            </Grid>
            <Grid xs={3.83} item sx={{ backgroundColor: darkbg, p: '1rem', display: 'flex', flexDirection: 'column', height: '30%', gap: 3 }}>
                <FriendsCard />
            </Grid>
            <Grid xs={3.83} item sx={{ backgroundColor: darkbg, p: '1rem', display: 'flex', flexDirection: 'column', height: '30%', gap: 3 }}>
                <FriendsCard />
            </Grid>
            <Grid xs={3.83} item sx={{ backgroundColor: darkbg, p: '1rem', display: 'flex', flexDirection: 'column', height: '30%', gap: 3 }}>
                <FriendsCard />
            </Grid>
            <Grid xs={3.83} item sx={{ backgroundColor: darkbg, p: '1rem', display: 'flex', flexDirection: 'column', height: '30%', gap: 3 }}>
                <FriendsCard />
            </Grid>
            <Grid xs={3.83} item sx={{ backgroundColor: darkbg, p: '1rem', display: 'flex', flexDirection: 'column', height: '30%', gap: 3 }}>
                <FriendsCard />
            </Grid>
            <Grid xs={3.83} item sx={{ backgroundColor: darkbg, p: '1rem', display: 'flex', flexDirection: 'column', height: '30%', gap: 3 }}>
                <FriendsCard />
            </Grid>
            <Grid xs={3.83} item sx={{ backgroundColor: darkbg, p: '1rem', display: 'flex', flexDirection: 'column', height: '30%', gap: 3 }}>
                <FriendsCard />
            </Grid>
            <Grid xs={3.83} item sx={{ backgroundColor: darkbg, p: '1rem', display: 'flex', flexDirection: 'column', height: '30%', gap: 3 }}>
                <FriendsCard />
            </Grid>
        </Grid>
    )
}

export default Followers