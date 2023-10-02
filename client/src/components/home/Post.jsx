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
import { Avatar, Box, FormControl, Grid, Input, InputAdornment, List, ListItemText, Menu, MenuItem } from '@mui/material';
import { MdOutlineInsertComment, MdTurnedInNot, MdOutlineFavoriteBorder, MdDeleteOutline } from "react-icons/md";
import { BiHide, BiSend } from "react-icons/bi";
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
    const comments = useSelector((state) => state.comments.comments)
    console.log(comments, 'comments getting from redux in post.jsx file');
    const { user, token } = useSelector((state) => state.auth)
    const [authorDetails, setAuthorDetails] = useState('')
    const [expanded, setExpanded] = useState(false);
    const [commentData, setCommentData] = useState("")
    const [isLiked, setIsLiked] = useState(false)

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
    }, [post?._id, post])

    // fetching comments 
    useEffect(() => {
        const fetchCommants = async () => {
            try {
                const data = await api.get(`/comment/${post._id}`)
                dispatch(getComments(data.data))
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
            const data = await api.post('/comment/', { headers }, { text: commentData, postId: post._id })
            console.log(data, 'handleComment posting comment function data in post.jsx file')
            dispatch(addComment(data.data))
            setCommentData("")
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
                    <IconButton sx={{ color: main }} aria-label="add to favorites">
                        <MdOutlineFavoriteBorder />
                    </IconButton>
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
            <FormControlStyled variant="standard" sx={{
                px: 0, width: '-webkit-fill-available',
            }}>
                <Input
                    placeholder='Enter your comment...'
                    id="standard-adornment-weight"
                    aria-describedby="standard-weight-helper-text"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
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
                        {comments?.length > 0 ? comments.map((comment, id) => (
                            <Grid container key={comment._id}>
                                <Grid item xs={2} lg={1.3} md={1.5} >
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: '5px' }}>
                                        <Avatar alt="Remy Sharp" src="https://source.unsplash.com/featured/300x198" sx={{ height: '2.3rem', width: '2.3rem' }} />
                                    </Box>
                                </Grid>
                                <Grid item xs={10} lg={10.7} md={10.5}>
                                    <ListItemText sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Typography sx={{ color: medium }}>
                                                Ali Connors
                                            </Typography>
                                            <Typography sx={{ color: medium, fontSize: '9px' }} variant='caption'>
                                                3 days ago
                                            </Typography>
                                        </Box>
                                        <Box sx={{ mt: '2px' }}>
                                            <Typography variant='body2' sx={{ color: medium, fontSize: '12px' }}>
                                                {comment.text}
                                            </Typography>
                                        </Box>
                                    </ListItemText>
                                </Grid>
                            </Grid>
                        )) : (
                            <Typography>No comments yet!</Typography>
                        )}
                    </List>
                </CardContent>
            </Collapse>
        </Card>
    );
}
