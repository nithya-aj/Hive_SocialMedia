import { Box, Grid, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import ReactTimeago from "react-timeago";
import { apiRequest } from "../../utils";
import UserAvatar from "../widget/UserAvatar";

const Comment = ({ comment }) => {
  const theme = useTheme();
  const medium = theme.palette.neutral.medium;
  const [commentAuthor, setCommentAuthor] = useState("");

  useEffect(() => {
    const fetchCommentAuthor = async () => {
      try {
        const response = await apiRequest({
          method: "GET",
          url: `/user/find/${comment.userId}`,
        });
        console.log(response, "response from command page");
        setCommentAuthor(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCommentAuthor();
  }, [comment.userId]);

  return (
    <Grid container>
      <Grid item xs={2} lg={1.3} md={1.5}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: "5px",
          }}
        >
          <UserAvatar isBorder={false} userProfile={commentAuthor.profilePic} />
        </Box>
      </Grid>
      <Grid item xs={10} lg={10.7} md={10.5}>
        <ListItemText sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography sx={{ color: medium }}>
              {commentAuthor?.username}
            </Typography>
            <Typography
              sx={{ color: medium, fontSize: "9px" }}
              variant="caption"
            >
              <ReactTimeago date={comment.createdAt} />
            </Typography>
          </Box>
          <Box sx={{ mt: "2px" }}>
            <Typography
              variant="body2"
              sx={{ color: medium, fontSize: "12px" }}
            >
              {comment.text}
            </Typography>
          </Box>
        </ListItemText>
      </Grid>
    </Grid>
  );
};

export default Comment;
