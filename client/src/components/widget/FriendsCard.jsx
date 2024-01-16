import { Avatar, Box, Typography } from "@mui/material";
import FlexCenter from "./FlexCenter";
import { useTheme } from "@emotion/react";
import { FaUserMinus, FaUserPlus, FaUserCheck } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { motion } from "framer-motion";
import { apiRequest } from "@/utils";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import UserAvatar from "./UserAvatar";
import profilePhoto from "../../assets/profile.png";

const FriendsCard = ({ data, tab, fetchUsers, postCount }) => {
  const theme = useTheme();
  const mode = useSelector((state) => state.theme.mode);
  const darkbg = theme.palette.background.darkbg;
  const alt = theme.palette.background.alt;
  const orange = theme.palette.neutral.orange;
  const purple = theme.palette.neutral.purple;
  const token = useSelector((store) => store.auth.token);
  const userId = useSelector((state) => state.auth.user?._id);

  console.log(data);
  const isFriend = data.followers.includes(userId);

  const addFriend = async () => {
    if (!isFriend) {
      try {
        const response = await apiRequest({
          url: `/user/follow/${data._id}`,
          token: token,
          method: "PUT",
        });
        fetchUsers();
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.info("You are already following this user!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: mode === "light" ? "light" : "dark",
      });
    }
  };

  const removeFriend = async () => {
    try {
      const response = await apiRequest({
        url: `/user/un-follow/${data._id}`,
        token: token,
        method: "PUT",
      });
      fetchUsers();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: darkbg,
          display: "flex",
          flexDirection: "column",
          borderRadius: "4px",
          overflow: "hidden",
          height: "100%",
          width: "100%",
        }}
      >
        {/* <FlexCenter sx={{ flexDirection: "column", gap: 0.5, py: "1rem" }}>
          <Avatar sx={{ width: "3rem", height: "3rem" }} />
          <Typography>{data.username}</Typography>
          <Typography>ceo & founder of cole</Typography>
        </FlexCenter>
        {tab === "followers" && (
          <Box
            sx={{
              overflow: "hidden ",
              borderTop: `1px solid ${alt}`,
              display: "flex",
              alignItems: "center",
              height: "3rem",
            }}
          >
            <FlexCenter
              sx={{
                width: "50%",
                height: "100%",
                borderRight: `1px solid ${alt}`,
                fontSize: "1.2rem",
                ":hover": { color: orange },
              }}
            >
              <Box
                sx={{ cursor: "pointer" }}
                component={motion.div}
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.2 }}
              >
                <IoCloseCircle />
              </Box>
            </FlexCenter>
            <FlexCenter
              sx={{
                width: "50%",
                height: "100%",
                fontSize: "1.2rem",
                ":hover": { color: orange },
                cursor: "pointer",
              }}
              onClick={addFriend}
            >
              <Box
                component={motion.div}
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.2 }}
              >
                {isFriend ? <FaUserCheck color={purple} /> : <FaUserPlus />}
              </Box>
            </FlexCenter>
          </Box>
        )}
        {tab === "following" && (
          <Box
            sx={{
              overflow: "hidden ",
              borderTop: `1px solid ${alt}`,
              display: "flex",
              alignItems: "center",
              height: "3rem",
            }}
          >
            <FlexCenter
              sx={{
                width: "50%",
                height: "100%",
                borderRight: `1px solid ${alt}`,
                fontSize: "1.2rem",
                ":hover": { color: orange },
              }}
            >
              <Box
                sx={{ cursor: "pointer" }}
                component={motion.div}
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.2 }}
              >
                <IoCloseCircle />
              </Box>
            </FlexCenter>
            <FlexCenter
              sx={{
                width: "50%",
                height: "100%",
                fontSize: "1.2rem",
                ":hover": { color: orange },
                cursor: "pointer",
              }}
              onClick={removeFriend}
            >
              <Box
                component={motion.div}
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.2 }}
              >
                <FaUserMinus />
              </Box>
            </FlexCenter>
          </Box>
        )}
        {tab === "suggestions" && (
          <Box
            sx={{
              overflow: "hidden ",
              borderTop: `1px solid ${alt}`,
              display: "flex",
              alignItems: "center",
              height: "3rem",
            }}
          >
            <FlexCenter
              sx={{
                width: "50%",
                height: "100%",
                borderRight: `1px solid ${alt}`,
                fontSize: "1.2rem",
                ":hover": { color: orange },
              }}
            >
              <Box
                sx={{ cursor: "pointer" }}
                component={motion.div}
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.2 }}
              >
                <IoCloseCircle />
              </Box>
            </FlexCenter>
            <FlexCenter
              sx={{
                width: "50%",
                height: "100%",
                fontSize: "1.2rem",
                ":hover": { color: orange },
                cursor: "pointer",
              }}
              onClick={addFriend}
            >
              <Box
                sx={{ cursor: "pointer" }}
                component={motion.div}
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.2 }}
              >
                {isFriend ? <FaUserCheck color={purple} /> : <FaUserPlus />}
              </Box>
            </FlexCenter>
          </Box>
        )} */}

        <Box
          sx={{
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden",
            borderRadius: "5px",
            height: "16rem",
            p: "1rem",
            backgroundImage: `url(${profilePhoto})`,
            "&::before": {
              content: '""',
              display: "block",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              background: "linear-gradient(transparent, rgba(0, 0, 0, 0.95))",
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(rgba(0, 0, 0, 0.95), transparent)",
            }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.2rem",
              zIndex: 1,
            }}
          >
            <Typography variant="h4">{data.name}</Typography>
            <Typography>@{data.username}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              zIndex: 1,
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography>{data.followers.length}</Typography>
              <Typography>Followers</Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography>{data.followings.length}</Typography>
              <Typography>Followings</Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography>{postCount}</Typography>
              <Typography>Posts</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FriendsCard;
