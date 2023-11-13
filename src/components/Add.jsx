import React, { useState } from "react";
import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Input,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Add as AddIcon,
  Close as CloseIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import { Box } from "@mui/system";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const PostBox = styled(Box)({
  width: "100%",
  maxWidth: 600,
  padding: "20px",
  borderRadius: "10px",
//   backgroundColor: "#fff",
bgcolor:"background.default",
color:"text.primary",
  position: "relative",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  const [showFriendSuggestions, setShowFriendSuggestions] = useState(false);
  const [friendSuggestions, setFriendSuggestions] = useState([
    "Friend1",
    "Friend2",
    "Friend3",
  ]);
  const [postContent, setPostContent] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setShowFriendSuggestions(false);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    console.log("Selected Image:", file);
  };

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    console.log("Selected Video:", file);
  };

  const handleFriendSuggestionClick = (friend) => {
    setPostContent((prevContent) => prevContent + `@${friend} `);
  };

  const handlePersonAddClick = () => {
    setFriendSuggestions(["Mohanty", "Irfan", "Priya","Arnab"]); // Update with your actual friend suggestions
    setShowFriendSuggestions(true);
  };

  return (
    <>
      <Tooltip
        onClick={handleOpen}
        title="Create Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <PostBox 
        bgcolor={"background.default"} color={"text.primary"}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 1,
              color: "red",
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" color="textPrimary" textAlign="center" mb={2}>
            Create a Post
          </Typography>
          <UserBox>
            <Avatar src="sn.png" sx={{ width: 30, height: 30 }} />
            <Typography fontWeight={500} variant="span">
              Sourav
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%", marginBottom: 2 }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="outlined"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
          <Stack direction="row" gap={2} mt={2} mb={3}>
            <label htmlFor="image-upload">
              <Image color="secondary" fontSize="large" />
            </label>
            <Input
              id="image-upload"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
            <label htmlFor="video-upload">
              <VideoCameraBack color="success" fontSize="large" />
            </label>
            <Input
              id="video-upload"
              type="file"
              accept="video/*"
              style={{ display: "none" }}
              onChange={handleVideoUpload}
            />
            <PersonAdd
              color="error"
              fontSize="large"
              onClick={handlePersonAddClick}
              style={{ cursor: "pointer" }}
            />
          </Stack>
          {showFriendSuggestions &&
            friendSuggestions.map((friend, index) => (
              <Typography
                key={index}
                color="black"
                sx={{ cursor: "pointer" }}
                onClick={() => handleFriendSuggestionClick(friend)}
              >
                {friend}
              </Typography>
            ))}
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button variant="contained" color="primary">
              Post
            </Button>
          </ButtonGroup>
        </PostBox>
      </StyledModal>
    </>
  );
};

export default Add;