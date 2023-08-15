import { Grid } from '@mui/material'
import FriendsCard from 'components/widget/FriendsCard'
import React from 'react'

const Followers = () => {
    const followers = [
        { name: 'Follower 1' },
        { name: 'Follower 2' },
        { name: 'Follower 2' },
        { name: 'Follower 2' },
        { name: 'Follower 2' },
        { name: 'Follower 2' },
    ]
    return (
        <Grid container spacing={3}>
            {followers.map((friend, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                    <FriendsCard friend={friend} tab={followers} />
                </Grid>
            ))}
        </Grid>
    )
}

export default Followers