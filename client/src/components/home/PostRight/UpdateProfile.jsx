import { useTheme } from '@emotion/react';
import { Button, Card, CardActions, CardMedia, Typography } from '@mui/material'
import UserAvatar from 'components/widget/UserAvatar'
import React from 'react'
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const UpdateProfile = () => {

    const theme = useTheme()
    const darkbg = theme.palette.background.darkbg

    return (
        <Card sx={{ borderRadius: '10px', backgroundColor: darkbg }}>
            <CardMedia sx={{ height: '8rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
                <UserAvatar />
                <Typography sx={{ fontSize: '19px', fontWeight: 300, mt: '0.5rem' }}>Update your profile</Typography>
                <Typography variant='caption'>Let's complete your profile!</Typography>
            </CardMedia>
            <CardActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pb: '1.5rem' }}>
                <Button sx={{ display: { xs: 'none', sm: 'flex' }, textTransform: 'none', width: '90%', height: '2.5rem' }} variant="contained" endIcon={<BsFillArrowRightCircleFill />}>
                    Update Now
                </Button>
            </CardActions>
        </Card>
    )
}

export default UpdateProfile