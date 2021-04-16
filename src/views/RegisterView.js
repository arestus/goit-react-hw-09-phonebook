import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

export default function RegisterView() {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleChange = useCallback(
    ({ target: { name, value } }) => {
      setNewUser({ ...newUser, [name]: value });
    },
    [newUser],
  );

  authOperations.register(newUser);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      dispatch(authOperations.register(newUser));

      setNewUser({ name: '', email: '', password: '' });
    },
    [dispatch, newUser],
  );

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <h1>Страница регистрации</h1>
        <Typography component="h1" variant="h5">
          Регистрация
        </Typography>
        <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Логин"
            name="name"
            autoComplete="login"
            autoFocus
            value={newUser.name}
            onChange={handleChange}
          />
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
            value={newUser.email}
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
            autoFocus
            type="password"
            value={newUser.password}
            onChange={handleChange}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Зарегистрироваться
          </Button>
        </form>
      </Container>
    </div>
  );
}
