import * as React from 'react';
import Stories from './Stories'
import SharePost from './SharePost'
import Posts from './Post'
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import api from 'api';

function PostSectionLeft() {

  const [posts, setPosts] = React.useState([])
  const token = useSelector((state) => state.auth.token)

  useEffect(() => {
    const fetchTimeLinePosts = async () => {
      try {
        const headers = {
          'Authorization': `Bearer ${token}`
        }
        const data = await api.get('/post/timeline', { headers })
        setPosts(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchTimeLinePosts()
  }, [])
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Box sx={{ px: { xs: '0.5rem', sm: '0rem' } }}>
        <Stories />
      </Box>
      <SharePost />
      {posts?.map((post) => (
        <Posts post={post} key={post._id} />
      ))}
    </Box>
  )
}

export default PostSectionLeft 