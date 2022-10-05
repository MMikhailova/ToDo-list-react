import React from "react";
// import { useRef} from 'react';

export default function ToDo({
  todo,
  toggleToDo,
  handleDelete,
  handleEdit,
  handleEditText,
  editTask,
  editToDo,
  editText
}) {
  return (
    <div>
      {editToDo === todo.id ? (
        <input
          type="text"
          onChange={(e) => handleEditText(e.target.value)}
          value={editText}
        ></input>
      ) : (
        <label>
          <input
            type="checkBox"
            onChange={() => toggleToDo(todo.id)}
            checked={todo.complete}
          />
          {todo.name}
        </label>
      )}
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
      <button onClick={() => handleEdit(todo.id)}>Edit</button>
      <button onClick={() => editTask(todo.id)}>SubmitEdits</button>
    </div>
  );
}
