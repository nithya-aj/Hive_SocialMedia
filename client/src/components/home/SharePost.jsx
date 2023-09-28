import { Box, Button, InputBase, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import UserAvatar from '../widget/UserAvatar'
import { useTheme } from '@emotion/react'
import { IoImage } from "react-icons/io5";
import { FaPhotoVideo } from "react-icons/fa";
import IconButton from '@mui/material/IconButton';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import close from 'assets/close.png'
import { useSelector } from 'react-redux'
import api from 'api';

function SharePost() {
    const theme = useTheme()
    const main = theme.palette.background.main
    const alt = theme.palette.background.alt
    const textMain = theme.palette.neutral.main
    const purple = theme.palette.neutral.purple
    const mediumpurple = theme.palette.neutral.mediumpurple
    const orange = theme.palette.neutral.orange
    const darkbg = theme.palette.background.darkbg

    const [desc, setDesc] = useState("")
    const [photo, setPhoto] = useState("")
    const token = useSelector((state) => state.auth.token)
    console.log(token, 'token....');

    const handleCreatePost = async (e) => {
        e.preventDefault()
        try {
            let fileName = null
            if (photo) {
                const formData = new FormData()
                fileName = crypto.randomUUID() + photo.name
                formData.append("imageUrl", fileName)
                formData.append("photo", photo)
                console.log(formData, 'formData-----------')
                await api.post("/upload", formData)
            } else {
                return
            }
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            const body = {
                desc,
                imageUrl: fileName
            }
            await api.post("/post", headers, body)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Box component={'form'} sx={{ backgroundColor: { sm: main, xs: alt }, p: '1rem', borderRadius: { sm: '10px', xs: '0px' }, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {photo && (
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 'auto',
                        maxHeight: '35rem',
                        marginBottom: '1rem',
                        borderRadius: '10px',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        overflow: 'hidden',
                        justifyContent: 'center',
                        position: 'relative',
                    }}
                >
                    <img
                        src={URL.createObjectURL(photo)}
                        alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <IconButton
                        aria-label="delete picture"
                        sx={{
                            position: 'absolute',
                            top: '0.1rem',
                            right: '0.1rem',
                            color: main
                        }}
                        onClick={() => setPhoto("")}
                    >
                        <img src={close} alt="" />
                    </IconButton>
                </Box>
            )}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Box>
                    <UserAvatar />
                </Box>
                <Box sx={{ width: '100%' }}>
                    <Paper
                        component="form"
                        sx={{ display: 'flex', alignItems: 'center', height: "2.5rem", backgroundColor: { xs: darkbg, sm: alt }, boxShadow: 'none', borderRadius: { sm: '10px', xs: '44px' } }}
                    >
                        <InputBase
                            sx={{ ml: { sm: 1, xs: 2 }, flex: 1, color: textMain }}
                            placeholder='What do you want to share today?'
                            inputProps={{ 'aria-label': 'search google maps' }}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                    </Paper>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: '0.5rem', lg: '3rem', md: '2rem' } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton aria-label="upload picture" component="label" sx={{ color: orange }}>
                            <input hidden accept="image/*" type="file" onChange={(e) => setPhoto(e.target.files[0])} />
                            <IoImage />
                        </IconButton>
                        <Typography sx={{ display: { xs: 'none', md: 'block', lg: 'block' }, color: textMain }}>Photo</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton aria-label="video" sx={{ color: orange }}>
                            <FaPhotoVideo />
                        </IconButton>
                        <Typography sx={{ display: { xs: 'none', md: 'block', lg: 'block' }, color: textMain }}>Video</Typography>
                    </Box>
                </Box>
                <Box>
                    <Button type='submit' onClick={handleCreatePost} sx={{ display: { xs: 'none', sm: 'flex' }, backgroundColor: purple, textTransform: 'none', fontSize: '15px', color: main, height: '2rem', ":hover": { backgroundColor: mediumpurple } }} variant="contained" endIcon={<SendRoundedIcon />}>
                        Post
                    </Button>
                    <IconButton sx={{ display: { xs: 'flex', sm: 'none' } }} aria-label="send">
                        <SendRoundedIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    )
}

export default SharePost      