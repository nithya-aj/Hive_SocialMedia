import { Avatar, Box, Divider, IconButton, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FlexCenter from 'components/widget/FlexCenter';
import SearchBar from 'components/widget/SearchBar';


function RightBar() {
    return (
        <Box sx={{ display: 'flex', gap: '1rem', flexDirection: 'column', height: '100%', pb: '1rem' }}>
            <Box sx={{ px: '0.8rem' }}>
                <SearchBar placeholder={'Search users...'} />
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: '1rem',
            }}>
                <Typography variant='h5'>Message</Typography>
                <Typography variant='caption'>See All</Typography>
            </Box>
            <FlexCenter>
                <Divider sx={{ height: '1px', width: '90%' }} />
            </FlexCenter>
            <Box sx={{ overflow: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', p: '0 0.8rem' }}>
                    <Avatar aria-label="avatar">
                        R
                    </Avatar>
                    <Box sx={{
                        overflow: 'hidden', display: 'inline-block',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                    }}>
                        <Typography sx={{ fontSize: '0.75rem' }}>Alex</Typography>
                        <Typography variant="caption" noWrap >
                            Can you please share your latest work on react, I want to check something...
                        </Typography>
                    </Box>
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', p: '0 0.8rem' }}>
                    <Avatar aria-label="avatar">
                        R
                    </Avatar>
                    <Box sx={{
                        overflow: 'hidden', display: 'inline-block',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                    }}>
                        <Typography sx={{ fontSize: '0.75rem' }}>Alex</Typography>
                        <Typography variant="caption" noWrap >
                            Can you please share your latest work on react, I want to check something...
                        </Typography>
                    </Box>
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', p: '0 0.8rem' }}>
                    <Avatar aria-label="avatar">
                        R
                    </Avatar>
                    <Box sx={{
                        overflow: 'hidden', display: 'inline-block',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                    }}>
                        <Typography sx={{ fontSize: '0.75rem' }}>Alex</Typography>
                        <Typography variant="caption" noWrap >
                            Can you please share your latest work on react, I want to check something...
                        </Typography>
                    </Box>
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', p: '0 0.8rem' }}>
                    <Avatar aria-label="avatar">
                        R
                    </Avatar>
                    <Box sx={{
                        overflow: 'hidden', display: 'inline-block',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                    }}>
                        <Typography sx={{ fontSize: '0.75rem' }}>Alex</Typography>
                        <Typography variant="caption" noWrap >
                            Can you please share your latest work on react, I want to check something...
                        </Typography>
                    </Box>
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', p: '0 0.8rem' }}>
                    <Avatar aria-label="avatar">
                        R
                    </Avatar>
                    <Box sx={{
                        overflow: 'hidden', display: 'inline-block',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                    }}>
                        <Typography sx={{ fontSize: '0.75rem' }}>Alex</Typography>
                        <Typography variant="caption" noWrap >
                            Can you please share your latest work on react, I want to check something...
                        </Typography>
                    </Box>
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    )
}

export default RightBar
