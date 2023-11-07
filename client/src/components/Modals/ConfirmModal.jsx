import { useTheme } from "@emotion/react";
import { Box, Button, Divider, Modal, Typography } from "@mui/material";
import { GoAlertFill } from "react-icons/go";
import FlexCenter from "../widget/FlexCenter";
import { apiRequest } from "@/utils";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const ConfirmModal = ({ setConfirmModal, postToDelete }) => {
  const { token } = useSelector((state) => state.auth);
  const mode = useSelector((state) => state.theme.mode);
  const theme = useTheme();
  const darkbg = theme.palette.background.darkbg;
  const light = theme.palette.neutral.light;
  const main = theme.palette.neutral.main;
  const medium = theme.palette.neutral.medium;
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    borderRadius: "10px",
    backgroundColor: { md: darkbg, sm: "transparent" },
    border: `1px solid ${light}`,
    boxShadow: 24,
  };

  const deletePost = async (postId) => {
    try {
      await apiRequest({
        method: "DELETE",
        url: `/post/${postId}/delete`,
        token: token,
      });
      setConfirmModal(false);
      toast.success(`Post deleted!`, {
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
      console.log(error);
    }
  };
  console.log(postToDelete, "postId");
  console.log(token, "token");

  return (
    <div>
      <Modal open={open} onClose={() => setConfirmModal(false)}>
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              p: 2,
              gap: 1,
              color: main,
            }}
          >
            <GoAlertFill size={17} />
            <Typography variant="h5">Delete Post!</Typography>
          </Box>
          <Divider
            style={{
              backgroundColor: light,
            }}
          />
          <Box
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <FlexCenter sx={{ p: 2, color: medium }}>
              <Typography variant="h6">
                {`You're about to permanently delete this post. Confirm?`}
              </Typography>
            </FlexCenter>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button
                variant="outlined"
                sx={{ textTransform: "none" }}
                onClick={() => setConfirmModal(false)}
              >
                Discard
              </Button>
              <Button
                variant="outlined"
                color="error"
                sx={{ textTransform: "none" }}
                onClick={() => deletePost(postToDelete)}
              >
                Confirm
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ConfirmModal;
