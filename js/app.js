$(document).ready(function(){

  $('.gameboard').on("click", '[class^=col]', function(){

    var currentPiece = $(this).attr('id');
    var thisClass = $(this).attr('class');
    if (thisClass === "col-X" || thisClass === "col-O"){
      alert("You can't move there, please choose another");
    }else{
      setPiece(currentPiece, currentPlayer);
      if (winCheck(currentPlayerArray(currentPlayer))){
        var newGame = confirm("Player " + currentPlayer + " wins! Would you like to play again?");
        if (newGame){
          reset();
        }else{
          $('.gameboard').remove();
        }
      }else if (staleCheck()){
        var newGame = confirm("You have drawn the game.  Would you like to play again?");
        if (newGame){
          reset();
        }else{
          $('.gameboard').remove();
        }
      }else if (currentPlayer === "X"){
        currentPlayer = "O";
      }else{
        currentPlayer = "X";
      }
      printBoard(gameBoard);
    }

  });
  createBoard()

  printBoard();

})

function printBoard(){
  $('.gameboard').empty();
  $('.gameboard').append('<h2>Current Player is ' + currentPlayer + '<h2>');
  var currentRow;
  counterArray.forEach(function(item, i){
    if(i%3 === 0){
      currentRow = i/3;
      $('.gameboard').append('<div class="row-' + currentRow + '"></div>');
    }
    var id = item -1;
    $('.row-' + currentRow).append('<div class="col-' + gameBoard[id] +'" id="' + id + '"></div>');
  })
}
