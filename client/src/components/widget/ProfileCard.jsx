import { useTheme } from '@emotion/react';
import { Box, Card, Divider, IconButton, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { HiAtSymbol } from "react-icons/hi";
import { HiBuildingOffice } from "react-icons/hi2";
import { MdCake, MdEdit } from "react-icons/md";
import { FaUserAlt, FaUserTag } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import FlexCenter from './FlexCenter';


const ProfileCard = () => {

    const theme = useTheme()
    const darkbg = theme.palette.background.darkbg
    const main = theme.palette.neutral.main
    const light = theme.palette.neutral.light
    const purple = theme.palette.neutral.purple
    const [edit, setEdit] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('edited!');
    }

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
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: '1rem', color: main, position: 'relative' }}>

                {edit ?
                    <>
                        <Box component="form" onClick={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }} >
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                <HiAtSymbol />
                                <TextField sx={{
                                    width: '100%',
                                    ".css-ume8vi-MuiInputBase-input-MuiInput-input": {
                                        padding: '0',
                                        height: '0.79em'
                                    },
                                    ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                                        padding: '0',
                                        height: '0.79em'
                                    },
                                    ".css-uh6r06-MuiInputBase-root-MuiInput-root:after": {
                                        borderBottom: `1px solid ${purple}`
                                    }
                                }} id="standard-basic" variant="standard" placeholder='rose_53' />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                <FaUserAlt style={{fontSize:'0.65rem'}} />
                                <TextField sx={{
                                    width: '100%',
                                    ".css-ume8vi-MuiInputBase-input-MuiInput-input": {
                                        padding: '0',
                                        height: '0.79em'
                                    },
                                    ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                                        padding: '0',
                                        height: '0.79em'
                                    },
                                    ".css-uh6r06-MuiInputBase-root-MuiInput-root:after": {
                                        borderBottom: `1px solid ${purple}`
                                    }
                                }} id="standard-basic" variant="standard" placeholder='Irin Rose' />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                <FaUserTag />
                                <TextField sx={{
                                    width: '100%',
                                    ".css-ume8vi-MuiInputBase-input-MuiInput-input": {
                                        padding: '0',
                                        height: '0.79em'
                                    },
                                    ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                                        padding: '0',
                                        height: '0.79em'
                                    },
                                    ".css-uh6r06-MuiInputBase-root-MuiInput-root:after": {
                                        borderBottom: `1px solid ${purple}`
                                    }
                                }} id="standard-basic" variant="standard" placeholder='UI/UX designer' />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                <MdEmail />
                                <TextField sx={{
                                    width: '100%',
                                    ".css-ume8vi-MuiInputBase-input-MuiInput-input": {
                                        padding: '0',
                                        height: '0.79em'
                                    },
                                    ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                                        padding: '0',
                                        height: '0.79em'
                                    },
                                    ".css-uh6r06-MuiInputBase-root-MuiInput-root:after": {
                                        borderBottom: `1px solid ${purple}`
                                    }
                                }} id="standard-basic" variant="standard" placeholder='rose@gmail.com' />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                <HiBuildingOffice />
                                <TextField sx={{
                                    width: '100%',
                                    ".css-ume8vi-MuiInputBase-input-MuiInput-input": {
                                        padding: '0',
                                        height: '0.79em'
                                    },
                                    ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                                        padding: '0',
                                        height: '0.79em'
                                    },
                                    ".css-uh6r06-MuiInputBase-root-MuiInput-root:after": {
                                        borderBottom: `1px solid ${purple}`
                                    }
                                }} id="standard-basic" variant="standard" placeholder='Ernakulam' />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                <MdCake />
                                <TextField sx={{
                                    width: '100%',
                                    ".css-ume8vi-MuiInputBase-input-MuiInput-input": {
                                        padding: '0',
                                        height: '0.79em'
                                    },
                                    ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                                        padding: '0',
                                        height: '0.79em'
                                    },
                                    ".css-uh6r06-MuiInputBase-root-MuiInput-root:after": {
                                        borderBottom: `1px solid ${purple}`
                                    }
                                }} id="standard-basic" variant="standard" placeholder='Feb 21 2002' />
                            </Box>
                            <Box component="button" sx={{
                                height: "2.1rem", width: '2.1rem', backgroundColor: light, position: 'absolute', top: '-1rem', right: '1rem',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: `2px solid ${darkbg}`
                            }} type='submit' onClick={() => setEdit(false)} >
                                <IconButton ><GiCheckMark size={'1rem'} style={{ color: 'green' }} /></IconButton>
                            </Box>
                        </Box>
                    </> :
                    <>
                        <Box sx={{
                            height: "2.1rem", width: '2.1rem', backgroundColor: light, position: 'absolute', top: '-1rem', right: '1rem',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: `2px solid ${darkbg}`
                        }} >
                            <IconButton onClick={() => setEdit(true)} ><MdEdit size={'1rem'} style={{ color: darkbg }} /></IconButton>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                            <HiAtSymbol />
                            <Typography style={{ lineHeight: 1 }} >rose_53</Typography>
                        </Box> 
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                            <FaUserAlt style={{fontSize:'0.65rem'}} />
                            <Typography style={{ lineHeight: 1 }} >Irin Rose</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                            <FaUserTag />
                            <Typography style={{ lineHeight: 1 }} >UI/UX designer </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                            <MdEmail />
                            <Typography style={{ lineHeight: 1 }} >rose@gmail.com</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                            <HiBuildingOffice />
                            <Typography style={{ lineHeight: 1 }} >Ernakulam</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                            <MdCake />
                            <Typography style={{ lineHeight: 1 }} >Feb 21 2002</Typography>
                        </Box>
                    </>}

            </Box>
        </Card>
    )
}

export default ProfileCard