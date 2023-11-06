import { Box, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import { Pagination } from "@mui/material";
import FriendsCard from "../widget/FriendsCard";

const Following = () => {
  const following = [
    { name: "Following 1" },
    { name: "Following 2" },
    { name: "Following 3" },
    { name: "Following 4" },
    { name: "Following 5" },
    { name: "Following 6" },
    { name: "Following 7" },
    { name: "Following 8" },
    { name: "Following 9" },
    { name: "Following 10" },
    { name: "Following 11" },
    { name: "Following 12" },
    { name: "Following 13" },
    { name: "Following 14" },
    { name: "Following 15" },
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
  const displayedFollowing = following.slice(startIndex, endIndex);

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
        {displayedFollowing.map((follower, index) => (
          <Grid item key={index} xs={4}>
            <FriendsCard friend={follower} tab="following" />
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
          count={Math.ceil(following.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
          sx={{ mt: 2 }}
        />
      </Box>
    </Box>
  );
};

export default Following;
