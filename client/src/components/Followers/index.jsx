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
    // const followersPerPage = 6;
    // const startIndex = (page - 1) * followersPerPage;
    // const displayedFollowers = followers.slice(startIndex, startIndex + followersPerPage)
    return (
        <Grid container spacing={3}>
            {followers.map((friend, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                    <FriendsCard friend={friend} tab="followers" />
                </Grid>
            ))}
        </Grid>
    )
}

export default Followers