const displayBoard = (() => {
  let board = document.querySelectorAll(".square");

  // Return html with the X or O symbol
  const _compare = (value) => {
    let xMark = '<img src="/assets/xmark-solid.svg" alt="" />';
    let circle = '<img src="/assets/circle-regular.svg" alt="" />';
    if (value >= 0) return "";
    if (value.toUpperCase() == "X") return xMark;
    if (value.toUpperCase() == "O") return circle;
    return false;
  };

  // Compare the internal array and the html array to display the symbols
  const display = () => {
    gameBoard.getBoard().forEach((value, index) => {
      let symbol = _compare(value);
      if (symbol !== false) board[index].innerHTML = symbol;
    });
  };

  // Add event listeners to each square
  board.forEach((element) => {
    element.addEventListener("click", (event) => {
      let index = parseInt(event.target.dataset.index);
      gameBoard.getCurrentPlayer().makePlay(index); // Place symbol when an element of the board is clicked
    });
  });

  return {
    display,
  };
})();
