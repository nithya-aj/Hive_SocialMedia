import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UserAvatar from '../widget/UserAvatar';
import { Box, FormControl, Input, InputAdornment, List, Menu, MenuItem } from '@mui/material';
import { MdOutlineInsertComment, MdTurnedInNot, MdDeleteOutline } from "react-icons/md";
import { BiHide, BiSend } from "react-icons/bi";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useTheme } from '@mui/material/styles';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import { PiShareFat } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import api from 'api';
import { addComment, getComments } from 'redux/commentSlice';
import Comment from 'components/Comments/Comment';
import { toggleLike } from 'redux/postSlice';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const FormControlStyled = styled(FormControl)(({ theme }) => ({
    "& .MuiInputBase-root.MuiInput-root:before": {
        borderBottom: `1px solid ${theme.palette.neutral.light}`,
    },
    "& .MuiInputBase-root.MuiInput-root:after": {
        borderBottom: `1px solid ${theme.palette.neutral.purple}`,
    },
    "& .MuiInputBase-root.MuiInput-root:hover:not(.Mui-disabled):not(.Mui-error):before": {
        borderBottom: `2px solid ${theme.palette.neutral.light}`,
    },
}));

export default function Post({ post }) {
    const dispatch = useDispatch()
    const comments = useSelector((state) => {
        const postComments = state.comments.comments[post._id] || [];
        return [...postComments].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    });
    const { user, token } = useSelector((state) => state.auth)
    const [authorDetails, setAuthorDetails] = useState('')
    const [expanded, setExpanded] = useState(false);
    const [commentData, setCommentData] = useState("")

    // fetching user details
    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await api.get(`/user/find/${post.userId}`)
                const data = response.data
                setAuthorDetails(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchDetails()
    }, [post?._id, post.userId])

    // fetching comments 
    useEffect(() => {
        const fetchCommants = async () => {
            try {
                const data = await api.get(`/comment/${post._id}`)
                dispatch(getComments({ postId: post._id, comments: data.data }))
            } catch (error) {
                console.error(error)
            }
        }
        fetchCommants()
    }, [post?._id, dispatch])

    // posting comments
    const handleComment = async (e) => {
        e.preventDefault()
        try {
            const headers = {
                Authorization: `Bearer ${token}`
            }
            const data = await api.post('/comment/', { text: commentData, postId: post._id }, { headers })
            const newComment = data.data
            dispatch(addComment({ postId: post._id, comment: newComment }))
            setCommentData("")
            setExpanded(true)
        } catch (error) {
            console.error(error)
        }
    }

    // like functionality
    const handleLike = async () => {
        try {
            const headers = {
                Authorization: `Bearer ${token}`
            }
            await api.put(`/post/like/${post._id}`, {}, { headers });
            dispatch(toggleLike({ postId: post._id }))
        } catch (error) {
            console.error(error)
        }
    }

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const theme = useTheme()
    const darkbg = theme.palette.background.darkbg
    const alt = theme.palette.background.alt
    const main = theme.palette.neutral.main
    const medium = theme.palette.neutral.medium
    const fontSm = theme.palette.neutral.fontSm

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const userDropDownOptions = [
        {
            icon: <PiShareFat style={{ fontSize: '15px' }} />,
            name: 'Share',
        },
        {
            icon: <BiHide style={{ fontSize: '15px' }} />,
            name: 'Hide',
        }
    ];
    const ownerDropdownOptions = [
        {
            icon: <HiOutlinePencilSquare style={{ fontSize: '15px' }} />,
            name: 'Update',
        },
        {
            icon: <PiShareFat style={{ fontSize: '15px' }} />,
            name: 'Share',
        },
        {
            icon: <BiHide style={{ fontSize: '15px' }} />,
            name: 'Hide',
        },
        {
            icon: <MdDeleteOutline style={{ fontSize: '15px' }} />,
            name: 'Delete',
        },
    ];

    return (
        <Card sx={{ pb: '1rem', px: '1rem', boxShadow: 'none', borderRadius: { sm: '10px', xs: '0px' }, backgroundColor: { sm: darkbg, xs: alt } }}>
            <CardHeader
                sx={{
                    px: 0,
                    py: '0.7rem',
                    ".css-sgoict-MuiCardHeader-action": {
                        marginTop: '4px',
                        marginRight: '0px'
                    },
                    ".css-1ba4o25-MuiTypography-root": {
                        color: medium
                    },
                    ".css-1jrvqvi-MuiTypography-root": {
                        color: fontSm,
                        fontSize: '10px'
                    }
                }}
                avatar={
                    <UserAvatar />
                }
                action={
                    <>
                        <IconButton aria-label="settings" sx={{ color: main }}>
                            <MoreVertIcon sx={{ color: fontSm }}
                                id="options"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            />
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            {post.userId === user._id ?
                                (ownerDropdownOptions.map((option, index) => (
                                    <MenuItem key={index} onClick={handleClose}>
                                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                            {option.icon}
                                            {option.name}
                                        </Box>
                                    </MenuItem>
                                ))
                                ) :
                                (
                                    userDropDownOptions.map((option, index) => (
                                        <MenuItem key={index} onClick={handleClose}>
                                            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                                {option.icon}
                                                {option.name}
                                            </Box>
                                        </MenuItem>
                                    ))
                                )
                            }
                        </Menu>
                    </>
                }
                title={<Link to={`/profile/${user._id}`} style={{ margin: 0, padding: 0, cursor: 'pointer', textDecoration: 'none', color: main, fontSize: '0.9rem' }}>{authorDetails?.username}</Link>}
                subheader={<p style={{ display: 'flex', gap: 8, margin: 0, padding: 0 }}>{authorDetails.place} <span>{format(post?.createdAt)}</span> </p>}
            />
            <CardMedia
                component="img"
                image={`http://localhost:8080/images/${post?.imageUrl}`}
                alt="post image"
                sx={{ objectFit: 'contain', borderRadius: '10px' }}
                style={{ width: '100%', height: 'auto', maxHeight: '30rem', objectFit: 'cover' }}

            />
            <CardContent sx={{ py: '8px', px: '5px' }}>
                <Typography variant="body1" color="text.secondary">
                    {post?.desc}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 0 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    {post.likes.includes(user._id) ? (
                        <IconButton sx={{ color: main }} aria-label="add to favorites" onClick={handleLike}>
                            <FcLike />
                        </IconButton>
                    ) : (
                        <IconButton sx={{ color: main }} aria-label="add to favorites" onClick={handleLike}>
                            <FcLikePlaceholder />
                        </IconButton>
                    )}
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="comments"
                        sx={{ color: main }}
                    >
                        <MdOutlineInsertComment />
                    </ExpandMore>
                </Box>
                <IconButton sx={{ color: main }} aria-label="share">
                    <MdTurnedInNot />
                </IconButton>
            </CardActions>
            <FormControlStyled component='form' onSubmit={handleComment} variant="standard" sx={{
                px: 0, width: '-webkit-fill-available',
            }}>
                <Input
                    value={commentData}
                    type='text'
                    onChange={(e) => setCommentData(e.target.value)}
                    placeholder='Enter your comment...'
                    id="standard-adornment-weight"
                    aria-describedby="standard-weight-helper-text"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                type='submit'
                                sx={{ color: main }}
                                aria-label="toggle password visibility"
                            >
                                <BiSend />
                            </IconButton>
                        </InputAdornment>
                    }
                />

            </FormControlStyled>
            <Collapse in={expanded} timeout="auto" unmountOnExit >
                <CardContent sx={{ padding: '0rem', mt: '0.5rem' }} style={{ paddingBottom: '0rem' }}>
                    <List
                        sx={{
                            width: '100%',
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: 300,
                            '& ul': { padding: 0 },
                            padding: '0rem'
                        }}>
                        {comments?.length > 0 ? comments.map((comment) => (
                            <Comment comment={comment} key={comment._id} />
                        )) : (
                            <Typography>No comments yet!</Typography>
                        )}
                    </List>
                </CardContent>
            </Collapse>
        </Card>
    );
}
