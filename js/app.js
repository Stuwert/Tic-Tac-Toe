$(document).ready(function(){

  $('.gameboard').on("click", '.col', function(){

    var currentPiece = $(this).attr('id');
    setPiece(currentPiece, currentPlayer);
    printBoard(gameBoard);
    if (currentPlayer === "X"){
      currentPlayer = "O";
    }else{
      currentPlayer = "X";
    }

    console.log(gameBoard);
    // printBoard(gameBoard);
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
    $('.row-' + currentRow).append('<div class="col" id="' + i + '"></div>');
  })
}
