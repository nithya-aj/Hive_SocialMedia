import * as React from "react";
import Stories from "./Stories";
import SharePost from "./SharePost";
import Posts from "./Post";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { apiRequest } from "utils";
import { setHiddenPosts, setPosts } from "redux/postSlice";

function PostSectionLeft({ page }) {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);
  const posts = useSelector((state) => state.posts.posts);
  const hiddenPosts = useSelector((state) => state.posts.hiddenPosts);
  console.log(hiddenPosts);

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
    const fetchHiddenPosts = async () => {
      try {
        const response = await apiRequest({
          method: "GET",
          url: `/post/find/hidden-posts/${user._id}`,
          token: token,
        });
        console.log(response, "response from fetchHiddenPosts");
        dispatch(setHiddenPosts(response));
      } catch (error) {
        console.log(error);
      }
    };
    fetchTimeLinePosts();
    fetchHiddenPosts();
  }, [dispatch, token, user._id]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {page !== "profile" ||
        ("hiddenPost" && (
          <Box sx={{ px: { xs: "0.5rem", sm: "0rem" } }}>
            <Stories />
          </Box>
        ))}
      {page !== "hiddenPosts" && <SharePost />}
      {Array.isArray(posts) &&
        posts.map(
          (post) => !post.hidden && <Posts post={post} key={post._id} />
        )}

      {page === "hiddenPost" &&
        Array.isArray(hiddenPosts) &&
        hiddenPosts.map((post) => <Posts post={post} key={post._id} />)}
    </Box>
  );
}

export default PostSectionLeft;
