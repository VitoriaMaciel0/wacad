import React from 'react';

// Definindo a interface das propriedades esperadas pelo componente
interface BoardProps {
  squares: string[];             // Array de strings representando os quadrados do tabuleiro
  onClick: (index: number) => void; // Função de retorno de chamada para lidar com cliques nos quadrados
}

// Componente funcional do tabuleiro
const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
  return (
    <div className="board">
      {squares.map((square, index) => (
        // Cada quadrado é representado como uma div com uma classe "square"
        // e o conteúdo do quadrado é exibido e manipulado pela função de retorno de chamada onClick
        <div key={index} className="square" onClick={() => onClick(index)}>
          {square}
        </div>
      ))}
    </div>
  );
};

export default Board;
