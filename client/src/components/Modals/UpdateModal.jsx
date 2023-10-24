import React, { useState } from "react";
import {
  Backdrop,
  Box,
  Divider,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { AiFillCloseCircle } from "react-icons/ai";
import { useTheme } from "@emotion/react";
import FlexBetween from "components/widget/FlexBetween";
import EditProfile from "./EditProfile";
import EditPost from "./EditPost";
import { useDispatch, useSelector } from "react-redux";
import {
  clearEditPostData,
  editPost,
  selectEditPostData,
} from "redux/postSlice";
import api from "api";

const UpdateModal = ({ page, modal, setModal }) => {
  const theme = useTheme();
  const fontSm = theme.palette.neutral.fontSm;
  const main = theme.palette.background.main;

  // updating post
  const editPostData = useSelector(selectEditPostData);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [editedPost, setEditedPost] = useState(editPostData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedPost({ ...editedPost, [name]: value });
  };

  const handleEditPost = async (e) => {
    e.preventDefault();
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const response = await api.put(
        `/post/update/${editedPost._id}`,
        editedPost,
        {
          headers,
        }
      );
      const updatedPostData = response.data;
      dispatch(editPost({ post: updatedPostData }));
      dispatch(clearEditPostData());
      setModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    height: page === "profile" ? "80%" : "auto",
    bgcolor: main,
    boxShadow: 24,
    borderRadius: "10px",
  };

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={modal}
    >
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FlexBetween sx={{ pl: 2, pr: 1, py: 1 }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {page === "profile" ? "Complete Profile" : "Update Post"}
            </Typography>
            <IconButton aria-label="decline" onClick={() => setModal(false)}>
              <AiFillCloseCircle />
            </IconButton>
          </FlexBetween>
          <Divider sx={{ color: fontSm }} />
          {page === "profile" ? (
            <EditProfile />
          ) : (
            <EditPost
              postData={editedPost}
              editedPost={editedPost}
              handleInputChange={handleInputChange}
              handleEditPost={handleEditPost}
            />
          )}
        </Box>
      </Modal>
    </Backdrop>
  );
};

export default UpdateModal;
