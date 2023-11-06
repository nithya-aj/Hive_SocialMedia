import { Box } from "@mui/material";
import ProfileCard from "../widget/ProfileCard";
import FriendsReq from "../HomePage/PostRight/FriendsReq";

const ProfileRight = () => {
  return (
    <Box
      sx={{
        position: "sticky",
        top: "1.5rem",
        borderRadius: "10px",
        overflow: "hidden",
        gap: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ProfileCard />
      <FriendsReq />
    </Box>
  );
};

export default ProfileRight;
