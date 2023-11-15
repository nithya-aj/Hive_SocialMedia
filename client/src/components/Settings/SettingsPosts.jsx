import { useTheme } from "@emotion/react";
import { Box, IconButton, Typography } from "@mui/material";
import { IoMdSettings } from "react-icons/io";
import PostLeft from "../HomePage/PostLeft";
import { useDispatch, useSelector } from "react-redux";
import { apiRequest } from "@/utils";
import { setBookmarkedPosts, setLikedPosts } from "@/redux/postSlice";
import Post from "../HomePage/PostLeft/Post";
import { useEffect } from "react";

const SettingsPosts = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);
  const likedPosts = useSelector((state) => state.posts.likedPosts);
  const bookmarkedPosts = useSelector((state) => state.posts.bookmarkedPosts);
  const main = theme.palette.background.main;
  const textMain = theme.palette.neutral.main;
  var url = window.location.href;
  var param = url.split("/").pop();
  console.log(likedPosts);
  console.log(bookmarkedPosts);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (param === "liked") {
          const response = await apiRequest({
            method: "GET",
            url: `/post/${user._id}/liked-posts`,
            token: token,
          });
          dispatch(setLikedPosts(response));
        } else if (param === "bookmarked") {
          const response = await apiRequest({
            method: "GET",
            url: `/post/${user._id}/bookmarked-posts`,
            token: token,
          });
          dispatch(setBookmarkedPosts(response));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch, token, user._id, param]);

  return (
    <Box
      sx={{
        height: "100%",
        p: { sm: "1rem 1.5rem 0rem 1.5rem", xs: "0rem" },
        display: "flex",
        flexDirection: "column",
        gap: "0.14rem",
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          borderRadius: "10px 10px 0px 0px",
          display: "flex",
          flexDirection: "column",
          gap: "0.1rem",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            height: "3.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: "1.5rem",
            backgroundColor: main,
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontSize: "1rem", color: textMain }}
          >
            {param === "hidden" && "Hidden Posts"}
            {param === "liked" && "Liked Posts"}
            {param === "bookmarked" && "Bookmarked Posts"}
          </Typography>
          <IconButton aria-label="settings">
            <IoMdSettings
              style={{ cursor: "pointer", fontSize: "1rem", color: textMain }}
            />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          height: "100%",
          overflowY: "scroll",
          p: "1.5rem 2rem",
          bgcolor: main,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {param === "hidden" && <PostLeft page={"hiddenPosts"} />}
          {param === "liked" &&
            Array.isArray(likedPosts) &&
            likedPosts.map((post) =>
              !post.hidden ? (
                <Post page={"settings"} data={post} key={post._id} />
              ) : null
            )}
          {param === "bookmarked" &&
            Array.isArray(bookmarkedPosts) &&
            bookmarkedPosts.map((post) =>
              !post.hidden ? (
                <Post page={"settings"} data={post} key={post._id} />
              ) : null
            )}
        </Box>
      </Box>
    </Box>
  );
};

export default SettingsPosts;
