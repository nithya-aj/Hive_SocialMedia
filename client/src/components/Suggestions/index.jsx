import { Grid } from '@mui/material'
import FriendsCard from 'components/widget/FriendsCard'
import React from 'react'

const Suggestions = ({ currentPage }) => {
  const suggestionsData = [
    { name: 'John Doe', username: 'johndoe' },
    { name: 'Jane Smith', username: 'janesmith' },
    { name: 'Bob Johnson', username: 'bobjohnson' },
    { name: 'Alice Lee', username: 'alicelee' },
    { name: 'Mike Brown', username: 'mikebrown' },
    { name: 'Sara Davis', username: 'saradavis' },
    { name: 'Tom Wilson', username: 'tomwilson' },
    { name: 'Emily Taylor', username: 'emilytaylor' },
    { name: 'David Clark', username: 'davidclark' },
    { name: 'Olivia Green', username: 'oliviagreen' },
    { name: 'Mark Anderson', username: 'markanderson' },
    { name: 'Karen White', username: 'karenwhite' },
    { name: 'Chris Martin', username: 'chrismartin' },
    { name: 'Amy Garcia', username: 'amygarcia' },
    { name: 'Kevin Lee', username: 'kevinlee' },
    { name: 'Linda Baker', username: 'lindabaker' },
    { name: 'Erica Perez', username: 'ericaperez' },
  ];
  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  console.log(startIndex, 'startIndex'); 
  const endIndex = startIndex + itemsPerPage;
  console.log(endIndex, 'endIndex');

  const visibleSuggestions = suggestionsData.slice(startIndex, endIndex);
  console.log(visibleSuggestions, 'visibleSuggestions');
  return (
    <Grid container spacing={3}>
      {visibleSuggestions.map((friend, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <FriendsCard friend={friend} tab="suggestions" />
        </Grid>
      ))}
    </Grid>
  )
}

export default Suggestions