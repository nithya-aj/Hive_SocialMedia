import { Box, Grid } from "@mui/material";
import FriendsCard from "../widget/FriendsCard";

const Suggestions = () => {
  const suggestions = [
    { name: "suggestions 1" },
    { name: "suggestions 2" },
    { name: "suggestions 3" },
    { name: "suggestions 4" },
    { name: "suggestions 5" },
    { name: "suggestions 6" },
    { name: "suggestions 7" }
  ];

  return (
    <Box sx={{ height: "100%" }}>
      <Grid container spacing={2}>
        {suggestions.map((data, index) => (
          <Grid item key={index} xs={4}>
            <FriendsCard friend={data} tab="suggestions" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Suggestions;
