import React from 'react'
import ToDo from './ToDo'


export default function ToDoList({
  todos,
  onToggle,
  onDelete,
  onEdit
}) {
  return (
    <div
      className="list"
      style={{padding:`${todos.length!==0?"20px":"0"}`, backgroundColor:"lavender"}}
    >
      {todos.map((todo) => (
        <ToDo
          key={todo.id}
          onDelete={onDelete}
          onToggle={onToggle}
          todo={todo}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
