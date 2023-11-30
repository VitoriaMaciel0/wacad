//src/components/TodoList.tsx
// src/components/TodoList.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { RootState } from '../../store'; // Corrija o caminho conforme necessário

const TodoList: React.FC = () => {
  const todoList = useSelector((state: RootState) => state.todo);

  return (
    <div>
      <h2>Todo List</h2>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />
      ))}
    </div>
  );
};

export default TodoList;
