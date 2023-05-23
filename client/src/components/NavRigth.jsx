import { useTheme } from '@emotion/react'
import React from 'react'
import FlexBetween from 'wasted/components_old/FlexBetween';
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/material';
import { IoNotificationsOutline } from "react-icons/io5";

const NavRight = () => {

    const theme = useTheme()

    return (
        <Box sx={{ width: '100%', p: '0rem 0.5rem 0rem 1rem' }}>
            <FlexBetween>
                {theme.palette.mode === 'dark' ? (
                    <RiSunLine style={{ fontSize: '1.5rem' }} />
                ) : (
                    <RiMoonLine style={{ fontSize: '1.5rem' }} />
                )}
                <Box sx={{ display: { md: 'flex', lg: 'flex', sm: 'none', xs: 'none' } }}>
                    <BiMessageDetail style={{ fontSize: '1.5rem' }} />
                </Box>
                <Box sx={{ display: { md: 'flex', lg: 'flex', sm: 'none', xs: 'none' } }}>
                    <IoNotificationsOutline style={{ fontSize: '1.5rem' }} />
                </Box>
                <Avatar sx={{ height: '2rem', width: '2rem' }}>H</Avatar>
            </FlexBetween>
        </Box>
    )
}

export default NavRight



