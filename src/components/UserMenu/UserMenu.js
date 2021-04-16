import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
};

export default function UserMenu() {
  const email = useSelector(authSelectors.getUseremail);
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => dispatch(authOperations.logOut()), [
    dispatch,
  ]);

  return (
    <div style={styles.container}>
      <span style={styles.name}>Welcome, {email}</span>
      <NavLink to="/login" exact style={styles.link}>
        <Button color="secondary" variant="contained" onClick={onLogOut}>
          Выйти
        </Button>
      </NavLink>
    </div>
  );
}
