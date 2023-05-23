import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';

const SearchBar = ({ placeholder, width }) => {

    const theme = useTheme()
    const mediumMain = theme.palette.neutral.mediumMain
    const alt = theme.palette.background.alt

    return (
        <Box sx={{ width}}>
            <Paper
                component="form"
                sx={{ display: 'flex', alignItems: 'center', height: "2rem", backgroundColor: alt, boxShadow: 'none', borderRadius:'10px' }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1, color: mediumMain }}
                    placeholder={placeholder}
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Box>
    )
}

export default SearchBar

