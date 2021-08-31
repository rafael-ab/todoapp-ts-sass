import React, { useState, useContext } from "react";
import { Plus } from "react-feather";
import { TodoContext } from "context/TodoContext";
import "./TodoForm.scss";

const TodoForm: React.FC = () => {
  const { addTodo } = useContext(TodoContext) as ContextType;
  const [description, setDescription] = useState<string>("");

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (description !== "") {
      addTodo({
        id: Math.random(),
        description,
        status: false,
        isEditing: false,
      });
      setDescription("");
    }
  };

  return (
    <form className="flex todo-form" onSubmit={handleForm}>
      <input
        className="todo-input"
        type="text"
        value={description}
        placeholder={"Enter your today task here..."}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button className="todo-btn" type="submit" onClick={handleForm}>
        <Plus className="todo-btn-icon" size={40} color={"#2c92ff"} />
      </button>
    </form>
  );
};

export default TodoForm;
