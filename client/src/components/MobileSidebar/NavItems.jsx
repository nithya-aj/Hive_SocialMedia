import { Box } from '@mui/material'
import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { FaUserPlus, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { motion } from 'framer-motion';

const NavItems = () => {
    const items = [
        {
            name: "Feed",
            icon: AiFillHome,
            link: '/'
        },
        {
            name: "Friends",
            icon: FaUserPlus,
            link: '/friends'
        },
        {
            name: "Messages",
            icon: BiSolidMessageSquareDetail,
            link: '/messages'
        },
        {
            name: "Notifications",
            icon: IoNotifications,
            link: '/notifications'
        },
        {
            name: "Profile",
            icon: FaUser,
            link: '/profile/:id'
        },
        {
            name: "Settings",
            icon: IoMdSettings,
            link: '/settings'
        }
    ]

    const theme = useTheme()
    const main = theme.palette.neutral.main
    const orange = theme.palette.neutral.orange

    return (
        <>
            {
                items.map((item, id) => (
                    <Link to={item.link} style={{ textDecoration: 'none' }} key={id}>
                        <Box component={motion.div} whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }} sx={{ fontSize: '1.5rem', cursor: 'pointer', color: main, ":hover": { color: orange } }}>
                            <item.icon />
                        </Box> 
                    </Link>
                ))
            }
        </>
    )
}

export default NavItems