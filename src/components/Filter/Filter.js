import React from 'react';
import s from './Filter.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsSelectors, ChangeFilter } from '../../redux/contacts';
// import * as contactsActions from '../../redux/contacts/contacts-actions';
// import contactsSelectors from '../../redux/contacts/contacts-selectors';

import Container from '@material-ui/core/Container';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';

const Filter = ({ value, onChange }) => (
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
      {/* <label className={s.labelStyle}>
      <input type="text" value={value} onChange={onChange} />
    </label> */}
    </Container>
  </div>
);

Filter.defaultProps = {
  filterValue: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(ChangeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
