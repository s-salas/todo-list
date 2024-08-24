import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faPenToSquare } from "@fortawesome/free-regular-svg-icons";

const TodoList = ({ itemsList, markComplete, updateItem }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editedValue, setEditedValue] = useState("");

  function handleEdit(index, name) {
    setEditIndex(index);
    setEditedValue(name);
  }

  function handleUpdate() {
    updateItem({ ...itemsList[editIndex], name: editedValue }, editIndex);
    setEditIndex(null);
    setEditedValue("");
  }

  return (
    <div>
      {itemsList.map((item, index) => (
        <div key={index} className="d-flex justify-content-between align-items-center mb-2">
          {editIndex === index ? (
            <input
              type="text"
              value={editedValue}
              onChange={(e) => setEditedValue(e.target.value)}
              style={{ marginRight: "5px" }}
            />
          ) : (
            <p className="mb-0">{item.name}</p>
          )}
          <div>
            {editIndex === index ? (
              <button
                className="btn btn-outline-primary text-primary-emphasis me-2"
                onClick={handleUpdate}
              >
                Update
              </button>
            ) : (
              <>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="me-2"
                  onClick={() => markComplete(index)}
                />
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className="mr-2"
                  onClick={() => handleEdit(index, item.name)}
                />
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
