import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { FaUserPlus, FaUser } from "react-icons/fa";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function SidebarNav() {

    const items = [
        {
            name: "Feed",
            icon: AiFillHome,
            link: '/'
        },
        {
            name: "Friends",
            icon: FaUserPlus,
            link: '/friends'
        },
        {
            name: "Messages",
            icon: BiSolidMessageSquareDetail
        },
        {
            name: "Notifications",
            icon: IoNotifications,
            link: '/notifications'
        },
        {
            name: "Profile",
            icon: FaUser,
            link: '/profile/id'
        },
        {
            name: "Settings",
            icon: IoMdSettings,
            link: '/settings'
        }
    ]

    const theme = useTheme()
    const alt = theme.palette.background.alt
    const main = theme.palette.neutral.main

    return (
        <Box sx={{ width: { lg: '81%', md: '92%' }, height: '100%' }}>
            {items.map((item) => (
                <Link to={item.link} style={{ textDecoration: 'none' }}>
                    <Stack key={item.name} sx={{ position: 'relative' }}>
                        <Item sx={{
                            height: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: { lg: 'flex-start', md: 'flex-start', sm: 'flex-start', xs: 'center' },
                            background: 'transparent', boxShadow: 'none', borderRadius: '0px 10px 10px 0px', cursor: 'pointer', paddingLeft: '2rem',
                            ':hover': {
                                backgroundColor: alt,
                                transform: 'ease-in 4s',
                                "::before": {
                                    content: '""',
                                    position: 'absolute',
                                    top: '1px',
                                    left: '0',
                                    bottom: '2px',
                                    right: '12.6rem',
                                    bgcolor: " #9ca5f7",
                                    borderRadius: '0px 30px 30px 0px',
                                }
                            },
                        }}>
                            <Box style={{ fontSize: 'x-large', marginLeft: { lg: '6px' }, display: 'flex', alignItems: 'center' }}>
                                {item.icon === FaUser ? <item.icon style={{ fontSize: "1.3rem", color: main }} /> : <item.icon style={{ color: main }} />}
                            </Box>
                            <Typography style={{ marginLeft: '10px', color: main }} sx={{ display: { lg: 'block', md: 'block', sm: 'block', xs: 'none' } }}>{item.name}</Typography>
                        </Item>
                    </Stack>
                </Link>
            ))}
        </Box>
    )
}

export default SidebarNav

