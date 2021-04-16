import React from 'react';
import s from './List.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import IconButton from '@material-ui/core/IconButton';

import PhoneIcon from '@material-ui/icons/Phone';
import DeleteIcon from '@material-ui/icons/Delete';
import { Container } from '@material-ui/core';

const ContactsList = ({ contacts, onDeleteContact }) => (
  // <ul className={s.contacts}>
  <Container>
    <List className={s.ContactsList}>
      {contacts.map(({ id, name, number }) => (
        <ListItem className={s.Contact} key={id}>
          {/* // <li className={s.listItem} key={id}> */}
          <PhoneIcon className={s.PhoneIcon} />
          <p className={s.ContactName}>
            {name}: {number}
          </p>
          {/* <button
          type="button"
          className={s.button}
          onClick={() => onDeleteContact(id)}
        >
          Удалить
        </button> */}
          <IconButton
            edge="end"
            type="button"
            onClick={() => onDeleteContact(id)}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </ListItem>
        // {/* </li>  */}
      ))}
    </List>
  </Container>
  // {/* </ul> */}
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      // id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibileContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
