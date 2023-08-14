import { Avatar, Box, Button, Typography } from '@mui/material'
import React from 'react'
import FlexCenter from './FlexCenter'
import { useTheme } from '@emotion/react'

const FriendsCard = () => {
    const theme = useTheme()
    const alt = theme.palette.background.alt
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar />
                <Box>
                    <Typography>Adam Joan</Typography>
                    <Typography>ceo & founder of cole</Typography>
                </Box>
            </Box>
            <FlexCenter sx={{ gap: 4 }}>
                <Button variant="outlined" sx={{ width: '50%' }}>Decline</Button>
                <Button variant="outlined" sx={{ width: '50%' }}>Accept</Button>
            </FlexCenter>
        </>
    )
}

export default FriendsCard