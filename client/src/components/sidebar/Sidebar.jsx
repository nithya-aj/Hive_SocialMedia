import { Box } from '@mui/material'
import React from 'react'
import FlexBetween from '../widget/FlexBetween'
import UserWidget from './UserWidget'
import SidebarNav from './SidebarNav'
import Setting from './Setting'

const Sidebar = () => {

    return (
        <FlexBetween sx={{ flexDirection: 'column', padding: '0rem 0rem 1rem' }}>
            <Box sx={{ width: '100%', overflow: 'hidden' }}>
                <UserWidget />
                <SidebarNav />
            </Box>
            {/* <Box sx={{ width: '100%' }}>
                <Setting />
            </Box> */}
        </FlexBetween>
    )
}

export default Sidebar  