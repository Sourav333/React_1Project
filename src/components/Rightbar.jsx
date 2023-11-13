import { Box, Typography,TextField,IconButton,Collapse,Drawer,Button, Tooltip } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';
import { styled } from '@mui/system';



function Rightbar() {
    const [reply, setReply] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [conversations, setConversations] = useState({});

    const handleSend = () => {
      // Implement logic to send the reply
      console.log('Reply:', reply);
      // Update the conversation for the selected user
      setConversations((prevConversations) => {
        const updatedConversations = { ...prevConversations };
        if (selectedUser in updatedConversations) {
          updatedConversations[selectedUser] = [
            ...(updatedConversations[selectedUser] || []),
            { sender: 'You', message: reply, timestamp: new Date() },
          ];
        } else {
          // If there is no existing conversation for the selected user, create a new one
          updatedConversations[selectedUser] = [{ sender: 'You', message: reply, timestamp: new Date() }];
        }
        return updatedConversations;
      });
      // Reset the reply input
      setReply('');
    };



    const handleUserClick = (user) => {
        setSelectedUser(user);
        setIsDrawerOpen(true);
      };

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false);
        setSelectedUser(null);
      };

      const handleAvatarHover = (user) => {
        // You can add logic to show a pop-up or tooltip when hovering over the avatar
        // For simplicity, let's just log the user's name when hovering
        console.log(`Hovered over ${user}'s avatar`);
      };
      
  return (
    <Box  flex={1.4} p={2} bgcolor={"background.default"} color={"text.primary"} >
         <Box position="fixed" width={250}>
        <Typography variant='h6' fontWeight={300}>Online Friends</Typography>
        <AvatarGroup max={6}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <Avatar alt="Remy Sharp" src="john.png" />
            <span
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '10px',
                height: '10px',
                backgroundColor: 'green',
                borderRadius: '50%',
                border: '2px solid #fff',
              }}
            />
          </div>
      <Avatar alt="Travis Howard" src="edshareen.png" />
      <div style={{ position: 'relative', display: 'inline-block' }}>
            <Avatar alt="Remy Sharp" src="priya.png" />
            <span
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '10px',
                height: '10px',
                backgroundColor: 'green',
                borderRadius: '50%',
                border: '2px solid #fff',
              }}
            />
          </div>
      <Avatar alt="Agnes Walker" src="alice.png" />
      <Avatar alt="Trevor Henderson" src="/gwen.png" />
      <Avatar alt="Agnes Walker" src="alice.png" />
      <Avatar alt="Trevor Henderson" src="/gwen.png" />
      <Avatar alt="Agnes Walker" src="alice.png" />
      <Avatar alt="Trevor Henderson" src="/gwen.png" />
      <Avatar alt="Agnes Walker" src="alice.png" />
      <Avatar alt="Trevor Henderson" src="/gwen.png" />
      <Avatar alt="Agnes Walker" src="alice.png" />
      <Avatar alt="Trevor Henderson" src="/gwen.png" />
      <Avatar alt="Agnes Walker" src="alice.png" />
      <Avatar alt="Trevor Henderson" src="/gwen.png" />
      <Avatar alt="Agnes Walker" src="alice.png" />
      <Avatar alt="Trevor Henderson" src="/gwen.png" />
    </AvatarGroup>
    <Typography variant='h6' fontWeight={300} marginTop={2} marginBottom={2}>Latest Photos</Typography>
    <ImageList>
    <ImageListItem>
            <img
              src="itachi.png"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="mustang.png"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="piano.png"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="bmw.png"
              alt=""
            />
          </ImageListItem>
    </ImageList>
    <Typography variant='h6' fontWeight={300} marginTop={2} marginBottom={2}>Latest Conversations</Typography>
    <AvatarGroup max={5} style={{ flexDirection: 'column', gap: '6px', alignItems: 'flex-start' }}>
          <Tooltip title="Click on it for Chats" arrow >
          <Avatar alt="priya" src="priya.png" onClick={() => handleUserClick('priya')} onMouseOver={() => handleAvatarHover('priya')} />
          </Tooltip> 
          <Tooltip title="Click on it for Chats" arrow>
          <Avatar alt="Irfan" src="irfan.jpeg" onClick={() => handleUserClick('Irfan')} />
          </Tooltip>
          <Tooltip title="Click on it for Chats" arrow>
          <Avatar alt="aman" src="aman.png" onClick={() => handleUserClick('buddy')} />
          </Tooltip>
          <Tooltip title="Click on it for Chats" arrow>
          <Avatar alt="gwen" src="gwen.png" onClick={() => handleUserClick('gwen')} />  
          </Tooltip>
          {/* Add more avatars as needed */}
        </AvatarGroup>

        <Drawer anchor="right" open={isDrawerOpen} onClose={handleCloseDrawer}>
          <Box p={2} width={250}>
            {/* Red cross icon (top right) */}
            <IconButton
              style={{ position: 'absolute', top: '8px', right: '8px' }}
              color="error"
              onClick={handleCloseDrawer}
            >
              <ClearIcon />
            </IconButton>

            {/* Conversation messages */}
            {selectedUser && (
              <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column' }}>
                {selectedUser === 'priya' && (
                  <>
                    <div style={{ alignSelf: 'flex-start', backgroundColor: '#c4e1ff', padding: '8px', borderRadius: '8px', marginBottom: '4px' }}>
                      <Typography variant="body2">Hey, have you guys seen Makoto Shinkai's "Weathering with You"? It's breathtaking!</Typography>
                    </div>
                    {/* ... (Other messages) */}
                    {/* Reply from your side to User 1 with an image */}
                    <div style={{ alignSelf: 'flex-end', backgroundColor: '#baffc9', padding: '8px', borderRadius: '8px', marginBottom: '4px' }}>
                      <Typography variant="body2">The animation and storytelling were on another level.</Typography>
                    </div>
                    <div style={{ alignSelf: 'flex-start', backgroundColor: '#c4e1ff', padding: '8px', borderRadius: '8px', marginBottom: '4px' }}>
                      <Typography variant="body2">What's your favorite Shinkai film so far?</Typography>
                    </div>
                    <div style={{ alignSelf: 'flex-end', backgroundColor: '#baffc9', padding: '8px', borderRadius: '8px', marginBottom: '4px' }}>
                      <Typography variant="body2">Tough choice, but I think "Your Name" holds a special place in my heart. The concept was mind-blowing.</Typography>
                    </div>
                    <div style={{ alignSelf: 'flex-start', backgroundColor: '#c4e1ff', padding: '8px', borderRadius: '8px', marginBottom: '4px' }}>
                      <Typography variant="body2">Speaking of anime, have you guys watched "Attack on Titan"?</Typography>
                      <img src="eren.png" alt="eren" style={{ maxWidth: '100%', marginTop: '8px', borderRadius: '8px' }} />
                    </div>
                    <div style={{ alignSelf: 'flex-end', backgroundColor: '#baffc9', padding: '8px', borderRadius: '8px', marginBottom: '4px' }}>
                      <Typography variant="body2">Oh yeah, the intensity and plot twists in that series are insane. Can't get enough of it.</Typography>
                    </div>
                    <div style={{ alignSelf: 'flex-start', backgroundColor: '#c4e1ff', padding: '8px', borderRadius: '8px', marginBottom: '4px' }}>
                      <Typography variant="body2">Any other anime recommendations? I need something new to binge.</Typography>
                    </div>
                    <div style={{ alignSelf: 'flex-end', backgroundColor: '#baffc9', padding: '8px', borderRadius: '8px', marginBottom: '4px' }}>
                      <Typography variant="body2">"Jujutsu Kaisen" is getting a lot of hype lately. The action sequences are incredible.</Typography>
                    </div>
                    <div style={{ alignSelf: 'flex-start', backgroundColor: '#c4e1ff', padding: '8px', borderRadius: '8px', marginBottom: '4px' }}>
                      <Typography variant="body2">Sounds like a plan!</Typography>
                    </div>
                  </>
                )}
                {selectedUser === 'Irfan' && (
                  <>
                    <div style={{ alignSelf: 'flex-start', backgroundColor: '#c4e1ff', padding: '8px', borderRadius: '8px', marginBottom: '4px' }}>
                      <Typography variant="body2">Hi Bro</Typography>
                    </div>
                    {/* ... (Other messages) */}
                    {/* Reply from your side to User 2 with an image */}
                    <div style={{ alignSelf: 'flex-end', backgroundColor: '#baffc9', padding: '8px', borderRadius: '8px', marginBottom: '4px' }}>
                      <Typography variant="body2">Hi Irfan</Typography>                     
                    </div>
                    <div style={{ alignSelf: 'flex-start', backgroundColor: '#c4e1ff', padding: '8px', borderRadius: '8px', marginBottom: '4px' }}>
                      <Typography variant="body2">I'm getting married</Typography>
                    </div>
                    <div style={{ alignSelf: 'flex-end', backgroundColor: '#baffc9', padding: '8px', borderRadius: '8px', marginBottom: '4px' }}>
                      <Typography variant="body2">With whom</Typography>
                    </div>
                    <div style={{ alignSelf: 'flex-start', backgroundColor: '#c4e1ff', padding: '8px', borderRadius: '8px', marginBottom: '4px' }}>
                      <Typography variant="body2">Ayesha Mariam</Typography>
                    </div>
                    <div style={{ alignSelf: 'flex-start', backgroundColor: '#c4e1ff', padding: '8px', borderRadius: '8px', marginBottom: '4px' }}>
                      <Typography variant="body2">This is her photo</Typography>
                      <img src="ozge.png" alt="Beautiful Sunset" style={{ maxWidth: '100%', marginTop: '8px', borderRadius: '8px' }} />
                    </div>
                    <div style={{ alignSelf: 'flex-end', backgroundColor: '#baffc9', padding: '8px', borderRadius: '8px', marginBottom: '4px' }}>
                      <Typography variant="body2">Congratulation bro !!!</Typography>                     
                    </div>
                    <div style={{ alignSelf: 'flex-start', backgroundColor: '#c4e1ff', padding: '8px', borderRadius: '8px', marginBottom: '4px' }}>
                      <Typography variant="body2">We have organized our wedding for this December,and we would be delighted if you could join us.</Typography>
                    </div>
                    <div style={{ alignSelf: 'flex-end', backgroundColor: '#baffc9', padding: '8px', borderRadius: '8px', marginBottom: '4px' }}>
                      <Typography variant="body2">Sure bro I will try 👍</Typography>
                    </div>
                  </>
                )}
                {selectedUser === 'buddy' && (
                  <>
                    <div style={{ alignSelf: 'flex-start', backgroundColor: '#c4e1ff', padding: '8px', borderRadius: '8px', marginBottom: '4px' }}>
                      <Typography variant="body2">Hey buddy, what's up?</Typography>
                    </div>
                    {/* ... (Other messages) */}
                    {/* Reply from your side to User 1 with an image */}
                    <div style={{ alignSelf: 'flex-end', backgroundColor: '#baffc9', padding: '8px', borderRadius: '8px', marginBottom: '4px' }}>
                      <Typography variant="body2">Not much, just dealing with some stuff. How about you?</Typography>
                    </div>
                    <div style={{ alignSelf: 'flex-start', backgroundColor: '#c4e1ff', padding: '8px', borderRadius: '8px', marginBottom: '4px' }}>
                      <Typography variant="body2">just the usual grind, you know. Work's been hectic.</Typography>
                    </div>
                    <div style={{ alignSelf: 'flex-end', backgroundColor: '#baffc9', padding: '8px', borderRadius: '8px', marginBottom: '4px' }}>
                      <Typography variant="body2">Yeah, work can be a real pain.I hope something good comes your way soon.</Typography>
                    </div>
                    <div style={{ alignSelf: 'flex-start', backgroundColor: '#c4e1ff', padding: '8px', borderRadius: '8px', marginBottom: '4px' }}>
                      <Typography variant="body2">Ameeron ki duniya mein, hum hai bechaare gareeb.</Typography>
                    </div>
                    <div style={{ alignSelf: 'flex-end', backgroundColor: '#baffc9', padding: '8px', borderRadius: '8px', marginBottom: '4px' }}>
                      <Typography variant="body2">Oh what happened, spill the beans! </Typography>
                    </div>
                    <div style={{ alignSelf: 'flex-start', backgroundColor: '#c4e1ff', padding: '8px', borderRadius: '8px', marginBottom: '4px' }}>
                      <Typography variant="body2">Khodi jannat mane, ab sukoon ki chah nahi,<br></br>
                          Thokar bina manzil le chale, ab woh raah nahi.<br></br>
                          Dhaage hain sab, ab mai lot ke jau kaha,<br></br>
                          Ghar pe intezaar karne wali, woh nahi.</Typography>
                    </div>
                    <div style={{ alignSelf: 'flex-end', backgroundColor: '#baffc9', padding: '8px', borderRadius: '8px', marginBottom: '4px' }}>
                      <Typography variant="body2">Let's catch up soon, maybe over some chai and share more of these tales. </Typography>
                    </div>
                    <div style={{ alignSelf: 'flex-start', backgroundColor: '#c4e1ff', padding: '8px', borderRadius: '8px', marginBottom: '4px' }}>
                      <Typography variant="body2">Absolutely! Friends and chai, the perfect remedy for everything.</Typography>
                    </div>
                  </>
                )}
                {selectedUser === 'gwen' && (
                  <>
                    <div style={{ alignSelf: 'flex-start', backgroundColor: '#ffc4cb', padding: '8px', borderRadius: '8px', marginBottom: '4px' }}>
                      
                      <Typography variant="body2">Hello, how's it going?</Typography>
                    </div>
                    {/* ... (Other messages) */}
                    {/* Reply from your side to User 3 with a longer message */}
                    <div style={{ alignSelf: 'flex-end', backgroundColor: '#baffc9', padding: '8px', borderRadius: '8px', marginBottom: '4px', maxWidth: '70%' }}>
                      <Typography variant="body2">
                        I'm doing well, thanks! I had a busy day at work, but now I'm enjoying some free time. What about you? How was your day?
                      </Typography>
                    </div>
                  </>
                )}
                {conversations[selectedUser]?.map((message) => (
                    <div
                      key={message.timestamp} // Use a unique identifier like the timestamp
                      style={{
                        alignSelf: message.sender === 'You' ? 'flex-end' : 'flex-start',
                        backgroundColor: message.sender === 'You' ? '#baffc9' : '#c4e1ff',
                        padding: '8px',
                        borderRadius: '8px',
                        marginBottom: '4px',
                        maxWidth: '70%',
                      }}
                    >
                      <Typography variant="body2">{message.message}</Typography>
                    </div>
                  ))}
                {/* Add more conversation messages for the selected user */}
              </div>
            )}
            {/* Reply input */}
            <Collapse in={selectedUser !== null}>
          <Box display="flex" alignItems="center" marginTop={2}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder={`Reply to ${selectedUser}...`}
              value={reply}
              onChange={(e) => setReply(e.target.value)}
            />
            <IconButton color="primary" onClick={handleSend}>
              <SendIcon />
            </IconButton>
          </Box>
        </Collapse>
          </Box>
        </Drawer>      
        </Box>
        </Box>
  )
}

export default Rightbar