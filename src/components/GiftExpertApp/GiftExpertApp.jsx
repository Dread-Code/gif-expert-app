import React, { useState } from "react";

const GiftExpertApp = () => {
  //   const categories = ["One Punch", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  const handleAdd = () => {
    setCategories([...categories, "Hunter x Hunter"]);
  };
  return (
    <div>
      <h2>GiftExpertApp</h2>
      <hr></hr>
      <button onClick={handleAdd}>Agregar</button>
      <ol>
        {categories.map((category, key) => (
          <li key={category + key}>{category}</li>
        ))}
      </ol>
    </div>
  );
};

export default GiftExpertApp;
