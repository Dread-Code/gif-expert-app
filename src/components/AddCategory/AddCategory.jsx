import React, { useState } from "react";
import "./AddCategory.css";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories(inputValue);
  };

  return (
    <form className="add-category-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={"Que quieres buscar?"}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
};

export default AddCategory;
