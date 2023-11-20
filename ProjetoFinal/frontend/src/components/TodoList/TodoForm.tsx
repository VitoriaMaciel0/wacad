import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../features/todoSlice';

const TodoForm: React.FC = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div style={{ margin: '16px' }}>
      <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Add a new task" />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default TodoForm;
