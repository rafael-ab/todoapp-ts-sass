import { stateKeys } from "config/stateKeys";
import { setPersistState } from "hooks/usePersistState";

export enum TodoActionKind {
  ADD_TODO = "ADD_TODO",
  UPDATE_TODO = "UPDATE_TODO",
  REMOVE_TODO = "REMOVE_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
}

interface TodoAction {
  type: TodoActionKind;
  payload: Todo;
}

interface TodoState {
  todos: Todo[];
}

export const todoReducer = (state: TodoState, action: TodoAction) => {
  const { type, payload } = action;

  switch (type) {
    case TodoActionKind.ADD_TODO:
      const todos = [payload, ...state.todos];
      setPersistState(stateKeys.todoKey, todos);
      return {
        todos,
      };
    case TodoActionKind.UPDATE_TODO:
      const updatedTodos = state.todos.map((todo) =>
        todo.id === payload.id
          ? {
              ...todo,
              description: payload.description,
              status: payload.status,
              isEditing: payload.isEditing,
            }
          : todo
      );
      setPersistState(stateKeys.todoKey, updatedTodos);
      return { todos: updatedTodos };
    case TodoActionKind.REMOVE_TODO:
      const newTodos = state.todos.filter((todo) => todo.id !== payload.id);
      setPersistState(stateKeys.todoKey, newTodos);
      return { todos: newTodos };
    case TodoActionKind.TOGGLE_TODO:
      const toggledTodos = state.todos.map((todo) =>
        todo.id === payload.id ? { ...todo, status: !todo.status } : todo
      );
      setPersistState(stateKeys.todoKey, toggledTodos);
      return { todos: toggledTodos };
    default:
      return state;
  }
};
