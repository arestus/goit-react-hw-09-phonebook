import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { authSelectors } from '../redux/auth';
import { AppBar, Container, Typography } from '@material-ui/core';
// import red from '@material-ui/core/colors/red';
// import { createMuiTheme } from '@material-ui/core/styles';

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: red[500],
//     },
//   },
// });

const styles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const AppBarRender = ({ isAuthenticated }) => (
  <AppBar color="primary" position="fixed">
    <Container style={styles} fixed>
      <Typography variant="h6">Phonebook</Typography>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </Container>
  </AppBar>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBarRender);
