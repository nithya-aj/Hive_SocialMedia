import { setPosts } from "@/redux/postSlice";
import { apiRequest } from "@/utils";
import { useTheme } from "@emotion/react";
import { Box, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import Post from "../HomePage/PostLeft/Post";
import noData from "@/assets/noData.png";

const HiddenPosts = () => {
  const theme = useTheme();
  const main = theme.palette.background.main;
  const textMain = theme.palette.neutral.main;

  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);
  const posts = useSelector((state) => state.posts.posts);
  const [hiddenPostCount, setHiddenPostCount] = useState(0);

  const fetchTimeLinePosts = async () => {
    try {
      const response = await apiRequest({
        method: "GET",
        url: "/post/timeline",
        token: token,
      });
      console.log(response, "response from post");
      dispatch(setPosts(response));
      const hiddenPostsLength = response.filter((post) => post.hidden).length;
      setHiddenPostCount(hiddenPostsLength);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTimeLinePosts();
  }, [dispatch, token, user._id, hiddenPostCount]); // eslint-disable-line react-hooks/exhaustive-deps

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
            Hidden Posts
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
          {hiddenPostCount === 0 && (
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
              No hidden posts!
            </Box>
          )}
          {Array.isArray(posts) &&
            posts.map(
              (post) =>
                post.hidden && (
                  <Post data={post} key={post._id} page={"hiddenPosts"} />
                )
            )}
        </Box>
      </Box>
    </Box>
  );
};

export default HiddenPosts;
