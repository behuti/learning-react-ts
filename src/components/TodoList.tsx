import React from "react";
import { Todo } from "../todo.model";

import './TodoList.css'

interface TodoListProps {
  items: Todo[];
  onRemoveTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, onRemoveTodo }) => {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={onRemoveTodo.bind(null, todo.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
