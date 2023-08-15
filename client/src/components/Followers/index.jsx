import { Grid } from '@mui/material'
import FriendsCard from 'components/widget/FriendsCard'
import React from 'react'

const Followers = () => {
    const followers = [
        { name: 'Follower 1', buttons: ['Follow', 'Ignore'] },
        { name: 'Follower 2', buttons: ['Follow', 'Ignore'] },
        { name: 'Follower 2', buttons: ['Follow', 'Ignore'] },
        { name: 'Follower 2', buttons: ['Follow', 'Ignore'] },
        { name: 'Follower 2', buttons: ['Follow', 'Ignore'] },
        { name: 'Follower 2', buttons: ['Follow', 'Ignore'] },
    ]
    return (
        // <FriendsCard data={followers} />
        <Grid container spacing={3}>
            {followers.map((friend, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                    <FriendsCard friend={friend} />
                </Grid>
            ))}
        </Grid>
    )
}

export default Followers