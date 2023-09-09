import { Avatar, Badge, Box, Divider, Typography } from '@mui/material'
import React from 'react'
import FlexCenter from 'components/widget/FlexCenter';
import SearchBar from 'components/widget/SearchBar';
import { useTheme } from '@emotion/react';
import { TbChecks } from "react-icons/tb";

function RightBar() {

    const theme = useTheme()
    const main = theme.palette.background.main
    const alt = theme.palette.background.alt
    const mediumMain = theme.palette.neutral.mediumMain
    const medium = theme.palette.neutral.medium
    const light = theme.palette.neutral.light
    const textMain = theme.palette.neutral.main
    const fontSm = theme.palette.neutral.fontSm
    const red = theme.palette.neutral.red

    return (
        <Box sx={{ display: 'flex', gap: '0.8rem', flexDirection: 'column', height: '100%', pb: '0.5rem', px: '0.8rem', p: '1rem 0.8rem 0.5rem 0.8rem' }}>
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
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ":hover": { backgroundColor: alt, borderRadius: '10px' } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', p: '0.8rem 0.4rem', width: '84%' }}>
                        <Avatar aria-label="avatar" sx={{ height: '2.3rem', width: '2.3rem', backgroundColor: light, color: textMain, }}>
                            R
                        </Avatar>
                        <Box sx={{
                            overflow: 'hidden', display: 'inline-block',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            color: medium
                        }}>
                            <Typography sx={{ fontSize: '0.75rem', color: medium }}>Alex</Typography>
                            <Typography variant="caption" noWrap sx={{ color: medium }} >
                                Can you please share your latest work on react, I want to check something...
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                        <Typography variant='subtitle2' sx={{ fontSize: '8px', color: fontSm }}>2 min</Typography>
                        <Badge badgeContent={34} size="small"
                            sx={{
                                ".css-1c5f416-MuiBadge-badge": {
                                    minWidth: '20px',
                                    padding: '0 4px',
                                    height: '12px',
                                    bgcolor: red,
                                    fontSize: '8px'
                                }
                            }}
                        />
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ":hover": { backgroundColor: alt, borderRadius: '10px' } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', p: '0.8rem 0.4rem', width: '84%' }}>
                        <Avatar aria-label="avatar" sx={{ height: '2.3rem', width: '2.3rem', backgroundColor: light, color: textMain, }}>
                            R
                        </Avatar>
                        <Box sx={{
                            overflow: 'hidden', display: 'inline-block',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            color: medium
                        }}>
                            <Typography sx={{ fontSize: '0.75rem', color: medium }}>Alex</Typography>
                            <Typography variant="caption" noWrap sx={{ color: medium }} >
                                Can you please share your latest work on react, I want to check something...
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                        <Typography variant='subtitle2' sx={{ fontSize: '8px', color: fontSm }}>2 min</Typography>
                        <TbChecks style={{ color: fontSm }} />
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ":hover": { backgroundColor: alt, borderRadius: '10px' } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', p: '0.8rem 0.4rem', width: '84%' }}>
                        <Avatar aria-label="avatar" sx={{ height: '2.3rem', width: '2.3rem', backgroundColor: light, color: textMain, }}>
                            R
                        </Avatar>
                        <Box sx={{
                            overflow: 'hidden', display: 'inline-block',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            color: medium
                        }}>
                            <Typography sx={{ fontSize: '0.75rem', color: medium }}>Alex</Typography>
                            <Typography variant="caption" noWrap sx={{ color: medium }} >
                                Can you please share your latest work on react, I want to check something...
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                        <Typography variant='subtitle2' sx={{ fontSize: '8px', color: fontSm }}>2 min</Typography>
                        <TbChecks style={{ color: fontSm }} />
                    </Box>
                </Box>
            </Box>
        </Box> 
    )
}

export default RightBar
