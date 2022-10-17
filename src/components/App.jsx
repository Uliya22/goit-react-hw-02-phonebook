import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './contactform/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHendler = data => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    if (this.state.contacts.find(item => item.name === contact.name))
      alert(`"${contact.name}" is already in contacts.`);
    else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, contact],
      }));
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deliteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className={css.wrapper}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHendler} />
        <h2 className={css.listTitle}>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeliteContact={this.deliteContact}
          id={this.state.contacts.id}
        />
      </div>
    );
  }
}
