import React from 'react';
import { useSpring, animated } from 'react-spring';

const centerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh', // Adjust as needed
  backgroundImage: 'url("christmas.jpeg")', // Add the path to your background image
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const messageStyle = {
    fontSize: '40px',
    textAlign: 'center',
    fontFamily: 'cursive',
    color: 'white', // Set the text color to white
  };
function Logout() {
  const fadeAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }, // Adjust the duration as needed
  });

  return (
    <animated.div style={{ ...fadeAnimation, ...centerStyle }}>
      <div style={messageStyle}>
        <h2>You have been logged out successfully!</h2>
        {/* You can add more content or redirect to another page if needed */}
      </div>
    </animated.div>
  );
}

export default Logout;