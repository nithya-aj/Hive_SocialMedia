import { Box, Button, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import UserAvatar from '../widget/UserAvatar'
import { useTheme } from '@emotion/react'
import InputBar from '../widget/InputBar'
import { IoImage } from "react-icons/io5";
import { FaPhotoVideo } from "react-icons/fa";
import IconButton from '@mui/material/IconButton';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { IoIosCloseCircle } from "react-icons/io";

function SharePost() {
    const theme = useTheme()
    const main = theme.palette.background.main

    const fileInputRef = useRef(null)
    const [selectedImage, setSelectedImage] = useState(null)
    const [previewImage, setPreviewImage] = useState('')

    const handleFileSelected = (e) => {
        const file = e.target.files[0]
        if (file) {
            setSelectedImage(file)
            const reader = new FileReader()
            reader.onload = () => {
                setPreviewImage(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleCloseImage = () => {
        setSelectedImage(null);
        setPreviewImage('');
    };

    return (
        <Box sx={{ backgroundColor: main, mt: '1rem', p: '1rem', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {previewImage && (
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: '15rem',
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
                        src={previewImage}
                        alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <IconButton
                        aria-label="delete picture"
                        sx={{
                            position: 'absolute',
                            top: '0.1rem',
                            right: '0.1rem',
                        }}
                        onClick={handleCloseImage}
                    >
                        <IoIosCloseCircle />
                    </IconButton>
                </Box>
            )}
            <Box sx={{ display: 'flex', alignItems: 'center', gap:'16px' }}>
                <Box>
                    <UserAvatar />
                </Box>
                <InputBar />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: '0.5rem', lg: '3rem', md: '2rem' } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" ref={fileInputRef} onChange={handleFileSelected} />
                            <IoImage />
                        </IconButton>
                        <Typography sx={{ display: { xs: 'none', md: 'block', lg: 'block' } }}>Photo</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton aria-label="video">
                            <FaPhotoVideo />
                        </IconButton>
                        <Typography sx={{ display: { xs: 'none', md: 'block', lg: 'block' } }}>Video</Typography>
                    </Box>
                </Box>
                <Box>
                    <Button sx={{ display: { xs: 'none', sm: 'flex' } }} variant="contained" endIcon={<SendRoundedIcon />}>
                        post
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