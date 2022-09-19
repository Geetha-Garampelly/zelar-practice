

import  React from "react";
  
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Login from "../loginpage/Login"
  
export default function Header() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
  
          <Typography variant="h6" 
            component="div" sx={{ flexGrow: 1 }}>
            Home Page
          </Typography>
          <Button onClick={Login} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ fontSize: 30 }}>WelCome</Box>
      </>
  );
}