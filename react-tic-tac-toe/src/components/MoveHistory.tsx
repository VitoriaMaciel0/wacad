import React from 'react';

// Definindo a interface das propriedades esperadas pelo componente
interface MoveHistoryProps {
  history: string[][]; // Array de matrizes representando o histórico de jogadas
  jumpTo: (move: number) => void; // Função de retorno de chamada para pular para uma jogada específica
}

// Componente funcional para exibir o histórico de jogadas
const MoveHistory: React.FC<MoveHistoryProps> = ({ history, jumpTo }) => {
  return (
    <div className="move-history">
      <p>Move History:</p>
      {/* Lista ordenada de botões para cada movimento no histórico */}
      <ol>
        {history.map((move, index) => (
          <li key={index}>
            {/* Botão que chama a função de retorno de chamada jumpTo ao ser clicado */}
            <button onClick={() => jumpTo(index)}>{`Ir para jogada #${index + 1}`}</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MoveHistory;
