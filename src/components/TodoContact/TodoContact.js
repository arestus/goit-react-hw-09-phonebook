import React, { Component } from 'react';
import s from './TodoContact.module.css';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class TodoContact extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.name, this.state.number);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div className={s.titleText}>
        <h1>Phonebook</h1>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <form onSubmit={this.handleSubmit} className={s.headStyle}>
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
              value={this.state.name}
              onChange={this.handleChange}
            />
            {/* <label className={s.labelStyle}>
              Name
              <input
                className={s.inputStyle}
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label> */}
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
              value={this.state.number}
              onChange={this.handleChange}
            />
            {/* <label className={s.labelStyle}>
              Number
              <input
                className={s.inputStyle}
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
              />
            </label> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              // className={classes.submit}
            >
              Добавить контакт
            </Button>
            {/* <button type="submit" className={s.button}>
              Add contact
            </button> */}
          </form>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactsOperations.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(TodoContact);
