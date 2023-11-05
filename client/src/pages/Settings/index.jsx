import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Box, Collapse, Divider, Typography } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useTheme } from "@emotion/react";

function Settings() {
  const theme = useTheme();
  const darkbg = theme.palette.background.darkbg;
  const main = theme.palette.neutral.main;
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname.startsWith(path);
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "20%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "0.3rem",
            p: { sm: "1rem 1rem 0rem", xs: "0rem" },
          }}
        >
          <Link style={{ textDecoration: "none" }} to="edit-profile">
            {" "}
            <Box
              sx={{
                p: "1rem",
                borderRadius: "5px",
                ":hover": { bgcolor: darkbg },
                color: main,
                cursor: "pointer",
                bgcolor: isActive("/settings/edit-profile")
                  ? darkbg
                  : "transparent",
              }}
            >
              Edit Profile
            </Box>
          </Link>
          <Link style={{ textDecoration: "none" }} to="blocked-users">
            {" "}
            <Box
              sx={{
                p: "1rem",
                borderRadius: "5px",
                ":hover": { bgcolor: darkbg },
                color: main,
                cursor: "pointer",
                bgcolor: isActive("/settings/blocked-users")
                  ? darkbg
                  : "transparent",
              }}
            >
              Block Users
            </Box>
          </Link>
          <Link style={{ textDecoration: "none" }} to="password-security">
            {" "}
            <Box
              sx={{
                p: "1rem",
                borderRadius: "5px",
                ":hover": { bgcolor: darkbg },
                color: main,
                cursor: "pointer",
                bgcolor: isActive("/settings/password-security")
                  ? darkbg
                  : "transparent",
              }}
            >
              Password and Security
            </Box>
          </Link>
          <Box
            onClick={handleClick}
            sx={{
              p: "1rem",
              borderRadius: "5px",
              ":hover": { bgcolor: darkbg },
              color: main,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography>Posts</Typography>
            {open ? <ExpandLess /> : <ExpandMore />}
          </Box>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Link style={{ textDecoration: "none" }} to="manage-posts/hidden">
              {" "}
              <Box
                sx={{
                  p: "1rem",
                  mt: "2px",
                  ml: "1rem",
                  borderRadius: "5px",
                  ":hover": { bgcolor: darkbg },
                  color: main,
                  cursor: "pointer",
                  bgcolor: isActive("/settings/manage-posts/hidden")
                    ? darkbg
                    : "transparent",
                }}
              >
                Hidden Posts
              </Box>
            </Link>
            <Link style={{ textDecoration: "none" }} to="manage-posts/liked">
              {" "}
              <Box
                sx={{
                  p: "1rem",
                  mt: "2px",
                  ml: "1rem",
                  borderRadius: "5px",
                  ":hover": { bgcolor: darkbg },
                  color: main,
                  cursor: "pointer",
                  bgcolor: isActive("/settings/manage-posts/liked")
                    ? darkbg
                    : "transparent",
                }}
              >
                Liked Posts
              </Box>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to="manage-posts/bookmarked"
            >
              {" "}
              <Box
                sx={{
                  p: "1rem",
                  mt: "2px",
                  ml: "1rem",
                  borderRadius: "5px",
                  ":hover": { bgcolor: darkbg },
                  color: main,
                  cursor: "pointer",
                  bgcolor: isActive("/settings/manage-posts/bookmarked")
                    ? darkbg
                    : "transparent",
                }}
              >
                Bookmarked Posts
              </Box>
            </Link>
          </Collapse>
          <Link style={{ textDecoration: "none" }} to="manage-account">
            {" "}
            <Box
              sx={{
                p: "1rem",
                borderRadius: "5px",
                ":hover": { bgcolor: darkbg },
                color: main,
                cursor: "pointer",
                bgcolor: isActive("/settings/manage-account")
                  ? darkbg
                  : "transparent",
              }}
            >
              Manage Account
            </Box>
          </Link>
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem />
      </Box>
      <Box sx={{ width: "80%", height: "100%" }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Settings;
