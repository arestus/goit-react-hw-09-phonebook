import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TodoContact from '../components/TodoContact';
import ContactsList from '../components/ContactsList';
import Filter from '../components/Filter';
import { contactsOperations } from '../redux/contacts';

export default function ContactsView() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <TodoContact />
      <Filter />
      <ContactsList />
    </>
  );
}
