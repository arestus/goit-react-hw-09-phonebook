import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function LoginView() {
  const [user, setUser] = useState({ email: '', password: '' });

  const dispatch = useDispatch();

  const handleChange = useCallback(
    ({ target: { name, value } }) => {
      setUser({ ...user, [name]: value });
    },
    [user],
  );

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      dispatch(authOperations.logIn(user));

      setUser({ email: '', password: '' });
    },
    [dispatch, user],
  );

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <h1>Страница логина</h1>

        <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
          <Typography component="h1" variant="h5">
            Вход
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
            value={user.email}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Пароль"
            name="password"
            autoComplete="current-password"
            type="password"
            autoFocus
            value={user.password}
            onChange={handleChange}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Войти
          </Button>
        </form>
      </Container>
    </div>
  );
}
