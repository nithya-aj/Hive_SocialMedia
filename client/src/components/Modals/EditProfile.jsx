import { useTheme } from "@emotion/react";
import { Avatar, Box, Button, IconButton, TextField } from "@mui/material";
import React from "react";
import { IoMdCloudUpload } from "react-icons/io";

const EditProfile = () => {
  const theme = useTheme();
  const main = theme.palette.background.main;
  const alt = theme.palette.background.alt;
  const orange = theme.palette.neutral.orange;
  const purple = theme.palette.neutral.purple;
  const mediumpurple = theme.palette.neutral.mediumpurple;
  const medium = theme.palette.neutral.medium;
  return (
    <Box
      component={"form"}
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        height: "100%",
      }}
    >
      <Box
        sx={{
          borderRadius: "10px 10px 0px 0px",
          height: "20%",
          bgcolor: alt,
          display: "flex",
          justifyContent: "flex-end",
          p: 1,
          mb: "2rem",
        }}
      >
        <Box
          sx={{
            height: "5.5rem",
            width: "5.5rem",
            position: "absolute",
            top: "7rem",
            left: "2rem",
          }}
        >
          <Avatar
            sx={{
              border: `3px solid ${alt}`,
              height: "100%",
              width: "100%",
            }}
            src="https://source.unsplash.com/featured/300x118"
          />
          <Box
            sx={{
              height: "1.6rem",
              width: "1.6rem",
              backgroundColor: main,
              position: "relative",
              left: "4.5rem",
              bottom: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              border: `1px solid ${orange}`,
            }}
          >
            <IconButton>
              <IoMdCloudUpload size={"1rem"} />
            </IconButton>
          </Box>
        </Box>
        <Button
          variant="contained"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
            textTransform: "none",
            alignSelf: "flex-end",
            p: "4px 8px",
            backgroundColor: purple,
            color: main,
            ":hover": { backgroundColor: mediumpurple },
          }}
        >
          <IoMdCloudUpload size={"1.1rem"} />
          Add Cover Photo
        </Button>
      </Box>
      <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              width: "100%",
            }}
          >
            <label htmlFor="" style={{ color: medium }}>
              Your name
            </label>
            <TextField
              sx={{
                ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                  padding: "8.5px 14px",
                },
                ".css-p51h6s-MuiInputBase-input-MuiOutlinedInput-input": {
                  padding: "8.5px 14px",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              width: "100%",
            }}
          >
            <label htmlFor="" style={{ color: medium }}>
              Your username
            </label>
            <TextField
              sx={{
                ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                  padding: "8.5px 14px",
                },
                ".css-p51h6s-MuiInputBase-input-MuiOutlinedInput-input": {
                  padding: "8.5px 14px",
                },
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              width: "100%",
            }}
          >
            <label htmlFor="" style={{ color: medium }}>
              What do you do?
            </label>
            <TextField
              sx={{
                ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                  padding: "8.5px 14px",
                },
                ".css-p51h6s-MuiInputBase-input-MuiOutlinedInput-input": {
                  padding: "8.5px 14px",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              width: "100%",
            }}
          >
            <label htmlFor="" style={{ color: medium }}>
              Your email
            </label>
            <TextField
              sx={{
                ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                  padding: "8.5px 14px",
                },
                ".css-p51h6s-MuiInputBase-input-MuiOutlinedInput-input": {
                  padding: "8.5px 14px",
                },
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              width: "100%",
            }}
          >
            <label htmlFor="" style={{ color: medium }}>
              Place
            </label>
            <TextField
              sx={{
                ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                  padding: "8.5px 14px",
                },
                ".css-p51h6s-MuiInputBase-input-MuiOutlinedInput-input": {
                  padding: "8.5px 14px",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              width: "100%",
            }}
          >
            <label htmlFor="" style={{ color: medium }}>
              Date of birth
            </label>
            <TextField
              sx={{
                ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                  padding: "8.5px 14px",
                },
                ".css-p51h6s-MuiInputBase-input-MuiOutlinedInput-input": {
                  padding: "8.5px 14px",
                },
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "flex-end",
            justifyContent: "flex-end",
            pt: "3.5rem",
          }}
        >
          <Button
            type="submit"
            variant="outlined"
            color="secondary"
            sx={{ px: "1.5rem", borderRadius: "2px" }}
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

export default EditProfile;