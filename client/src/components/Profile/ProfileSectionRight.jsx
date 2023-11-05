import { Box } from "@mui/material";
import FriendsReq from "components/home/PostRight/FriendsReq";
import ProfileCard from "components/widget/ProfileCard";
import React from "react";

const ProfileSectionRight = () => {
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

export default ProfileSectionRight;
