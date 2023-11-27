// Define a forma do estado do jogo
interface GameState {
    squares: string[];        // Array representando os quadrados do tabuleiro
    currentPlayer: string;    // Símbolo do jogador atual ('X' ou 'O')
    status: string;           // Status do jogo ('In Progress', 'Winner: X', 'Winner: O', 'Draw')
    history: string[][];      // Histórico de jogadas
  }
  
  // Define a estrutura da ação de realizar uma jogada
  interface MakeMoveAction {
    type: 'MAKE_MOVE';         // Tipo da ação indicando uma jogada
    payload: {
      index: number;           // Índice da jogada no array de quadrados
    };
  }
  
  // Define a estrutura da ação de reiniciar o jogo
  interface RestartGameAction {
    type: 'RESTART_GAME';      // Tipo da ação indicando reinício do jogo
  }
  
  // Define um tipo que representa todas as possíveis ações do jogo
  type GameAction = MakeMoveAction | RestartGameAction;
  
  // Estado inicial do jogo
  const initialState: GameState = {
    squares: Array(9).fill(''), // Inicializa o tabuleiro com quadrados vazios
    currentPlayer: 'X',         // Define o jogador inicial como 'X'
    status: 'In Progress',      // Define o status inicial como 'Em Andamento'
    history: [],                // Inicializa o histórico como vazio
  };
  
  // Função utilitária para calcular o vencedor do jogo
  const calculateWinner = (squares: string[]): string | null => {
    const lines: number[][] = [
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
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
  
    return null;
  };
  
  // Redutor do jogo
  const gameReducer = (state: GameState = initialState, action: GameAction): GameState => {
    switch (action.type) {
      case 'MAKE_MOVE':
        const index = action.payload.index;
  
        // Verifica se o quadrado já está preenchido ou se o jogo já terminou
        if (state.squares[index] !== '' || state.status !== 'In Progress') {
          return state; // Retorna o estado atual se a jogada não for válida
        }
  
        // Copia o array de quadrados atual
        const squaresCopy = [...state.squares];
        // Atualiza o quadrado com o símbolo do jogador atual
        squaresCopy[index] = state.currentPlayer;
  
        // Calcula o vencedor após a jogada
        const winner = calculateWinner(squaresCopy);
  
        // Cria um novo estado com base no resultado do jogo
        const newState: GameState = {
          squares: squaresCopy,
          currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
          status: winner ? `Vencedor: ${winner}` : squaresCopy.includes('') ? 'In Progress' : 'Empate',
          history: [...state.history, squaresCopy],
        };
  
        return newState;
  
      case 'RESTART_GAME':
        return initialState; // Retorna o estado inicial ao reiniciar o jogo
  
      default:
        return state; // Retorna o estado atual se a ação não for reconhecida
    }
  };
  
  export default gameReducer;
  