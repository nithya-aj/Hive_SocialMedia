import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';

const InputBar = () => {  

    const theme = useTheme()
    const main = theme.palette.neutral.main
    const alt = theme.palette.background.alt

    return (
        <Box sx={{ width: '100%' }}>
            <Paper
                component="form"
                sx={{ display: 'flex', alignItems: 'center', height: "2.5rem", backgroundColor: alt, boxShadow: 'none', borderRadius: '10px' }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1, color: main }}
                    placeholder='What do you want to share today?'
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
            </Paper>
        </Box>
    )
}

export default InputBar

