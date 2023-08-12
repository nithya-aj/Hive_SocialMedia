import { useTheme } from '@emotion/react'
import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/material';
import { HiMoon, HiSun } from "react-icons/hi2";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { setMode } from 'state';
import { motion } from 'framer-motion';

const NavRight = () => {

    const theme = useTheme()
    const main = theme.palette.neutral.main
    const dispatch = useDispatch()


    return ( 
        <Box component={motion.div} initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            sx={{ width: '100%', p: '0rem 0.5rem 0rem 1rem', display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'flex-end' }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {theme.palette.mode === 'dark' ? (
                    <Box component={motion.div} whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }} sx={{ display: 'flex', alignItems: 'center' }} onClick={() => dispatch(setMode())}> <HiSun style={{ fontSize: '1.5rem', cursor: 'pointer', color: main }} /> </Box>
                ) : (
                    <Box component={motion.div} whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }} sx={{ display: 'flex', alignItems: 'center' }} onClick={() => dispatch(setMode())}> <HiMoon style={{ fontSize: '1.5rem', cursor: 'pointer', color: main }} /> </Box>
                )}
                <Box component={motion.div} whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }} sx={{ display: 'flex', alignItems: 'center' }}><BiSolidMessageSquareDetail style={{ fontSize: '1.5rem', color: main, cursor: 'pointer' }} /></Box>
                <Box component={motion.div} whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }} sx={{ display: 'flex', alignItems: 'center' }}><IoNotifications style={{ fontSize: '1.5rem', color: main, cursor: 'pointer' }} /></Box>
            </Box>
            <Box component={motion.div} whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }} sx={{ display: 'flex', alignItems: 'center' }}> <Avatar sx={{ height: '2rem', width: '2rem', cursor: 'pointer', background: "linear-gradient(90deg, rgba(156,165,247,1) 29%, rgba(249,129,16,1) 100%)" }}>H</Avatar></Box>
        </Box>
    )
}

export default NavRight



