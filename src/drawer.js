import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ExploreIcon from '@mui/icons-material/Explore';
import PublicIcon from '@mui/icons-material/Public';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import SendIcon from '@mui/icons-material/Send';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import TokenIcon from '@mui/icons-material/Token';
import SourceIcon from '@mui/icons-material/Source';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createRef } from 'react';
import AccountSelector from './AccountSelector'

import HelloWorld from './hello';
import Wallet from './pages/wallet';
import Explore from "./pages/explore"

import {
    Sticky,
  } from 'semantic-ui-react'


import './style.css';
const drawerWidth = 200;

const pages = [
    {name:'Wallet', details: <Wallet/>, icon: <AccountBalanceWalletIcon />},
    {name:'Explore', details: <Explore/>, icon: <ExploreIcon />},
    {name:'Create', details:"Create Lorem2", icon: <AddCircleIcon />},
    {name:'Vaults', details:"Vaults Lorem2", icon: <PublicIcon />},
    {name:'Profile', details: <HelloWorld/>, icon: <PersonIcon />},
    {name:'Invite', details:"Invite Lorem2", icon: <SendIcon />},
    {name:'Logout', details:"Logout Lorem2", icon: <LogoutIcon />},
    {name:'Token', details:"token Lorem", icon: <TokenIcon/> },
    {name:'Resources', details:"Resources", icon: <SourceIcon />},
    {name:'Feedback', details:"Feedback", icon: <FeedbackIcon/> },
]


function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [selectedPage, setSelectedPage] = React.useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const drawer = (
    <div >
      <Toolbar  />
      
      {/* left side list will be shpown with icons */}
      {/* <Divider /> */}

      <List >
        <ListItem style={{textAlign: "left", color: 'black', marginTop: "25px"}}>
            <ListItemText secondary='Unit Netwrok' />
        </ListItem>

        

        {pages.map((object, index) => {
          if (index ===7) {
            return (
              <div>
              <ListItem style={{textAlign: "left", color: 'black', marginTop: "25px"}}>
                  <ListItemText secondary='Unit Token' />
              </ListItem>
              <ListItem key={index} disablePadding sx={{ background: selectedPage===index? "#dfdede": "transparent"}}>
              <ListItemButton onClick={() => setSelectedPage(index)}>
                <ListItemIcon>
                  {object.icon}
                </ListItemIcon>
                <ListItemText primary={object.name} />
              </ListItemButton>
               </ListItem>
              </div>

            )
          } else if (index ===8) {
            return (
              <div>
                <ListItem style={{textAlign: "left", color: 'black', marginTop: "25px"}}>
                    <ListItemText secondary='Support' />
                </ListItem>
                <ListItem key={index} disablePadding sx={{ background: selectedPage===index? "#dfdede": "transparent"}}>
                <ListItemButton onClick={() => setSelectedPage(index)}>
                  <ListItemIcon>
                    {object.icon}
                  </ListItemIcon>
                  <ListItemText primary={object.name} />
                </ListItemButton>
                </ListItem>
              </div>
            )
          } else {
            return (          
            <ListItem key={index} disablePadding sx={{ background: selectedPage===index? "#dfdede": "transparent"}}>
            <ListItemButton onClick={() => setSelectedPage(index)}>
              <ListItemIcon>
                {object.icon}
              </ListItemIcon>
              <ListItemText primary={object.name} />
            </ListItemButton>
            </ListItem>
              
            )
          }        
        })}




      </List>

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  
  const contextRef = createRef()

  return (
    <Box sx={{ display: 'flex' , backgroundColor: '#f8f7f7' , border : '0', boxShadow: "none"}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: 0,          
        }}
      >
        <Toolbar style={{backgroundColor: "#f8f7f7", color: "black"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>

          <Sticky context={contextRef} style={{margin: "0px"}} >
            <AccountSelector />
          </Sticky>

        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Typography paragraph>
            {
                pages[selectedPage].details
            }
        </Typography>

      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;