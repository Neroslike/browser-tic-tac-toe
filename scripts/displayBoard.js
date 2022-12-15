const displayBoard = (() => {
  let board = document.querySelectorAll(".square");
  let turnSymbol = document.querySelector(".turn-symbol");
  const player1Name = document.querySelector(".player1-name");
  const player2Name = document.querySelector(".player2-name");
  const rematch = document.querySelector(".rematch");
  const restart = document.querySelector(".restart");

  // ************** private methods **************

  // Return html with the X or O symbol
  const _compare = (value) => {
    let xMark = '<img src="assets/xmark-solid.svg" alt="" />';
    let circle = '<img src="assets/circle-regular.svg" alt="" />';
    if (value >= 0) return "";
    if (value.toUpperCase() == "X") return xMark;
    if (value.toUpperCase() == "O") return circle;
    return false;
  };

  const _displayTurn = () => {
    gameBoard.getCurrentPlayer().symbol == "X"
      ? (turnSymbol.src = "assets/xmark-solid.svg")
      : (turnSymbol.src = "assets/circle-regular.svg");
  };

  const _restartGame = () => {
    gameBoard.restartGame();
    modal.show();
  };

  // Add event listeners to each square
  board.forEach((element) => {
    element.addEventListener("click", (event) => {
      if (gameBoard.getState() === 1) {
        let index = parseInt(event.target.dataset.index);
        gameBoard.getCurrentPlayer().makePlay(index); // Place symbol when an element of the board is clicked
      }
    });
  });

  rematch.addEventListener("click", () => {
    gameBoard.restartGame();
    display();
  });

  restart.addEventListener("click", _restartGame);

  // ************** public methods **************

  // Compare the internal array and the html array to display the symbols
  const display = () => {
    gameBoard.getBoard().forEach((value, index) => {
      let symbol = _compare(value);
      if (symbol !== false) {
        board[index].innerHTML = symbol;
        _displayTurn();
      }
    });
  };

  const displayPlayers = () => {
    let players = gameBoard.getPlayers();
    player1Name.innerHTML = players[0].name;
    player2Name.innerHTML = players[1].name;
  };

  return {
    display,
    displayPlayers,
  };
})();
