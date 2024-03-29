import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@emotion/react";
import { useSelector } from "react-redux";
import UserAvatar from "../widget/UserAvatar";

const UserWidget = () => {
  const theme = useTheme();
  const alt = theme.palette.background.alt;
  const light = theme.palette.neutral.light;
  const main = theme.palette.neutral.main;
  const medium = theme.palette.neutral.medium;
  const purple = theme.palette.neutral.purple;
  const user = useSelector((state) => state.auth.user);
  console.log(user, "user from userWidget");
  return (
    <Box
      sx={{
        border: `1px solid ${light}`,
        width: "100%",
        backgroundColor: { md: alt, sm: "transparent" },
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        height: "3.8rem",
        px: "0.5rem",
        gap: 1,
        ":hover": { boxShadow: `0px 0px 2px ${purple}` },
        cursor: "pointer",
      }}
    >
      <Box>
        <UserAvatar
          sidebar={true}
          isBorder={true}
          userProfile={user?.profilePic}
        />
      </Box>
      <Box sx={{ display: { xs: "none", sm: "block", width: "70%" } }}>
        <Box
          sx={{
            overflow: "hidden",
            display: "inline-block",
            whiteSpace: "nowrap",
            width: "100%",
            textOverflow: "ellipsis",
            color: main,
          }}
        >
          <Typography
            noWrap
            variant="body1"
            sx={{ fontSize: "1rem", marginBottom: "0", color: main }}
          >
            {user.name}
          </Typography>
          <Typography
            noWrap
            variant="body2"
            sx={{ fontWeight: "300", marginBottom: "0", color: medium }}
          >
            @ {user.username}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default UserWidget;
