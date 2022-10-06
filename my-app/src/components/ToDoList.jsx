import React from 'react'
import ToDo from './ToDo'


export default function ToDoList({
  todos,
  toggleToDo,
  handleDelete,
  editTask
 
}) {
  return todos.map((todo) => (
    <ToDo
      key={todo.id}
      handleDelete={handleDelete}
      toggleToDo={toggleToDo}
      todo={todo}
      editTask={editTask}
    />
  ));
}
