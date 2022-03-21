import React, { useState } from "react";

const Forms = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  return (
    <div className="mt-5">
      <h2 className="mb-4">Please enter your email!</h2>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="Password"
      />
      <input
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        type="text"
        placeholder="Password confirmation"
      />
      <button onClick={() => email}>Log in</button>
      <button>Log out</button>
    </div>
  );
};

export default Forms;
