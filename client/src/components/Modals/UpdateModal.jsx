import React from "react";
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

const UpdateModal = ({ page, modal, setModal }) => {
  const theme = useTheme();
  const fontSm = theme.palette.neutral.fontSm;
  const main = theme.palette.background.main;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    height: "80%",
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
          {page === "profile" ? <EditProfile /> : <EditPost />}
        </Box>
      </Modal>
    </Backdrop>
  );
};

export default UpdateModal;
