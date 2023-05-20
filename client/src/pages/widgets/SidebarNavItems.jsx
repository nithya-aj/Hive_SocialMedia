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


const SidebarNavItems = () => {

    const items = [
        {
            name: "Feed",
            icon: RiHome3Line
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
            icon: FaRegUserCircle
        }
    ]

    return (
        <Box sx={{ height: '95%' }}>
            <List sx={{ width: '100%', maxWidth: 360, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                <Box sx={{ marginTop: "1rem" }}>
                    {items.map((item, id) => (
                        <ListItem key={id}>
                            <ListItemAvatar sx={{ minWidth: {xs:'0px', lg:'40px'} }}>
                                <item.icon style={{ fontSize: 'x-large' }} />
                            </ListItemAvatar>
                            <ListItemText primary={
                                <Typography variant="caption" sx={{ fontWeight: '100', fontSize: '16px', display: { xs: 'none', lg: 'flex' } }} >
                                    {item.name}
                                </Typography>} />
                        </ListItem>
                    ))}
                </Box>
                <Box>
                    <ListItem>
                        <ListItemAvatar sx={{ minWidth: {xs:'0px', lg:'40px'} }}>
                            <IoSettingsOutline style={{ fontSize: 'x-large' }} />
                        </ListItemAvatar>
                        <ListItemText primary={
                            <Typography variant="caption" sx={{ fontWeight: '100', fontSize: '16px', display: { xs: 'none', lg: 'flex' } }} >
                                Settings
                            </Typography>} />
                    </ListItem>
                </Box>
            </List>
        </Box>
    )
}

export default SidebarNavItems


