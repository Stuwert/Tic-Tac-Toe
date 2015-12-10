var gameBoard = [];
var currentPlayer = "X";

function createBoard(){
  for (i=0; i<9; i++){
    gameBoard[i] = 0;
  }
}


function setPiece(num, player){
  gameBoard[num] = player;
}
