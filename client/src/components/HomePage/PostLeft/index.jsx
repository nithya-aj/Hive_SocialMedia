import Stories from "./Stories";
import SharePost from "./SharePost";
import Post from "./Post";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { apiRequest } from "@/utils";
import { setPosts } from "@/redux/postSlice";

function PostLeft() {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);
  const posts = useSelector((state) => state.posts.posts);

  const fetchTimeLinePosts = async () => {
    try {
      const response = await apiRequest({
        method: "GET",
        url: "/post/timeline",
        token: token,
      });
      console.log(response, "response from post");
      dispatch(setPosts(response));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTimeLinePosts();
  }, [dispatch, token, user._id]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Box sx={{ px: { xs: "0.5rem", sm: "0rem" } }}>
        <Stories />
      </Box>
      <SharePost />
      {Array.isArray(posts) &&
        posts.map(
          (post) => !post.hidden && <Post data={post} key={post._id} />
        )}
    </Box>
  );
}

export default PostLeft;
