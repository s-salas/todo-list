import React from "react";

const AddItem = ({ newItem, setNewItem, onSubmit }) => {
  function handleChange(e) {
    setNewItem(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(newItem);
    setNewItem(""); // Clear the input field after adding the item
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New task"
        value={newItem}
        onChange={handleChange}
        style={{ marginRight: "5px" }}
      />
      <button
        type="submit"
        className="btn btn-outline-primary text-primary-emphasis"
      >
        Add
      </button>
    </form>
  );
};

export default AddItem;
