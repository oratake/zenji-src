import * as React from 'react';
import { AppBar, Box, createTheme, IconButton, Toolbar } from '@mui/material';
import { createStyles, Theme } from '@mui/material/styles';
import { Link } from 'react-router-dom';


const theme = createTheme();

const Dashboard = () => {
  const [open, setOpen] = React.useState(true);
  // const toggleDrawer = () => {
  //   setOpen(!open);
  // };



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            menuicon
          </IconButton>
        </Toolbar>
      </AppBar>
        禅師 zenji - Dashboard
        <div>Dashboard</div>
        <div><Link to="/">back to index</Link></div>
    </Box>
  );
}

export default Dashboard;
