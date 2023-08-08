import { Badge, Box } from '@mui/material'
import React from 'react'
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles'
import { useTheme } from '@emotion/react';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const UserAvatar = ({ sidebar }) => {
    const theme = useTheme()
    const orange = theme.palette.neutral.orange
    return (
        <Box>
            {sidebar ? (
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                >
                    <Avatar sx={{ width: "2.5rem", height: '2.5rem', border: `2px solid ${orange}` }} alt="Remy Sharp" src="https://source.unsplash.com/featured/300x198" />
                </StyledBadge>) : (
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                >
                    <Avatar sx={{ width: "2.5rem", height: '2.5rem', border: `2px solid ${orange}` }} alt="Remy Sharp" src="https://source.unsplash.com/featured/300x198" />
                </StyledBadge>)
            }
        </Box>
    )
}

export default UserAvatar 