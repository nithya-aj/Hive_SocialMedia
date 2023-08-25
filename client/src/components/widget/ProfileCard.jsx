import { useTheme } from '@emotion/react';
import { Box, Card, IconButton, Typography } from '@mui/material'
import React from 'react'
import { MdEmail } from "react-icons/md";
import { HiAtSymbol } from "react-icons/hi";
import { HiBuildingOffice } from "react-icons/hi2";
import { MdCake, MdEdit } from "react-icons/md";
import { FaUserTag, FaUser } from "react-icons/fa";
import FlexCenter from './FlexCenter';


const ProfileCard = () => {

    const theme = useTheme()
    const darkbg = theme.palette.background.darkbg
    const main = theme.palette.neutral.main
    const light = theme.palette.neutral.light

    return (
        <Card sx={{ borderRadius: '10px', backgroundColor: darkbg, boxShadow: 'none' }}>
            <FlexCenter sx={{ height: '4rem', bgcolor: light, position: 'relative' }}>
                <Typography variant='h4'>Irin Rose</Typography>
                <Box sx={{
                    height: "2.1rem", width: '2.1rem', backgroundColor: light, position: 'absolute', top: '3.2rem', right: '1rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: `2px solid ${darkbg}`
                }}>
                    <IconButton ><MdEdit size={'1rem'} style={{ color: darkbg }} /></IconButton>
                </Box> 
            </FlexCenter>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, p: '1rem', color: main }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <HiAtSymbol />
                    <Typography >rose_53</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <FaUser />
                    <Typography >Irin Rose</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <FaUserTag />
                    <Typography >UI/UX designer </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <MdEmail />
                    <Typography >rose@gmail.com</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <HiBuildingOffice />
                    <Typography >Ernakulam</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <MdCake />
                    <Typography >Feb 21 2002</Typography>
                </Box>

            </Box>
        </Card>
    )
}

export default ProfileCard