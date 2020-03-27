import React, { Component } from "react";

// import T from "prop-types";

import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

import styles from "./App.module.css";

export default class App extends Component {
  state = {
    contacts: [],
    filter: ""
  };

  componentDidMount() {
    const persistContacts = localStorage.getItem("contacts");

    if (persistContacts) {
      this.setState({ contacts: JSON.parse(persistContacts) });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  addContact = contact => {
    this.setState(state => ({
      contacts: [...state.contacts, contact]
    }));
  };

  deletContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id)
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContact = this.filterContacts(contacts, filter);

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm contacts={contacts} addContact={this.addContact} />

        <h2 className={styles.title}>Contacts</h2>

        {contacts.length > 0 && (
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        )}
        <ContactList
          contacts={filteredContact}
          onDeleteContact={this.deletContact}
        />
      </div>
    );
  }
}
