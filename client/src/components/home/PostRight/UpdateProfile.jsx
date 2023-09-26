import { useTheme } from '@emotion/react';
import { Backdrop, Button, Card, CardActions, CardMedia, Typography } from '@mui/material'
import CompleProfile from 'components/Modals/CompleProfile';
import UserAvatar from 'components/widget/UserAvatar'
import React, { useState } from 'react'
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const UpdateProfile = () => {

    const theme = useTheme()
    const darkbg = theme.palette.background.darkbg
    const main = theme.palette.neutral.main
    const medium = theme.palette.neutral.medium
    const purple = theme.palette.neutral.purple
    const mediumpurple = theme.palette.neutral.mediumpurple

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <Card sx={{ borderRadius: '10px', backgroundColor: darkbg, boxShadow: 'none' }}>
            <CardMedia sx={{ height: '8rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
                <UserAvatar />
                <Typography sx={{ fontSize: '19px', fontWeight: 300, mt: '0.5rem', color: main }}>Update your profile</Typography>
                <Typography variant='caption' sx={{ color: medium }}>Let's complete your profile!</Typography>
            </CardMedia>
            <CardActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pb: '1.5rem' }}>
                <Button onClick={handleOpen} sx={{ display: { xs: 'none', sm: 'flex' }, textTransform: 'none', width: '90%', height: '2.5rem', backgroundColor: purple, fontSize: '15px', color: darkbg, ":hover": { backgroundColor: mediumpurple } }} variant="contained" endIcon={<BsFillArrowRightCircleFill />}>
                    Update Now
                </Button>
                {
                    open &&
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                        onClick={handleClose}
                    >
                        <CompleProfile open={open} handleOpen={handleOpen} handleClose={handleClose} />
                    </Backdrop>
                }
            </CardActions>
        </Card>
    )
}

export default UpdateProfile