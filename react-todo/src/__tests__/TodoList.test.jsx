// src/__tests__/TodoList.toggleTodo.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Toggle Todo', () => {
  test('toggles todo completion status', () => {
    render(<TodoList />);
    const todoText = screen.getByText(/Learn React/i);

    // Initially, the todo should not be completed (no line-through)
    expect(todoText).toHaveStyle('text-decoration: none');

    // Click to toggle the todo to completed
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: line-through');

    // Click again to toggle the todo back to not completed
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: none');
  });
});