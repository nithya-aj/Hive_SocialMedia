import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";

const SearchBar = ({ placeholder, width }) => {
  const theme = useTheme();
  const main = theme.palette.neutral.main;
  const alt = theme.palette.background.alt;
  const light = theme.palette.neutral.light;
  const medium = theme.palette.neutral.medium;

  return (
    <Box sx={{ width }}>
      <Paper
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          height: "2.5rem",
          backgroundColor: alt,
          boxShadow: "none",
          borderRadius: "10px",
          border: `1px solid ${light}`,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, color: main }}
          placeholder={placeholder}
        />
        <>
          <Divider
            sx={{
              height: 28,
              m: 0.5,
              borderColor: light,
            }}
            orientation="vertical"
          />
          <IconButton sx={{ p: "10px", color: medium }} aria-label="directions">
            <SearchIcon />
          </IconButton>
        </>
      </Paper>
    </Box>
  );
};

export default SearchBar;
