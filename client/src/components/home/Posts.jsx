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
import { Avatar, Box, FormControl, Grid, Input, InputAdornment, List, ListItemText } from '@mui/material';
import { IoBookmarkOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { BiSend } from "react-icons/bi";
import { useTheme } from '@mui/material/styles';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Posts() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const theme = useTheme()  
    const darkBg = theme.palette.background.darkBg

    return (
        <Card sx={{ mt: '1rem', pb: '1rem', borderRadius: '10px', backgroundColor: darkBg }}>
            <CardHeader
                avatar={
                    <UserAvatar />
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Lora Eve"
                subheader="Seoul, Just now"
            />
            <CardMedia
                component="img"
                height="194"
                image="/static/images/cards/paella.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box >
                    <IconButton aria-label="add to favorites" sx={{ mr: '0.5rem' }}>
                        <AiOutlineHeart />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="comments"
                    >
                        <FaRegCommentDots />
                    </ExpandMore>
                </Box>
                <IconButton aria-label="share">
                    <IoBookmarkOutline />
                </IconButton>
            </CardActions>
            <FormControl variant="standard" sx={{ mx: 1, width: '-webkit-fill-available' }}>
                <Input
                    placeholder='Enter your comment...'
                    id="standard-adornment-weight"
                    aria-describedby="standard-weight-helper-text"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                            >
                                <BiSend />
                            </IconButton>
                        </InputAdornment>
                    }
                />

            </FormControl>
            <Collapse in={expanded} timeout="auto" unmountOnExit >
                <CardContent sx={{ padding: '0rem' }} style={{ paddingBottom: '0rem' }}>
                    <List
                        sx={{
                            width: '100%',
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: 300,
                            '& ul': { padding: 0 },
                            padding: '0rem'
                        }}>
                        <Grid container spacing={1}>
                            <Grid item xs={1}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mt: '5px' }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </Box>
                            </Grid>
                            <Grid item xs={11}>
                                <ListItemText sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Typography>
                                            Ali Connors
                                        </Typography>
                                        <Typography variant='caption'>
                                            3 days ago
                                        </Typography>
                                    </Box>
                                    <Box sx={{ mt: '2px' }}>
                                        <Typography>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, veniam? In officiis ipsam nemo! Voluptates repellendus quod necessitatibus ad earum, sapiente eaque vitae.
                                        </Typography>
                                    </Box>
                                </ListItemText>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} >
                            <Grid item xs={1}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mt: '5px' }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </Box>
                            </Grid>
                            <Grid item xs={11}>
                                <ListItemText sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Typography>
                                            Ali Connors
                                        </Typography>
                                        <Typography variant='caption'>
                                            3 days ago
                                        </Typography>
                                    </Box>
                                    <Box sx={{ mt: '2px' }}>
                                        <Typography>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, veniam? In officiis ipsam nemo! Voluptates repellendus quod necessitatibus ad earum, sapiente eaque vitae.
                                        </Typography>
                                    </Box>
                                </ListItemText>
                            </Grid>
                        </Grid>
                    </List>

                </CardContent>
            </Collapse>
        </Card>
    );
}
