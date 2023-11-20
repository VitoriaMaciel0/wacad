import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { removeTodo, completeTodo } from '../../features/todoSlice';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.list);
  const dispatch = useDispatch();

  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onRemove={() => dispatch(removeTodo(todo.id))} onComplete={() => dispatch(completeTodo(todo.id))} />
      ))}
    </div>
  );
};

export default TodoList;
