//src/components/TodoItem.tsx

// src/components/TodoItem.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, completeTodo } from '../features/todo/todoSlice';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    // Dispatch the action to remove the todo
    dispatch(removeTodo(id));
  };

  const handleComplete = () => {
    // Dispatch the action to mark the todo as completed
    dispatch(completeTodo(id));
  };

  return (
    <div style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      <span>{text}</span>
      <button onClick={handleRemove}>Remove</button>
      <button onClick={handleComplete} disabled={completed}>
        {completed ? 'Completed' : 'Complete'}
      </button>
    </div>
  );
};

export default TodoItem;
