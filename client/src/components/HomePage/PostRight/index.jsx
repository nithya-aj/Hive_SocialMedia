import UpdateProfile from "./UpdateProfile";
import FriendsReq from "./FriendsReq";
import { Box } from "@mui/material";

const PostRight = () => {
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
      <UpdateProfile />
      <FriendsReq />
    </Box>
  );
};

export default PostRight;
