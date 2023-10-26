import * as React from "react";
import Stories from "./Stories";
import SharePost from "./SharePost";
import Posts from "./Post";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import api from "api";
import { setPosts } from "redux/postSlice";

function PostSectionLeft() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    const fetchTimeLinePosts = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const data = await api.get("/post/timeline", { headers });
        dispatch(setPosts(data.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchTimeLinePosts();
  }, [dispatch, token]);

  useEffect(() => {}, [posts]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Box sx={{ px: { xs: "0.5rem", sm: "0rem" } }}>
        <Stories />
      </Box>
      <SharePost />
      {posts?.map(
        (post) => !post.hidden && <Posts post={post} key={post._id}/>
      )}
    </Box>
  );
}

export default PostSectionLeft;
