import { useTheme } from '@emotion/react'
import React from 'react'
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/material';
import { IoNotificationsOutline } from "react-icons/io5";
import FlexBetween from '../widget/FlexBetween'

const NavRight = () => {

    const theme = useTheme()

    return (
        <Box sx={{ width: '100%', p: '0rem 0.5rem 0rem 1rem' }}>
            <FlexBetween >
                {theme.palette.mode === 'dark' ? (
                    <RiSunLine style={{ fontSize: '1.5rem', cursor: 'pointer' }} />
                ) : (
                    <RiMoonLine style={{ fontSize: '1.5rem', cursor: 'pointer' }} />
                )}
                <Box sx={{ display: { md: 'flex', lg: 'flex', sm: 'none', xs: 'none' }, cursor: 'pointer' }}>
                    <BiMessageDetail style={{ fontSize: '1.5rem' }} />
                </Box>
                <Box sx={{ display: { md: 'flex', lg: 'flex', sm: 'none', xs: 'none' }, cursor: 'pointer' }}>
                    <IoNotificationsOutline style={{ fontSize: '1.5rem' }} />
                </Box>
                <Avatar sx={{ height: '2rem', width: '2rem', cursor: 'pointer' }}>H</Avatar>
            </FlexBetween>
        </Box>
    )
}

export default NavRight



