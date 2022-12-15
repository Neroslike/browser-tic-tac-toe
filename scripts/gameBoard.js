const gameBoard = (() => {
  // This is the gameboard, an array of 9 empty strings
  // let board = Array.from(Array(9), () => '');
  let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let player1 = Player("", "X");
  let player2 = Player("", "O");
  let currentPlayer = player1;
  let announcement = document.querySelector(".game-announcement");
  let gameState = 1; // If game state is 1, it means the game is ongoing, if 0 it means the game is tied/won

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

  // Check if all positions in the board are symbols
  const _checkTie = () => {
    const allStrings = (value) => typeof value == "string";
    return board.every(allStrings);
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
    if (board[position] >= 0) {
      board[position] = symbol;
      if (_checkWin()) {
        announcement.innerHTML = `<h2>Congratulations ${currentPlayer.name}! You win this round</h2>`;
        announcement.classList.remove("hidden");
        gameState = 0;
      } else if (_checkTie()) {
        announcement.innerHTML = "<h2>It's a tie!</h2>";
        announcement.classList.remove("hidden");
        gameState = 0;
      }
      _changeTurn();
      displayBoard.display();
    }
  };

  // Restart the board to its original state
  const restartGame = () => {
    board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    currentPlayer = player1;
    announcement.innerHTML = "";
    gameState = 1;
  };

  // Get methods
  const getCurrentPlayer = () => currentPlayer;
  const getBoard = () => board;
  const getPlayers = () => [player1, player2];
  const getState = () => gameState;

  return {
    getBoard,
    placeSymbol,
    getCurrentPlayer,
    getPlayers,
    getState,
    restartGame,
  };
})();
