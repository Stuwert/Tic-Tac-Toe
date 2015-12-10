var gameBoard = [];
var currentPlayer = "X";
var counterArray = [4,3,8,9,5,1,2,7,6];

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
  console.log(arr);
  for (var i=0; i<arr.length - 2; i++){
    console.log("bing");
    for(var j= i+1; j<arr.length - 1; j++){
      console.log("bong")
      for(var k = j+1; k<arr.length; k++){
        console.log("bang")
        console.log(arr[i] + arr[j] + arr[k]);
        if (arr[i] + arr[j] + arr[k] === 15){
          return true;
        }
      }
    }
  }
  return false;
}

function reset(){
  $('.gameboard').empty();
  createBoard();
  printBoard();
}
