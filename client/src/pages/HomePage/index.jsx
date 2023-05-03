import { Box } from '@mui/material'
import Navbar from 'pages/Navbar'
import HomePageWidget from 'pages/widgets/HomePageWidget'
import React from 'react'

const HomePage = () => {
    return (
        <>
            <Box sx={{display:'flex', flexDirection:'column', height:'100vh'}}>
                <Navbar />
                <HomePageWidget />
            </Box>
        </>
    )
}

export default HomePage