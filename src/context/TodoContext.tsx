import React, { useReducer } from "react";
import { todoReducer, TodoActionKind } from "reducers";
import { getPersistState } from "hooks/usePersistState";
import { stateKeys } from "config/stateKeys";

export const TodoContext = React.createContext<ContextType | null>(null);

const TodoProvider: React.FC<React.ReactNode> = ({ children }) => {
  const initialData = getPersistState(stateKeys.todoKey);
  const [todoState, todoDispatch] = useReducer(todoReducer, {
    todos: [...initialData],
  });

  const value = {
    todos: todoState.todos,
    addTodo: (todo: Todo) => {
      todoDispatch({ type: TodoActionKind.ADD_TODO, payload: todo });
    },
    updateTodo: (todo: Todo) => {
      todoDispatch({ type: TodoActionKind.UPDATE_TODO, payload: todo });
    },
    removeTodo: (todo: Todo) => {
      todoDispatch({ type: TodoActionKind.REMOVE_TODO, payload: todo });
    },
    toggleTodo: (todo: Todo) => {
      todoDispatch({ type: TodoActionKind.TOGGLE_TODO, payload: todo });
    },
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
