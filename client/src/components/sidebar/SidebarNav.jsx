import React from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { FaUserPlus, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function SidebarNav() {
  const { user } = useSelector((state) => state.auth);
  const items = [
    {
      name: "Feed",
      icon: AiFillHome,
      link: "/",
    },
    {
      name: "Friends",
      icon: FaUserPlus,
      link: "/friends",
    },
    {
      name: "Messages",
      icon: BiSolidMessageSquareDetail,
      link: "/messages",
    },
    {
      name: "Notifications",
      icon: IoNotifications,
      link: "/notifications",
    },
    {
      name: "Profile",
      icon: FaUser,
      link: `/profile/${user._id}`,
    },
    {
      name: "Settings",
      icon: IoMdSettings,
      link: "/settings",
    },
  ];

  const theme = useTheme();
  const alt = theme.palette.background.alt;
  const main = theme.palette.neutral.main;
  const light = theme.palette.neutral.light;
  const purple = theme.palette.neutral.purple;

  const location = useLocation();
  const isLinkActive = (link) => {
    return (
      location.pathname === link || location.pathname.startsWith(link + "/")
    );
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      {items.map((item, id) => (
        <Link to={item.link} style={{ textDecoration: "none" }} key={id}>
          <Stack sx={{ position: "relative" }}>
            <Item
              component={motion.div}
              whileHover={{ scale: 1 }}
              className={isLinkActive(item.link) ? "selected" : ""}
              sx={{
                height: "3.5rem",
                display: "flex",
                alignItems: "center",
                background: "transparent",
                boxShadow: "none",
                borderRadius: "0px 10px 10px 0px",
                cursor: "pointer",
                paddingLeft: "1rem",
                ":hover": {
                  backgroundColor: alt,
                  transform: "ease-in 4s",
                  border: `1px solid ${light}`,
                  "::before": {
                    content: '""',
                    position: "absolute",
                    top: "1px",
                    left: "0",
                    bottom: "2px",
                    right: "12.6rem",
                    bgcolor: purple,
                    borderRadius: "0px 30px 30px 0px",
                    width: "4px",
                  },
                },
                "&.selected": {
                  "::before": {
                    content: '""',
                    position: "absolute",
                    top: "1px",
                    left: "0",
                    bottom: "2px",
                    right: "12.6rem",
                    bgcolor: purple,
                    borderRadius: "0px 30px 30px 0px",
                    width: "4px",
                  },
                },
              }}
            >
              <Box
                style={{
                  fontSize: "x-large",
                  marginLeft: { lg: "6px" },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {item.icon === FaUser ? (
                  <item.icon style={{ fontSize: "1.3rem", color: main }} />
                ) : (
                  <item.icon style={{ color: main }} />
                )}
              </Box>
              <Typography
                style={{ marginLeft: "10px", color: main }}
                sx={{
                  display: {
                    lg: "block",
                    md: "block",
                    sm: "block",
                    xs: "none",
                  },
                }}
              >
                {item.name}
              </Typography>
            </Item>
          </Stack>
        </Link>
      ))}
    </Box>
  );
}

export default SidebarNav;
