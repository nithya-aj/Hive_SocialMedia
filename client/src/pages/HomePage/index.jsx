import { Box } from '@mui/material'
import ChatHome from 'components/home/MainHome'
import Navbar from 'components/navbar/Navbar'
import React from 'react'

const HomePage = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <ChatHome />
        </Box>
    )
}

export default HomePage 