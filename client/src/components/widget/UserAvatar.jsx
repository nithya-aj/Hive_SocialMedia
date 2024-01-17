import { Badge, Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
import profile from "../../assets/profile.png";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const UserAvatar = ({ sidebar, userProfile, isBorder }) => {
  const theme = useTheme();
  const orange = theme.palette.neutral.orange;
  return (
    <Box>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant={sidebar ? "dot" : ""}
      >
        <Avatar
          sx={{
            width: "2.5rem",
            height: "2.5rem",
            border: isBorder ? `2px solid ${orange}` : "",
            padding: "6px",
          }}
          alt="Remy Sharp"
          src={
            userProfile?.profilePic
              ? `http://localhost:8080/images/${userProfile?.profilePic}`
              : profile
          }
        />
      </StyledBadge>
    </Box>
  );
};

export default UserAvatar;
