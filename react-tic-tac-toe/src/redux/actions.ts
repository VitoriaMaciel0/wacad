// Action creator para realizar uma jogada
export const makeMove = (index: number) => ({
    type: 'MAKE_MOVE',          // Tipo da ação indicando que uma jogada está sendo feita
    payload: { index },         // Dados adicionais associados à ação, neste caso, o índice da jogada
  });
  
  // Action creator para reiniciar o jogo
  export const restartGame = () => ({
    type: 'RESTART_GAME',       // Tipo da ação indicando que o jogo está sendo reiniciado
  });
  