import React, { useState } from "react";
import Ingredients from "./Ingredients";

const Receipts = () => {
  const [meal, setMeal] = useState("");

  return (
    <div className="mt-4">
      <p style={{ color: "red", fontSize: "20px", fontWeight: "bold" }}>
        Select your favorite food
      </p>

      <div>
        <input
          onChange={(e) => setMeal(e.target.value)}
          type="radio"
          id="noodles"
          value="noodles"
        />
        <label for="noodles">Noodles</label>
      </div>

      <div>
        <input
          onChange={(e) => setMeal(e.target.value)}
          type="radio"
          id="bbq"
          value="bbq"
        />
        <label for="bbq">BBQ</label>
      </div>

      <div>
        <input
          onChange={(e) => setMeal(e.target.value)}
          type="radio"
          id="pasta"
          value="pasta"
        />
        <label for="pasta">Pasta</label>
      </div>
      <Ingredients meal={meal} />
    </div>
  );
};

export default Receipts;
