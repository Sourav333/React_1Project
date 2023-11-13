import React from 'react'
import Rightbar from "./Rightbar";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { Box } from '@mui/system';
import { Stack,createTheme,ThemeProvider } from "@mui/material";
import Navbar from "./Navbar";
import Add from "./Add";
import { useState } from 'react';

function Home() {
    const [mode, setMode] = useState("light");

    const darkTheme = createTheme({
      palette: {
        mode: mode,
      },
    });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed/>
          <Rightbar/>
          </Stack>
          <Add/>
      </Box>
    </ThemeProvider>
  )
}

export default Home