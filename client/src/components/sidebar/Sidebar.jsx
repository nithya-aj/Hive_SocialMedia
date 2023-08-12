import { Box } from '@mui/material'
import React from 'react'
import UserWidget from './UserWidget'
import SidebarNav from './SidebarNav'

const Sidebar = () => {

    return (
        <Box sx={{ padding: '0rem 0rem 1rem', height: '100%', pb: '1rem' }}>
            <Box sx={{ width: '100%', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', gap: 2, pr: { sm: '1rem', xl: '3.5rem' } }}>
                <Box sx={{ pl: '1rem', display: { xs: 'none', md: 'block' } }}>
                    <UserWidget />
                </Box>
                <Box >
                    <SidebarNav />
                </Box>
            </Box>
        </Box>
    )
}

export default Sidebar  