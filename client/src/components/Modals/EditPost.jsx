import { useTheme } from "@emotion/react";
import { Box, Button, InputBase, Paper } from "@mui/material";
import UserAvatar from "../widget/UserAvatar";

const EditPost = ({ postData, handleEditPost, handleInputChange }) => {
  const theme = useTheme();
  const main = theme.palette.background.main;
  const alt = theme.palette.background.alt;
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
      {postData.imageUrl && (
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
            src={`http://localhost:8080/images/${postData?.imageUrl}`}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      )}

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
              value={postData?.desc}
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
          justifyContent: "flex-end",
          pt: "0.5rem",
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
      </Box>
    </Box>
  );
};

export default EditPost;
