// src/components/TodoList.jsx
import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';

const initialTodos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Learn Jest', completed: false },
  { id: 3, text: 'Build a Todo App', completed: false },
];

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);

  // Add a new todo item
  const addTodo = (text) => {
    const newTodo = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Toggle the completion status of a todo item
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Delete a todo item
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm addTodo={addTodo} />
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span 
              onClick={() => toggleTodo(todo.id)}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} aria-label={`Delete ${todo.text}`}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;