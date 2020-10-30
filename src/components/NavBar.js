import { Drawer, AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default function NavBar() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={ drawerOpen }>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Armaros
          </Typography>
        </Toolbar>
        <Drawer anchor="left" variant="persistent">
          
        </Drawer>
      </AppBar>
  );
}