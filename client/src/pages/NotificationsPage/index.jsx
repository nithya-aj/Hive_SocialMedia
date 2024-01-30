import { useTheme } from "@emotion/react";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { IoMdSettings } from "react-icons/io";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useState } from "react";

const NotificationsPage = ({ socket }) => {
  const theme = useTheme();
  const main = theme.palette.background.main;
  const textMain = theme.palette.neutral.main;
  const fontSm = theme.palette.neutral.fontSm;
  const dark = theme.palette.neutral.dark;

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on("getNotification", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
  }, [socket]);
  console.log(notifications);
  return (
    <Box
      sx={{
        height: "100%",
        p: { sm: "1rem 1rem 0rem", xs: "0rem" },
        display: "flex",
        flexDirection: "column",
        gap: "0.14rem",
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          borderRadius: "10px 10px 0px 0px",
          display: "flex",
          flexDirection: "column",
          gap: "0.1rem",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            height: "3.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: "1.5rem",
            backgroundColor: main,
            ":hover": { backgroundColor: dark },
            cursor: "pointer",
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontSize: "1rem", color: textMain }}
          >
            Notification
          </Typography>
          <IconButton aria-label="settings">
            <IoMdSettings
              style={{ cursor: "pointer", fontSize: "1rem", color: textMain }}
            />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ height: "100%", overflowY: "scroll" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              height: "3.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: "1.5rem",
              backgroundColor: main,
              ":hover": { backgroundColor: dark },
              cursor: "pointer",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar src="https://source.unsplash.com/featured/300x138" />
              <Box>
                <Typography sx={{ fontSize: "0.9rem", color: textMain }}>
                  Yarzdan commented on your photo
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: "300", color: fontSm }}
                >
                  4 minute ago
                </Typography>
              </Box>
            </Box>
            <IconButton aria-label="settings">
              <MoreVertIcon
                style={{ cursor: "pointer", fontSize: "1rem", color: textMain }}
              />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NotificationsPage;
