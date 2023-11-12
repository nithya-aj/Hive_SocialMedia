import { useTheme } from "@emotion/react";
import { Box, IconButton, Typography } from "@mui/material";
import { IoMdSettings } from "react-icons/io";
import PostLeft from "../HomePage/PostLeft";

const SettingsPosts = () => {
  const theme = useTheme();
  const main = theme.palette.background.main;
  const textMain = theme.palette.neutral.main;
  var url = window.location.href;
  var param = url.split("/").pop();
  console.log(param);

  return (
    <Box
      sx={{
        height: "100%",
        p: { sm: "1rem 1.5rem 0rem 1.5rem", xs: "0rem" },
        display: "flex",
        flexDirection: "column",
        gap: "0.14rem",
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          borderRadius: "10px 10px 0px 0px",
          display: "flex",
          flexDirection: "column",
          gap: "0.1rem",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            height: "3.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: "1.5rem",
            backgroundColor: main,
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontSize: "1rem", color: textMain }}
          >
            {param === "hidden" && "Hidden Posts"}
            {param === "liked" && "Liked Posts"}
            {param === "bookmarked" && "Bookmarked Posts"}
          </Typography>
          <IconButton aria-label="settings">
            <IoMdSettings
              style={{ cursor: "pointer", fontSize: "1rem", color: textMain }}
            />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          height: "100%",
          overflowY: "scroll",
          p: "1.5rem 2rem",
          bgcolor: main,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {param === "hidden" && <PostLeft page={"hiddenPosts"} />}
          {param === "liked" && <PostLeft page={"likedPosts"} />}
          {param === "bookmarked" && <PostLeft page={"bookmarkedPosts"} />}
        </Box>
      </Box>
    </Box>
  );
};

export default SettingsPosts;
