// src/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TodoList component with initial todos', () => {
  render(<App />);
  // Check that one of the initial todos is rendered.
  const todoElement = screen.getByText(/Learn React/i);
  expect(todoElement).toBeInTheDocument();
});
