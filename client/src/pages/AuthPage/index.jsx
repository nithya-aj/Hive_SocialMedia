import { Box, Typography } from '@mui/material'
import React from 'react'

const AuthPage = () => {
    return (
        <Box sx={{ background: 'linear-gradient(53deg, rgba(249,129,16,1) 0%, rgba(156,165,247,1) 100%)', height: '100vh', width: '100%', justifyContent: 'flex-end', display: 'flex' }} >
            <Box sx={{
                width: '60%', height: '100%', borderRadius: "25px 0px 0px 25px",
                overflow: 'hidden', backdropFilter: 'blur(2px)', border: '1px solid rgba(255,255,255,0.125)',
                WebkitBackdropFilter: 'blur(2px)', background: 'rgba(255,255,255,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }} >
                <Typography variant='h3' sx={{ fontWeight: '600', fontFamily: 'Roboto' }} >Getting Started</Typography>
                {/* <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5em',
                        borderRadius: '25px',
                        padding: '0.6em',
                        border: 'none',
                        outline: 'none',
                        color: 'white',
                        backgroundColor: 'inherit',
                        boxShadow: 'inset 2px 5px 10px rgb(5, 5, 5)',
                    }}
                >
                    <input
                        id="username"
                        variant="outlined"
                        margin="none"
                        style={{ width: '100%', height: '100%', outline: 'none', background: 'transparent', border: 'none' }}
                        InputProps={{ sx: { backgroundColor: 'none', border: 'none', outline: 'none', color: 'red', width: '100%', height: '100%' } }}
                    />
                </Box> */}
            </Box>
        </Box>
    )
}

export default AuthPage