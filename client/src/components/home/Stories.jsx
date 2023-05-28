import { Avatar, Box, Card, Typography } from '@mui/material'
import React from 'react'
import { HiPlus } from "react-icons/hi";
import { styled } from '@mui/system'
import { useTheme } from '@emotion/react';


const StyledBox = styled(Box)(({ theme }) => ({
    height: '8rem',
    backgroundImage: 'url(https://picsum.photos/seed/picsum/200/300)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    fontSize: '0.75rem',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '10px',
    '&::before': {
        content: '""',
        display: 'block',
        width: '100%',
        height: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.75))',
    },
}));

const Story = () => {

    const theme = useTheme()
    const main = theme.palette.background.main

    return (
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.3 }} style={{ overflowX: 'auto' }}>
                <Card sx={{ minWidth: { xs: 70, lg: 90 }, height: '8rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', backgroundColor: main }}>
                    <Avatar sx={{ height: '2rem', width: '2rem' }}>
                        <HiPlus />
                    </Avatar>
                    <Typography variant='caption' sx={{ zIndex: '3', textAlign: 'center' }}>
                        Create your <br /> story
                    </Typography>
                </Card>

                <StyledBox sx={{ minWidth: { xs: 70, lg: 90 } }}>
                    <Avatar
                        sx={{
                            height: '2rem',
                            width: '2rem',
                            alignSelf: 'start',
                            border: `2px solid`,
                            position: 'absolute',
                            left: '0.3rem',
                            top: '0.2rem',
                        }}
                    >
                        H
                    </Avatar>
                    <Typography sx={{ zIndex: '3', position: 'absolute', top: '6.4rem' }}>
                        nithya
                    </Typography>
                </StyledBox>


                <StyledBox sx={{ minWidth: { xs: 70, lg: 90 } }}>
                    <Avatar
                        sx={{
                            height: '2rem',
                            width: '2rem',
                            alignSelf: 'start',
                            border: `2px solid`,
                            position: 'absolute',
                            left: '0.3rem',
                            top: '0.2rem',
                        }}
                    >
                        H
                    </Avatar>
                    <Typography sx={{ zIndex: '3', position: 'absolute', top: '6.4rem' }}>
                        nithya
                    </Typography>
                </StyledBox>


                <StyledBox sx={{ minWidth: { xs: 70, lg: 90 } }}>
                    <Avatar
                        sx={{
                            height: '2rem',
                            width: '2rem',
                            alignSelf: 'start',
                            border: `2px solid`,
                            position: 'absolute',
                            left: '0.3rem',
                            top: '0.2rem',
                        }}
                    >
                        H
                    </Avatar>
                    <Typography sx={{ zIndex: '3', position: 'absolute', top: '6.4rem' }}>
                        nithya
                    </Typography>
                </StyledBox>

                <StyledBox sx={{ minWidth: { xs: 70, lg: 90 } }}>
                    <Avatar
                        sx={{
                            height: '2rem',
                            width: '2rem',
                            alignSelf: 'start',
                            border: `2px solid`,
                            position: 'absolute',
                            left: '0.3rem',
                            top: '0.2rem',
                        }}
                    >
                        H
                    </Avatar>
                    <Typography sx={{ zIndex: '3', position: 'absolute', top: '6.4rem' }}>
                        nithya
                    </Typography>
                </StyledBox>

                <StyledBox sx={{ minWidth: { xs: 70, lg: 90 } }}>
                    <Avatar
                        sx={{
                            height: '2rem',
                            width: '2rem',
                            alignSelf: 'start',
                            border: `2px solid`,
                            position: 'absolute',
                            left: '0.3rem',
                            top: '0.2rem',
                        }}
                    >
                        H
                    </Avatar>
                    <Typography sx={{ zIndex: '3', position: 'absolute', top: '6.4rem' }}>
                        nithya
                    </Typography>
                </StyledBox>

                <StyledBox sx={{ minWidth: { xs: 70, lg: 90 } }}>
                    <Avatar
                        sx={{
                            height: '2rem',
                            width: '2rem',
                            alignSelf: 'start',
                            border: `2px solid`,
                            position: 'absolute',
                            left: '0.3rem',
                            top: '0.2rem',
                        }}
                    >
                        H
                    </Avatar>
                    <Typography sx={{ zIndex: '3', position: 'absolute', top: '6.4rem' }}>
                        nithya
                    </Typography>
                </StyledBox>


                <StyledBox sx={{ minWidth: { xs: 70, lg: 90 } }}>
                    <Avatar
                        sx={{
                            height: '2rem',
                            width: '2rem',
                            alignSelf: 'start',
                            border: `2px solid`,
                            position: 'absolute',
                            left: '0.3rem',
                            top: '0.2rem',
                        }}
                    >
                        H
                    </Avatar>
                    <Typography sx={{ zIndex: '3', position: 'absolute', top: '6.4rem' }}>
                        nithya
                    </Typography>
                </StyledBox>

                <StyledBox sx={{ minWidth: { xs: 70, lg: 90 } }}>
                    <Avatar
                        sx={{
                            height: '2rem',
                            width: '2rem',
                            alignSelf: 'start',
                            border: `2px solid`,
                            position: 'absolute',
                            left: '0.3rem',
                            top: '0.2rem',
                        }}
                    >
                        H
                    </Avatar>
                    <Typography sx={{ zIndex: '3', position: 'absolute', top: '6.4rem' }}>
                        nithya
                    </Typography>
                </StyledBox>
            </Box >
        </Box >
    )
}

export default Story