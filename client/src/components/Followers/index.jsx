import { Box, Grid } from '@mui/material';
import FriendsCard from 'components/widget/FriendsCard';
import React from 'react';
import { Pagination } from '@mui/material';

const Followers = () => {
    const followers = [
        { name: 'Follower 1' },
        { name: 'Follower 2' },
        { name: 'Follower 3' },
        { name: 'Follower 4' },
        { name: 'Follower 5' },
        { name: 'Follower 6' },
        { name: 'Follower 7' },
        { name: 'Follower 8' },
        { name: 'Follower 9' },
        { name: 'Follower 10' },
        { name: 'Follower 11' },
        { name: 'Follower 12' },
        { name: 'Follower 13' },
        { name: 'Follower 14' },
        { name: 'Follower 15' },
        { name: 'Follower 16' },
        { name: 'Follower 17' },
        { name: 'Follower 18' },
        { name: 'Follower 19' },
        { name: 'Follower 20' },
    ];
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const itemsPerPage = 6;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedFollowers = followers.slice(startIndex, endIndex);

    return (
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', marginBottom: 'auto' }}>
            <Grid container spacing={3}>
                {displayedFollowers.map((follower, index) => (
                    <Grid item key={index} xs={12} sm={4} md={4}>
                        <FriendsCard friend={follower} tab="followers" />
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 'auto', justifyContent: 'center' }}>
                <Pagination
                    count={Math.ceil(followers.length / itemsPerPage)}
                    page={page}
                    onChange={handleChange}
                    sx={{ mt: 2 }}
                />
            </Box>
        </Box>
    );
};

export default Followers;
