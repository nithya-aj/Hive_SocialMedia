import { Box, Typography } from '@mui/material'
import React from 'react'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useTheme } from '@emotion/react';
import { IoSettingsOutline } from "react-icons/io5";


const Setting = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const theme = useTheme()
    const alt = theme.palette.background.alt

    return (
        <Box sx={{ width: '94%' }}>
            <Stack>
                <Item sx={{
                    height: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: { lg: 'flex-start', md: 'flex-start', sm: 'flex-start', xs: 'center' },
                    background: 'transparent', boxShadow: 'none', borderRadius: '0px 10px 10px 0px', cursor: 'pointer', paddingLeft:'1rem',
                    ':hover': {
                        backgroundColor: alt
                    }
                }}>
                    <Box style={{ fontSize: 'x-large', marginLeft: '6px', display: 'flex', alignItems: 'center' }}>
                        <IoSettingsOutline />
                    </Box>
                    <Typography style={{ marginLeft: '10px' }} sx={{ display: { lg: 'block', md: 'block', sm: 'block', xs: 'none' } }}>Settings</Typography>
                </Item>
            </Stack>
        </Box>
    )
}

export default Setting