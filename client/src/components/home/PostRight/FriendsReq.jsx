import { Avatar, Box, Card, CardHeader, Divider, IconButton, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FlexCenter from 'components/widget/FlexCenter';
import { useTheme } from '@emotion/react';

const FriendsReq = () => {
    const theme = useTheme()
    const darkbg = theme.palette.background.darkbg
    const mediumMain = theme.palette.neutral.mediumMain
    const medium = theme.palette.neutral.medium
    const light = theme.palette.neutral.light
    const fontSm = theme.palette.neutral.fontSm
    const textMain = theme.palette.neutral.main

    return (
        <Card sx={{ width: '100%', borderRadius: '10px', backgroundColor: darkbg }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: '1rem',
                mt: '1rem'
            }}>
                <Typography variant='h5' sx={{ color: mediumMain }} >Friend Request</Typography>
                <Typography variant='caption' sx={{ color: medium }}>See All</Typography>
            </Box>
            <FlexCenter>
                <Divider sx={{ height: '1px', width: '90%', mt: '10px' }} />
            </FlexCenter>
            <CardHeader
                avatar={
                    <Avatar aria-label="avatar" sx={{ height: '2.3rem', width: '2.3rem', backgroundColor: light, color: textMain, }}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon sx={{ color: fontSm }} />
                    </IconButton>
                }
                title="Shajie"
                subheader="150 mutual friends"
            />
            <CardHeader
                avatar={
                    <Avatar aria-label="avatar" sx={{ height: '2.3rem', width: '2.3rem', backgroundColor: light, color: textMain, }}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon sx={{ color: fontSm }} />
                    </IconButton>
                }
                title="Shajie"
                subheader="150 mutual friends"
            />
            <CardHeader
                avatar={
                    <Avatar aria-label="avatar" sx={{ height: '2.3rem', width: '2.3rem', backgroundColor: light, color: textMain, }}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon sx={{ color: fontSm }} />
                    </IconButton>
                }
                title="Shajie"
                subheader="150 mutual friends"
            />
        </Card>
    )
}

export default FriendsReq