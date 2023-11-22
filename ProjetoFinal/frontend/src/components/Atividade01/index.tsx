import React, { useState, ChangeEvent, KeyboardEvent } from 'react';

// Interface para representar a estrutura de uma tarefa
interface Task {
  name: string;
  completed: boolean;
}

// Componente principal da lista de tarefas
const TodoList: React.FC = () => {
  // Estado para armazenar a tarefa sendo digitada
  const [task, setTask] = useState<string>('');
  // Estado para armazenar a lista de tarefas
  const [tasks, setTasks] = useState<Task[]>([]);

  // Função para lidar com a mudança no campo de entrada
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  // Função para adicionar uma nova tarefa à lista
  const handleAddTask = () => {
    // Verifica se a tarefa não está vazia
    if (task.trim() !== '') {
      // Adiciona a nova tarefa à lista com o estado atual
      setTasks([...tasks, { name: task, completed: false }]);
      // Limpa o campo de entrada
      setTask('');
    }
  };

  // Função para lidar com a tecla "Enter" no campo de entrada
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // Chama a função de adicionar tarefa ao pressionar "Enter"
      handleAddTask();
    }
  };

  // Função para remover uma tarefa da lista com base no índice
  const handleDeleteTask = (index: number) => {
    // Cria uma cópia da lista atual
    const updatedTasks = [...tasks];
    // Remove a tarefa com o índice especificado
    updatedTasks.splice(index, 1);
    // Atualiza o estado da lista
    setTasks(updatedTasks);
  };

  // Função para alternar o estado de conclusão de uma tarefa com base no índice
  const handleToggleComplete = (index: number) => {
    // Cria uma cópia da lista atual
    const updatedTasks = [...tasks];
    // Inverte o estado de conclusão da tarefa com o índice especificado
    updatedTasks[index].completed = !updatedTasks[index].completed;
    // Atualiza o estado da lista
    setTasks(updatedTasks);
  };

  // Renderização do componente
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        {/* Campo de entrada para adicionar nova tarefa */}
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Digite uma nova tarefa"
        />
        {/* Botão para adicionar nova tarefa */}
        <button onClick={handleAddTask}>Adicionar</button>
      </div>
      {/* Lista de tarefas */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {/* Nome da tarefa */}
            {task.name}
            {/* Botões para excluir e marcar/desmarcar a tarefa */}
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

// Exporta o componente como padrão
export default TodoList;
