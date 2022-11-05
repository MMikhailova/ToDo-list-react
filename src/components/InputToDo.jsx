import React from 'react'
import { useState } from 'react';

export default function InputToDo({onAdd,onClear}) {
    const [input,setInput]=useState("")
  return (
    <div className="input-group">
        <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text" className="form-control fs-5" />
          <button
            type="button"
            className="btn btn-outline-primary"
              onClick={() => {onAdd({ input }); setInput("")}}>
            Add task</button>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={()=>onClear()}
      >Clear completed</button>
    </div>
  );
}
