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
  const suggestions = allUsers?.filter((user) => user?._id !== userId);
  const followers = allUsers.filter((user) => user.followings.includes(userId));
  const followings = allUsers.filter((user) => user.followers.includes(userId));

  const fetchUsers = useCallback(async () => {
    try {
      const response = await apiRequest({
        url: "/user/find-all",
      });
      dispatch(setAllUsers(response.data));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchUsers();
  }, [dispatch, isActive, fetchUsers]);

  return (
    <Box sx={{ height: "100%" }}>
      {isActive === "followers" && (
        <Grid container spacing={2}>
          {followers?.map((userData, index) => (
            <Grid item key={index} xs={4}>
              <FriendsCard
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
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Friends;
