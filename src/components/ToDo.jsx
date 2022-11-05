import React from "react";
import {useState} from 'react';

export default function ToDo({
  todo,
  onToggle,
  onDelete,
  onEdit
}) {
    const [editToDo, setEditToDo] = useState(null);
  const [editText, setEditText] = useState("");
  const [submit, setSubmit]=useState(false)
  return (
    <div className="input-group mt-2 mb-2 bg-light text-dark">
      {editToDo === todo.id ? (
        <input
          className="form-control"
          style={{ padding: "10px"}}
          type="text"
          onChange={(e) => {
            setEditText(e.target.value);
          }}
          value={editText}
        ></input>
      ) : (
        <label className="form-control fs-5">
          <input
            style={{ margin: "5px" }}
            type="checkBox"
            onChange={() => onToggle(todo.id)}
            checked={todo.complete}
          />
          {todo.name}
        </label>
      )}
      <button
      style={{display:`${!submit?"block":"none"}`}}
        className="btn btn-outline-primary float-end"
        onClick={() => { setEditToDo(todo.id);setSubmit(true) }}
      > Edit</button>
      <button
        style={{display:`${submit?"block":"none"}`}}
        className="btn btn-outline-success float-end"
        onClick={() => {
          onEdit({ editToDo, editText });
          setEditText("");
          setEditToDo(null);
          setSubmit(false)
        }}>Submit</button>
      <button
        type="button"
        className="btn btn-outline-danger float-end"
        onClick={() => onDelete(todo.id)}
      >Delete</button>
    </div>
  );
}
