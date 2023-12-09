import Todo from "./Todo";
import Addtodo from "./Addtodo";
const TodoList = ({
  todo,
  handleAddTodo,
  handleDeleteTodo,
}) => {
  return (
    <div className="todo-list">
      {todo.map((todo) => (
        <Todo
          id={todo.id}
          text={todo.text}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
      <Addtodo handleAddTodo={handleAddTodo} />
    </div>
  );
};

export default TodoList;
