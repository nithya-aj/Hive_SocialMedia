import { useTheme } from '@emotion/react';
import React from 'react'
import register from 'assets/register.png'
import logo from 'assets/logo3.png'
import './style.css'
import { Box, TextField, Typography } from '@mui/material';

const AuthPage = () => {
    return (
        <Box sx={{
            background: 'linear-gradient(0deg, #2b2f77 0%, #141852 50%, #070b34 100%)',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            color: 'white'
        }} >
            <div class="area" >
                <ul class="circles">
                    <img src={logo} alt="" />
                    <img src={logo} alt="" />
                    <img src={logo} alt="" />
                    <img src={logo} alt="" />
                    <img src={logo} alt="" />
                    <img src={logo} alt="" />
                    <img src={logo} alt="" />
                    <img src={logo} alt="" />
                    <img src={logo} alt="" />
                    <img src={logo} alt="" />
                </ul>
            </div >
            <Box sx={{
                width: '60%', height: '80%', borderRadius: "25px",
                overflow: 'hidden',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', p: '10rem',
                background: 'rgba(255,255,255,0.1)', WebkitBackdropFilter: 'blur(3px)', backdropFilter: 'blur(3px)', border: '1px solid rgba(255,255,255,0.05)',
                color: 'white'
            }} >
                <Box sx={{
                    bgcolor: 'white', borderRadius: '10px', boxShadow: "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
                    position: 'relative',
                    overflow: 'hidden',
                    width: '678px',
                    maxWidth: '100%',
                    minHeight: '400px'
                }} >

                </Box>
            </Box>
        </Box >
    )
}

export default AuthPage