import React, { useState } from 'react';
import './index.css';

// Componente principal que representa a aplicação do Jogo da Velha
const App = () => {
  // Estado inicial da matriz do Jogo da Velha
  const initialMatriz = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  // Estados para controlar a matriz, jogador atual e vencedor
  const [matriz, setMatriz] = useState(initialMatriz);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState<string | null>(null);

  // Manipulador de clique para lidar com as jogadas
  const handleClick = (row: number, col: number) => {
    // Verifica se a célula já está preenchida ou se há um vencedor
    if (matriz[row][col] || winner) {
      return;
    }

    // Cria uma cópia da matriz atual
    const newMatriz = matriz.map((row) => [...row]);
    // Preenche a célula com o símbolo do jogador atual
    newMatriz[row][col] = currentPlayer;

    // Verifica se há um vencedor após a jogada
    const newWinner = calculateWinner(newMatriz);
    // Atualiza o estado do vencedor
    setWinner(newWinner);

    // Atualiza o estado da matriz, jogador atual e vencedor
    setMatriz(newMatriz);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  // Função para calcular o vencedor do jogo
  const calculateWinner = (squares: string[][]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const line of lines) {
      const [a, b, c] = line;
      if (
        squares[Math.floor(a / 3)][a % 3] &&
        squares[Math.floor(a / 3)][a % 3] === squares[Math.floor(b / 3)][b % 3] &&
        squares[Math.floor(a / 3)][a % 3] === squares[Math.floor(c / 3)][c % 3]
      ) {
        return squares[Math.floor(a / 3)][a % 3];
      }
    }

    return null;
  };

  // Função para reiniciar o jogo
  const resetGame = () => {
    setMatriz(initialMatriz);
    setCurrentPlayer('X');
    setWinner(null);
  };

  // Renderização do componente
  return (
    <div className="app">
      <h1>Jogo da Velha</h1>
      <div className="game-container">
        {/* Mapeia as linhas e colunas da matriz para renderizar as células */}
        {matriz.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              // Usa React.Fragment para renderizar células e linhas verticais
              <React.Fragment key={colIndex}>
                {/* Célula do Jogo da Velha com manipulador de clique */}
                <div className="cell" onClick={() => handleClick(rowIndex, colIndex)}>
                  {cell}
                </div>
                {/* Renderiza uma linha vertical entre as células (exceto a última) */}
                {colIndex < 2 && <div className="vertical-line" />}
              </React.Fragment>
            ))}
          </div>
        ))}
        {/* Renderiza uma linha horizontal entre as linhas (exceto a última) */}
        <div className="horizontal-line" />
      </div>
      {/* Se houver um vencedor, exibe a mensagem, caso contrário, mostra o próximo jogador */}
      <div className="game-info">
        <p>{winner ? `Ganhador: ${winner}` : `Próxima jogada: ${currentPlayer}`}</p>
        {/* Botão para reiniciar o jogo */}
        <button onClick={resetGame}>Reiniciar Jogo</button>
      </div>
    </div>
  );
};

export default App;
