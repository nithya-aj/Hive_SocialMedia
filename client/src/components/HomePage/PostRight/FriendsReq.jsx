import {
  Avatar,
  Box,
  Card,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { BsPersonCheckFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import FlexCenter from "../../widget/FlexCenter";
import { useSelector } from "react-redux";

const FriendsReq = () => {
  const theme = useTheme();
  const darkbg = theme.palette.background.darkbg;
  const alt = theme.palette.background.alt;
  const mediumMain = theme.palette.neutral.mediumMain;
  const medium = theme.palette.neutral.medium;
  const light = theme.palette.neutral.light;
  const textMain = theme.palette.neutral.main;
  const purple = theme.palette.neutral.purple;
  const red = theme.palette.neutral.red;
  const userId = useSelector((state) => state.auth.user?._id);
  const allUsers = useSelector((state) => state.users.allUsers);

  const followers = allUsers.filter((user) => user.followings.includes(userId));

  console.log(followers);

  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: "10px",
        backgroundColor: darkbg,
        p: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5" sx={{ color: mediumMain }}>
          Friend Request
        </Typography>
        <Typography variant="caption" sx={{ color: medium, cursor: "pointer" }}>
          See All
        </Typography>
      </Box>
      <FlexCenter>
        <Divider sx={{ height: "1px", width: "100%", my: "10px" }} />
      </FlexCenter>
      <Box sx={{ overflow: "auto", display: "flex", flexDirection: "column" }}>
        {followers?.map((data, id) => (
          <Box
            key={id}
            sx={{
              display: "flex",
              px: "0.5rem",
              py: "0.8rem",
              ":hover": { backgroundColor: alt, borderRadius: "10px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                width: "70%",
              }}
            >
              <Avatar
                aria-label="avatar"
                sx={{
                  height: "2.3rem",
                  width: "2.3rem",
                  backgroundColor: light,
                  color: textMain,
                }}
              >
                R
              </Avatar>
              <Box
                sx={{
                  overflow: "hidden",
                  display: "inline-block",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  color: medium,
                }}
              >
                <Typography sx={{ fontSize: "0.75rem", color: medium }}>
                  {data.username}
                </Typography>
                <Typography variant="caption" noWrap sx={{ color: medium }}>
                  3 muthal friends
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton aria-label="check">
                <BsPersonCheckFill style={{ color: purple }} />
              </IconButton>
              <IconButton aria-label="decline">
                <AiFillCloseCircle style={{ color: red }} />
              </IconButton>
            </Box>
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default FriendsReq;
