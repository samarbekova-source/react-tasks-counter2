import React, { useState } from "react";

const AddContact = (props) => {
  let [name, setName] = useState("");
  let [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");
  let [image, setImage] = useState("");

  function handleClick() {
    let newContact = {
      name,
      phone,
      email,
      id: Date.now(),
    };
    props.handleNewContact(newContact);
    setName("");
    setPhone("");
    setEmail("");
    setImage("");
  }

  return (
    <div className="mt-5">
      <h1>ContactBook</h1>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="name"
        value={name}
      />
      <input
        onChange={(e) => setPhone(e.target.value)}
        type="text"
        placeholder="phone"
        value={phone}
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="email"
        value={email}
      />
      <img
        src="https://lumiere-a.akamaihd.net/v1/images/ct_snowwhite_upcportalreskin_20694_eb571c22.jpeg?region=0%2C0%2C330%2C330"
        width={150}
      />
      {/* <input
        onChange={(e) => setImage(e.target.value)}
        type="text"
        placeholder="image url"
        value={image}
      /> */}

      <button onClick={handleClick}>Add contact</button>
    </div>
  );
};

export default AddContact;
