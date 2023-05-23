import { useTheme } from '@emotion/react'
import { Box } from '@mui/material'
import React from 'react'

const PostSection = () => {

  const theme = useTheme()
  const alt = theme.palette.background.alt

  return (
    <Box bgcolor={alt} sx={{ height: '100%', borderRadius:'10px'}}>
      
    </Box>
  )
}

export default PostSection