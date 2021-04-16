import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { authSelectors } from '../redux/auth';
import { AppBar, Container, Typography } from '@material-ui/core';

const styles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export default function AppBarRender() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <AppBar color="primary" position="fixed">
      <Container style={styles} fixed>
        <Typography variant="h6">Phonebook</Typography>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </AppBar>
  );
}

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(AppBarRender);
