import { useTheme } from '@emotion/react'
import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/material';
import { HiMoon, HiSun } from "react-icons/hi2";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
const NavRight = () => {

    const theme = useTheme()
    const main = theme.palette.neutral.main

    return (
        <Box sx={{ width: '100%', p: '0rem 0.5rem 0rem 1rem', display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {theme.palette.mode === 'dark' ? (
                    <HiSun style={{ fontSize: '1.5rem', cursor: 'pointer', color: main }} />
                ) : (
                    <HiMoon style={{ fontSize: '1.5rem', cursor: 'pointer', color: main }} />
                )}
                <BiSolidMessageSquareDetail style={{ fontSize: '1.5rem', color: main, cursor: 'pointer' }} />
                <IoNotifications style={{ fontSize: '1.5rem', color: main, cursor: 'pointer' }} />
            </Box>
            <Avatar sx={{ height: '2rem', width: '2rem', cursor: 'pointer', background: "linear-gradient(0deg, rgba(156,165,247,1)  13%, rgba(15,158,183,1) 75%)" }}>H</Avatar>
        </Box>
    )
}

export default NavRight



