import styled from '@emotion/styled'
import { AppBar, Box, Toolbar,Tooltip } from '@mui/material'
import React from 'react'
import TagIcon from '@mui/icons-material/Tag';
import { InputBase } from '@mui/material';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Mail from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState,useRef,useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link,useNavigate } from 'react-router-dom'

const InputSuggestions = styled("ul")({
    listStyle: 'none',
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '5px',
    maxHeight: '150px',
    overflowY: 'auto',
    zIndex: 1,
  });
  
  // Define a styled component for notification items
const NotificationItem = styled(ListItem)({
    // backgroundColor: 'lightgray',
    padding: '8px 8px',
    margin: '8px',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  
    '&:hover': {
      backgroundColor: 'lightblue',
    },
  });

    // Define a styled component for notification items
const emailNotificationItem = styled(ListItem)({
  // backgroundColor: 'lightgray',
  padding: '8px 8px',
  margin: '8px',
  borderRadius: '4px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  cursor: 'pointer',
  transition: 'background-color 0.3s',

  '&:hover': {
    backgroundColor: 'lightblue',
  },
});
  
  const SuggestionItem = styled("li")({
    display: 'flex', // Make the item a flex container
    alignItems: 'center', // Center the content vertically
    padding: '5px 10px',
    cursor: 'pointer',
    // backgroundColor: 'black', // Add this line to set the background color to black
    color: 'black', // Optionally, you can set the text color to white
    '&:hover': {
      color: 'blue', // Adjust hover color if needed
    },
  });
  const FriendSuggestionButton = styled('button')({
    marginLeft: '10px', // Add margin to create space between the avatar and the button
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  },
  (props) => ({
    backgroundColor: props.clicked ? 'green' : 'blue',
    color: 'white',
  })
  );
  const AvatarContainer = styled('div')({
    marginRight: '10px', // Add margin-right to create space between avatar and text
  });

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
    // position: "fixed",
    
})
const RecentLabel = styled('div')({
    fontWeight: 'bold',
    padding: '5px 10px',
    color: 'black',
  });

const Search=styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"0 10px",
    // borderRadius: theme.shape.borderRadius
    borderRadius: '10px',
    width: "30%",
    marginRight:"630px"
}))
const Icons=styled(Box)(({theme})=>({
    // backgroundColor:"white",
    display:"flex",
    gap:"20px",
    alignItems:"center"  
}))
const peopleYouMayKnow = [
    { name: 'Alice Watson', image: 'alice.png' },
    { name: 'Bob builder', image: 'bob.png' },
    { name: 'Charlie Putt', image: 'charlie.png' },
    // Add more people with names and image paths
  ];

  const PeopleYouMayKnowItem = styled('li')({
    display: 'flex',
    // flexDirection: 'column', // Display items in a vertical layout
    flexDirection: 'row', // Display items in a horizontal layout
    alignItems: 'center',
    padding: '5px 10px',
    cursor: 'pointer',
    // backgroundColor: 'black',
    color: 'black',
    '&:hover': {
      color: 'blue',
    },
  });

  

  
// const UserBox=styled(Box)(({theme})=>({
//     // backgroundColor:"white",
//     display:"flex",
//     gap:"20px",
//     alignItems:"center"
// })
// )



function Navbar() {
  const navigateLogout =useNavigate()
  function goToLogout(){
    navigateLogout("/logout")
}

    const [open,setOpen]= useState(false)
    const [profileOpen, setProfileOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);
  const [clickedButtons, setClickedButtons] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const [emailAnchorEl, setEmailAnchorEl] = useState(null); // New state for email icon popover
  const [notifications, setNotifications] = useState([]); // Array to store notifications
  const [emailNotifications, setEmailNotifications] = useState([]); // New array for email notifications

   // Define handleNotificationsClick and handleNotificationsClose functions here
   const handleNotificationsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationsClose = () => {
    setAnchorEl(null);
  };

  // for email--------------------
  const handleEmailClick = (event) => {
    setEmailAnchorEl(event.currentTarget);
  };

  const handleEmailClose = () => {
    setEmailAnchorEl(null);
  };

  // Add sample notifications
  useEffect(() => {
    const sampleNotifications = [
        {
            image: 'john.png',
            message: 'John Ling sent you a friend request.',
        },
        {
            image: 'family.png',
            message: 'You have 3 new messages from the "Family" group.',
        },
        {
            image: 'priya.png',
            message: 'Priya Kumari liked your post.',
        },
        {
            image: 'Adventure.png',
            message: 'New event notification: "Hiking Trip" by Outdoor Adventure Trails.',
        },
    ];

    setNotifications(sampleNotifications);
  }, []);

  // Add sample notifications
  useEffect(() => {
    const sample1Notifications = [
        {
            image: 'gwen.png',
            message: 'My day was good, just the usual stuff. ',
        },
        {
            image: 'irfan.jpeg',
            message: 'Awesome! ',
        },
        {
            image: 'aman.png',
            message: 'Good night',
        },
        {
            image: 'priya.png',
            message: 'Sounds like a plan!',
        },
    ];

    setEmailNotifications(sample1Notifications);
  }, []);
  
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);


    // Simulated search suggestions (you can fetch real suggestions here)
    const newSuggestions = [
      'John Ling',
      'Priya Kumari',
      'Ken Williamson',
      'Carry Minati',
      'Raj Kundra',
      'Francisco Ortega'
    ];

    // Filter suggestions based on the input value
    const filteredSuggestions = newSuggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
    setOpen(true); // Show suggestions when there's input

  };

  const handleSuggestionClick = (suggestion) => {
    setSearchValue(suggestion);
    setOpen(false);
  };
  const handleProfileImageClick = () => {
    setProfileOpen(!profileOpen);
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
 
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
    <AppBar position="sticky" sx={{ background: 'linear-gradient(45deg, #f06, #9f6)' }}>
      <StyledToolbar>
        <TagIcon />
        <Search ref={searchRef}>
          <InputBase placeholder="search..." value={searchValue} onChange={handleInputChange} />
          {open && 
        //   suggestions.length > 0 &&  if we want to display Input sugesston awlays then remove this
          (
            <InputSuggestions>
              <RecentLabel>Recent</RecentLabel>
              {suggestions.map((suggestion, index) => (
                <SuggestionItem key={index} onClick={() => handleSuggestionClick(suggestion)}>
                  <AvatarContainer>
                    <Avatar src="" />
                  </AvatarContainer>
                  {suggestion}
                </SuggestionItem>
              ))} 
              <RecentLabel style={{marginTop:'10px'}}>People You May Know</RecentLabel>
              {peopleYouMayKnow.map((person, index) => (
                <PeopleYouMayKnowItem key={index}>
                <AvatarContainer>
                  <Avatar src={person.image} />
                </AvatarContainer>
                {person.name}
                <FriendSuggestionButton  clicked={clickedButtons[person.name]}
                    onClick={() => handleFriendSuggestionClick(person.name)}>Add Friend</FriendSuggestionButton>
              </PeopleYouMayKnowItem>
              ))}
            </InputSuggestions>
          )}
        </Search>
        <Icons>
        <Tooltip title="Click it for unread Message" arrow>
          <Badge badgeContent={4} color="error" onClick={handleEmailClick} >
            <Mail />
          </Badge>
          </Tooltip>
          <Tooltip title="Click it for notifications" arrow>
          <Badge badgeContent={notifications.length} color="error" onClick={handleNotificationsClick} >
            <Notifications />
          </Badge>
          </Tooltip>
          <Tooltip title="Click on it for Logout" arrow>
          <Avatar
            sx={{ width: 35, height: 35 }}
            src="./sn.png"
            onClick={handleProfileImageClick}
          />
          </Tooltip>
        </Icons>
        <Popover
          open={Boolean(emailAnchorEl)}
          anchorEl={emailAnchorEl}
          onClose={handleEmailClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
           <List>
            {emailNotifications.map((emailNotification, index) => (
              <NotificationItem key={index}>
                <Avatar src={emailNotification.image} sx={{marginRight:'8px'}}/>
                {emailNotification.message}
              </NotificationItem>
            ))}
          </List>
        </Popover>
        <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleNotificationsClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <List>
          {notifications.map((notification, index) => (
            <NotificationItem key={index}>
                <Avatar src={notification.image} sx={{marginRight:'8px'}}/>
            {notification.message}
          </NotificationItem>
          ))}
        </List>
      </Popover>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={profileOpen}
        onClose={() => setProfileOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={goToLogout}>Logout</MenuItem>
      </Menu>
    </AppBar>
    </Box>
  )
  function handleFriendSuggestionClick(personName) {
    setClickedButtons((prevClickedButtons) => ({
      ...prevClickedButtons,
      [personName]: true,
    }));
  }
}


export default Navbar