import { useTheme } from "@emotion/react";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { IoMdSettings } from "react-icons/io";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useState } from "react";
import { apiRequest } from "@/utils";
import ReactTimeago from "react-timeago";
import { useSelector } from "react-redux";

const NotificationsPage = () => {
  const theme = useTheme();
  const main = theme.palette.background.main;
  const textMain = theme.palette.neutral.main;
  const fontSm = theme.palette.neutral.fontSm;
  const dark = theme.palette.neutral.dark;
  const user = useSelector((state) => state.auth.user._id);
  const [notifications, setNotifications] = useState([]);
  const [usersDetails, setUsersDetails] = useState({});

  useEffect(() => {
    const getNotifications = async () => {
      const response = await apiRequest({
        method: "GET",
        url: `/notification/${user}`,
      });
      console.log(response.data);
      setNotifications(response.data),
        response.data.forEach((notification) => {
          getUserDetails(notification.senderId);
        });
    };
    const getUserDetails = async (id) => {
      const response = await apiRequest({
        method: "GET",
        url: `/user/find/${id}`,
      });
      setUsersDetails((prevState) => ({
        ...prevState,
        [id]: response.data, // Use senderId as key
      }));
    };
    getNotifications();
  }, []);

  console.log(usersDetails);
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
        {notifications?.map((data, id) => (
          <Box sx={{ display: "flex", flexDirection: "column" }} key={id}>
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
                    {usersDetails[data.senderId]?.username}
                    {data.type === "comment"
                      ? " commented on your post"
                      : " liked your post"}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: "300", color: fontSm }}
                  >
                    <ReactTimeago date={data?.createdAt} />
                  </Typography>
                </Box>
              </Box>
              <IconButton aria-label="settings">
                <MoreVertIcon
                  style={{
                    cursor: "pointer",
                    fontSize: "1rem",
                    color: textMain,
                  }}
                />
              </IconButton>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default NotificationsPage;
