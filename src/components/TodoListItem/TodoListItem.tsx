import React, { useState, useEffect, useCallback } from "react";
import { Trash2, Edit2, CornerDownLeft } from "react-feather";
import { Dropdown, DropdownHeader, DropdownItem } from "components/Dropdown";
import "./TodoListItem.scss";

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
  updateTodo: UpdateTodo;
  removeTodo: RemoveTodo;
}

const TodoListItem: React.FC<Props> = ({
  todo,
  toggleTodo,
  updateTodo,
  removeTodo,
}) => {
  const [description, setDescription] = useState<string>(todo.description);

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (description !== "") {
      updateTodo({
        ...todo,
        description,
        isEditing: false,
      });
    }
  };

  const handleEditTodo = () => {
    updateTodo({
      ...todo,
      isEditing: true,
    });
  };

  const handleRemoveTodo = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    removeTodo(todo);
  };

  const offTodoEditingWhenRefreshing = useCallback(() => {
    updateTodo({
      ...todo,
      isEditing: false,
    });
  }, [updateTodo, todo]);

  useEffect(() => {
    offTodoEditingWhenRefreshing();
    // eslint-disable-next-line
  }, []);

  return (
    <li
      className="todo-item-wrapper flex space-between align-center"
      onClick={() => {
        toggleTodo(todo);
      }}
    >
      {!todo.isEditing ? (
        <>
          <label
            style={{ textDecoration: todo.status ? "line-through" : undefined }}
            className="todo-item"
          >
            <span>{todo.description}</span>
            <input
              type="checkbox"
              checked={todo.status}
              className="todo-input"
              onChange={() => {
                toggleTodo(todo);
              }}
            />
            <span className="todo-check"></span>
          </label>
          <Dropdown>
            <DropdownHeader text="Actions" />
            <DropdownItem
              text="Edit"
              icon={<Edit2 color="#ffc107" size={20} />}
              onClick={handleEditTodo}
            />
            <DropdownItem
              text="Delete"
              icon={<Trash2 color="#dc3545" size={20} />}
              onClick={handleRemoveTodo}
            />
          </Dropdown>
        </>
      ) : (
        <>
          <form className="todo-edit-form" onSubmit={handleForm}>
            <input
              className="todo-edit-input"
              type="text"
              value={description}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setDescription(e.target.value);
              }}
            />
            <button
              className="todo-edit-btn"
              type="submit"
              onClick={handleForm}
            >
              <CornerDownLeft className="" size={26} color="#2c92ff" />
            </button>
          </form>
        </>
      )}
    </li>
  );
};

export default TodoListItem;
