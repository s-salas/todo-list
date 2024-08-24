import React, { useState } from "react";
import TodoList from "./TodoList";
import AddItem from "./AddItem";

const TodoWrapper = () => {
  const [itemsList, setItemsList] = useState([]); // Start with an empty array
  const [newItem, setNewItem] = useState("");

  function handleAddItem(item) {
    const newItemObject = {
      id: itemsList.length + 1, // Generate a unique ID
      name: item,
    };
    setItemsList([...itemsList, newItemObject]);
    setNewItem(""); // Clear the input field after adding the item
  }

  function markComplete(index) {
    setItemsList((itemsList) => itemsList.filter((_, i) => i !== index));
  }

  function updateItem(updatedItem, index) {
    setItemsList((itemsList) =>
      itemsList.map((item, i) => (i === index ? updatedItem : item))
    );
  }

  return (
    <div className="container-full-height d-flex justify-content-center p-3 mb-2 bg-primary-subtle text-primary-emphasis">
      <div className="w-50 p-3">
        <h1 className="text-center">To Do List:</h1>
        <TodoList
          itemsList={itemsList}
          markComplete={markComplete}
          updateItem={updateItem} // Ensure updateItem is passed as a prop
        />
        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          onSubmit={handleAddItem}
        />
      </div>
    </div>
  );
};

export default TodoWrapper;
