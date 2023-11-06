import { Grid } from "@mui/material";
import ProfileRight from "../../components/Profile/ProfileRight";
import ProfileLeft from "../../components/Profile/ProfileLeft";

const ProfilePage = () => {
  return (
    <Grid container sx={{ p: { sm: "0rem 1rem 0rem", xs: "0rem" } }}>
      <Grid
        item
        lg={8.5}
        xs={12}
        sx={{ flexGrow: 1, paddingRight: { lg: "1rem" } }}
      >
        <ProfileLeft page={"profile"} />
      </Grid>
      <Grid
        item
        xs={3.5}
        sx={{ flexShrink: 0, display: { lg: "block", xs: "none" } }}
      >
        <ProfileRight />
      </Grid>
    </Grid>
  );
};

export default ProfilePage;
