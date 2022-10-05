import { useState, useRef, useEffect } from "react";
import "./App.css";
import ToDoList from "./ToDoList";

const LOCAL_STORAGE_KEY = "toDos.todo";

function App() {
  const [todos, setTodos] = useState([]);
  const newTodo = useRef();
  // const [editToDo, setEditToDo] = useState(null);
  //  const [editText, setEditText] = useState("");
  //get stored todos from local storage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);
  //save todos in localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  function handleToggleToDo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }
  //add new todo
  function handleAddClick(e) {
    const name = newTodo.current.value;
    if (name === "") return;
    setTodos((previousTodo) => {
      return [
        ...previousTodo,
        { id: new Date().getTime(), name: name, complete: false },
      ];
    });
    newTodo.current.value = null;
  }
  function handleClearClick() {
    const newToDos = todos.filter((todo) => !todo.complete);
    setTodos(newToDos);
  }

  function handleDelete(id) {
    setTodos((previousTodo) =>
      previousTodo.filter((todo) => {
        return todo.id !== id;
      })
    );
  }
  // function handleEdit(id) {
  //   setEditToDo(id);
  // }
  // function handleEditText(text) {
  //  setEditText(text)
  // }

  return (
    <>
      <input ref={newTodo} type="text" />
      <button onClick={handleAddClick}>Add task</button>
      <button onClick={handleClearClick}>Clear completed task</button>
      <ToDoList
        todos={todos}
        toggleToDo={handleToggleToDo}
        handleDelete={handleDelete}
        // handleEdit={handleEdit}
        // handleEditText={handleEditText}
        // editToDo={editToDo}
        // editText={editText}
      />
      <div>{todos.filter((todo) => !todo.complete).length} task left</div>
    </>
  );
}

export default App;
