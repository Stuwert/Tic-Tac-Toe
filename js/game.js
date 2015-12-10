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
  if (stalecheckBoard.length > 0){
    return false;
  }else{
    return true;
  }
}

function currentPlayerArray(current){
  var newArray = [];
  gameBoard.forEach(function(item, i){
    if (item === current){
      newArray.push(i + 1);
    }
  })
  return newArray;
}

function winCheck(arr){
  for (var i=0; i<arr.length - 2; i++){
    for(var j= i+1; j<arr.length - 1; j++){
      for(var k = j+1; k<arr.length; k++){
        if (arr[i] + arr[j] + arr[k] === 15){
          return true;
        }
      }
    }
  }
  return false;
}
