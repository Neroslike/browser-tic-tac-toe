const gameBoard = (() => {
  // This is the gameboard, an array of 9 empty strings
  // let board = Array.from(Array(9), () => '');
  let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let player1 = Player("Albert", "X");
  let player2 = Player("Dennis", "O");
  let currentPlayer = player1;

  // ************** private methods **************

  /* Create a winning combinations array and then check every combination against the game board,
     if the first symbol is equal to the second, and the second to the third, then it's a row */
  const _checkWin = () => {
    const WINNING_COMBINATIONS = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const winCondition = (array) =>
      board[array[0]] === board[array[1]] &&
      board[array[1]] === board[array[2]];
    return WINNING_COMBINATIONS.some(winCondition);
  };

  // Restart the board to its original state
  const _restartGame = () => {
    board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    displayBoard.display();
  };

  // When a player makes a play, the turn gets passed to the other
  const _changeTurn = () => {
    if (currentPlayer == player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
  };

  // ************** public methods **************

  // Place a given symbol in the board, log the board
  const placeSymbol = (symbol, position) => {
    board[position] = symbol;
    _changeTurn();
    displayBoard.display();
    if (_checkWin()) {
      setTimeout(() => {
        alert("Congratulations, you win!");
      }, 0);
      setTimeout(_restartGame, 0);
    }
  };

  // Get methods
  const getCurrentPlayer = () => currentPlayer;
  const getBoard = () => board;

  return {
    getBoard,
    placeSymbol,
    getCurrentPlayer,
  };
})();
