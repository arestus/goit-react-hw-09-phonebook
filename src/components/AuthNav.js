import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from '@material-ui/core/Button';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  linkLogin: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#ffffff',
  },
  activeLink: {
    color: '#E84A5F',
  },
  activeLinkLogin: {
    color: '#f50057',
  },
};

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      <Button color="secondary" variant="contained">
        Регистрация
      </Button>
    </NavLink>
    <NavLink
      to="/login"
      exact
      style={styles.linkLogin}
      activeStyle={styles.activeLinkLogin}
    >
      <Button color="inherit" variant="outlined">
        Логин
      </Button>
    </NavLink>
  </div>
);

export default AuthNav;
