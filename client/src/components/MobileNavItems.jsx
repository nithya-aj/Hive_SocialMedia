import { Box } from '@mui/material'
import React from 'react'
import XSNavItems from './XSNavItems'
import { useTheme } from '@emotion/react'

const MobileNavItems = () => {

    const theme = useTheme()
    const main = theme.palette.background.main

    return (
        <Box sx={{
            width: '100%', borderRadius: '0px', height: '4rem', alignItems: 'center', justifyContent: 'center',
            display: {
                xs: 'flex',
                sm: 'none'
            },
            position: 'fixed', bottom: '0px', zIndex: '100',
            backgroundColor: main 
        }}>
            <XSNavItems />
        </Box>
    )
}
 
export default MobileNavItems