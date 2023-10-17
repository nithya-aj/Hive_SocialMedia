import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import UserAvatar from "components/widget/UserAvatar";
import React from "react";
import { FaPhotoVideo } from "react-icons/fa";
import { IoImage } from "react-icons/io5";

const EditPost = ({ editedPost, handleEditPost, handleInputChange }) => {
  const theme = useTheme();
  const main = theme.palette.background.main;
  const alt = theme.palette.background.alt;
  const orange = theme.palette.neutral.orange;
  const textMain = theme.palette.neutral.main;
  const darkbg = theme.palette.background.darkbg;

  return (
    <Box
      component={"form"}
      sx={{
        backgroundColor: { sm: main, xs: alt },
        p: "1rem",
        borderRadius: { sm: "10px", xs: "0px" },
        display: "flex",
        flexDirection: "column",
      }}
      encType="multipart/form-data"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "25rem",
          marginBottom: "1rem",
          borderRadius: "10px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <img
          src={`http://localhost:8080/images/${editedPost.imageUrl}`}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <IconButton
          aria-label="delete picture"
          sx={{
            position: "absolute",
            top: "0.1rem",
            right: "0.1rem",
            color: main,
          }}
        >
          <img src={"close"} alt="" />
        </IconButton>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Box>
          <UserAvatar />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              height: "2.5rem",
              backgroundColor: { xs: darkbg, sm: alt },
              boxShadow: "none",
              borderRadius: { sm: "5px", xs: "44px" },
            }}
          >
            <InputBase
              sx={{ ml: { sm: 1, xs: 2 }, flex: 1, color: textMain }}
              value={editedPost.desc}
              id="desc"
              name="desc"
              onChange={handleInputChange}
            />
          </Paper>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pt: "0.5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: "0.5rem", lg: "3rem", md: "2rem" },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              aria-label="upload picture"
              component="label"
              sx={{ color: orange }}
            >
              <input hidden accept="image/*" type="file" name="photo" />
              <IoImage />
            </IconButton>
            <Typography
              sx={{
                display: { xs: "none", md: "block", lg: "block" },
                color: textMain,
              }}
            >
              Photo
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton aria-label="video" sx={{ color: orange }}>
              <FaPhotoVideo />
            </IconButton>
            <Typography
              sx={{
                display: { xs: "none", md: "block", lg: "block" },
                color: textMain,
              }}
            >
              Video
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            gap: 2,
            display: "flex",
          }}
        >
          <Button
            type="submit"
            variant="outlined"
            color="secondary"
            sx={{ px: "1.5rem", borderRadius: "2px" }}
            onClick={handleEditPost}
          >
            Save
          </Button>
          <Button
            type="reset"
            variant="outlined"
            color="warning"
            sx={{ px: "1rem", borderRadius: "2px" }}
          >
            Clear
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EditPost;
