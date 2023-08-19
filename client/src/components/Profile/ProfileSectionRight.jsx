import { Box } from '@mui/material'
import FriendsReq from 'components/home/PostRight/FriendsReq'
import ProfileCard from 'components/widget/ProfileCard'
import React from 'react'

const ProfileSectionRight = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}> 
      <ProfileCard />
      <FriendsReq />
    </Box>
  )
}

export default ProfileSectionRight  