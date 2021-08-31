import React from "react";
import { TodoContext } from "context/TodoContext";
import { TodoListItem } from "components/TodoListItem";
import "./TodoList.scss";

const TodoList: React.FC = () => {
  const { todos, updateTodo, removeTodo, toggleTodo } = React.useContext(
    TodoContext
  ) as ContextType;
  return (
    <div className="flex column w-100 todo-wrapper">
      <div className="text-large text-uppercase text-bold mb-5">Todos</div>
      <ul className="">
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </ul>
      {todos.length < 1 && (
        <ul>
          <p className="text-center">There's no task yet...</p>
        </ul>
      )}
    </div>
  );
};

export default TodoList;
