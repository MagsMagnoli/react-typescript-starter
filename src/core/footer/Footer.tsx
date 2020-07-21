import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Padding from 'common/Padding';
import * as styles from 'styles';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
  },
});

interface FooterProps {
  className?: string;
}

function Footer({ className }: FooterProps) {
  const classes = useStyles();
  const year = new Date().getFullYear();

  return (
    <footer className={`${className} ${classes.root}`}>
      <Padding padding={styles.Padding.p16}>
        <small>&copy; {year} Your Company Name</small>
      </Padding>
    </footer>
  );
}

export default Footer;
