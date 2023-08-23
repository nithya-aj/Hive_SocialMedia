import { useTheme } from '@emotion/react';
import { Box, Button, Card, CardActions, CardMedia, Typography } from '@mui/material'
import UserAvatar from 'components/widget/UserAvatar'
import React from 'react'
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { HiAtSymbol } from "react-icons/hi";
import { HiBuildingOffice } from "react-icons/hi2";

const ProfileCard = () => {

    const theme = useTheme() 
    const darkbg = theme.palette.background.darkbg
    const main = theme.palette.neutral.main
    const fontSm = theme.palette.neutral.fontSm

    return (
        <Card sx={{ borderRadius: '10px', backgroundColor: darkbg, boxShadow: 'none' }}>
            <Box sx={{ height: '6rem', bgcolor: fontSm }}>

            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, p: '1rem', color: main }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <HiAtSymbol />
                    <Typography sx={{ width: '70%' }}>rose_53</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <MdEmail />
                    <Typography sx={{ width: '70%' }}>rose@gmail.com</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <HiBuildingOffice />
                    <Typography sx={{ width: '70%' }}>Ernakulam</Typography>
                </Box>
            </Box>
        </Card>
    )
}

export default ProfileCard