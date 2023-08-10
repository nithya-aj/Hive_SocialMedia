import { Avatar, Box, Card, Typography } from '@mui/material'
import React from 'react'
import { HiPlus } from "react-icons/hi";
import { styled } from '@mui/system'
import { useTheme } from '@emotion/react';


const StyledBox = styled(Box)(({ theme }) => ({
    height: '8rem',
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
    const darkbg = theme.palette.background.darkbg
    const orange = theme.palette.neutral.orange
    const light = theme.palette.neutral.light
    const textMain = theme.palette.neutral.main
    const dark = theme.palette.neutral.dark

    return (
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.3 }} style={{ overflowX: 'auto' }}>
                <Card sx={{ minWidth: { xs: 70, lg: 90 }, height: '8rem', display: 'flex', gap: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', backgroundColor: darkbg, boxShadow: 'none' }}>
                    <Avatar sx={{ height: '2rem', width: '2rem', backgroundColor: light, color: textMain }}>
                        <HiPlus />
                    </Avatar>
                    <Typography variant='caption' sx={{ zIndex: '3', textAlign: 'center' }}>
                        Create your <br /> story
                    </Typography>
                </Card>

                {/* <StyledBox sx={{ minWidth: { xs: 70, lg: 90 }, backgroundColor: main }}>
                    <Avatar
                        sx={{
                            height: '2rem',
                            width: '2rem',
                            alignSelf: 'start',
                            border: `2px solid ${orange}`,
                            position: 'absolute',
                            left: '0.3rem',
                            top: '0.2rem',
                            backgroundColor: light,
                            color: textMain
                        }}
                    >
                        <HiPlus />
                    </Avatar>
                    <Typography variant='caption' sx={{ zIndex: '3', textAlign: 'center', position: 'absolute', top: '5.3rem' }}>
                        Create your <br /> story
                    </Typography>
                </StyledBox> */}

                <StyledBox sx={{ minWidth: { xs: 70, lg: 90 }, backgroundImage: 'url(https://source.unsplash.com/featured/300x2011)' }}>
                    <Avatar
                        sx={{
                            height: '2rem',
                            width: '2rem',
                            alignSelf: 'start',
                            border: `2px solid ${orange}`,
                            position: 'absolute',
                            left: '0.3rem',
                            top: '0.2rem',
                            backgroundColor: light,
                            color: textMain,
                        }}
                        src="https://source.unsplash.com/featured/300x197"
                    >
                        H
                    </Avatar>
                    <Typography sx={{ zIndex: '3', position: 'absolute', top: '6.4rem', color: dark }}>
                        nithya
                    </Typography>
                </StyledBox>


                <StyledBox sx={{ minWidth: { xs: 70, lg: 90 }, backgroundImage: 'url(https://source.unsplash.com/featured/300x210)' }}>
                    <Avatar
                        sx={{
                            height: '2rem',
                            width: '2rem',
                            alignSelf: 'start',
                            border: `2px solid ${orange}`,
                            position: 'absolute',
                            left: '0.3rem',
                            top: '0.2rem',
                            backgroundColor: light,
                            color: textMain
                        }}
                        src="https://source.unsplash.com/featured/300x196"
                    >

                    </Avatar>
                    <Typography sx={{ zIndex: '3', position: 'absolute', top: '6.4rem', color: dark }}>
                        nithya
                    </Typography>
                </StyledBox>


                <StyledBox sx={{ minWidth: { xs: 70, lg: 90 }, backgroundImage: 'url(https://source.unsplash.com/featured/300x205)' }}>
                    <Avatar
                        sx={{
                            height: '2rem',
                            width: '2rem',
                            alignSelf: 'start',
                            border: `2px solid ${orange}`,
                            position: 'absolute',
                            left: '0.3rem',
                            top: '0.2rem',
                            backgroundColor: light,
                            color: textMain
                        }}
                        src="https://source.unsplash.com/featured/300x195"
                    >
                        H
                    </Avatar>
                    <Typography sx={{ zIndex: '3', position: 'absolute', top: '6.4rem', color: dark }}>
                        nithya
                    </Typography>
                </StyledBox>

                <StyledBox sx={{ minWidth: { xs: 70, lg: 90 }, backgroundImage: 'url(https://source.unsplash.com/featured/300x203)' }}>
                    <Avatar
                        sx={{
                            height: '2rem',
                            width: '2rem',
                            alignSelf: 'start',
                            border: `2px solid ${orange}`,
                            position: 'absolute',
                            left: '0.3rem',
                            top: '0.2rem',
                            backgroundColor: light,
                            color: textMain
                        }}
                        src="https://source.unsplash.com/featured/300x194"
                    >
                        H
                    </Avatar>
                    <Typography sx={{ zIndex: '3', position: 'absolute', top: '6.4rem', color: dark }}>
                        nithya
                    </Typography>
                </StyledBox>

                <StyledBox sx={{ minWidth: { xs: 70, lg: 90 }, backgroundImage: 'url(https://source.unsplash.com/featured/300x208)' }}>
                    <Avatar
                        sx={{
                            height: '2rem',
                            width: '2rem',
                            alignSelf: 'start',
                            border: `2px solid ${orange}`,
                            position: 'absolute',
                            left: '0.3rem',
                            top: '0.2rem',
                            backgroundColor: light,
                            color: textMain
                        }}
                        src="https://source.unsplash.com/featured/300x193"
                    >
                        H
                    </Avatar>
                    <Typography sx={{ zIndex: '3', position: 'absolute', top: '6.4rem', color: dark }}>
                        nithya
                    </Typography>
                </StyledBox>

                <StyledBox sx={{ minWidth: { xs: 70, lg: 90 }, backgroundImage: 'url(https://source.unsplash.com/featured/300x243)' }}>
                    <Avatar
                        sx={{
                            height: '2rem',
                            width: '2rem',
                            alignSelf: 'start',
                            border: `2px solid ${orange}`,
                            position: 'absolute',
                            left: '0.3rem',
                            top: '0.2rem',
                            backgroundColor: light,
                            color: textMain
                        }}
                        src="https://source.unsplash.com/featured/300x192"
                    >
                        H
                    </Avatar>
                    <Typography sx={{ zIndex: '3', position: 'absolute', top: '6.4rem', color: dark }}>
                        nithya
                    </Typography>
                </StyledBox>


                <StyledBox sx={{ minWidth: { xs: 70, lg: 90 }, backgroundImage: 'url(https://source.unsplash.com/featured/300x204)' }}>
                    <Avatar
                        sx={{
                            height: '2rem',
                            width: '2rem',
                            alignSelf: 'start',
                            border: `2px solid ${orange}`,
                            position: 'absolute',
                            left: '0.3rem',
                            top: '0.2rem',
                            backgroundColor: light,
                            color: textMain
                        }}
                        src="https://source.unsplash.com/featured/300x191"
                    >
                        H
                    </Avatar>
                    <Typography sx={{ zIndex: '3', position: 'absolute', top: '6.4rem', color: dark }}>
                        nithya
                    </Typography>
                </StyledBox>

                <StyledBox sx={{ minWidth: { xs: 70, lg: 90 }, backgroundImage: 'url(https://source.unsplash.com/featured/300x209)' }}>
                    <Avatar
                        sx={{
                            height: '2rem',
                            width: '2rem',
                            alignSelf: 'start',
                            border: `2px solid ${orange}`,
                            position: 'absolute',
                            left: '0.3rem',
                            top: '0.2rem',
                            backgroundColor: light,
                            color: textMain
                        }}
                        src="https://source.unsplash.com/featured/300x190"
                    >
                        H
                    </Avatar>
                    <Typography sx={{ zIndex: '3', position: 'absolute', top: '6.4rem', color: dark }}>
                        nithya
                    </Typography>
                </StyledBox>
            </Box >
        </Box >
    )
}

export default Story