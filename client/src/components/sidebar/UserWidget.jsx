import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import UserAvatar from 'components/widget/UserAvatar';
import { useTheme } from '@emotion/react';

const UserWidget = () => {

    const theme = useTheme()
    const alt = theme.palette.background.alt
    const light = theme.palette.neutral.light
    const mediumMain = theme.palette.mediumMain
    const medium = theme.palette.medium

    return (
        <Box sx={{
            border: `1px solid ${light}`,
            width: { lg: '80%', md: '92%' },
            backgroundColor: { md: alt, sm: 'transparent' },
            borderRadius: '10px',
            display: "flex",
            alignItems: 'center',
            justifyContent: 'flex-start',
            height: '3.8rem',
            paddingLeft: { lg: '1rem', md: '1rem', sm: '0px', xs: '0px' },
            gap: 1,
        }}>
            <Box>
                <UserAvatar sidebar={true} />
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: '600', marginBottom: '0', color: mediumMain }}>
                    Irin Rose
                </Typography>
                <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: '300', marginBottom: '0', color: medium }}>
                    @Irin_Rose
                </Typography>
            </Box>
        </Box>
    )
}

export default UserWidget 
