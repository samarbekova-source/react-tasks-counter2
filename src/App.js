import React, { useState } from "react";
import Counter from "./components/Counter";
import Receipts from "./components/Receipts";
import Ingredients from "./components/Ingredients";
import Forms from "./components/Forms/Forms";
import AddContact from "./components/AddContact.jsx";
import ContactList from "./components/ContactList";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  let [contacts, setContacts] = useState([]);
  function handleNewContact(newContact) {
    let newContactsArray = [...contacts];
    newContactsArray.push(newContact);

    setContacts(newContactsArray);
  }

  function handleDeleteContact(id) {
    let newContactsArray = contacts.filter((item) => {
      return item.id !== id;
    });
    setContacts(newContactsArray);
  }

  return (
    <div>
      <Counter />
      <Receipts />
      <Ingredients />
      <Forms />
      <AddContact handleNewContact={handleNewContact} />
      <ContactList
        contacts={contacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
