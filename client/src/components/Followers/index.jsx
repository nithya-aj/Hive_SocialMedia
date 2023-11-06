import { Box, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import { Pagination } from "@mui/material";
import FriendsCard from "../widget/FriendsCard";

const Followers = () => {
  const followers = [
    { name: "Follower 1" },
    { name: "Follower 2" },
    { name: "Follower 3" },
    { name: "Follower 4" },
    { name: "Follower 5" },
    { name: "Follower 6" },
    { name: "Follower 7" },
    { name: "Follower 8" },
    { name: "Follower 9" },
    { name: "Follower 10" },
    { name: "Follower 11" },
    { name: "Follower 12" },
    { name: "Follower 13" },
    { name: "Follower 14" },
    { name: "Follower 15" },
    { name: "Follower 16" },
    { name: "Follower 17" },
    { name: "Follower 18" },
    { name: "Follower 19" },
    { name: "Follower 20" },
  ];
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const extraLargeBreakpoint = 1540;
  const isExtraLarge = useMediaQuery((theme) =>
    theme.breakpoints.up(extraLargeBreakpoint)
  );
  const spacing = isExtraLarge ? 2 : 3;
  const itemsPerPage = isExtraLarge ? 9 : 6;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedFollowers = followers.slice(startIndex, endIndex);

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        marginBottom: "auto",
      }}
    >
      <Grid container spacing={spacing}>
        {displayedFollowers.map((follower, index) => (
          <Grid item key={index} xs={4}>
            <FriendsCard friend={follower} tab="followers" />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "auto",
          justifyContent: "center",
        }}
      >
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
