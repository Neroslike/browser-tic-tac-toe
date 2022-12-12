const Player = (name, symbol) => {
  const makePlay = (position) => {
    gameBoard.placeSymbol(symbol, position);
  };

  return {
    makePlay,
    name,
    symbol,
  };
};
