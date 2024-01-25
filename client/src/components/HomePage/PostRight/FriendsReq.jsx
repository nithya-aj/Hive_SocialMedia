/* eslint-disable react-hooks/exhaustive-deps */
import {
  Avatar,
  Box,
  Card,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import FlexCenter from "../../widget/FlexCenter";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { FaUserPlus } from "react-icons/fa";
import { apiRequest } from "@/utils";
import { setAllUsers } from "@/redux/userSlice";
import { Link } from "react-router-dom";

const FriendsReq = () => {
  const theme = useTheme();
  const darkbg = theme.palette.background.darkbg;
  const alt = theme.palette.background.alt;
  const mediumMain = theme.palette.neutral.mediumMain;
  const medium = theme.palette.neutral.medium;
  const light = theme.palette.neutral.light;
  const textMain = theme.palette.neutral.main;
  const purple = theme.palette.neutral.purple;
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user?._id);
  const token = useSelector((store) => store.auth.token);
  const allUsers = useSelector((state) => state.users.allUsers);
  const suggestions = allUsers
    .filter((user) => user?._id !== userId)
    .filter((user) => !user.followers.includes(userId))
    .slice(0, 3);
  const friendReqs = allUsers
    .filter(
      (user) =>
        user.followings.includes(userId) && !user.followers.includes(userId)
    )
    .slice(0, 3);
  const muthalFriends = allUsers.filter(
    (user) =>
      user.followings.includes(userId) &&
      user.followers.includes(userId) &&
      user._id !== userId
  ).length;
  console.log(muthalFriends, "friends");

  console.log(friendReqs);

  const fetchUsers = async () => {
    // eslint-disable-line react-hooks/exhaustive-deps
    try {
      const response = await apiRequest({
        url: "/user/find-all",
      });
      dispatch(setAllUsers(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  const addFriend = useCallback(async (id) => {
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
  }, []);

  useEffect(() => {
    allUsers;
    friendReqs;
  }, [allUsers, friendReqs, addFriend]);

  const friendReqCard = (data) => {
    return (
      <Box
        key={data.id}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: "0.8rem 0.5rem",
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
              {muthalFriends} muthal friends
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton aria-label="check" onClick={() => addFriend(data._id)}>
            <FaUserPlus style={{ color: purple }} />
          </IconButton>
        </Box>
      </Box>
    );
  };

  return suggestions.length ? (
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
          {friendReqs.length ? "Friend Requests" : "You Might Like"}
        </Typography>
        <Link
          to={friendReqs.length ? "/friends/followers" : "/friends/suggestions"}
          style={{ textDecoration: "none" }}
        >
          <Typography
            variant="caption"
            sx={{ color: medium, cursor: "pointer" }}
          >
            See All
          </Typography>
        </Link>
      </Box>
      <FlexCenter>
        <Divider sx={{ height: "1px", width: "100%", my: "10px" }} />
      </FlexCenter>
      {friendReqs.length ? (
        <Box
          sx={{ overflow: "auto", display: "flex", flexDirection: "column" }}
        >
          {friendReqs?.map((data) => {
            return friendReqCard(data);
          })}
        </Box>
      ) : (
        <Box
          sx={{ overflow: "auto", display: "flex", flexDirection: "column" }}
        >
          {suggestions?.map((data) => {
            return friendReqCard(data);
          })}
        </Box>
      )}
    </Card>
  ) : null;
};

export default FriendsReq;
