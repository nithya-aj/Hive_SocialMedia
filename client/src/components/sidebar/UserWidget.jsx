import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import UserAvatar from 'components/widget/UserAvatar';
import { useTheme } from '@emotion/react';

const UserWidget = () => {

    const theme = useTheme()
    const alt = theme.palette.background.alt
    const light = theme.palette.neutral.light
    const main = theme.palette.main
    const medium = theme.palette.medium

    return (
        <Box sx={{
            border: `1px solid ${light}`,
            width: '100%',
            backgroundColor: { md: alt, sm: 'transparent' },
            borderRadius: '10px',
            display: "flex",
            alignItems: 'center',
            height: '3.8rem',
            px: '0.5rem',
            gap: 1,
        }}>
            <Box>
                <UserAvatar sidebar={true} />
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block', width: '70%' } }}>
                <Box sx={{
                    overflow: 'hidden',
                    display: 'inline-block',
                    whiteSpace: 'nowrap',
                    width: '100%',
                    textOverflow: 'ellipsis',
                    color: main
                }}>
                    <Typography noWrap sx={{ fontSize: '1rem', marginBottom: '0', color: main }}>
                        Irin Roseeeeeedfffffffffgggggggggggggggggg
                    </Typography>
                    <Typography noWrap variant="subtitle2" sx={{ fontWeight: '300', marginBottom: '0', color: medium }}>
                        @Irin_Rose
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default UserWidget 
