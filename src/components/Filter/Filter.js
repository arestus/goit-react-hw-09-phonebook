import React from 'react';
import s from './Filter.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, ChangeFilter } from '../../redux/contacts';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);

  const onChange = e => dispatch(ChangeFilter(e.target.value));

  return (
    <div className={s.filterTitle}>
      <Typography className={s.typography} component="h1" variant="h5">
        Поиск контакта по имени
      </Typography>
      <Container>
        <TextField
          variant="outlined"
          margin="normal"
          required
          type="text"
          id="nameFind"
          label="Имя"
          name="name"
          autoComplete="name"
          autoFocus
          value={value}
          onChange={onChange}
        />
      </Container>
    </div>
  );
}

Filter.defaultProps = {
  filterValue: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
