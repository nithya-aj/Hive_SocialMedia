import { Box } from '@mui/material';
import React from 'react'
import Hivelogo from 'assets/Hivelogo.png'
import letterH from 'assets/small-h.png'
import letterI from 'assets/small-i.png'
import letterV from 'assets/small-v.png'
import letterE from 'assets/small-e.png'

const LogoItems = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyItems:'center' }}>  
            <img src={Hivelogo} alt="" style={{ width: '2rem', height: '2rem' }} />
            <Box sx={{ display: 'flex', alignItems: 'center' }} >
                <img src={letterH} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
                <img src={letterI} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
                <img src={letterV} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
                <img src={letterE} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
            </Box>
        </Box>
    )
}

export default LogoItems  