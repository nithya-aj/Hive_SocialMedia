import { Badge, Box } from '@mui/material'
import React from 'react'
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles'

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
    return (
        <Box sx={{
            height: '2.7rem', width: '2.7rem', background: "linear-gradient(90deg, rgba(65,88,208,1) 0%, rgba(200,80,192,1) 46%, rgba(255,204,112,1) 100%)", borderRadius: '50%',
            position: 'relative'
        }}>
            {sidebar ? (
                <StyledBadge
                    sx={{ position: 'abosulute', left: '2.4px', top: '2.8px' }}
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                >
                    <Avatar sx={{ width: "2.4rem", height: '2.4rem' }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </StyledBadge>) : (
                <StyledBadge
                    sx={{ position: 'abosulute', left: '2.5px', top: '2.8px' }}
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                >
                    <Avatar sx={{ width: 38, height: 38 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </StyledBadge>)
            }
        </Box>
    )
}

export default UserAvatar