import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

import Button from '@material-ui/core/Button';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

// const mapStateToProps = state => ({
//   isLoggedIn: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(Navigation);

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <nav>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        <Button variant="contained" color="primary">
          Главная
        </Button>
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          <Button variant="contained" color="primary">
            Контакты
          </Button>
        </NavLink>
      )}
    </nav>
  );
}
