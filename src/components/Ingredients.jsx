import React from "react";

const Ingredients = ({ meal }) => {
  const noodlesIngredients = "milk,flour,tablespoon butter, eggs beaten";
  const bbqIngredients =
    "Tomato paste,brown sugar, spicy mustard, salt,black pepper";
  const pastaIngredients = "Flour,eggs,olive oil, sea salt";
  return (
    <div>
      {meal === "noodles" ? (
        <li style={{ listStyle: "none" }}>
          Noodles Ingredients : {noodlesIngredients}
        </li>
      ) : null}
      {meal === "bbq" ? (
        <li style={{ listStyle: "none" }}>
          BQQ Ingredients : {bbqIngredients}
        </li>
      ) : null}
      {meal === "pasta" ? (
        <li style={{ listStyle: "none" }}>
          Pasta Ingredients : {pastaIngredients}
        </li>
      ) : null}
    </div>
  );
};

export default Ingredients;
