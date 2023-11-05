import { Grid } from "@mui/material";
import PostSectionLeft from "components/home/PostSectionLeft";
import PostSectionRight from "components/home/PostSectionRight";
import React from "react";

const FeedsPage = () => {
  return (
    <Grid
      container
      sx={{
        padding: { lg: "0rem 1.5rem 0rem 1.5rem", sm: "0rem 1rem 0rem 1rem" },
      }}
    >
      <Grid
        item
        lg={8.5}
        xs={12}
        sx={{ flexGrow: 1, paddingRight: { lg: "1rem" } }}
      >
        <PostSectionLeft page={"post"} />
      </Grid>
      <Grid
        item
        xs={3.5}
        sx={{ flexShrink: 0, display: { lg: "block", xs: "none" } }}
      >
        <PostSectionRight />
      </Grid>
    </Grid>
  );
};

export default FeedsPage;
