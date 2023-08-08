import { Box, Typography } from '@mui/material';
import React from 'react'
import Hivelogo from 'assets/Hivelogo.png'
import { useTheme } from '@emotion/react';

const LogoItems = () => {
    const theme = useTheme()
    const main = theme.palette.neutral.main

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyItems: 'center' }}>
            <img src={Hivelogo} alt="" style={{ width: '2rem', height: '2rem' }} />
            <Box sx={{ display: 'flex', alignItems: 'center' }} >
                <Typography variant="h4" sx={{ fontWeight: '600', letterSpacing: '2px', color: main }}>Hive</Typography>
            </Box>
        </Box>
    )
}
 
export default LogoItems  