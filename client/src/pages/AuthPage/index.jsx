import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material'
import React from 'react'
import register from 'assets/register.png'

const AuthPage = () => {
    const theme = useTheme();
    const medium = theme.palette.neutral.medium
    const mediumMain = theme.palette.neutral.mediumMain
    return (
        <Box sx={{ background: 'linear-gradient(46deg, #070b34 0%, #141852 50%, #2b2f77 100%)', height: '100vh', width: '100%', justifyContent: 'flex-end', display: 'flex', backgroundRepeat: 'no-repeat', position: 'relative' }} >
            <img src={register} alt="" style={{ width: '35rem', height: '35rem', position: "absolute", left: '8rem', bottom: '3rem', zIndex: '999' }} />
            <Box sx={{
                width: '60%', height: '100%', borderRadius: "25px 0px 0px 25px",
                overflow: 'hidden',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', p: '10rem'
            }} >
                <Box sx={{ p: '1rem', width: '100%', display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', color: mediumMain }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <Typography variant='h3' sx={{ fontWeight: '600', fontFamily: 'Roboto' }} >Getting Started</Typography>
                        <Typography variant='body1' >Create an account to continue and connect with the people</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, width: '100%', height: '3rem' }} >
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5em',
                                borderRadius: '4px',
                                border: `1px solid ${medium}`,
                                outline: 'none',
                                color: medium,
                                backgroundColor: 'inherit',
                            }}
                        >
                            <input
                                id="name"
                                placeholder='Your name'
                                style={{ width: '100%', height: '50px', outline: 'none', background: 'transparent', border: 'none', backgroundColor: 'none', padding: '1rem', borderRadius: '4px' }}
                            />
                        </Box>
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5em',
                                borderRadius: '4px',
                                border: `1px solid ${medium}`,
                                outline: 'none',
                                color: medium,
                                backgroundColor: 'inherit',
                            }}
                        >
                            <input
                                id="username"
                                placeholder='User name'
                                style={{ width: '100%', height: '100%', outline: 'none', background: 'transparent', border: 'none', backgroundColor: 'none', padding: '1rem', borderRadius: '4px' }}
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5em',
                            borderRadius: '4px',
                            border: `1px solid ${medium}`,
                            outline: 'none',
                            color: medium,
                            backgroundColor: 'inherit',
                        }}
                    >
                        <input
                            id="username"
                            placeholder='Your Email'
                            style={{ width: '100%', height: '100%', outline: 'none', background: 'transparent', border: 'none', backgroundColor: 'none', padding: '1rem', borderRadius: '25px' }}
                        />
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5em',
                            borderRadius: '4px',
                            border: `1px solid ${medium}`,
                            outline: 'none',
                            color: medium,
                            backgroundColor: 'inherit',
                        }}
                    >
                        <input
                            id="username"
                            placeholder='Create Password'
                            style={{ width: '100%', height: '100%', outline: 'none', background: 'transparent', border: 'none', backgroundColor: 'none', padding: '1rem', borderRadius: '25px' }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default AuthPage