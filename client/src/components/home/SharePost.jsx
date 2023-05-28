import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import UserAvatar from '../widget/UserAvatar'
import { useTheme } from '@emotion/react'
import InputBar from '../widget/InputBar'
import { IoImage } from "react-icons/io5";
import { FaPhotoVideo } from "react-icons/fa";
import IconButton from '@mui/material/IconButton';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

function SharePost() {
    const theme = useTheme()
    const main = theme.palette.background.main
    return (

        <Box sx={{ backgroundColor: main, mt: '1rem', p: '1rem', borderRadius: '10px' }}>
            {/* <Box sx={{
                display: 'flex', alignItems: 'center', height: '15rem', marginBottom: '1rem', borderRadius: '10px',
                backgroundSize: 'cover', backgroundRepeat: 'no-repeat', overflow: 'hidden', justifyContent:'center'
            }}>
                <img src="https://picsum.photos/900/300.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover'}}/>
            </Box> */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <UserAvatar />
                <InputBar />
            </Box>
            <Grid container wrap="nowrap" gap={1} sx={{ mt: '1rem' }}>
                <Grid item xs={2.5}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton aria-label="image">
                            <IoImage />
                        </IconButton>
                        <Typography sx={{ display: { xs: 'none', md: 'block', lg: 'block' } }}>Photo</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6.5}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton aria-label="video">
                            <FaPhotoVideo />
                        </IconButton>
                        <Typography sx={{ display: { xs: 'none', md: 'block', lg: 'block' } }}>Video</Typography>
                    </Box>
                </Grid>
                <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Button sx={{ display: { xs: 'none', sm: 'flex' } }} variant="contained" endIcon={<SendRoundedIcon />}>
                        post
                    </Button>
                    <IconButton sx={{ display: { xs: 'flex', sm: 'none' } }} aria-label="send">
                        <SendRoundedIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SharePost      