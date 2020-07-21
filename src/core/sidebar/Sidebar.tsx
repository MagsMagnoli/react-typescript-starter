import {
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems: any[] = [];

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: '240rem',
  },
  listItem: {
    color: theme.palette.text.primary,
  },
}));

interface SidebarProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

function Sidebar({ className, isOpen, onClose }: SidebarProps) {
  const classes = useStyles();
  const isWide = useMediaQuery('(min-width:960px)');
  const locationId = useLocation().pathname.split('/')[1];

  return (
    <nav className={className}>
      <Drawer
        variant={isWide ? 'permanent' : 'temporary'}
        open={isOpen}
        onClose={onClose}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Hidden smDown>
          <Toolbar />
        </Hidden>
        <List>
          {navItems.map((item) => (
            <ListItem
              key={item.id}
              component={Link}
              to={`/${item.id}`}
              className={classes.listItem}
              button
              selected={locationId === item.id}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </nav>
  );
}

export default Sidebar;
