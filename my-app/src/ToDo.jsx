import React from "react";
import { useEffect, useState } from "react";
// import { useRef} from 'react';

export default function ToDo({ todo, toggleToDo, handleDelete }) {
  return (
    <div>
      <input type="text"></input>
      <label>
        <input
          type="checkBox"
          onChange={toggleToDo(todo.id)}
          checked={todo.complete}
        />
        {todo.name}
      </label>
      <button onClick={handleDelete(todo.id)}>Delete</button>
      <button>Edit</button>
    </div>
  );
}
