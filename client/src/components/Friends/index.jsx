import { Box, Grid } from "@mui/material";
import FriendsCard from "../widget/FriendsCard";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { setAllUsers } from "@/redux/userSlice";
import { apiRequest } from "@/utils";
import { useDispatch, useSelector } from "react-redux";

const Friends = () => {
  const location = useLocation();
  const isActive = location.pathname.split("/")[2];
  console.log(isActive);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user?._id);
  const allUsers = useSelector((state) => state.users.allUsers);
  const suggestions = allUsers.filter((user) => user._id !== userId);

  const followers = allUsers.filter((user) => user.followings.includes(userId));
  const followings = allUsers.filter((user) => user.followers.includes(userId));
  const friends = allUsers.filter(
    (user) =>
      user.followings.includes(userId) &&
      user.followers.includes(userId) &&
      user._id !== userId
  );

  console.log(followers);
  console.log(followings);
  console.log(friends);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await apiRequest({
          url: "/user/find-all",
        });
        dispatch(setAllUsers(response));
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, [dispatch, isActive]);

  return (
    <Box sx={{ height: "100%" }}>
      {isActive === "followers" && (
        <Grid container spacing={2}>
          {followers?.map((userData, index) => (
            <Grid item key={index} xs={4}>
              <FriendsCard friend={userData} tab="followers" />
            </Grid>
          ))}
        </Grid>
      )}
      {isActive === "following" && (
        <Grid container spacing={2}>
          {followings?.map((userData, index) => (
            <Grid item key={index} xs={4}>
              <FriendsCard friend={userData} tab="following" />
            </Grid>
          ))}
        </Grid>
      )}
      {isActive === "suggestions" && (
        <Grid container spacing={2}>
          {suggestions?.map((userData, index) => (
            <Grid item key={index} xs={4}>
              <FriendsCard friend={userData} tab="suggestions" />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Friends;
