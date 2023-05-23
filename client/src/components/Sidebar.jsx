import { Box } from '@mui/material'
import React from 'react'
import FlexBetween from 'wasted/components_old/FlexBetween'
import UserWidget from './UserWidget'
import SidebarNav from './SidebarNav'
import Setting from './Setting'

const Sidebar = () => {
    return (
        <FlexBetween sx={{ height: '100%', flexDirection: 'column', padding: '1rem 0rem' }}>
            <Box sx={{ width: '100%' }}>
                <UserWidget />
                <SidebarNav />
            </Box>
            <Box sx={{ width: '100%' }}>
                <Setting />
            </Box>
        </FlexBetween>
    )
}

export default Sidebar 