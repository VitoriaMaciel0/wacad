import React from 'react';

// Definindo a interface das propriedades esperadas pelo componente
interface GameStatusProps {
  status: string; // Uma string que representa o status do jogo (por exemplo, "Em Andamento", "Vitória", "Empate")
}

// Componente funcional para exibir o status do jogo
const GameStatus: React.FC<GameStatusProps> = ({ status }) => {
  return (
    <div className="game-status">
      {/* Exibe o status do jogo, que é passado como propriedade */}
      {status}
    </div>
  );
};

export default GameStatus;
