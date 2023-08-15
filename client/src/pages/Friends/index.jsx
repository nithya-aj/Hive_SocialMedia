import { useTheme } from '@emotion/react';
import { Box, Pagination, Stack } from '@mui/material';
import FlexCenter from 'components/widget/FlexCenter';
import React, { useState } from 'react';
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import Suggestions from 'components/Suggestions'; // Import the Suggestions component

function Friends() {
  const theme = useTheme();
  const darkbg = theme.palette.background.darkbg;
  const main = theme.palette.neutral.main;
  const purple = theme.palette.neutral.purple;

  const [currentPage, setCurrentPage] = useState(1);
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const { page: urlPage } = useParams();
  const currentPageFromUrl = parseInt(urlPage);

  const navigate = useNavigate();

  const TabLink = ({ to, children }) => (
    <FlexCenter
      onClick={() => navigate(to.replace(':page', currentPage.toString()))}
      sx={{
        width: '32%',
        height: '100%',
        color: main,
        cursor: 'pointer',
        ":hover": { border: `1px solid ${purple}` },
        textDecoration: 'none'
      }}
    >
      {children}
    </FlexCenter>
  );

  return (
    <Box sx={{ p: '1rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ height: '2.5rem', display: 'flex', alignItems: 'center', marginBottom: 'auto', backgroundColor: darkbg, gap: 3, overflow: 'hidden' }}>
        <TabLink to="followers" >Followers</TabLink>
        <TabLink to="following">Following</TabLink>
        <TabLink to={`suggestions/${currentPage}`}>Suggestions</TabLink>
      </Box>
      <Box sx={{ height: '100%', py: '1rem', flexGrow: 1 }}>
        <Outlet currentPage={currentPageFromUrl} />
      </Box>
      <Box sx={{ height: '2.5rem', display: 'flex', alignItems: 'center', marginTop: 'auto', justifyContent: 'center' }}>
        <Stack spacing={2}>
          <Pagination count={4} page={currentPage} onChange={handleChange} />
        </Stack>
      </Box>
    </Box>
  );
}

export default Friends;