import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';

const InputBar = () => {

    const theme = useTheme()
    const textbg = theme.palette.neutral.main
    const main = theme.palette.background.main

    return (
        <Box sx={{ width: '100%' }}>
            <Paper
                component="form"
                sx={{ display: 'flex', alignItems: 'center', height: "2.5rem", backgroundColor: main, boxShadow: 'none', borderRadius: { sm: '10px', xs: '44px' } }}
            >
                <InputBase
                    sx={{ ml: { sm: 1, xs: 2 }, flex: 1, color: textbg }}
                    placeholder='What do you want to share today?'
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
            </Paper>
        </Box>
    )
}

export default InputBar

