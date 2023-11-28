//src//features//todo/TodoApp.tsx
import React from 'react';
import TodoList from '../../components/TodoList';
import TodoForm from '../../components/TodoForm';

const TodoApp: React.FC = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoApp;