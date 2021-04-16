import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoContact from '../components/TodoContact';
import ContactsList from '../components/ContactsList';
import Filter from '../components/Filter';
import { contactsOperations } from '../redux/contacts';

class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        <TodoContact />
        <Filter />
        <ContactsList />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(ContactsView);
