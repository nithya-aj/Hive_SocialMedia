import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { RiMessage3Line } from "react-icons/ri";
import { FiUserPlus } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineViewGrid } from "react-icons/hi";
import { CiUser } from "react-icons/ci";
import { Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { IoSettingsOutline } from "react-icons/io5";


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
            icon: HiOutlineViewGrid
        },
        {
            name: "Friends",
            icon: FiUserPlus
        },
        {
            name: "Messages",
            icon: RiMessage3Line
        },
        {
            name: "Notifications",
            icon: IoNotificationsOutline
        },
        {
            name: "Profile",
            icon: CiUser
        },
        {
            name:"Settings",
            icon: IoSettingsOutline
        }
    ]

    const theme = useTheme()
    const alt = theme.palette.background.alt

    return (
        <Box sx={{ width: {lg:'81%', md:'92%'} }}>
            {items.map((item) => (
                <Stack key={item.name}>
                    <Item sx={{
                        height: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: { lg: 'flex-start', md: 'flex-start', sm: 'flex-start', xs: 'center' },
                        background: 'transparent', boxShadow: 'none', borderRadius: '0px 10px 10px 0px', cursor: 'pointer', paddingLeft: '1rem',
                        ':hover': {
                            backgroundColor: alt
                        }
                    }}>
                        <Box style={{ fontSize: 'x-large', marginLeft: { lg: '6px' }, display: 'flex', alignItems: 'center' }}>
                            {<item.icon />}
                        </Box>
                        <Typography style={{ marginLeft: '10px' }} sx={{ display: { lg: 'block', md: 'block', sm: 'block', xs: 'none' } }}>{item.name}</Typography>
                    </Item>
                </Stack>
            ))}
        </Box>
    )
}

export default SidebarNav

