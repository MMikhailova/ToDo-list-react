import { useState} from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import InputToDo from "./components/InputToDo";

function App() {

// store and update to do list by using useState
  const [todos, setTodos] = useState([]);

// check box 
  function onToggle(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }
// add new todo
  function onAdd({ input }) {
    const name = input;
    if (name === "") return;
    setTodos((previousTodo) => {
      return [
        ...previousTodo,
        { id: new Date().getTime(), name: name, complete: false }]})
  }

 // delete completed tasks
  function onClear() {
    const newToDos = todos.filter((todo) => !todo.complete);
    setTodos(newToDos);
  }

// delete selected task
  function onDelete(id) {
    setTodos((previousTodo) =>
      previousTodo.filter((todo) => {
        return todo.id !== id }));
  }

// edit to do text
  function onEdit(editedTask) {
    console.log(editedTask)
    const updatedTodos = [...todos].map((todo) => { if (todo.id === editedTask.editToDo) { todo.name = editedTask.editText }return todo })
    setTodos(updatedTodos)
  }

  return (
    <div className="container">
      <div className="d-flex flex-column m-auto">
        <img src="./to-do-listen-apps.webp" alt="todo"></img>
        <InputToDo onAdd={onAdd} onClear={onClear} />
        <ToDoList
          todos={todos}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
        <div className="text-center mt-3">
          {todos.filter((todo) => !todo.complete).length} task left
        </div>
      </div>
    </div>
  );
}

export default App;
