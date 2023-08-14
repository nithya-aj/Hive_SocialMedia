import { useTheme } from '@emotion/react'
import { Avatar, Box, Grid, Typography } from '@mui/material'
import FlexCenter from 'components/widget/FlexCenter'
import React from 'react'

const Followers = () => {
    const theme = useTheme()
    const darkbg = theme.palette.background.darkbg
    const alt = theme.palette.background.alt
    return (
        <Grid container gap={2} sx={{  display: 'flex', justifyContent: 'space-between', gap: 2, height: '100%' }}> 
            <Grid item width={'32%'} sx={{ backgroundColor: darkbg, p: '1rem', display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar />
                    <Box>
                        <Typography>Alex</Typography>
                        <Typography>Founder & ceo at doogle</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                    <FlexCenter sx={{ p: '0.5rem', width: '6rem', borderRadius: '8px', border: `1px solid ${alt}` }}>Ignore</FlexCenter>
                    <FlexCenter sx={{ p: '0.5rem', width: '6rem', borderRadius: '8px', border: `1px solid ${alt}` }}>Unfollow</FlexCenter>
                </Box>
            </Grid>
            <Grid item width={'32%'} sx={{ backgroundColor: darkbg, p: '1rem', display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar />
                    <Box>
                        <Typography>Alex</Typography>
                        <Typography>Founder & ceo at doogle</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                    <FlexCenter sx={{ p: '0.5rem', width: '6rem', borderRadius: '8px', border: `1px solid ${alt}` }}>Ignore</FlexCenter>
                    <FlexCenter sx={{ p: '0.5rem', width: '6rem', borderRadius: '8px', border: `1px solid ${alt}` }}>Unfollow</FlexCenter>
                </Box>
            </Grid>
            <Grid item width={'32%'} sx={{ backgroundColor: darkbg, p: '1rem', display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar />
                    <Box>
                        <Typography>Alex</Typography>
                        <Typography>Founder & ceo at doogle</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                    <FlexCenter sx={{ p: '0.5rem', width: '6rem', borderRadius: '8px', border: `1px solid ${alt}` }}>Ignore</FlexCenter>
                    <FlexCenter sx={{ p: '0.5rem', width: '6rem', borderRadius: '8px', border: `1px solid ${alt}` }}>Unfollow</FlexCenter>
                </Box>
            </Grid>
            <Grid item width={'32%'} sx={{ backgroundColor: darkbg, p: '1rem', display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar />
                    <Box>
                        <Typography>Alex</Typography>
                        <Typography>Founder & ceo at doogle</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                    <FlexCenter sx={{ p: '0.5rem', width: '6rem', borderRadius: '8px', border: `1px solid ${alt}` }}>Ignore</FlexCenter>
                    <FlexCenter sx={{ p: '0.5rem', width: '6rem', borderRadius: '8px', border: `1px solid ${alt}` }}>Unfollow</FlexCenter>
                </Box>
            </Grid>
            <Grid item width={'32%'} sx={{ backgroundColor: darkbg, p: '1rem', display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar />
                    <Box>
                        <Typography>Alex</Typography>
                        <Typography>Founder & ceo at doogle</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                    <FlexCenter sx={{ p: '0.5rem', width: '6rem', borderRadius: '8px', border: `1px solid ${alt}` }}>Ignore</FlexCenter>
                    <FlexCenter sx={{ p: '0.5rem', width: '6rem', borderRadius: '8px', border: `1px solid ${alt}` }}>Unfollow</FlexCenter>
                </Box>
            </Grid>
            <Grid item width={'32%'} sx={{ backgroundColor: darkbg, p: '1rem', display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar />
                    <Box>
                        <Typography>Alex</Typography>
                        <Typography>Founder & ceo at doogle</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                    <FlexCenter sx={{ p: '0.5rem', width: '6rem', borderRadius: '8px', border: `1px solid ${alt}` }}>Ignore</FlexCenter>
                    <FlexCenter sx={{ p: '0.5rem', width: '6rem', borderRadius: '8px', border: `1px solid ${alt}` }}>Unfollow</FlexCenter>
                </Box>
            </Grid>
            <Grid item width={'32%'} sx={{ backgroundColor: darkbg, p: '1rem', display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar />
                    <Box>
                        <Typography>Alex</Typography>
                        <Typography>Founder & ceo at doogle</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                    <FlexCenter sx={{ p: '0.5rem', width: '6rem', borderRadius: '8px', border: `1px solid ${alt}` }}>Ignore</FlexCenter>
                    <FlexCenter sx={{ p: '0.5rem', width: '6rem', borderRadius: '8px', border: `1px solid ${alt}` }}>Unfollow</FlexCenter>
                </Box>
            </Grid>
            <Grid item width={'32%'} sx={{ backgroundColor: darkbg, p: '1rem', display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar />
                    <Box>
                        <Typography>Alex</Typography>
                        <Typography>Founder & ceo at doogle</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                    <FlexCenter sx={{ p: '0.5rem', width: '6rem', borderRadius: '8px', border: `1px solid ${alt}` }}>Ignore</FlexCenter>
                    <FlexCenter sx={{ p: '0.5rem', width: '6rem', borderRadius: '8px', border: `1px solid ${alt}` }}>Unfollow</FlexCenter>
                </Box>
            </Grid>
            <Grid item width={'32%'} sx={{ backgroundColor: darkbg, p: '1rem', display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar />
                    <Box>
                        <Typography>Alex</Typography>
                        <Typography>Founder & ceo at doogle</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                    <FlexCenter sx={{ p: '0.5rem', width: '6rem', borderRadius: '8px', border: `1px solid ${alt}` }}>Ignore</FlexCenter>
                    <FlexCenter sx={{ p: '0.5rem', width: '6rem', borderRadius: '8px', border: `1px solid ${alt}` }}>Unfollow</FlexCenter>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Followers