import { useTheme } from "@emotion/react";
import { Box, IconButton, Typography } from "@mui/material";
import { IoMdSettings } from "react-icons/io";
import PostLeft from "../HomePage/PostLeft";

const HiddenPosts = () => {
  const theme = useTheme();
  const main = theme.palette.background.main;
  const textMain = theme.palette.neutral.main;

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
            Hidden Posts
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
          {/* {hiddenPostCount === 0 && (
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
          )} */}
          <PostLeft page={"hiddenPosts"} />
        </Box>
      </Box>
    </Box>
  );
};

export default HiddenPosts;
