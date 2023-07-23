import { Avatar, Box, CardHeader, Divider, IconButton, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FlexCenter from 'components/widget/FlexCenter';
import SearchBar from 'components/widget/SearchBar';


function RightBar() {
    return (
        <Box sx={{ display: 'flex', gap: '1rem', flexDirection: 'column', height: '100%' }}>
            <Box sx={{ px: '0.8rem' }}>
                <SearchBar />
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: '1rem',
            }}>
                <Typography variant='h5'>Message</Typography>
                <Typography variant='caption'>See All</Typography>
            </Box>
            <FlexCenter>
                <Divider sx={{ height: '1px', width: '90%' }} />
            </FlexCenter>
            <Box sx={{ overflow: 'auto' }}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="avatar">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Alex"
                    subheader={<Typography variant="caption" noWrap sx={{
                        display: 'inline-block',
                        width: '8rem',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>
                        Can you please share your latest work on react, I want to check something...
                    </Typography>}
                />
                <CardHeader
                    avatar={
                        <Avatar aria-label="avatar">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Felix"
                    subheader={<Typography variant="caption" noWrap sx={{
                        display: 'inline-block',
                        width: '8rem',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>
                        Check it out...seems wonderful...Check it out...seems wonderful...Check it out...seems wonderful...
                    </Typography>}
                />
                <CardHeader
                    avatar={
                        <Avatar aria-label="avatar">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Meenu"
                    subheader={<Typography variant="caption" noWrap sx={{
                        display: 'inline-block',
                        width: '8rem',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>
                        Hey!
                    </Typography>}
                />
                <CardHeader
                    avatar={
                        <Avatar aria-label="avatar">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Meenu"
                    subheader={<Typography variant="caption" noWrap sx={{
                        display: 'inline-block',
                        width: '8rem',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>
                        Hey!
                    </Typography>}
                />
                <CardHeader
                    avatar={
                        <Avatar aria-label="avatar">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Meenu"
                    subheader={<Typography variant="caption" noWrap sx={{
                        display: 'inline-block',
                        width: '8rem',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>
                        Hey!
                    </Typography>}
                />
                <CardHeader
                    avatar={
                        <Avatar aria-label="avatar">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Meenu"
                    subheader={<Typography variant="caption" noWrap sx={{
                        display: 'inline-block',
                        width: '8rem',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>
                        Hey!
                    </Typography>}
                />
                <CardHeader
                    avatar={
                        <Avatar aria-label="avatar">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Meenu"
                    subheader={<Typography variant="caption" noWrap sx={{
                        display: 'inline-block',
                        width: '8rem',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>
                        Hey!
                    </Typography>}
                />
                <CardHeader
                    avatar={
                        <Avatar aria-label="avatar">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Meenu"
                    subheader={<Typography variant="caption" noWrap sx={{
                        display: 'inline-block',
                        width: '8rem',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>
                        Hey!
                    </Typography>}
                />
                <CardHeader
                    avatar={
                        <Avatar aria-label="avatar">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Meenu"
                    subheader={<Typography variant="caption" noWrap sx={{
                        display: 'inline-block',
                        width: '8rem',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>
                        Hey!
                    </Typography>}
                />
                <CardHeader
                    avatar={
                        <Avatar aria-label="avatar">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Meenu"
                    subheader={<Typography variant="caption" noWrap sx={{
                        display: 'inline-block',
                        width: '8rem',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>
                        Hey!
                    </Typography>}
                />
                <CardHeader
                    avatar={
                        <Avatar aria-label="avatar">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Meenu"
                    subheader={<Typography variant="caption" noWrap sx={{
                        display: 'inline-block',
                        width: '8rem',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>
                        Hey!
                    </Typography>}
                />
                <CardHeader
                    avatar={
                        <Avatar aria-label="avatar">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Meenu"
                    subheader={<Typography variant="caption" noWrap sx={{
                        display: 'inline-block',
                        width: '8rem',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>
                        Hey!
                    </Typography>}
                />
                <CardHeader
                    avatar={
                        <Avatar aria-label="avatar">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Meenu"
                    subheader={<Typography variant="caption" noWrap sx={{
                        display: 'inline-block',
                        width: '8rem',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>
                        Hey!
                    </Typography>}
                />
                <CardHeader
                    avatar={
                        <Avatar aria-label="avatar">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Meenu"
                    subheader={<Typography variant="caption" noWrap sx={{
                        display: 'inline-block',
                        width: '8rem',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>
                        Hey!
                    </Typography>}
                />
            </Box>
        </Box>
    )
}

export default RightBar
