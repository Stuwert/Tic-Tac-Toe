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

function staleCheck(){
  var stalecheckBoard = gameBoard.filter(function(item){
    if (item === 0){
      return true;
    }else{
      return false;
    }
  });
  console.log(stalecheckBoard);
  if (stalecheckBoard.length > 0){
    return false;
  }else{
    return true;
  }
}
