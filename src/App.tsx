import React from "react";
import TodoProvider from "context/TodoContext";
import { Header } from "components/Header";
import { TodoList } from "components/TodoList";
import { TodoForm } from "components/TodoForm";
import "./App.scss";

function App() {
  return (
    <TodoProvider>
      <Header />
      <TodoForm />
      <div className="container">
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
