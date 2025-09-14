var currentPlayer = "X";
var board = ["", "", "", "", "", "", "", "", ""];
var gameOver = false;

function makeMove(cell, index) {
  if (cell.innerHTML === "" && !gameOver) {
    cell.innerHTML = currentPlayer;
    board[index] = currentPlayer;

    if (checkWinner()) {
      document.getElementById("status").innerHTML = "Player " + currentPlayer + " wins!";
      gameOver = true;
    } else if (board.indexOf("") === -1) {
      document.getElementById("status").innerHTML = "It's a draw!";
      gameOver = true;
    } else {
      currentPlayer = (currentPlayer === "X") ? "O" : "X";
      document.getElementById("status").innerHTML = "Player " + currentPlayer + "'s turn";
    }
  }
}

function checkWinner() {
  var winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for (var i = 0; i < winPatterns.length; i++) {
    var [a, b, c] = winPatterns[i];
    if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
}

function resetGame() {
  var cells = document.getElementsByTagName("td");
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameOver = false;
  document.getElementById("status").innerHTML = "Player X's turn";
}