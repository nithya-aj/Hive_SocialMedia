import { useTheme } from "@emotion/react";
import {
  Avatar,
  Box,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { IoMdCloudUpload } from "react-icons/io";

const EditProfile = () => {
  const theme = useTheme();
  const main = theme.palette.background.main;
  const maintxt = theme.palette.neutral.main;
  const alt = theme.palette.background.alt;
  const orange = theme.palette.neutral.orange;

  return (
    <Box
      sx={{
        color: maintxt,
        p: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <Typography sx={{ fontSize: "17px" }}> Edit Your Profile </Typography>
      <Box sx={{ height: "7rem", width: "7rem" }}>
        <Avatar
          sx={{ border: `3px solid ${alt}`, height: "100%", width: "100%" }}
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
      <Box
        sx={{ width: "100%", display: "flex", gap: 2, alignItems: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: "100%",
          }}
        >
          <label htmlFor="" style={{ color: maintxt }}>
            Your name
          </label>
          <TextField
            placeholder="Elena"
            sx={{
              ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                padding: "8.5px 14px",
                // border: `1px solid ${fontSm}`
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
          <label htmlFor="" style={{ color: maintxt }}>
            Your username
          </label>
          <TextField
            placeholder="elena_34"
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
        sx={{ width: "100%", display: "flex", gap: 2, alignItems: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: "100%",
          }}
        >
          <label htmlFor="" style={{ color: maintxt }}>
            Your email
          </label>
          <TextField
            placeholder="elena@gmail.com"
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
          <label htmlFor="" style={{ color: maintxt }}>
            Date of birth
          </label>
          <TextField
            placeholder="18 June 2001"
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
        sx={{ width: "100%", display: "flex", gap: 2, alignItems: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: "100%",
          }}
        >
          <label htmlFor="" style={{ color: maintxt }}>
            Place
          </label>
          <TextField
            placeholder="Trivandrum"
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
          <label htmlFor="" style={{ color: maintxt }}>
            What do you do?
          </label>
          <TextField
            placeholder="Cartoonist "
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
        sx={{ width: "100%", display: "flex", gap: 2, alignItems: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: "100%",
          }}
        >
          <label htmlFor="" style={{ color: maintxt }}>
            Phone Number
          </label>
          <TextField
            placeholder=""
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
          <label htmlFor="" style={{ color: maintxt }}>
            Gender
          </label>
          {/* <Box
            sx={{
              width: "100%",
              borderRadius: "4px",
              height: "2.3rem",
              border: `1px solid ${fontSm}`,
            }}
          > */}
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
          {/* </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default EditProfile;
