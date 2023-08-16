import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import FlexCenter from './FlexCenter'
import { useTheme } from '@emotion/react'
import { FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { IoCloseCircle } from 'react-icons/io5'

const FriendsCard = ({ friend, tab }) => {
    const theme = useTheme()
    const darkbg = theme.palette.background.darkbg
    const alt = theme.palette.background.alt
    return (
        <>
            <Box sx={{ backgroundColor: darkbg, display: 'flex', flexDirection: 'column', gap: '2rem', borderRadius: '4px', overflow: 'hidden', height: '100%', width: '100%' }}>
                <FlexCenter sx={{ flexDirection: 'column', gap: 0.5, py: '1rem' }}>
                    <Avatar sx={{ width: '3rem', height: '3rem' }} />
                    <Typography>{friend.name}</Typography>
                    <Typography>ceo & founder of cole</Typography>
                </FlexCenter>
                {tab === 'followers' &&
                    < Box sx={{ overflow: 'hidden ', borderTop: `1px solid ${alt}`, display: 'flex', alignItems: 'center', height: "3rem" }}>
                        <FlexCenter sx={{ width: '50%', height: '100%', borderRight: `1px solid ${alt}`, fontSize: '1.2rem' }}><IoCloseCircle /></FlexCenter>
                        <FlexCenter sx={{ width: '50%', height: '100%', fontSize: '1.2rem' }}><FaUserPlus /></FlexCenter>
                    </Box>
                }
                {tab === 'following' &&
                    <Box sx={{ overflow: 'hidden ', borderTop: `1px solid ${alt}`, display: 'flex', alignItems: 'center', height: "3rem" }}>
                        <FlexCenter sx={{ width: '50%', height: '100%', borderRight: `1px solid ${alt}`, fontSize: '1.2rem' }}><IoCloseCircle /></FlexCenter>
                        <FlexCenter sx={{ width: '50%', height: '100%', fontSize: '1.2rem' }}><FaUserMinus /></FlexCenter>
                    </Box>
                }
                {tab === 'suggestions' &&
                    <Box sx={{ overflow: 'hidden ', borderTop: `1px solid ${alt}`, display: 'flex', alignItems: 'center', height: "3rem" }}>
                        <FlexCenter sx={{ width: '50%', height: '100%', borderRight: `1px solid ${alt}`, fontSize: '1.2rem' }}><IoCloseCircle /></FlexCenter>
                        <FlexCenter sx={{ width: '50%', height: '100%', fontSize: '1.2rem' }}><FaUserPlus /></FlexCenter>
                    </Box>
                }
            </Box>
        </>
    )
}

export default FriendsCard