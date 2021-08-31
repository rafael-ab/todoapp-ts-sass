interface Todo {
  id: number,
  description: string;
  status: boolean;
  isEditing: boolean;
}

type ContextType = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
  removeTodo: (todo: Todo) => void;
  toggleTodo: (todo: Todo) => void;
};

type ToggleTodo = (todo: Todo) => void;
type AddTodo = (todo: Todo) => void;
type UpdateTodo = (todo: Todo) => void;
type RemoveTodo = (todo: Todo) => void;
