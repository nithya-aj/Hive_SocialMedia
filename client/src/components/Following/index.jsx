import { Grid } from '@mui/material'
import FriendsCard from 'components/widget/FriendsCard'
import React from 'react'

const Following = () => {
    const following = [
        { name: 'Following 1', buttons: ['Follow', 'Ignore'] },
        { name: 'Following 2', buttons: ['Follow', 'Ignore'] },
        { name: 'Following 2', buttons: ['Follow', 'Ignore'] },
        { name: 'Following 2', buttons: ['Follow', 'Ignore'] },
        { name: 'Following 2', buttons: ['Follow', 'Ignore'] },
        { name: 'Following 2', buttons: ['Follow', 'Ignore'] },
        // { name: 'Following 2', buttons: ['Follow', 'Ignore'] },
        // { name: 'Following 2', buttons: ['Follow', 'Ignore'] },
        // { name: 'Following 2', buttons: ['Follow', 'Ignore'] },
        // { name: 'Following 2', buttons: ['Follow', 'Ignore'] },
        // { name: 'Following 2', buttons: ['Follow', 'Ignore'] },
    ]
    return (
        <Grid container spacing={3}>
            {following.map((friend, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                    <FriendsCard friend={friend} />
                </Grid>
            ))}
        </Grid>
    )
}

export default Following