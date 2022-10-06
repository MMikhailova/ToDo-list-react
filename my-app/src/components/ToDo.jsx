import React from "react";
import {useState} from 'react';

export default function ToDo({
  todo,
  toggleToDo,
  handleDelete,
  editTask
}) {
    const [editToDo, setEditToDo] = useState(null);
    const [editText, setEditText] = useState("");
  return (
    <div className="input-group mt-2 mb-2 bg-light text-dark">
      {editToDo === todo.id ? (
        <input
          className="form-control"
          style={{ padding: "10px" }}
          type="text"
          onChange={(e) => { setEditText(e.target.value)
           }}
          value={editText}
        ></input>
      ) : (
        <label className="form-control fs-5">
          <input
            style={{ margin: "5px" }}
            type="checkBox"
            onChange={() => toggleToDo(todo.id)}
            checked={todo.complete}
          />
          {todo.name}
        </label>
      )}
      <button
        className="btn btn-outline-primary float-end"
        onClick={() => setEditToDo(todo.id)}
      >
        Edit
      </button>
      <button
        className="btn btn-outline-success float-end"
        onClick={() => {
          editTask({ editToDo, editText });
          setEditText("")
        setEditToDo(null)}}
      >
        Submit
      </button>
      <button
        type="button"
        className="btn btn-outline-danger float-end"
        onClick={() => handleDelete(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}
