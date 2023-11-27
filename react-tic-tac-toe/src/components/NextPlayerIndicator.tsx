import React from 'react';

// Definindo a interface das propriedades esperadas pelo componente
interface NextPlayerIndicatorProps {
  currentPlayer: string; // String representando o jogador atual ('X' ou 'O')
}

// Componente funcional para indicar qual jogador é o próximo
const NextPlayerIndicator: React.FC<NextPlayerIndicatorProps> = ({ currentPlayer }) => {
  return (
    <div className="next-player-indicator">
      {/* Exibe qual jogador é o próximo, usando a propriedade currentPlayer */}
      Próximo Jogador: {currentPlayer}
    </div>
  );
};

export default NextPlayerIndicator;
