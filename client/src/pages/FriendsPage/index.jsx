import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";
import FlexCenter from "../../components/widget/FlexCenter";

function FriendsPage() {
  const theme = useTheme();
  const darkbg = theme.palette.background.darkbg;
  const main = theme.palette.neutral.main;
  const purple = theme.palette.neutral.purple;
  const TabLink = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname.includes(to);

    return (
      <FlexCenter
        component={Link}
        to={to}
        sx={{
          width: "32%",
          height: "100%",
          color: isActive ? purple : main,
          cursor: "pointer",
          ":hover": {
            borderBottom: `1px solid ${purple}`,
            borderRadius: "0px",
            color: purple,
          },
          textDecoration: "none",
          borderBottom: isActive ? `1px solid ${purple}` : "transparent",
        }}
      >
        {children}
      </FlexCenter>
    );
  };

  return (
    <Box
      sx={{
        p: "1rem",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box
        sx={{
          height: "3rem",
          borderRadius: "0px",
          display: "flex",
          alignItems: "center",
          backgroundColor: darkbg,
          gap: 3,
          overflow: "hidden",
          mb: "1rem",
        }}
      >
        <TabLink to="followers">Followers</TabLink>
        <TabLink to="following">Following</TabLink>
        <TabLink to="suggestions">Suggestions</TabLink>
      </Box>
      <Box sx={{ height: "100%", flexGrow: 1, overflowY: "auto" }}>
        <Outlet/>
      </Box>
    </Box>
  );
}

export default FriendsPage;
