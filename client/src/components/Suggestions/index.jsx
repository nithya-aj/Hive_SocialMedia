import { Box, Grid } from '@mui/material';
import FriendsCard from 'components/widget/FriendsCard';
import React from 'react';
import { Pagination } from '@mui/material';

const Suggestions = () => {
  const suggestions = [
    { name: 'Suggestion 1' },
    { name: 'Suggestion 2' },
    { name: 'Suggestion 3' },
    { name: 'Suggestion 4' },
    { name: 'Suggestion 5' },
    { name: 'Suggestion 6' },
    { name: 'Suggestion 7' },
    { name: 'Suggestion 8' },
    { name: 'Suggestion 9' },
    { name: 'Suggestion 10' },
    { name: 'Suggestion 11' },
    { name: 'Suggestion 12' },
    { name: 'Suggestion 13' },
    { name: 'Suggestion 14' },
    { name: 'Suggestion 14' },
  ];
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const itemsPerPage = 6;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedSuggestions = suggestions.slice(startIndex, endIndex);

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', marginBottom: 'auto' }}>
      <Grid container spacing={3}>
        {displayedSuggestions.map((follower, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <FriendsCard friend={follower} tab="suggestions" />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 'auto', justifyContent: 'center' }}>
        <Pagination
          count={Math.ceil(suggestions.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
          sx={{ mt: 2 }}
        />
      </Box>
    </Box>
  );
};

export default Suggestions;
