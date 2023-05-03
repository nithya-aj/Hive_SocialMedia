import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ImageIcon from '@mui/icons-material/Image';
import { Box } from '@mui/material';

const SidebarNavItems = () => {

    const items = [
        {
            name: "Feed",
            icon: "icon1"
        },
        {
            name: "Friends",
            icon: "icon1"
        },
        {
            name: "Messages",
            icon: "icon1"
        },
        {
            name: "Notifications",
            icon: "icon1"
        },
        {
            name: "Profile",
            icon: "icon1"
        }
    ]

    return (
        <Box sx={{ height: '95%' }}>
            <List sx={{ width: '100%', maxWidth: 360, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <Box sx={{ marginTop: "1rem" }}>
                    {items.map((item, id) => (
                        <ListItem key={id}>
                            <ListItemAvatar>
                                <ImageIcon />
                            </ListItemAvatar>
                            <ListItemText primary={item.name} />
                        </ListItem>
                    ))}
                </Box>
                <Box>
                    <ListItem>
                        <ListItemAvatar>
                            <ImageIcon />
                        </ListItemAvatar>
                        <ListItemText primary="Settings" />
                    </ListItem>
                </Box>
            </List>
        </Box>
    )
}

export default SidebarNavItems


