import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";

const InputBar = () => {
  const theme = useTheme();
  const main = theme.palette.neutral.main;
  const darkbg = theme.palette.background.darkbg;
  const alt = theme.palette.background.alt;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          height: "2.5rem",
          backgroundColor: { xs: darkbg, sm: alt },
          boxShadow: "none",
          borderRadius: { sm: "10px", xs: "44px" },
        }}
      >
        <InputBase
          sx={{ ml: { sm: 1, xs: 2 }, flex: 1, color: main }}
          placeholder="What do you want to share today?"
          inputProps={{ "aria-label": "search google maps" }}
        />
      </Paper>
    </Box>
  );
};

export default InputBar;
