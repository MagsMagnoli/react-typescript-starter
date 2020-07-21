import Header from 'core/header/Header';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from 'core/sidebar/Sidebar';
import DashboardRouting from './DashboardRouting';
import Footer from 'core/footer/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    [theme.breakpoints.up('sm')]: {
      display: 'grid',
      gridTemplateAreas: `
      "header header"
      "sidebar content"
      "sidebar footer"
      `,
      gridTemplateColumns: '240rem 1fr',
      gridTemplateRows: 'auto 1fr auto',
    },
  },
  header: {
    [theme.breakpoints.up('sm')]: {
      gridArea: 'header',
    },
  },
  sidebar: {
    [theme.breakpoints.up('sm')]: {
      gridArea: 'sidebar',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    [theme.breakpoints.up('sm')]: {
      gridArea: 'content',
    },
  },
  footer: {
    [theme.breakpoints.up('sm')]: {
      gridArea: 'footer',
    },
  },
}));

// The core skeleton of the application for logged in users
function Dashboard() {
  const classes = useStyles();
  const [isMenuToggled, setMenuToggled] = useState(false);

  const toggleMenu = () => setMenuToggled(!isMenuToggled);

  return (
    <div className={classes.root}>
      <Header className={classes.header} onMenuClicked={toggleMenu} />
      <Sidebar
        className={classes.sidebar}
        isOpen={isMenuToggled}
        onClose={toggleMenu}
      />
      <main className={classes.content}>
        <DashboardRouting />
      </main>
      <Footer className={classes.footer} />
    </div>
  );
}

export default Dashboard;
