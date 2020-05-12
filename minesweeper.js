document.addEventListener('DOMContentLoaded', startGame)

var board = {}

function boardCreator(board) {
board.cells = [];
newCell = 0;

for (var i = 0; i < 6; i++) {
  for (var j = 0; j < 6; j++) {
    board.cells[newCell] = {};
    board.cells[newCell].row = i;
    board.cells[newCell].col = j;
    board.cells[newCell].isMine = (Math.random() >= 0.75);
    board.cells[newCell].hidden = true;
    newCell++
    
    }
  }
}

boardCreator(board);



 function startGame() {
  for (i=0 ; i<board.cells.length ; i++) {
      board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }
  lib.initBoard() 
}



document.onclick = checkForWin;
window.oncontextmenu = checkForWin;




function checkForWin () {
  var theyWon = true
  for (var i = 0; i < board.cells.length; i++) {
    var cell = board.cells[i]
    if (cell.isMine && !cell.isMarked) {
    theyWon = false
  }
  }
if (theyWon) {
    lib.displayMessage('You win!');
    }
}




function countSurroundingMines (cell) {
  var count = 0;
  var surroundingCells = getSurroundingCells(cell.row, cell.col);
  for (c = 0 ; c < surroundingCells.length ; c++) {
      if (surroundingCells[c].isMine) {
          count++
      }
  }
  return count;
}

