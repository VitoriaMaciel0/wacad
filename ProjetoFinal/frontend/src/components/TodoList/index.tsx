// src/components/TodoList/TodoList.tsx
import React, { useState } from 'react';
import './TodoList.css';

// Interface para representar a estrutura de uma tarefa
interface Task {
  id: number;
  text: string;
  completed: boolean;
}

// Componente principal da lista de tarefas
const TodoList: React.FC = () => {
  // Estado para armazenar a lista de tarefas
  const [tasks, setTasks] = useState<Task[]>([]);
  // Estado para armazenar a nova tarefa sendo digitada
  const [newTask, setNewTask] = useState<string>('');

  // Função para adicionar uma nova tarefa à lista
  const handleAddTask = () => {
    // Verifica se a nova tarefa não está vazia
    if (newTask.trim() !== '') {
      // Adiciona a nova tarefa à lista, gerando um ID único
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      // Limpa o campo de entrada da nova tarefa
      setNewTask('');
    }
  };

  // Função para remover uma tarefa da lista com base no ID
  const handleRemoveTask = (taskId: number) => {
    // Filtra a lista, removendo a tarefa com o ID correspondente
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Função para alternar o estado de conclusão de uma tarefa com base no ID
  const handleToggleComplete = (taskId: number) => {
    // Mapeia a lista, atualizando a tarefa com o ID correspondente
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  // Renderização do componente
  return (
    <div>
      <h1>Minha Lista de Tarefas</h1>
      <div>
        {/* Campo de entrada para adicionar nova tarefa */}
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Adicione uma nova tarefa"
        />
        {/* Botão para adicionar nova tarefa */}
        <button onClick={handleAddTask}>Adicionar</button>
      </div>
      {/* Lista de tarefas */}
      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {/* Nome da tarefa */}
            {task.text}
            {/* Botões para marcar/desmarcar e remover a tarefa */}
            <button onClick={() => handleToggleComplete(task.id)}>
              {task.completed ? 'Desmarcar' : 'Marcar como Concluído'}
            </button>
            <button onClick={() => handleRemoveTask(task.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Exporta o componente como padrão
export default TodoList;
