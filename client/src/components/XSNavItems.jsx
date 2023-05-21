import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Box, Typography } from '@mui/material';
import { RiMessage3Line, RiHome3Line } from "react-icons/ri";
import { FiUserPlus } from "react-icons/fi";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";


const XSNavItems = () => {

    const items = [
        {
            icon: RiHome3Line
        },
        {
            icon: FiUserPlus
        },
        {
            icon: RiMessage3Line
        },
        {
            icon: IoNotificationsOutline
        },
        {
            icon: FaRegUserCircle
        }
    ]

    return (
        <Box sx={{ height: '95%' }}>
            <List sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {items.map((item, id) => (
                        <ListItem key={id} >
                            <ListItemAvatar sx={{ minWidth: '1px' }}>
                                <item.icon style={{ fontSize: 'x-large', cursor: 'pointer' }} />
                            </ListItemAvatar>
                        </ListItem>
                    ))}
                    <ListItem>
                        <ListItemAvatar sx={{ minWidth: '1px' }}>
                            <IoSettingsOutline style={{ fontSize: 'x-large', cursor: 'pointer' }} />
                        </ListItemAvatar>
                    </ListItem>
                </Box>
            </List>
        </Box>
    )
}

export default XSNavItems


