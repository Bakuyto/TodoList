import React, { useState } from "react";

const Addtodo = ({ handleAddTodo }) => {
  const [todotext, setTodoText] = useState("");

  const handleChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleSaveClick = () => {
    if(todotext.trim().length > 0 ){
      handleAddTodo(todotext);  
      setTodoText('');
    }
  };
  return (
    <div className="todo new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note.."
        value={todotext}
        onChange={handleChange}
      ></textarea>
      <button className="save" onClick={handleSaveClick}>
        save
      </button>
    </div>
  );
};

export default Addtodo;
