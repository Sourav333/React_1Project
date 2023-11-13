import { Box} from '@mui/material'
import React from 'react'
import Post1 from './Post1';
import Post2 from './Post2';
import Post3 from './Post3';
import Post4 from './Post4';
import Post5 from './Post5';
import Post6 from './Post6';

function Feed(openSection) {

  return (
    <Box flex={4} p={2} sx={{ marginLeft: openSection ? '200px' : '0', transition: 'margin-left 0.3s ease' }} 
    bgcolor={"background.default"} color={"text.primary"}
    >
       <Post1/>
       <Post4/>
       <Post3/>
       <Post5/>
       <Post6/>
       <Post2/>
    </Box>
  )
}

export default Feed