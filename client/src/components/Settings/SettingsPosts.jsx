import { useEffect } from "react";
import { useTheme } from "@emotion/react";
import { Box, IconButton, Typography } from "@mui/material";
import { IoMdSettings } from "react-icons/io";
import PostLeft from "../HomePage/PostLeft";
import { useDispatch, useSelector } from "react-redux";
import { apiRequest } from "@/utils";
import { setBookmarkedPosts, setLikedPosts } from "@/redux/postSlice";
import Post from "../HomePage/PostLeft/Post";
import noData from "@/assets/noData.png";

const NoPostsMessage = ({ type }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      py: "22.5%",
    }}
  >
    <img src={noData} alt="" />
    No {type} posts!
  </Box>
);

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

  console.log(Array.isArray(likedPosts));

  const sortedLikedPosts = Array.isArray(likedPosts)
    ? likedPosts
        .slice()
        .sort((a, b) => new Date(b.likedAt) - new Date(a.likedAt))
        .reverse()
    : [];
  const sortedBookmarkedPosts = Array.isArray(bookmarkedPosts)
    ? bookmarkedPosts
        .slice()
        .sort((a, b) => new Date(b.bookmarkedAt) - new Date(a.bookmarkedAt))
        .reverse()
    : [];

  console.log(sortedLikedPosts);

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
          {param === "liked" ? (
            sortedLikedPosts && sortedLikedPosts.length > 0 ? (
              Array.isArray(sortedLikedPosts) &&
              sortedLikedPosts.map((post) => (
                <Post page={"settings"} data={post} key={post._id} />
              ))
            ) : (
              <NoPostsMessage type="liked" />
            )
          ) : null}
          {param === "bookmarked" ? (
            sortedBookmarkedPosts && sortedBookmarkedPosts.length > 0 ? (
              sortedBookmarkedPosts.map((post) => (
                <Post page={"settings"} data={post} key={post._id} />
              ))
            ) : (
              <NoPostsMessage type="bookmarked" />
            )
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};

export default SettingsPosts;
