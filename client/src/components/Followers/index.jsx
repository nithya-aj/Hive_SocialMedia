import { Box, Grid } from "@mui/material";
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

  return (
    <Box sx={{ height: "100%" }}>
      <Grid container spacing={2}>
        {followers.map((data, index) => (
          <Grid item key={index} xs={4}>
            <FriendsCard friend={data} tab="followers" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Followers;
