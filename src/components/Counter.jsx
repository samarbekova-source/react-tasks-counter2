import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  // example objects down below

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div className="mt-4">
      <p style={{ fontSize: "25px" }}>
        <strong>Вы нажали {counter} раз</strong>
      </p>
      <button onClick={increment} className="btn btn-primary">
        +
      </button>
      <button onClick={decrement} className="btn btn-secondary">
        -
      </button>
    </div>
  );
};

export default Counter;
