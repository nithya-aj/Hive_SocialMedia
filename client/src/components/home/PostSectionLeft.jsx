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
  const { token, user } = useSelector((state) => state.auth);
  const posts = useSelector((state) => state.posts.posts);
  const [hiddenPostCount, setHiddenPostCount] = React.useState(0);

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
        const count = response.filter((post) => post.hidden).length;
        setHiddenPostCount(count);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTimeLinePosts();
  }, [dispatch, token, user._id]);

  console.log(posts, "hiddenPost");
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {page === "post" && (
        <Box sx={{ px: { xs: "0.5rem", sm: "0rem" } }}>
          <Stories />
        </Box>
      )}
      {page !== "hiddenPosts" && <SharePost />}

      {page === "hiddenPosts" ? (
        hiddenPostCount === 0 ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            No hidden posts!
          </Box> // Display a message when there are no hidden posts
        ) : (
          Array.isArray(posts) &&
          posts.map(
            (post) =>
              post.hidden && (
                <Posts page={"hiddenPosts"} post={post} key={post._id} />
              )
          )
        )
      ) : (
        Array.isArray(posts) &&
        posts.map(
          (post) => !post.hidden && <Posts post={post} key={post._id} />
        )
      )}
    </Box>
  );
}

export default PostSectionLeft;
