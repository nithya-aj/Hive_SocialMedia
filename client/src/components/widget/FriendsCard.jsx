import { Box, IconButton, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { FaUserMinus, FaUserPlus, FaUserCheck } from "react-icons/fa";
import { apiRequest } from "@/utils";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import profile from "../../assets/profile.png";
import { BiSolidMessageSquareDetail } from "react-icons/bi";

const FriendsCard = ({ data, tab, fetchUsers, postCount }) => {
  const theme = useTheme();
  const mode = useSelector((state) => state.theme.mode);
  const darkbg = theme.palette.background.darkbg;
  const token = useSelector((store) => store.auth.token);
  const userId = useSelector((state) => state.auth.user?._id);

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
            "&::before": {
              content: '""',
              display: "block",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              background: `linear-gradient(transparent, ${
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.95)"
                  : "rgba(0, 0, 0, 0.95)"
              })`,
              zIndex: 1,
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
              background:
                theme.palette.mode === "light"
                  ? "linear-gradient(rgba(255, 255, 255, 0.95), transparent)"
                  : "linear-gradient(rgba(0, 0, 0, 0.95), transparent)",
              zIndex: 1,
            }}
          />

          <img
            // src={profilePhoto}
            // // src="https://source.unsplash.com/featured/340"
            src={
              data?.profilePic
                ? `http://localhost:8080/images/${data?.profilePic}`
                : profile
            }
            alt=""
            style={{
              position: "absolute",
              zIndex: 0,
              height: data?.profilePic ? "19rem" : "14rem",
              width: data?.profilePic ? "20rem" : "13rem",
              paddingTop: data?.profilePic ? "" : "1rem",
              backgroundSize: "contain",
              backgroundPosition: "center",
              display: "flex",
              alignSelf: "center",
            }}
          />
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              zIndex: 1,
              p: "1rem",
            }}
          >
            <Box sx={{ flexDirection: "column" }}>
              <Typography variant="h4">{data.name}</Typography>
              <Typography>@{data.username}</Typography>
            </Box>
            {tab === "followers" && (
              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton onClick={addFriend}>
                  {isFriend ? <BiSolidMessageSquareDetail /> : <FaUserPlus />}
                </IconButton>
                <IconButton>
                  <FaUserMinus />
                </IconButton>
              </Box>
            )}
            {tab === "following" && (
              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton>
                  <BiSolidMessageSquareDetail />
                </IconButton>
                <IconButton onClick={removeFriend}>
                  <FaUserMinus />
                </IconButton>
              </Box>
            )}
            {tab === "suggestions" && (
              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton onClick={addFriend} disabled={isFriend}>
                  {isFriend ? <FaUserCheck /> : <FaUserPlus />}
                </IconButton>
              </Box>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              zIndex: 1,
              p: "1rem",
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
