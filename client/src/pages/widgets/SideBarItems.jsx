import { Box, Grid } from '@mui/material'
import React from 'react'
import UserWidget from './UserWidget'
import SidebarNavItems from './SidebarNavItems'

const SideBarItems = () => {
    return (
        <>
            <Box sx={{ padding: '2rem', height: '100%' }}>
                <UserWidget />
                <SidebarNavItems />
            </Box>
        </>
    )
}

export default SideBarItems