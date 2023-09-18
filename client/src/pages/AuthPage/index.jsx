import { useTheme } from '@emotion/react';
import React from 'react'
import register from 'assets/register.png'
import logo from 'assets/logo3.png'
import './style.css'
import { Box, TextField, Typography } from '@mui/material';

const AuthPage = () => {
    return (
        <Box sx={{ background: 'linear-gradient(0deg, #2b2f77 0%, #141852 50%, #070b34 100%)', height: '100%', width: '100%', justifyContent: 'flex-end', display: 'flex', backgroundRepeat: 'no-repeat', position: 'relative', color: 'white' }} >
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
            {/* <img src={register} alt="" style={{ width: '35rem', height: '35rem', position: "absolute", left: '8rem', bottom: '3rem', zIndex: '999' }} /> */}
            <Box sx={{
                width: '60%', height: '100%', borderRadius: "25px 0px 0px 25px",
                overflow: 'hidden',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', p: '10rem',
                background: 'rgba(255,255,255,0.1)', WebkitBackdropFilter: 'blur(3px)', backdropFilter: 'blur(3px)', border: '1px solid rgba(255,255,255,0.05)',
                color: 'white'
            }} >
                <Box sx={{ p: '2rem', width: '100%', display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', color: 'white' }}>
                        <Typography variant='h3' sx={{ fontWeight: '600', fontFamily: 'Roboto' }} >Getting Started</Typography>
                        <Typography variant='body1' >Create an account to continue and connect with the people</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, width: '100%', height: '3rem', color: 'white' }} >
                        <TextField placeholder='Your Email' id="outlined-basic" InputLabelProps={{
                            shrink: false,
                        }} sx={{
                            width: '100%', ".css-lz97zz-MuiInputBase-root-MuiOutlinedInput-root": {
                                color: 'white'
                            }
                        }} />
                        <TextField placeholder='Your Email' id="outlined" InputLabelProps={{
                            shrink: false,
                        }} sx={{
                            width: '100%', ".css-lz97zz-MuiInputBase-root-MuiOutlinedInput-root": {
                                color: 'white'
                            }
                        }} />
                    </Box>
                    <TextField placeholder='Your Email' id="outlined" InputLabelProps={{
                        shrink: false,
                    }} sx={{
                        width: '100%', ".css-lz97zz-MuiInputBase-root-MuiOutlinedInput-root": {
                            color: 'white'
                        }
                    }} />
                    <TextField placeholder='Create Password' id="outlined-basic" InputLabelProps={{
                        shrink: false,
                    }} sx={{
                        width: '100%', ".css-lz97zz-MuiInputBase-root-MuiOutlinedInput-root": {
                            color: 'white'
                        }
                    }} />
                </Box>
            </Box>
        </Box >
    )
}

export default AuthPage