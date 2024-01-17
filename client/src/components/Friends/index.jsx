/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Grid } from "@mui/material";
import FriendsCard from "../widget/FriendsCard";
import { useLocation } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { setAllUsers } from "@/redux/userSlice";
import { apiRequest } from "@/utils";
import { useDispatch, useSelector } from "react-redux";

const Friends = () => {
  const location = useLocation();
  const isActive = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user?._id);
  const allUsers = useSelector((state) => state.users.allUsers);
  const suggestions = allUsers.filter((user) => user?._id !== userId);
  const followers = allUsers.filter((user) => user.followings.includes(userId));
  const followings = allUsers.filter((user) => user.followers.includes(userId));
  const posts = useSelector((state) => state.posts.posts);

  const handlePostCount = (friendId) => {
    const postCount = posts.filter((post) => post.userId === friendId).length;
    return postCount;
  };

  const fetchUsers = useCallback(async () => {
    try {
      const response = await apiRequest({
        url: "/user/find-all",
      });
      dispatch(setAllUsers(response));
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    fetchUsers();
  }, [dispatch, isActive]);

  return (
    <Box sx={{ height: "100%" }}>
      {isActive === "followers" && (
        <Grid container spacing={2}>
          {followers?.map((userData, index) => (
            <Grid item key={index} xs={4}>
              <FriendsCard
                postCount={handlePostCount(userData._id)}
                data={userData}
                tab="followers"
                fetchUsers={fetchUsers}
              />
            </Grid>
          ))}
        </Grid>
      )}
      {isActive === "following" && (
        <Grid container spacing={2}>
          {followings?.map((userData, index) => (
            <Grid item key={index} xs={4}>
              <FriendsCard
                data={userData}
                tab="following"
                fetchUsers={fetchUsers}
                postCount={handlePostCount(userData._id)}
              />
            </Grid>
          ))}
        </Grid>
      )}
      {isActive === "suggestions" && (
        <Grid container spacing={2}>
          {suggestions?.map((userData, index) => (
            <Grid item key={index} xs={4}>
              <FriendsCard
                data={userData}
                tab="suggestions"
                fetchUsers={fetchUsers}
                postCount={handlePostCount(userData._id)}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Friends;
