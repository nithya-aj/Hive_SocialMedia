import { Grid } from "@mui/material";
import ProfileSectionLeft from "components/Profile/ProfileSectionLeft";
import ProfileSectionRight from "components/Profile/ProfileSectionRight";
import React from "react";

const ProfilePage = () => {
  return (
    <Grid
      container
      sx={{ p: { sm: "0rem 1rem 0rem", xs: "0rem" } }}
    >
      <Grid
        item
        lg={8.5}
        xs={12}
        sx={{ flexGrow: 1, paddingRight: { lg: "1rem" } }}
      >
        <ProfileSectionLeft page={"profile"} />
      </Grid>
      <Grid
        item
        xs={3.5}
        sx={{ flexShrink: 0, display: { lg: "block", xs: "none" }
     }}
      >
        <ProfileSectionRight />
      </Grid>
    </Grid>
  );
};

export default ProfilePage;
