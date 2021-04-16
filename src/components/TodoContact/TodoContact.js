import React, { useState, useCallback } from 'react';
import s from './TodoContact.module.css';
import { useDispatch } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// const mapDispatchToProps = dispatch => ({
//   onSubmit: (name, number) =>
//     dispatch(contactsOperations.addContact(name, number)),
// });

// export default connect(null, mapDispatchToProps)(TodoContact);

export default function TodoContact() {
  const dispatch = useDispatch();
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  const handleChange = useCallback(e => {
    const { name, value } = e.currentTarget;

    setContact(prev => ({ ...prev, [name]: value }));
  }, []);

  const reset = () => {
    setContact({ name: '', number: '' });
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      dispatch(contactsOperations.addContact(contact));
      reset();
    },
    [dispatch, contact],
  );

  return (
    <div className={s.titleText}>
      <h1>Phonebook</h1>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <form onSubmit={handleSubmit} className={s.headStyle}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Имя"
            name="name"
            autoComplete="name"
            autoFocus
            value={contact.name}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="number"
            label="Номер телефона"
            name="number"
            autoComplete="number"
            autoFocus
            value={contact.number}
            onChange={handleChange}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Добавить контакт
          </Button>
        </form>
      </Container>
    </div>
  );
}
