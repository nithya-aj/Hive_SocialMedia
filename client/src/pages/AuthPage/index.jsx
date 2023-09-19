import { useTheme } from '@emotion/react';
import React, { useState } from 'react'
import register from 'assets/register.png'
import logo from 'assets/logo3.png'
import './style.css'
import { Box, Button, Input, TextField, Typography } from '@mui/material';

const AuthPage = () => {
    const [signIn, setSignIn] = useState(true)
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
            {/* register/signup styles */}
            <Box sx={{
                width: '60%',
                height: '80%',
                borderRadius: "25px",
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                background: 'rgba(255,255,255,0.1)',
                WebkitBackdropFilter: 'blur(3px)',
                backdropFilter: 'blur(3px)', border: '1px solid rgba(255,255,255,0.05)',
                color: 'white'
                // backgroundColor: '#fff',
                // borderRadius: '10px',
                // boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
                // position: 'relative',
                // overflow: 'hidden',
                // wdith: '678px',
                // maxWidth: '100%',
                // minHeight: '400px'
            }} >
                <Box signIn={signIn} sx={{
                    position: 'absolute',
                    top: 0,
                    height: '100%',
                    transition: 'all 0.6s ease-in-out',
                    left: 0,
                    width: '50%',
                    zIndex: signIn ? 5 : 1,
                    transform: signIn ? 'translateX(100%)' : '',
                    opacity: signIn ? 1 : 0,
                }} >
                    <Box component={'form'} sx={{
                        bgcolor: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        p: '0 50px',
                        height: '100%',
                        textAlign: 'center'
                    }} >
                        <Typography variant='h1' sx={{ m: '0', fontWeight: 'bold' }} >Create Account</Typography>
                        <Input sx={{
                            bgcolor: '#eee',
                            border: 'none',
                            p: '12px 15px',
                            m: '8px 0',
                            width: '100%'
                        }} type='text' placeholder='Name' />
                        <Input sx={{
                            bgcolor: '#eee',
                            border: 'none',
                            p: '12px 15px',
                            m: '8px 0',
                            width: '100%'
                        }} type='text' placeholder='Email' />
                        <Input sx={{
                            bgcolor: '#eee',
                            border: 'none',
                            p: '12px 15px',
                            m: '8px 0',
                            width: '100%'
                        }} type='text' placeholder='Password' />
                        <Button sx={{
                            borderRadius: '20px',
                            border: '1px solid #ff4b2b',
                            bgcolor: "#ff4b2b",
                            color: 'white',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            p: '12px 45px',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            transition: 'transform 80ms ease-in',
                            ':active': {
                                transform: 'scale(0.95)'
                            },
                            ':focus': {
                                outline: 'none'
                            }
                        }} >Sign Up</Button>
                    </Box>
                </Box>
                {/* signIn styles */}
                <Box signIn={signIn} sx={{
                    position: 'absolute',
                    top: 0,
                    height: '100%',
                    transition: 'all 0.6s ease-in-out',
                    left: 0,
                    width: '50%',
                    zIndex: signIn ? 2 : 0,
                    transform: signIn ? 'translateX(100%)' : ''
                }} >
                    <Box component={'form'} sx={{
                        bgcolor: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        p: '0 50px',
                        height: '100%',
                        textAlign: 'center'
                    }} >
                        <Typography variant='h1' sx={{ m: '0', fontWeight: 'bold' }} >Sign In</Typography>
                        <Input sx={{
                            bgcolor: '#eee',
                            border: 'none',
                            p: '12px 15px',
                            m: '8px 0',
                            width: '100%'
                        }} type='text' placeholder='Email' />
                        <Input sx={{
                            bgcolor: '#eee',
                            border: 'none',
                            p: '12px 15px',
                            m: '8px 0',
                            width: '100%'
                        }} type='text' placeholder='Password' />
                        <Typography component={'a'} sx={{
                            color: '#333',
                            fontSize: '14px',
                            textDecoration: "none",
                            m: '15px 0'
                        }} >Forgot your password?</Typography>
                        <Button sx={{
                            borderRadius: '20px',
                            border: '1px solid #ff4b2b',
                            bgcolor: "#ff4b2b",
                            color: 'white',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            p: '12px 45px',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            transition: 'transform 80ms ease-in',
                            ':active': {
                                transform: 'scale(0.95)'
                            },
                            ':focus': {
                                outline: 'none'
                            }
                        }} >Sign In</Button>
                    </Box>
                </Box>
                {/* overlay container style */}

                <Box signIn={signIn} sx={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    height: '100%',
                    overflow: 'hidden',
                    transition: 'transform 0.6s ease-in-out',
                    zIndex: 100,
                    transform: signIn ? 'translateX(-100%)' : ''
                }} >
                    <Box signIn={signIn} sx={{
                        bgcolor: '#ff416c',
                        background: "-webkit-linear-gradient(to right, #ff4b2b, #ff416c)",
                        background: 'linear-gradient(to right, #ff4b2b, #ff416c)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: '0 0',
                        color: '#ffffff',
                        position: 'relative',
                        left: '-100%',
                        height: '100%',
                        width: '200%',
                        transform: signIn ? 'translateX(59%)' : 'translateX(0)',
                        transition: 'transform 0.6s ease-in-out'
                    }} >
                        <Box signIn={signIn} sx={{
                            bgcolor: '#ff416c',
                            background: "-webkit-linear-gradient(to right, #ff4b2b, #ff416c)",
                            background: 'linear-gradient(to right, #ff4b2b, #ff416c)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: '0 0',
                            color: '#ffffff',
                            position: 'relative',
                            left: '-100%',
                            height: '100%',
                            width: '200%',
                            transform: signIn ? 'translateX(0)' : 'translateX(-20%)',
                            transition: 'transform 0.6s ease-in-out'
                        }}>
                            <Typography variant='h1' sx={{ m: '0', fontWeight: 'bold' }} >Welcome Back</Typography>
                            <Typography sx={{
                                fontSize: '14px',
                                fontWeight: '100',
                                lineHeight: '20px',
                                letterSpacing: '0.5px',
                                margin: "20px 0 30px"
                            }}>To keep connected with us please login with your personal info</Typography>
                            <Button sx={{
                                bgcolor: 'transparent',
                                borderColor: '#ffffff'
                            }} onClick={() => setSignIn(false)} > Sign In</Button>
                        </Box>
                        <Box signIn={signIn} sx={{
                            background: '#ff416c',
                            background: "-webkit-linear-gradient(to right, #ff4b2b, #ff416c)",
                            background: 'linear-gradient(to right, #ff4b2b, #ff416c)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: '0 0',
                            color: '#ffffff',
                            position: 'relative',
                            left: '-100%',
                            height: '100%',
                            width: '200%',
                            right: 0,
                            transform: signIn ? 'translateX(20%)' : 'translateX(0)',
                            transition: 'transform 0.6s ease-in-out'
                        }}>
                            <Typography variant='h1' sx={{ m: '0', fontWeight: 'bold' }} >Hello, friend</Typography>
                            <Typography sx={{
                                fontSize: '14px',
                                fontWeight: '100',
                                lineHeight: '20px',
                                letterSpacing: '0.5px',
                                margin: "20px 0 30px"
                            }}>Enter Your personal details and start journey with us</Typography>
                            <Button sx={{
                                bgcolor: 'transparent',
                                borderColor: '#ffffff'
                            }} onClick={() => setSignIn(false)} > Sigin Up</Button>
                        </Box>
                    </Box>
                </Box>

            </Box >
        </Box >
    )
}

export default AuthPage