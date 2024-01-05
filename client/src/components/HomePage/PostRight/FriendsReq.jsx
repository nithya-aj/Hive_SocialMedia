import {
  Avatar,
  Box,
  Card,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { AiFillCloseCircle } from "react-icons/ai";
import FlexCenter from "../../widget/FlexCenter";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { FaUserPlus } from "react-icons/fa";
import { apiRequest } from "@/utils";
import { setAllUsers } from "@/redux/userSlice";

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
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user?._id);
  const token = useSelector((store) => store.auth.token);
  const allUsers = useSelector((state) => state.users.allUsers);
  console.log(allUsers[5]);
  const friendReqs = allUsers.filter(
    (user) =>
      user.followings.includes(userId) &&
      !allUsers.some((follower) => follower.followings.includes(user._id))
  );

  console.log(friendReqs);

  const fetchUsers = (async () => {
    // eslint-disable-line react-hooks/exhaustive-deps
    try {
      const response = await apiRequest({
        url: "/user/find-all",
      });
      dispatch(setAllUsers(response));
    } catch (error) {
      console.log(error);
    }
  });

  const addFriend = useCallback(async (id) => { // eslint-disable-line react-hooks/exhaustive-deps
    try {
      const response = await apiRequest({
        url: `/user/follow/${id}`,
        token: token,
        method: "PUT",
      });
      fetchUsers();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    allUsers;
    friendReqs;
  }, [allUsers, friendReqs, addFriend]);

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
        {friendReqs?.map((data, id) => {
          return (
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
                <IconButton
                  aria-label="check"
                  onClick={() => addFriend(data._id)}
                >
                  <FaUserPlus style={{ color: purple }} />
                </IconButton>
                <IconButton aria-label="decline">
                  <AiFillCloseCircle style={{ color: red }} />
                </IconButton>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Card>
  );
};

export default FriendsReq;
