import { useTheme } from "@emotion/react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { IoMdCloudUpload } from "react-icons/io";
import { useSelector } from "react-redux";
import profile from "../../assets/profile.png";
import Post from "../HomePage/PostLeft/Post";
import SharePost from "../HomePage/PostLeft/SharePost";

const ProfileLeft = () => {
  const theme = useTheme();
  const main = theme.palette.background.main;
  const alt = theme.palette.background.alt;
  const orange = theme.palette.neutral.orange;
  const purple = theme.palette.neutral.purple;
  const mediumpurple = theme.palette.neutral.mediumpurple;
  const isExtraSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const textMain = theme.palette.neutral.main;
  const fontSm = theme.palette.neutral.fontSm;
  const user = useSelector((state) => state.auth);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Box
        sx={{
          borderRadius: "0px",
          overflow: "hidden",
          pb: { lg: "2rem", xs: "0rem" },
          position: "sticky",
          top: "0",
          zIndex: 999,
          bgcolor: alt,
          pt: "1.5rem",
        }}
      >
        <Box
          sx={{
            borderRadius: "10px 10px 0px 0px",
            position: "relative",
            height: "8rem",
            backgroundImage:
              "url('https://source.unsplash.com/featured/300x48')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            p: "0.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Avatar
            sx={{
              height: "6.5rem",
              width: "6.5rem",
              position: "absolute",
              top: "3.1rem",
              left: "2rem",
              border: `3px solid ${main}`,
              padding: user ? "0.6rem" : "0rem",
              backgroundColor: user ? main : "",
            }}
            src={
              user?.profilePic
                ? `http://localhost:8080/images/${user?.profilePic}`
                : profile
            }
            // src="https://source.unsplash.com/featured/300x118"
          />
          <Box
            sx={{
              height: "1.6rem",
              width: "1.6rem",
              backgroundColor: main,
              position: "absolute",
              top: "7.1rem",
              left: "7.3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              border: `1px solid ${orange}`,
            }}
          >
            <IconButton>
              <IoMdCloudUpload size={"1rem"} />
            </IconButton>
          </Box>

          {isExtraSmall ? (
            <Box
              sx={{
                height: "1.6rem",
                width: "1.6rem",
                backgroundColor: main,
                alignSelf: "flex-end",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
              }}
            >
              <IconButton>
                <IoMdCloudUpload size={"1rem"} />
              </IconButton>
            </Box>
          ) : (
            <Button
              variant="contained"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
                textTransform: "none",
                alignSelf: "flex-end",
                p: "4px 8px",
                backgroundColor: purple,
                color: main,
                ":hover": { backgroundColor: mediumpurple },
              }}
            >
              <IoMdCloudUpload size={"1.1rem"} />
              Edit Cover Photo
            </Button>
          )}
        </Box>
        <Box
          sx={{
            bgcolor: { xs: alt, sm: main },
            borderRadius: "0rem 0rem 10px 10px",
            pt: "2rem",
            pb: "0.5rem",
            gap: 1,
            p: "2rem 0rem 1rem 1rem",
            color: textMain,
            display: { xs: "block", lg: "none" },
          }}
        >
          <Typography
            variant={isExtraSmall ? "body1" : "h5"}
            sx={{ pl: "2rem" }}
          >
            Irin Rose
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              variant={isExtraSmall ? "subtitle2" : "subtitle1"}
              sx={{ pl: "2rem", color: fontSm }}
            >
              @irin__32
            </Typography>{" "}
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ color: fontSm, height: "1rem" }}
            />
            <Typography
              variant={isExtraSmall ? "subtitle2" : "subtitle1"}
              sx={{ color: fontSm }}
            >
              UI/UX designer
            </Typography>{" "}
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ color: fontSm, height: "1rem" }}
            />
            <Typography
              variant={isExtraSmall ? "subtitle2" : "subtitle1"}
              sx={{ color: fontSm }}
            >
              Ernakulam
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              variant={isExtraSmall ? "subtitle2" : "subtitle1"}
              sx={{ pl: "2rem", color: fontSm }}
            >
              123 Followers
            </Typography>{" "}
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ color: fontSm, height: "1rem" }}
            />
            <Typography
              variant={isExtraSmall ? "subtitle2" : "subtitle1"}
              sx={{ color: fontSm }}
            >
              421 Following
            </Typography>{" "}
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ color: fontSm, height: "1rem" }}
            />
            <Typography
              variant={isExtraSmall ? "subtitle2" : "subtitle1"}
              sx={{ color: fontSm }}
            >
              23 Posts
            </Typography>
          </Box>
        </Box>
      </Box>
      <SharePost />
      <Post page={"profile"} />
    </Box>
  );
};

export default ProfileLeft;
