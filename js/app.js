$(document).ready(function(){

  $('.gameboard').on("click", '[class^=col]', function(){

    var currentPiece = $(this).attr('id');
    var thisClass = $(this).attr('class');
    if (thisClass === "col-X" || thisClass === "col-O"){
      alert("You can't move there, please choose another");
    }else{
      setPiece(currentPiece, currentPlayer);
      printBoard(gameBoard);
      if (currentPlayer === "X"){
        currentPlayer = "O";
      }else{
        currentPlayer = "X";
      }
    }
    if(staleCheck()){
      alert("Game Over");
    }
  });
  createBoard()

  printBoard(gameBoard);

})

function printBoard(arr){
  $('.gameboard').empty();
  $('.gameboard').append('<h2>Current Player is ' + currentPlayer + '<h2>');
  var currentRow;
  arr.forEach(function(item, i){
    if(i%3 === 0){
      currentRow = i/3;
      $('.gameboard').append('<div class="row-' + currentRow + '"></div>');
    }
    $('.row-' + currentRow).append('<div class="col-' + item +'" id="' + i + '"></div>');
  })
}
