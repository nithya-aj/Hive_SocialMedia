import { useTheme } from '@emotion/react'
import { Box, Collapse, Divider, Typography } from '@mui/material'
import React from 'react'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

function Settings() {
  const theme = useTheme()
  const darkbg = theme.palette.background.darkbg
  const medium = theme.palette.neutral.medium
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ p: { sm: '1rem 1rem 0rem', xs: '0rem' }, height: '100%', display: 'flex', alignItems: 'center', gap: 2 }}>
      <Box sx={{ height: '100%', width: '20%' }}>
        <Box sx={{ p: '1rem', borderRadius: '5px', ":hover": { bgcolor: darkbg }, color: medium, cursor: 'pointer' }}>Edit Profile</Box>
        <Box sx={{ p: '1rem', borderRadius: '5px', ":hover": { bgcolor: darkbg }, color: medium, cursor: 'pointer' }}>Block Users</Box>
        <Box sx={{ p: '1rem', borderRadius: '5px', ":hover": { bgcolor: darkbg }, color: medium, cursor: 'pointer' }}>Password and Security</Box>
        <Box onClick={handleClick} sx={{ p: '1rem', borderRadius: '5px', ":hover": { bgcolor: darkbg }, color: medium, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography>Posts</Typography>
          {open ? <ExpandLess /> : <ExpandMore />}
        </Box>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box sx={{ p: '1rem', borderRadius: '5px', ":hover": { bgcolor: darkbg }, color: medium, cursor: 'pointer' }}>Hidden Posts</Box>
          <Box sx={{ p: '1rem', borderRadius: '5px', ":hover": { bgcolor: darkbg }, color: medium, cursor: 'pointer' }}>Liked Posts</Box>
          <Box sx={{ p: '1rem', borderRadius: '5px', ":hover": { bgcolor: darkbg }, color: medium, cursor: 'pointer' }}>Bookmarked Posts</Box>
        </Collapse>
      </Box>
      <Divider orientation="vertical" variant="middle" flexItem />
    </Box>
  )
}

export default Settings