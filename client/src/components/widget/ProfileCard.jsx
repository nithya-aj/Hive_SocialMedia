import { useTheme } from '@emotion/react';
import { Box, Card, Divider, IconButton, Typography } from '@mui/material'
import React from 'react'
import { MdEmail } from "react-icons/md";
import { HiAtSymbol } from "react-icons/hi";
import { HiBuildingOffice } from "react-icons/hi2";
import { MdCake, MdEdit } from "react-icons/md";
import { FaUserTag } from "react-icons/fa";
import FlexCenter from './FlexCenter';


const ProfileCard = () => {

    const theme = useTheme()
    const darkbg = theme.palette.background.darkbg
    const main = theme.palette.neutral.main
    const light = theme.palette.neutral.light

    return (
        <Card sx={{ borderRadius: '10px', backgroundColor: darkbg, boxShadow: 'none' }}>
            <FlexCenter sx={{ bgcolor: light, flexDirection: 'column', p: '1rem 1rem 1.5rem 1rem' }}>
                <Typography variant='h5'>Irin Rose</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%', textAlign: 'center', pt: '0.5rem' }}>
                    <span> <Typography variant='caption'>43</Typography> <br /> <Typography variant='body2'>Following</Typography></span>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <span> <Typography variant='caption'>284</Typography> <br /> <Typography variant='body2'>Followers</Typography> </span>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <span> <Typography variant='caption'>24</Typography> <br /> <Typography variant='body2'>Posts</Typography> </span>
                </Box>
            </FlexCenter>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, p: '1rem', color: main, position: 'relative' }}>
                <Box sx={{
                    height: "2.1rem", width: '2.1rem', backgroundColor: light, position: 'absolute', top: '-1rem', right: '1rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: `2px solid ${darkbg}`
                }}>
                    <IconButton ><MdEdit size={'1rem'} style={{ color: darkbg }} /></IconButton>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <HiAtSymbol />
                    <Typography >rose_53</Typography>
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