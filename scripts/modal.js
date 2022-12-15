const modal = (() => {
  const button = document.querySelector(".continue-button");
  const modal = document.querySelector(".modal");
  const names = document.querySelectorAll(".player-input");
  const players = gameBoard.getPlayers();

  const _populateNames = () => {
    modal.classList.add("hide");
    names[0].value.trim() == ""
      ? (players[0].name = "Player 1")
      : (players[0].name = names[0].value);
    names[1].value.trim() == ""
      ? (players[1].name = "Player 2")
      : (players[1].name = names[1].value);
    setTimeout(() => {
      modal.classList.add("hidden");
      names[0].value = "";
      names[1].value = "";
    }, 650);
    displayBoard.displayPlayers();
    displayBoard.display();
  };

  button.addEventListener("click", _populateNames);
  modal.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) _populateNames();
  });

  const show = () => {
    modal.classList.remove("hide", "hidden");
  };

  return {
    show,
  };
})();
