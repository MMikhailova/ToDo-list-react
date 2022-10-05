import { useState, useRef, useEffect } from "react";
import "./App.css";
import ToDoList from "./ToDoList";



const LOCAL_STORAGE_KEY = "toDos.todo";

function App() {
  const [todos, setTodos] = useState([]);
  const newTodo = useRef();

  const [editToDo, setEditToDo] = useState(null);
  const [editText, setEditText] = useState("");
  
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
  function handleEdit(id) {
    setEditToDo(id)
  }
  function handleEditText(text) {
    setEditText(text)
  }
  function editTask(id) {
    const updatedTodos = [...todos].map((todo) => { if (todo.id === id) { todo.name = editText }return todo })
    setTodos(updatedTodos)
    setEditToDo(null)
    setEditText("")
  }

  return (
    <div className="position-absolute top-0 start-50 translate-middle-x mt-2 mb-2 ">
      <img src="./to-do-listen-apps.webp" alt="todo"></img>
      <div className="input-group">
        <input ref={newTodo} type="text" className="form-control fs-5" />
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={handleAddClick}
        >
          Add task
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={handleClearClick}
        >
          Clear completed task
        </button>
      </div>
      <ToDoList
        todos={todos}
        toggleToDo={handleToggleToDo}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleEditText={handleEditText}
        editTask={editTask}
        editToDo={editToDo}
        editText={editText}
      />
      <div className="text-center mt-3">
        {todos.filter((todo) => !todo.complete).length} task left
      </div>
    </div>
  );
}

export default App;
