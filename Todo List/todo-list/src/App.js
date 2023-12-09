import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { nanoid } from "nanoid";

function App() {
  const [todo, setTodo] = useState([
    {
      id: nanoid(),
      text: "this is my first note!!!",
    },
    {
      id: nanoid(),
      text: "this is my Second note!!!",
    },
    {
      id: nanoid(),
      text: "this is my third note!!!",
    },
    {
      id: nanoid(),
      text: "this is my fourth note!!!",
    },
  ]);

  const addtodo = (text) => {
    const newTodo = {
      id: nanoid(),
      text: text,
    };
    const newTodos = [...todo, newTodo];
    setTodo(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todo.filter((todo) => todo.id !== id);
    setTodo(newTodos);
  };

  
  return (
    <div className="container">
      <h1>Sticky Note</h1>
      <TodoList
        todo={todo}
        handleAddTodo={addtodo}
        handleDeleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
