import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import UserAvatar from 'components/widget/UserAvatar';
import { useTheme } from '@emotion/react';

const UserWidget = () => {

    const theme = useTheme()
    const alt = theme.palette.background.alt
    // const text = theme.palette.neutral.dark
    // const dark = theme.palette.primary.dark
 
    return (
        <Box sx={{
            width: { lg: '12rem', md: '9rem' },
            backgroundColor: { md: alt, sm: 'transparent' },
            borderRadius: '10px',
            display: "flex",
            alignItems: 'center',
            justifyContent: 'flex-start',
            height: '3.8rem',
            paddingLeft: { lg: '1rem', md: '1rem', sm: '0px', xs: '0px' },
            gap: 1,
            margin: '0rem 1rem 1rem 1rem'
        }}>
            <Box>
                <UserAvatar sidebar={true}/>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: '500', marginBottom: '0' }}>
                    Irin Rose
                </Typography>
                <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: '300', marginBottom: '0' }}>
                    @Irin_Rose
                </Typography>
            </Box>
        </Box>
    )
}

export default UserWidget 
