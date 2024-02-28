import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useEffect, useState } from 'react';

const App = () => {
  const localData = localStorage.getItem('contacts');
  const [contacts, setContacts] = useState(
    localData ? JSON.parse(localData) : []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    if (
      contacts.find(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }
    setContacts(prev => [...prev, { id: nanoid(), name, number }]);
  };

  const handleFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  const handleDelete = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const findContact = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter handleFilter={handleFilter} />
      <ContactList contacts={findContact()} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
