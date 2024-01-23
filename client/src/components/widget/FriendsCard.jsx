import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { apiRequest } from "@/utils";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import UserAvatar from "./UserAvatar";

const FriendsCard = ({ data, tab, fetchUsers }) => {
  const theme = useTheme();
  const mode = useSelector((state) => state.theme.mode);
  const medium = theme.palette.neutral.medium;
  const purple = theme.palette.neutral.purple;
  const darkbg = theme.palette.background.darkbg;
  const alt = theme.palette.background.alt;
  const main = theme.palette.neutral.main;
  const token = useSelector((store) => store.auth.token);
  const userId = useSelector((state) => state.auth.user?._id);

  const isFriend = data.followers.includes(userId);

  const addFriend = async () => {
    if (!isFriend) {
      try {
        await apiRequest({
          url: `/user/follow/${data._id}`,
          token: token,
          method: "PUT",
        });
        fetchUsers();
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

  const unFollowFriend = async () => {
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

  const removeFriend = async () => {
    try {
      const response = await apiRequest({
        url: `/user/remove/${data._id}`,
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden",
            borderRadius: "5px",
            "&::before": {
              content: '""',
              display: "block",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              background: darkbg,
              zIndex: 1,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              zIndex: 1,
              p: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                flexDirection: "column",
                color: main,
              }}
            >
              <UserAvatar userProfile={data.profilePic} />
              <Box sx={{ flexDirection: "column" }}>
                <Typography variant="h5">{data.name}</Typography>
                <Typography variant="caption" color={medium}>
                  @{data.username}
                </Typography>
              </Box>
            </Box>
            {tab === "followers" && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  color: main,
                }}
              >
                <Box
                  sx={{
                    p: 1,
                    border: `1px solid ${alt}`,
                    borderRadius: "5px",
                    width: "5rem",
                    textAlign: "center",
                    cursor: "pointer",
                    ":hover": {
                      color: purple,
                    },
                  }}
                  onClick={removeFriend}
                >
                  Remove
                </Box>
                <Box
                  sx={{
                    p: 1,
                    border: `1px solid ${alt}`,
                    borderRadius: "5px",
                    width: "5rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    ":hover": {
                      color: purple,
                    },
                  }}
                  onClick={!isFriend && addFriend}
                >
                  {isFriend ? "Message" : "Follow"}
                </Box>
              </Box>
            )}
            {tab === "following" && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  color: main,
                }}
              >
                <Box
                  sx={{
                    p: 1,
                    border: `1px solid ${alt}`,
                    borderRadius: "5px",
                    width: "5rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    ":hover": {
                      color: purple,
                    },
                  }}
                  onClick={unFollowFriend}
                >
                  Unfollow
                </Box>
                <Box
                  sx={{
                    p: 1,
                    border: `1px solid ${alt}`,
                    borderRadius: "5px",
                    width: "5rem",
                    textAlign: "center",
                    cursor: "pointer",
                    ":hover": {
                      color: purple,
                    },
                  }}
                >
                  Message
                </Box>
              </Box>
            )}
            {tab === "suggestions" && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  color: main,
                }}
              >
                <Box
                  sx={{
                    p: 1,
                    border: `1px solid ${alt}`,
                    borderRadius: "5px",
                    width: "5rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: isFriend ? "not-allowed" : "pointer",
                    disabled: isFriend,
                    ":hover": {
                      color: isFriend ? "" : purple,
                    },
                  }}
                  disabled={isFriend}
                  onClick={!isFriend && addFriend}
                >
                  {isFriend ? "Following" : "Follow"}
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FriendsCard;
