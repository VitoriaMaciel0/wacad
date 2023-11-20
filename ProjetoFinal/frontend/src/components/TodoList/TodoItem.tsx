import React from 'react';

interface TodoItemProps {
  todo: { id: number; text: string; completed: boolean };
  onRemove: () => void;
  onComplete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onRemove, onComplete }) => {
  return (
    <div style={{ margin: '8px', padding: '8px', border: '1px solid #ddd', borderRadius: '4px', display: 'flex', alignItems: 'center' }}>
      <span style={{ marginRight: '8px', textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
      <button onClick={onComplete} style={{ backgroundColor: todo.completed ? 'green' : 'none', color: 'white', border: 'none', cursor: 'pointer' }}>
        Complete
      </button>
      <button onClick={onRemove} style={{ marginLeft: '8px', backgroundColor: 'red', color: 'white', border: 'none', cursor: 'pointer' }}>
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
