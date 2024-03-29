import { useTheme } from "@emotion/react";
import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import UserAvatar from "../../widget/UserAvatar";
import UpdateModal from "../../Modals/UpdateModal";
import { useSelector } from "react-redux";

const UpdateProfile = () => {
  const user = useSelector((state) => state.auth);
  const theme = useTheme();
  const darkbg = theme.palette.background.darkbg;
  const main = theme.palette.neutral.main;
  const medium = theme.palette.neutral.medium;
  const purple = theme.palette.neutral.purple;
  const mediumpurple = theme.palette.neutral.mediumpurple;

  const [modal, setModal] = useState(false);

  return (
    <Card
      sx={{ borderRadius: "10px", backgroundColor: darkbg, boxShadow: "none" }}
    >
      <CardMedia
        sx={{
          height: "8rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <UserAvatar userProfile={user?.profilePic} isBorder={true} />
        <Typography
          sx={{ fontSize: "19px", fontWeight: 300, mt: "0.5rem", color: main }}
        >
          Update your profile
        </Typography>
        <Typography variant="caption" sx={{ color: medium }}>
          {`Let's complete your profile!`}
        </Typography>
      </CardMedia>
      <CardActions
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pb: "1.5rem",
        }}
      >
        <Button
          onClick={() => setModal(true)}
          sx={{
            display: { xs: "none", sm: "flex" },
            textTransform: "none",
            width: "90%",
            height: "2.5rem",
            backgroundColor: purple,
            fontSize: "15px",
            color: darkbg,
            ":hover": { backgroundColor: mediumpurple },
          }}
          variant="contained"
          endIcon={<BsFillArrowRightCircleFill />}
        >
          Update Now
        </Button>
        {modal && (
          <UpdateModal page={"profile"} modal={modal} setModal={setModal} />
        )}
      </CardActions>
    </Card>
  );
};

export default UpdateProfile;
