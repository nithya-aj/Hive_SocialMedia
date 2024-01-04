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
  const allUsers = useSelector((state) => state.users.allUsers);
  console.log(allUsers);

  useEffect(() => {
    if (isActive === "suggestions") {
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
    } else if (isActive === "") {
      console.log("");
    } else {
      console.log("");
    }
  }, [dispatch]);

  return (
    <Box sx={{ height: "100%" }}>
      {isActive === "suggestions" && (
        <Grid container spacing={2}>
          {allUsers?.map((userData, index) => (
            <Grid item key={index} xs={4}>
              <FriendsCard friend={userData} tab="followers" />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Friends;
