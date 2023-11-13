import React from 'react'
import { Box,TextField } from '@mui/material'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useState } from 'react';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'; // For Comments
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Popover from '@mui/material/Popover';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram'; // Replace with the actual Instagram icon
import PublicIcon from '@mui/icons-material/Public';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import PeopleIcon from '@mui/icons-material/People';

function Post3() {
    const [isShareClicked, setShareClicked] = useState(false);
const [comments, setComments] = useState([]); // State to store comments
const [newComment, setNewComment] = useState(''); // State to store the new comment
const [showAllComments, setShowAllComments] = useState(false); // State to control showing all comments
const [openSnackbar, setOpenSnackbar] = useState(false);
//   const handleShareClick = () => {
//     setShareClicked(!isShareClicked);
//   };

const handleSnackbarOpen = () => {
    // setPostClicked(true);
    setOpenSnackbar(true);
    // Automatically close the Snackbar after 3 seconds (3000 milliseconds)
    setTimeout(() => {
      setOpenSnackbar(false);
    }, 3000);
  };

//   const handlePostClick = () => {
//     if (!isPostClicked) {
//       handleSnackbarOpen();
//     }
//   };
//   const handlePostDoubleClick = () => {
//     setPostClicked(false);
//     // You can add additional logic for double-click behavior here if needed.
//   };
  
  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  
    setOpenSnackbar(false);
  };
  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment(''); // Clear the input field after adding a comment
    }
  };
  const [anchorEl, setAnchorEl] = useState(null); // State to control the menu anchor element

  const handleShareClick = (event) => {
    setAnchorEl(event.currentTarget);
    setShareClicked(true); // Set shareClicked to true when the share icon is clicked
  };

  const handleClose = () => {
    setAnchorEl(null);
    setShareClicked(false); // Reset shareClicked to false when the popup is closed
  };
  const open = Boolean(anchorEl);
  return (
    <Card sx={{marginTop:2}} >
    <CardHeader
      avatar={
        <Avatar src="./andrew.png">
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
           Andrew Garfield 
          </div>
        }
      subheader={
          <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="subheader" color="textSecondary">
          1 d.
        </Typography>
        <PeopleIcon style={{ marginLeft: '5px' }} /> {/* Add the Public icon */}
      </div>
      }
    />
    <CardMedia
      component="img"
      height="20%"
      image="./s3.png"
      // alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
      Are you okay "My wish for you is to become hope , people need that."
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
      </IconButton>
      <IconButton aria-label="comment" onClick={() => handleAddComment('A new comment')} >
          <ChatBubbleOutlineIcon />
        </IconButton>
      <IconButton aria-label="share" onClick={handleShareClick}>
          <ShareIcon sx={{ color: isShareClicked ? 'orange' : 'inherit' }} />
        </IconButton>
        <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
     <Box p={1}>
     <IconButton>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#1877F2' }}>
      <FacebookIcon />
    </a>
  </IconButton>
  <IconButton>
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#1DA1F2' }}>
      <TwitterIcon />
    </a>
  </IconButton>
  <IconButton>
    <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366' }}>
      <WhatsAppIcon />
    </a>
  </IconButton>
  <IconButton>
    <a href="https://t.me" target="_blank" rel="noopener noreferrer" style={{ color: '#0088cc' }}>
      <TelegramIcon />
    </a>
  </IconButton>
  <IconButton>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#E4405F' }}>
      <InstagramIcon />
    </a>
  </IconButton>
  {/* Add more share options as needed */}
        </Box>
      </Popover>
      <div style={{ flex: 1 }}></div>
      <IconButton aria-label="save" onClick={() => { handleSnackbarOpen();}}>
      <Checkbox
      icon={<BookmarkBorderIcon />}
      checkedIcon={<BookmarkIcon />}
    />
      </IconButton>
    </CardActions>
    
    <div>
        {/* Display comments */}
        {showAllComments
          ? comments.map((comment, index) => (
              <Typography
                key={index}
                variant="body2"
                sx={{
                  backgroundColor: '#f4f4f4',
                  padding: '8px',
                  borderRadius: '8px',
                  marginBottom: '8px',
                }}
              >
                {comment}
              </Typography>
            ))
          : comments.slice(0, 1).map((comment, index) => (
              <Typography
                key={index}
                variant="body2"
                sx={{
                  backgroundColor: '#f4f4f4',
                  padding: '8px',
                  borderRadius: '8px',
                  marginBottom: '8px',
                }}
              >
                {comment}
              </Typography>
            ))
        }

        {/* Show all comments button */}
        {comments.length > 1 && (
          <button
            onClick={() => setShowAllComments(!showAllComments)}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {showAllComments ? 'Hide Comments' : 'View all Comments'}
          </button>
        )}
      </div>
        {/* Comment input field */}
      <TextField
        label="Write a comment..."
        variant="outlined"
        fullWidth
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleAddComment();
          }
        }}
        InputProps={{
          endAdornment: (
            <IconButton
              onClick={handleAddComment}
              sx={{ padding: 0, marginRight: '8px' }}
            >
              <ChatBubbleOutlineIcon />
            </IconButton>
          ),
        }}
      />

<Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleSnackbarClose}>
<MuiAlert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
  Your post is saved!
</MuiAlert>
</Snackbar>
  </Card>
  )
}

export default Post3