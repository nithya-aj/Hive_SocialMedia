import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UserAvatar from "../widget/UserAvatar";
import {
  Box,
  FormControl,
  Input,
  InputAdornment,
  List,
  Menu,
  MenuItem,
} from "@mui/material";
import { MdDeleteOutline } from "react-icons/md";
import { BiHide, BiSolidMessageDetail } from "react-icons/bi";
import {
  HiHeart,
  HiOutlineHeart,
  HiOutlinePencilSquare,
} from "react-icons/hi2";
import { PiNavigationArrowFill, PiShareFat } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import { useEffect } from "react";
import { apiRequest } from "utils";
import { setComments } from "redux/commentSlice";
import Comment from "components/Comments/Comment";
import { setEditData, setPost } from "redux/postSlice";
import { GoBookmarkFill, GoBookmark } from "react-icons/go";
import UpdateModal from "components/Modals/UpdateModal";
import ReactTimeago from "react-timeago";
import { toast } from "react-toastify";
import { BsFillEyeSlashFill } from "react-icons/bs";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const FormControlStyled = styled(FormControl)(({ theme }) => ({
  "& .MuiInputBase-root.MuiInput-root:before": {
    borderBottom: `1px solid ${theme.palette.neutral.light}`,
  },
  "& .MuiInputBase-root.MuiInput-root:after": {
    borderBottom: `1px solid ${theme.palette.neutral.purple}`,
  },
  "& .MuiInputBase-root.MuiInput-root:hover:not(.Mui-disabled):not(.Mui-error):before":
    {
      borderBottom: `2px solid ${theme.palette.neutral.light}`,
    },
}));

export default function Post({ post, page }) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const darkbg = theme.palette.background.darkbg;
  const alt = theme.palette.background.alt;
  const main = theme.palette.neutral.main;
  const medium = theme.palette.neutral.medium;
  const fontSm = theme.palette.neutral.fontSm;
  const red = theme.palette.neutral.red;

  const comments = useSelector(
    (state) => state.comments.comments[post?._id] || []
  );
  const postCommentCount = comments?.length;
  const { user, token } = useSelector((state) => state.auth);
  const mode = useSelector((state) => state.theme.mode);
  const isLiked = post?.likes?.includes(user._id);
  const likeCount = post?.likes?.length;
  const isBookmarked = post?.bookmarkedBy?.includes(user._id);
  const [authorDetails, setAuthorDetails] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [commentData, setCommentData] = useState("");
  const [modal, setModal] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const userOptions = [
    {
      icon: <PiShareFat style={{ fontSize: "15px" }} />,
      name: "Share",
    },
    {
      icon: <BiHide style={{ fontSize: "15px" }} />,
      name: post.hidden ? "Unhide" : "Hide",
    },
  ];
  const ownerOptions = [
    {
      icon: <HiOutlinePencilSquare style={{ fontSize: "15px" }} />,
      name: "Edit",
    },
    {
      icon: <PiShareFat style={{ fontSize: "15px" }} />,
      name: "Share",
    },
    {
      icon: <BiHide style={{ fontSize: "15px" }} />,
      name: post.hidden ? "Unhide" : "Hide",
    },
    {
      icon: <MdDeleteOutline style={{ fontSize: "15px" }} />,
      name: "Delete",
    },
  ];

  // fetching user details
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await apiRequest({
          method: "GET",
          url: `/user/find/${post.userId}`,
        });
        setAuthorDetails(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetails();
  }, [post?._id, post?.userId]);

  // fetching comments
  const fetchComments = async () => {
    try {
      const response = await apiRequest({
        method: "GET",
        url: `/comment/${post._id}`,
      });
      dispatch(setComments({ postId: post._id, comments: response }));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [dispatch]); // eslint-disable-line react-hooks/exhaustive-deps

  // posting comments
  const createComment = async (e) => {
    e.preventDefault();
    try {
      await apiRequest({
        method: "POST",
        data: { text: commentData, postId: post._id },
        url: "/comment/create",
        token: token,
      });
      fetchComments();
      setCommentData("");
      setExpanded(true);
    } catch (error) {
      console.error(error);
    }
  };

  // like functionality
  const handleLike = async (postId) => {
    try {
      const response = await apiRequest({
        method: "PUT",
        url: `/post/like/${postId}`,
        token: token,
      });
      dispatch(setPost({ post: response.post }));
    } catch (error) {
      console.error(error);
    }
  };

  // bookmark functionality
  const handleBookmark = async (postId) => {
    try {
      const response = await apiRequest({
        method: "PUT",
        url: `/post/bookmark/${postId}`,
        token: token,
      });
      dispatch(setPost({ post: response.post }));
    } catch (error) {
      console.error(error);
    }
  };

  // hide post
  const handleHidePost = async (postId) => {
    try {
      const response = await apiRequest({
        method: "PUT",
        url: `/post/hide-unhide/${postId}`,
        token: token,
      });
      dispatch(setPost({ post: response.post }));
      console.log(response, "respones from handleHidePost");
      toast.success(`${response.msg}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: mode === "light" ? "light" : "dark",
      });
    } catch (error) {
      toast.error("Something went wrong", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: mode === "light" ? "light" : "dark",
      });
    }
  };

  const handleOptionClick = (option) => {
    switch (option.name) {
      case "Update":
        dispatch(setEditData(post));
        setModal(true);
        break;
      case "Share":
        console.log("Share option clicked");
        break;
      case "Hide":
        console.log("hide option!");
        handleHidePost(post._id);
        break;
      case "Delete":
        console.log("Delete option clicked");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Card
        sx={{
          pb: "1rem",
          px: "1rem",
          boxShadow: "none",
          borderRadius: { sm: "10px", xs: "0px" },
          backgroundColor: { sm: darkbg, xs: alt },
        }}
      >
        <CardHeader
          sx={{
            px: 0,
            py: "0.7rem",
            ".css-sgoict-MuiCardHeader-action": {
              marginTop: "4px",
              marginRight: "0px",
            },
            ".css-1ba4o25-MuiTypography-root": {
              color: medium,
            },
            ".css-1jrvqvi-MuiTypography-root": {
              color: fontSm,
              fontSize: "10px",
            },
          }}
          avatar={<UserAvatar />}
          action={
            <>
              <IconButton
                aria-label="settings"
                sx={{ color: main }}
                onClick={() => handleHidePost(post._id)}
              >
                {page === "hiddenPosts" ? (
                  <BsFillEyeSlashFill sx={{ color: fontSm }} />
                ) : (
                  <MoreVertIcon
                    sx={{ color: fontSm }}
                    id="options"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  />
                )}
              </IconButton>
              {page !== "hiddenPosts" && (
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  {post.userId === user._id
                    ? ownerOptions.map((option, index) => (
                        <MenuItem
                          key={index}
                          onClick={() => {
                            handleClose();
                            handleOptionClick(option);
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              gap: 1,
                              alignItems: "center",
                            }}
                          >
                            {option.icon}
                            {option.name}
                          </Box>
                        </MenuItem>
                      ))
                    : userOptions.map((option, index) => (
                        <MenuItem
                          key={index}
                          onClick={() => {
                            handleClose();
                            handleOptionClick(option);
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              gap: 1,
                              alignItems: "center",
                            }}
                          >
                            {option.icon}
                            {option.name}
                          </Box>
                        </MenuItem>
                      ))}
                </Menu>
              )}
            </>
          }
          title={
            <Link
              to={`/profile/${user._id}`}
              style={{
                margin: 0,
                padding: 0,
                cursor: "pointer",
                textDecoration: "none",
                color: main,
                fontSize: "0.9rem",
              }}
            >
              {authorDetails?.username}
            </Link>
          }
          subheader={
            <p style={{ display: "flex", gap: 8, margin: 0, padding: 0 }}>
              {authorDetails?.place}{" "}
              <span>
                <ReactTimeago date={post?.createdAt} />
              </span>{" "}
            </p>
          }
        />
        <CardMedia
          component="img"
          image={`http://localhost:8080/images/${post?.imageUrl}`}
          alt="post image"
          sx={{ objectFit: "contain", borderRadius: "10px" }}
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "30rem",
            objectFit: "cover",
          }}
        />
        <CardContent sx={{ py: "8px", px: "5px" }}>
          <Typography variant="body1" color="text.secondary">
            {post?.desc}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 0,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <IconButton
                  // disabled={page === "hiddenPosts"}
                  sx={{ color: main }}
                  aria-label="add to favorites"
                  onClick={() => handleLike(post._id)}
                >
                  {isLiked ? (
                    <HiHeart style={{ color: red }} />
                  ) : (
                    <HiOutlineHeart style={{ color: main }} />
                  )}
                </IconButton>
                {likeCount > 0 && <Typography>{likeCount}</Typography>}
              </Box>
            }
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="comments"
                sx={{ color: main }}
              >
                <BiSolidMessageDetail />
              </ExpandMore>
              {postCommentCount > 0 && (
                <Typography>{postCommentCount}</Typography>
              )}
            </Box>
          </Box>
          <IconButton
            sx={{ color: main }}
            aria-label="share"
            onClick={() => handleBookmark(post._id)}
          >
            {isBookmarked ? (
              <GoBookmarkFill style={{ color: main }} />
            ) : (
              <GoBookmark />
            )}
          </IconButton>
        </CardActions>
        {page !== "hiddenPosts" && (
          <FormControlStyled
            component="form"
            onSubmit={createComment}
            variant="standard"
            sx={{
              px: 0,
              width: "-webkit-fill-available",
            }}
          >
            <Input
              value={commentData}
              type="text"
              onChange={(e) => setCommentData(e.target.value)}
              placeholder="Enter your comment..."
              id="standard-adornment-weight"
              aria-describedby="standard-weight-helper-text"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    type="submit"
                    sx={{ color: main }}
                    aria-label="toggle password visibility"
                  >
                    <PiNavigationArrowFill
                      style={{
                        transform: "rotate(130deg)",
                        fontSize: "1.2rem",
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControlStyled>
        )}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent
            sx={{ padding: "0rem", mt: "0.5rem" }}
            style={{ paddingBottom: "0rem" }}
          >
            <List
              sx={{
                width: "100%",
                position: "relative",
                overflow: "auto",
                maxHeight: 300,
                "& ul": { padding: 0 },
                padding: "0rem",
              }}
            >
              {comments?.length > 0 ? (
                comments.map((comment) => (
                  <Comment comment={comment} key={comment._id} />
                ))
              ) : (
                <Typography>No comments yet!</Typography>
              )}
            </List>
          </CardContent>
        </Collapse>
      </Card>
      {modal && <UpdateModal page={"post"} modal={modal} setModal={setModal} />}
    </>
  );
}
