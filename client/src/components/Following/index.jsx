import { Grid } from '@mui/material'
import FriendsCard from 'components/widget/FriendsCard'
import React from 'react'

const Following = () => {
    const following = [
        { name: 'Following 1' },
        { name: 'Following 2' },
        { name: 'Following 2' },
        { name: 'Following 2' },
        { name: 'Following 2' },
        { name: 'Following 2' },
    ]
    return (
        <Grid container spacing={3}>
            {following.map((friend, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                    <FriendsCard friend={friend} tab={following} />
                </Grid>
            ))}
        </Grid>
    )
}

export default Following