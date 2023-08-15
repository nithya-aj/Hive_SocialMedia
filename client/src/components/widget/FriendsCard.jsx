import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import FlexCenter from './FlexCenter'
import { useTheme } from '@emotion/react'

const FriendsCard = ({ friend }) => {
    const theme = useTheme()
    const darkbg = theme.palette.background.darkbg
    const alt = theme.palette.background.alt
    return (
        <>
            <Box sx={{ backgroundColor: darkbg, display: 'flex', flexDirection: 'column', gap: 1, borderRadius: '4px', overflow: 'hidden', height: '100%', width: '100%' }}>
                <FlexCenter sx={{ flexDirection: 'column', gap: 0.5, py: '1rem' }}>
                    <Avatar sx={{ width: '3rem', height: '3rem' }} />
                    <Typography>{friend.name}</Typography>
                    <Typography>ceo & founder of cole</Typography>
                </FlexCenter>
                <Box sx={{ height: '100%', overflow: 'hidden ', borderTop: `1px solid ${alt}`, display: 'flex', alignItems: 'center' }}>
                    <FlexCenter sx={{ width: '50%', height: '100%', borderRight: `1px solid ${alt}` }}>Accept</FlexCenter>
                    <FlexCenter sx={{ width: '50%', height: '100%' }}>Decline</FlexCenter>
                </Box>
            </Box>
        </>
    )
}

export default FriendsCard