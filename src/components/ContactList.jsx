import React from "react";

const ContactList = (props) => {
  return (
    <div>
      {props.contacts.map((item, index) => (
        <ul key={item.id}>
          <li>{item.name}</li>
          <li>{item.phone}</li>
          <li>{item.email}</li>
          <li>{item.image}</li>
          <li>
            <button onClick={() => props.handleDeleteContact(item.id)}>
              Delete
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ContactList;
