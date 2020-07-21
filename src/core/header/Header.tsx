import {
  AppBar,
  Avatar,
  Box,
  Button,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

interface HeaderProps {
  className?: string;
  onMenuClicked: () => void;
}

function Header({ className, onMenuClicked }: HeaderProps) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {};

  return (
    <AppBar position="fixed" className={`${className} ${classes.appBar}`}>
      <Toolbar>
        <Hidden mdUp>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={onMenuClicked}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Button component={Link} to="/">
          <Typography variant="h6">React Starter</Typography>
        </Button>
        <Box flexGrow={1} />
        <div>
          <Button
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <Avatar>M</Avatar>
          </Button>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
            color="primary"
          >
            <MenuItem component={Link} to="/profile" color="primary">
              Profile
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
