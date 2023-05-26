import { Box } from '@mui/material'
import ChatHome from 'components/MainHome'
import Navbar from 'components/Navbar'
import React from 'react'

const HomePage = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Navbar />
            <ChatHome />
        </Box>
    )
}

export default HomePage 