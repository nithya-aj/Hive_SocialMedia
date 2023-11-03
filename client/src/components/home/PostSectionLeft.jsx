import * as React from "react";
import Stories from "./Stories";
import SharePost from "./SharePost";
import Posts from "./Post";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { apiRequest } from "utils";
import { setPosts } from "redux/postSlice";

function PostSectionLeft({ page }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
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
    fetchTimeLinePosts();
  }, [dispatch, token]);

  console.log(posts, "posts");
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {page !== "profile" && (
        <Box sx={{ px: { xs: "0.5rem", sm: "0rem" } }}>
          <Stories />
        </Box>
      )}
      <SharePost />
      {Array.isArray(posts) &&
        posts.map(
          (post) => !post.hidden && <Posts post={post} key={post._id} />
        )}
    </Box>
  );
}

export default PostSectionLeft;
