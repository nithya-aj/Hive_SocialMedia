import Stories from "./Stories";
import SharePost from "./SharePost";
import Post from "./Post";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { apiRequest } from "@/utils";
import { setPosts } from "@/redux/postSlice";
import noData from "@/assets/noData.png";
import { useLocation } from "react-router-dom";

function PostLeft({ page }) {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);
  const posts = useSelector((state) => state.posts.posts);
  console.log(posts);
  const [hiddenPostCount, setHiddenPostCount] = useState(0);
  const location = useLocation();
  const paramId = location.pathname.split("/")[2];

  const getPosts = async () => {
    try {
      const response = await apiRequest({
        method: "GET",
        url: "/post/find",
        token: token,
      });
      console.log(response.data, "response from post");
      dispatch(setPosts(response.data));
      const hiddenPostsLength = response.filter((post) => post.hidden).length;
      setHiddenPostCount(hiddenPostsLength);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, [dispatch, token, user._id]); // eslint-disable-line react-hooks/exhaustive-deps

  const sortedHiddenPosts = Array.isArray(posts)
    ? posts
        .slice()
        .sort((a, b) => new Date(b.likedAt) - new Date(a.likedAt))
        .reverse()
    : [];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {page === "post" && (
        <Box sx={{ px: { xs: "0.5rem", sm: "0rem" } }}>
          <Stories />
        </Box>
      )}
      {page === "post" && "profile" && <SharePost />}
      {Array.isArray(posts) && (
        <>
          {page === "hiddenPosts" && hiddenPostCount === 0 ? (
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
          ) : (
            <>
              {(() => {
                switch (page) {
                  case "hiddenPosts":
                    return sortedHiddenPosts.map((post) =>
                      post.hidden ? (
                        <Post page={"hiddenPosts"} data={post} key={post._id} />
                      ) : null
                    );
                  case "bookmarkedPosts":
                    return posts.map((post) => (
                      <Post data={post} key={post._id} />
                    ));
                  case "likedPosts":
                    return posts.map((post) => (
                      <Post data={post} key={post._id} />
                    ));
                  case "profile":
                    return posts.map((post) =>
                      post.userId === paramId && !post.hidden ? (
                        <Post data={post} key={post._id} />
                      ) : null
                    );

                  default:
                    return posts.map((post) =>
                      !post.hidden ? <Post data={post} key={post._id} /> : null
                    );
                }
              })()}
            </>
          )}
        </>
      )}
    </Box>
  );
}

export default PostLeft;
