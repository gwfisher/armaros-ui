import { Drawer, AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { makeStyles, useTheme} from '@material-ui/core/styles';


export default function NavBar() {
    const classes = useStyles();
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);

    const drawerOpen = () => {
      setOpen(true);
    }

    const drawerClose = () => {
      setOpen(false);
    }

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