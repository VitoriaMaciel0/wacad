import React, { useState, ChangeEvent, KeyboardEvent } from 'react';

interface Task {
  name: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { name: task, completed: false }]);
      setTask('');
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleToggleComplete = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Digite uma nova tarefa"
        />
        <button onClick={handleAddTask}>Adicionar</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.name}
            <button onClick={() => handleDeleteTask(index)}>Excluir</button>
            <button onClick={() => handleToggleComplete(index)}>
              {task.completed ? 'Desmarcar' : 'Marcar como Concluído'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
