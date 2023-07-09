import { Avatar, Box, Card, CardHeader, Divider, IconButton, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FlexCenter from 'components/widget/FlexCenter';

const FriendsReq = () => {
    return (
        <Card sx={{ maxWidth: 345, borderRadius: '10px' }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: '1rem',
                mt: '1rem'
            }}>
                <Typography variant='h5'>Friend Request</Typography>
                <Typography variant='caption'>See All</Typography>
            </Box>
            <FlexCenter>
                <Divider sx={{ height: '1px', width: '90%', mt:'10px' }} />
            </FlexCenter>
            <CardHeader
                avatar={
                    <Avatar aria-label="avatar">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Shajie"
                subheader="150 mutual friends"
            />
            <CardHeader
                avatar={
                    <Avatar aria-label="avatar">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Shajie"
                subheader="150 mutual friends"
            />
            <CardHeader
                avatar={
                    <Avatar aria-label="avatar">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Shajie"
                subheader="150 mutual friends"
            />
        </Card>
    )
}

export default FriendsReq