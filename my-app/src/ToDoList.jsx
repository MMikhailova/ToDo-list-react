import React from 'react'
import ToDo from './ToDo'


export default function ToDoList({
  todos,
  toggleToDo,
  handleDelete,
  handleEdit,
  handleEditText,
  editTask,
  editToDo,
    editText
}) {
  return todos.map((todo) => (
    <ToDo
      key={todo.id}
      handleDelete={handleDelete}
      toggleToDo={toggleToDo}
      todo={todo}
      handleEdit={handleEdit}
      handleEditText={handleEditText}
      editTask={editTask}
            editToDo={editToDo}
    />
  ));
}
