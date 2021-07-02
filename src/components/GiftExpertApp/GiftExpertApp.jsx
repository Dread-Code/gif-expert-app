import React, { useState } from "react";
import AddCategory from "../AddCategory";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["Dororo"]);

  return (
    <div>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategories={setCategories} categories={categories} />
      <hr></hr>
      <ol>
        {categories.map((category, key) => (
          <li key={category + key}>{category}</li>
        ))}
      </ol>
    </div>
  );
};

export default GiftExpertApp;
