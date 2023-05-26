import { Box } from '@mui/material'
import React from 'react'
import FlexBetween from './FlexBetween'
import UserWidget from './UserWidget'
import SidebarNav from './SidebarNav'
import Setting from './Setting'

const Sidebar = () => {

    return (
        <Box sx={{ position: 'fixed', width: { lg: '13.7rem', md: '10.7rem' }, zIndex: 900 }} >
            <FlexBetween sx={{ height: '100%', flexDirection: 'column', padding: '0rem 0rem 1rem' }}>
                <Box sx={{ width: '100%' }}>
                    <UserWidget />
                    <SidebarNav />
                </Box>
                <Box sx={{ width: '100%' }}>
                    <Setting />
                </Box>
            </FlexBetween>
        </Box>
    )
}

export default Sidebar  