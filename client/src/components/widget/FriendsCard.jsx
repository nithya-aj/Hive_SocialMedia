import { Avatar, Box, Typography } from "@mui/material";
import FlexCenter from "./FlexCenter";
import { useTheme } from "@emotion/react";
import { FaUserMinus, FaUserPlus, FaUserCheck } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { motion } from "framer-motion";
import { apiRequest } from "@/utils";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const FriendsCard = ({ data, tab, friends }) => {
  const theme = useTheme();
  const mode = useSelector((state) => state.theme.mode);
  const darkbg = theme.palette.background.darkbg;
  const alt = theme.palette.background.alt;
  const orange = theme.palette.neutral.orange;
  const purple = theme.palette.neutral.purple;
  const token = useSelector((store) => store.auth.token);

  const isFriend = friends?.map((val) => val._id).includes(data._id);
  console.log(isFriend);

  const addFriend = async () => {
    if (!isFriend) {
      try {
        const response = await apiRequest({
          url: `/user/follow/${data._id}`,
          token: token,
          method: "PUT",
        });
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
        <FlexCenter sx={{ flexDirection: "column", gap: 0.5, py: "1rem" }}>
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
        )}
      </Box>
    </>
  );
};

export default FriendsCard;
