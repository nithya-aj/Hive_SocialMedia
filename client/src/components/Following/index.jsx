import { Box, Grid } from "@mui/material";
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
    { name: "Following 16" }
  ];

  return (
    <Box sx={{ height: "100%" }}>
      <Grid container spacing={2}>
        {following.map((data, index) => (
          <Grid item key={index} xs={4}>
            <FriendsCard friend={data} tab="following" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Following;
