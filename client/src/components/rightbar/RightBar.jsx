import { Avatar, Box, Divider, IconButton, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FlexCenter from 'components/widget/FlexCenter';
import SearchBar from 'components/widget/SearchBar';
import { useTheme } from '@emotion/react';


function RightBar() {

    const theme = useTheme()
    const main = theme.palette.background.main
    const alt = theme.palette.background.alt
    const dark = theme.palette.neutral.dark
    const mediumMain = theme.palette.neutral.mediumMain
    const medium = theme.palette.neutral.medium
    const light = theme.palette.neutral.light
    const textMain = theme.palette.neutral.main
    const fontSm = theme.palette.neutral.fontSm

    return (
        <Box sx={{ display: 'flex', gap: '0.8rem', flexDirection: 'column', height: '100%', pb: '0.5rem', px: '0.8rem' }}>
            <Box >
                <SearchBar placeholder={'Search users...'} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <Typography variant='h5' sx={{ color: mediumMain }}>Message</Typography>
                    <Typography variant='caption' sx={{ color: medium, display: 'flex', alignSelf: 'flex-end' }}>See All</Typography>
                </Box>
                <FlexCenter>
                    <Divider sx={{ height: '1px', width: '100%', backgroundColor: main }} />
                </FlexCenter>
            </Box>
            <Box sx={{ overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', p: '0.8rem 0.4rem', ":hover": { backgroundColor: alt, borderRadius: '10px' } }}>
                    <Avatar aria-label="avatar" sx={{ height: '2.3rem', width: '2.3rem', backgroundColor: light, color: textMain, }}>
                        R
                    </Avatar>
                    <Box sx={{
                        overflow: 'hidden', display: 'inline-block',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        color: medium
                    }}>
                        <Typography sx={{ fontSize: '0.75rem', color: dark }}>Alex</Typography>
                        <Typography variant="caption" noWrap sx={{ color: medium }} >
                            Can you please share your latest work on react, I want to check something...
                        </Typography>
                    </Box>
                    <IconButton aria-label="settings">
                        <MoreVertIcon sx={{ color: fontSm }} />
                    </IconButton>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', p: '0.8rem 0.4rem', ":hover": { backgroundColor: alt, borderRadius: '10px' } }}>
                    <Avatar aria-label="avatar" sx={{ height: '2.3rem', width: '2.3rem', backgroundColor: light, color: textMain, }}>
                        R
                    </Avatar>
                    <Box sx={{
                        overflow: 'hidden', display: 'inline-block',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        color: medium
                    }}>
                        <Typography sx={{ fontSize: '0.75rem', color: dark }}>Alex</Typography>
                        <Typography variant="caption" noWrap sx={{ color: medium }} >
                            Can you please share your latest work on react, I want to check something...
                        </Typography>
                    </Box>
                    <IconButton aria-label="settings">
                        <MoreVertIcon sx={{ color: fontSm }} />
                    </IconButton>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', p: '0.8rem 0.4rem', ":hover": { backgroundColor: alt, borderRadius: '10px' } }}>
                    <Avatar aria-label="avatar" sx={{ height: '2.3rem', width: '2.3rem', backgroundColor: light, color: textMain, }}>
                        R
                    </Avatar>
                    <Box sx={{
                        overflow: 'hidden', display: 'inline-block',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        color: medium
                    }}>
                        <Typography sx={{ fontSize: '0.75rem', color: dark }}>Alex</Typography>
                        <Typography variant="caption" noWrap sx={{ color: medium }} >
                            Can you please share your latest work on react, I want to check something...
                        </Typography>
                    </Box>
                    <IconButton aria-label="settings">
                        <MoreVertIcon sx={{ color: fontSm }} />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    )
}

export default RightBar
