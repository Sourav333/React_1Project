import React from 'react'
import { Box } from '@mui/system';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
    AccountBox,
    Article,
    Group,
    Home,
    ModeNight,
    Person,
    Settings,
    Storefront,
  } from "@mui/icons-material";
  import Switch from '@mui/material/Switch';
  import { createTheme } from '@mui/material/styles';
  import '../Sidebar.css';
  import { useState,useEffect,useRef } from 'react';
  import ThumbUpIcon from '@mui/icons-material/ThumbUp';
  import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import { lightBlue } from '@mui/material/colors';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PianoIcon from '@mui/icons-material/Piano';
import ChairIcon from '@mui/icons-material/Chair';
import LockIcon from '@mui/icons-material/Lock';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import BlockIcon from '@mui/icons-material/Block';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
// import CloseIcon from '@mui/icons-material/Close';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import Feed from './Feed';

//   const theme = createTheme({
//     palette: {
//       customYellow: {
//         main: '#FFFF00', // Replace with your desired light yellow color code
//       },
//     },
//   });
  
   


function Sidebar({mode,setMode}) {
    const [focusedIcon, setFocusedIcon] = useState("Home");
    const [openSection, setOpenSection] = useState(null);
 
   

    const handleIconFocus = (iconName) => {
      setFocusedIcon(iconName);
      setOpenSection(iconName === openSection ? null : iconName);
    };

    const handleCloseButtonClick = (event) => {
       // Stop the event propagation to prevent it from reaching the video feed
        event.stopPropagation();
        setFocusedIcon("Home");
        setOpenSection(null); // Set openSection to null when closing a section
      };

      const renderSectionTitle = (title) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <strong>{title}</strong>
            {openSection && (
              <ListItem disablePadding>
                <ListItemButton onClick={handleCloseButtonClick}>
                  <ListItemIcon>
                    <DisabledByDefaultIcon style={{ color: 'red',marginLeft:'30px' }}/>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            )}
          </div>
        );
      };

  // ... (your existing code)

  // Dynamic icon colors for light and dark modes
  const iconColors = {
    Home: mode === "light" ? "primary" : "action", // Choose suitable colors for light and dark modes
    Article: mode === "light" ? "secondary" : "action",
    Group: mode === "light" ? "error" : "action",
    Storefront: mode === "light" ? "info" : "action",
    Person: mode === "light" ? "warning" : "action",
    Settings: mode === "light" ? "success" : "action",
    AccountBox: "text.primary", // Inherit the text color
    ModeNight: mode === "light" ? "customYellow" : "action",
  };
    // Profile rendering-------------------------------------------------------
    // useEffect(() => {
    //     document.addEventListener('mousedown', handleClickOutsideProfile);
    //     return () => {
    //       document.removeEventListener('mousedown', handleClickOutsideProfile);
    //     };
    //   }, []);
    
    //   const handleClickOutsideProfile = (event) => {
    //     if (profileRef.current && !profileRef.current.contains(event.target)) {
    //       setIsProfileOpen(false);
    //     }
    //   };
      const renderProfileContent = () => {
        if (openSection === "AccountBox") {
          return (
            <div className="profile-content" ref={profileRef}>
      <div className="profile-container">
        <img
          src="sn.png"
          alt="Profile Image"
          style={{ maxWidth: '60px', height: '60px', borderRadius: '48%',marginTop:'20px' }}
        />
        <div className="background-image"></div>
      </div>
      <p style={{ fontSize: '16px' }}>A Frontend developer with a passion <br></br>for technology 💻,creativity 🎨,and storytelling.📝</p>
      {/* Other profile details */}
    </div>
          );
        }
        return null;
      };

    //   const [isProfileOpen, setIsProfileOpen] = useState(false); We dont need this now as we handel the stae based on useRef
      const profileRef = useRef(null);
    // Page Rendering-------------------------------------------------
    const renderPagesContent = () => {

        if (openSection === "Article") {
          return (
            <div className="pages-content" ref={pagesRef}>
              <div className="page">
                <img
                  src="life.png"
                  alt="Page 1 Image"
                  style={{ maxWidth: '100px', height: '100px', borderRadius: '8px', marginTop:'10px'}}
                />
                <p>Motivational speaker</p>
                <button ><ThumbUpIcon sx={{color:"blue"}}></ThumbUpIcon>
          </button>
              </div>
              <div className="page">
                <img
                  src="sports.png"
                  alt="Page 2 Image"
                  style={{ maxWidth: '100px', height: '100px', borderRadius: '8px',marginTop:'10px' }}
                />
                <p>Sports team</p>
                <button><ThumbUpIcon sx={{color:"blue"}}></ThumbUpIcon></button>
              </div>
              <div className="page">
                <img
                  src="Ray.png"
                  alt="Page 3 Image"
                  style={{ maxWidth: '100px', height: '100px', borderRadius: '8px',marginTop:'10px' }}
                />
                <p>Musician/Band</p>
                <button><ThumbUpIcon sx={{color:"blue"}}></ThumbUpIcon></button>
              </div>
              {/* You can add more pages as needed */}
            </div>
          );
        }
        return null;
      };
   

    // const [isPagesOpen, setIsPagesOpen] = useState(false);
    const pagesRef = useRef(null);

     //Group Rendering -------------------------------------------------------------
     const renderGroupContent = () => {

        if (openSection === "Group") {
          return (
            <div className="group-content" ref={groupRef}>
              <div className="group">
                <img
                  src="kiit.png"
                  alt="Page 1 Image"
                  style={{ maxWidth: '80px', height: '80px', borderRadius: '8px'}}
                />
                <p>KIIT - Kalinga Institute of Industrial Technology</p>
                <button style={{ color: 'blue' }}>View Group</button>
              </div>
              <div className="group">
                <img
                  src="konn.png"
                  alt="Page 2 Image"
                  style={{ maxWidth: '80px', height: '80px', borderRadius: '8px',marginTop:'10px'}}
                />
                <p>Konnexions - The IT and Web Development Society</p>
                <button style={{ color: 'blue' }}>View Group</button>
              </div>
              <div className="group">
                <img
                  src="school.png"
                  alt="Page 3 Image"
                  style={{ maxWidth: '80px', height: '80px', borderRadius: '8px',marginTop:'10px' }}
                />
                <p>Last year of our school life Margaret (S.N) English School</p>
                <button style={{ color: 'blue' }}>View Group</button>
              </div>
              {/* You can add more pages as needed */}
            </div>
          );
        }
        return null;
      };
   
    // const [isGroupOpen, setIsGroupOpen] = useState(false);
    const groupRef = useRef(null);

    // Marketplace----------------------------------------------------------------

    const renderMarketplaceContent = () => {
        if (openSection === "Storefront") {
            return (
              <div className="marketplace-content" ref={marketplaceRef}>
                <div className="marketplace-item">
                  <div className="marketplace-item-content">
                    <DirectionsCarFilledIcon style={{ marginTop: '10px' }}/>
                    <p>Vehicle</p>
                  </div>
                  {/* Add more details or actions as needed */}
                </div>
                <div className="marketplace-item">
                  <div className="marketplace-item-content">
                    <PhoneAndroidIcon />
                    <p>Electronics</p>
                  </div>
                  {/* Add more details or actions as needed */}
                </div>
                {/* Add more items as needed */}
                <div className="marketplace-item">
                  <div className="marketplace-item-content">
                    <PianoIcon />
                    <p>Instruments</p>
                  </div>
                  {/* Add more details or actions as needed */}
                </div>
                <div className="marketplace-item">
                  <div className="marketplace-item-content">
                    <ChairIcon />
                    <p>Furniture</p>
                  </div>
                  {/* Add more details or actions as needed */}
                </div>
              </div>
            );
          }
          return null;
        };
        // In this example, I've wrapped both the icon and the <p> tag in a div with the class marketplace-item-content. This container will keep the icon and description together in the same line. Adjust the styling of the container as needed to fit your layout preferences.        

    // const [isMarketplaceOpen, setIsMarketplaceOpen] = useState(false);
    const marketplaceRef = useRef(null);

    // Settings Rendering------------------------------------------------------------------

    const renderSettingContent = () => {
        if (openSection === "Settings") {
            return (
              <div className="setting-content" ref={settingRef}>
                <div className="setting-item">
                  <div className="setting-item-content">
                    <LockIcon style={{ marginTop: '10px' }}/>
                    <p>Privacy</p>
                  </div>
                  {/* Add more details or actions as needed */}
                </div>
                <div className="setting-item">
                  <div className="setting-item-content">
                    <LocalOfferIcon />
                    <p>Profile and tagging</p>
                  </div>
                  {/* Add more details or actions as needed */}
                </div>
                {/* Add more items as needed */}
                <div className="setting-item">
                  <div className="setting-item-content">
                    <InsertCommentIcon />
                    <p>Public posts</p>
                  </div>
                  {/* Add more details or actions as needed */}
                </div>
                <div className="setting-item">
                  <div className="setting-item-content">
                    <ChairIcon />
                    <p>Furniture</p>
                  </div>
                  {/* Add more details or actions as needed */}
                </div>
                <div className="setting-item">
                  <div className="setting-item-content">
                    <BlockIcon />
                    <p>Blocking</p>
                  </div>
                  {/* Add more details or actions as needed */}
                </div>
                <div className="setting-item">
                  <div className="setting-item-content">
                    <AdminPanelSettingsIcon />
                    <p>Password and Security</p>
                  </div>
                  {/* Add more details or actions as needed */}
                </div>
              </div>
            );
          }
          return null;
        };
        // In this example, I've wrapped both the icon and the <p> tag in a div with the class marketplace-item-content. This container will keep the icon and description together in the same line. Adjust the styling of the container as needed to fit your layout preferences.        

    // const [isSettingOpen, setIsSettingOpen] = useState(false);
    const settingRef = useRef(null);

    // Friends Rendering--------------------------------------------------------------

    const renderFriendsContent = () => {
        if (openSection === "Person") {
          return (
            <div className="friends-content" ref={friendsRef}>
              <div className="friend">
                <img
                  src="john.png"
                  alt="Friend 1 Image"
                  style={{ maxWidth: '50px', height: '50px', borderRadius: '50px',marginTop:'10px' }}
                />
              </div>
              <div className="friend">
                <img
                  src="edshareen.png"
                  alt="Friend 2 Image"
                  style={{ maxWidth: '50px', height: '50px', borderRadius: '50px', marginTop: '10px' }}
                />
              </div>
              <div className="friend">
                <img
                  src="priya.png"
                  alt="Friend 2 Image"
                  style={{ maxWidth: '50px', height: '50px', borderRadius: '50px', marginTop: '10px' }}
                />
              </div>
              <div className="friend">
                <img
                  src="alice.png"
                  alt="Friend 2 Image"
                  style={{ maxWidth: '50px', height: '50px', borderRadius: '50px', marginTop: '10px' }}
                />
              </div>
              <div className="friend">
                <img
                  src="gwen.png"
                  alt="Friend 2 Image"
                  style={{ maxWidth: '50px', height: '50px', borderRadius: '50px', marginTop: '10px' }}
                />
              </div>
              <div className="friend">
                <img
                  src="andrew.png"
                  alt="Friend 2 Image"
                  style={{ maxWidth: '50px', height: '50px', borderRadius: '50px', marginTop: '10px' }}
                />
              </div>
              <div className="friend">
                <p>. . .</p>
              </div>
              {/* Add more friends as needed */}
            </div>
          );
        }
        return null;
      };
      
    //   const [isFriendsOpen, setIsFriendsOpen] = useState(false);
      const friendsRef = useRef(null);

    //   sidebar components rendering checking--------------------------------
    // const [sidebarWidth, setSidebarWidth] = useState(0); // Adjusted state to track sidebar width
    
    // useEffect(() => {
    //     // Update the sidebar width when it's open
    //     if (openSection) {
    //       setSidebarWidth(200); // Adjust this value based on the width of your fixed sidebar
    //     } else {
    //       setSidebarWidth(0);
    //     }
    //   }, [openSection]);
      
  return (
    <Box sx={{ display: 'flex' }} bgcolor={mode === "light" ? "background.default" : "#212121"} color={mode === "light" ? "text.primary" : "#fff"}>
    <Box
      position="fixed"
      sx={{
        width: '200px',
        transition: 'width 0.3s ease',
        overflowX: 'hidden',
      }}
    >
        <List>
          <ListItem disablePadding>
            <ListItemButton  onFocus={() => handleIconFocus("Home")}
             onClick={(event) => handleCloseButtonClick(event)}
              style={{
                backgroundColor: focusedIcon === "Home" ? 'skyblue' : 'transparent',
              }}>
              <ListItemIcon >
               <Home color={iconColors.Home} />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton  onFocus={() => handleIconFocus("AccountBox")}
            //   onClick={() => setIsProfileOpen(!isProfileOpen)}
              style={{
                backgroundColor: focusedIcon === "AccountBox" ? 'skyblue' : 'transparent',
              }}>
              <ListItemIcon>
              <AccountBox color={iconColors.AccountBox} />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onFocus={() => handleIconFocus("Article")}
            // onClick={() => setIsPagesOpen(!isPagesOpen)}
              style={{
                backgroundColor: focusedIcon === "Article" ? 'skyblue' : 'transparent',
              }}>
              <ListItemIcon className="icon">
              <Article color={iconColors.Article} />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onFocus={() => handleIconFocus("Group")}
            // onClick={() => setIsGroupOpen(!isGroupOpen)}
              style={{
                backgroundColor: focusedIcon === "Group" ? 'skyblue' : 'transparent',
              }}>
              <ListItemIcon className="icon">
              <Group color={iconColors.Group} />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton  onFocus={() => handleIconFocus("Storefront")}
            //   onClick={() => setIsMarketplaceOpen(!isMarketplaceOpen)}
              style={{
                backgroundColor: focusedIcon === "Storefront" ? 'skyblue' : 'transparent',
              }}>
              <ListItemIcon>
              <Storefront color={iconColors.Storefront} />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton  onFocus={() => handleIconFocus("Person")}
            //   onClick={() => setIsFriendsOpen(!isFriendsOpen)}
              style={{
                backgroundColor: focusedIcon === "Person" ? 'skyblue' : 'transparent',
              }}>
              <ListItemIcon>
              <Person color={iconColors.Person} />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onFocus={() => handleIconFocus("Settings")}
            //   onClick={() => setIsSettingOpen(!isSettingOpen)}
              style={{
                backgroundColor: focusedIcon === "Settings" ? 'skyblue' : 'transparent',
              }}>
              <ListItemIcon>
              <Settings color={iconColors.Settings} />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
              <ModeNight className="custom-mode-night-icon"/>
              </ListItemIcon>
                <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
            </ListItemButton>
          </ListItem>
          </List>
      </Box>
      <Box sx={{
          width: '200px', // Adjusted width based on your sidebar width
          transition: 'width 0.3s ease',
        }}>
      {openSection && (
        <Box position="fixed"
            // top="0"
            left="200px" // Adjusted left position based on sidebar width
            sx={{
              backgroundColor: '#fff', // Adjust as needed
              padding: '12px', // Adjust as needed
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Adjust as needed
            }}>
            {openSection === "AccountBox" && renderSectionTitle("Profile")}
          {openSection === "Article" && renderSectionTitle("Discover Pages Suggested for you")}
          {openSection === "Group" && renderSectionTitle("Groups you have joined")}
          {openSection === "Storefront" && renderSectionTitle("Marketplace:")}
          {openSection === "Settings" && renderSectionTitle("Settings")}
          {openSection === "Person" && renderSectionTitle("Your Friends")}

          {renderProfileContent()}
          {renderPagesContent()}
          {renderGroupContent()}
          {renderMarketplaceContent()}
          {renderSettingContent()}
          {renderFriendsContent()}
          {/* ... (similar calls for other sections) */}
        </Box>
       
      )}
       <Feed openSection={openSection} />
      </Box>
         {/* {isGroupOpen && (
          <Box style={{ marginLeft: '200px' }}>
            {renderGroupContent()}
   
          </Box>
        )} */}
        {/* {isMarketplaceOpen && (
      <Box style={{ marginLeft: '200px' }}>
        {renderMarketplaceContent()}
      </Box>
    )} */}
    {/* {isSettingOpen && (
      <Box style={{ marginLeft: '200px' }}>
        {renderSettingContent()}
      </Box>
    )} */}
        {/* {isFriendsOpen && (
    <Box style={{ marginLeft: '200px' }}>
     {renderFriendsContent()}
    </Box>
    )} */}
    </Box>
    
  )
  
}

export default Sidebar