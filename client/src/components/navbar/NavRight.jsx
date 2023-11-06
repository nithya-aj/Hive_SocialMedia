import { useTheme } from '@emotion/react'
import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Box, Menu, MenuItem } from '@mui/material';
import { HiMoon, HiSun } from "react-icons/hi2";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Fade from '@mui/material/Fade';
import { useNavigate } from 'react-router-dom';
import { setMode } from '../../redux/themeSlice';

const NavRight = () => {

    const theme = useTheme()
    const main = theme.palette.neutral.main
    const dispatch = useDispatch()
    const mode = useSelector((state) => state.theme.mode)
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        localStorage.clear()
        navigate("/auth")
    }

    return (
        <Box component={motion.div} initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            sx={{ width: '100%', p: '0rem 0.5rem 0rem 1rem', display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'flex-end' }}
        >
            {mode === 'dark' ? (
                <Box component={motion.div} whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }} sx={{ display: 'flex', alignItems: 'center' }} onClick={() => dispatch(setMode())}> <HiSun style={{ fontSize: '1.5rem', cursor: 'pointer', color: main }} /> </Box>
            ) : (
                <Box component={motion.div} whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }} sx={{ display: 'flex', alignItems: 'center' }} onClick={() => dispatch(setMode())}> <HiMoon style={{ fontSize: '1.5rem', cursor: 'pointer', color: main }} /> </Box>
            )}
            <Box component={motion.div} whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }} sx={{ display: 'flex', alignItems: 'center' }}><BiSolidMessageSquareDetail style={{ fontSize: '1.5rem', color: main, cursor: 'pointer' }} /></Box>
            <Box component={motion.div} whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }} sx={{ display: { sm: 'flex', xs: 'none' }, alignItems: 'center' }}><IoNotifications style={{ fontSize: '1.5rem', color: main, cursor: 'pointer' }} /></Box>
            <Box component={motion.div} whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }} sx={{ display: { sm: 'flex', xs: 'none' }, alignItems: 'center' }} aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                <Avatar sx={{ height: '2rem', width: '2rem', cursor: 'pointer', background: "linear-gradient(90deg, rgba(156,165,247,1) 29%, rgba(249,129,16,1) 100%)" }}>H</Avatar>
            </Box>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </Box>
    )
}

export default NavRight