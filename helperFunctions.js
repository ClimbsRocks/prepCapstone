//Here's where you get to write your very own game!
var makeGameBoard = function(boardSize) {
  var board = [];
  //board is an array of arrays. console.log it to investigate it further!
  for(var i = 0; i < boardSize; i++) {
    for(var j = 0; j < boardSize; j++) {
      //set an initial pattern of alternating colors on each square). 
      if ( (i + j) % 2 === 0 ) {
        var color = 'blue';
      } else {
        var color = 'green';
      }
      //each square (position on the board) is represented by an object. 
      var square = {
        color: color,
        gamePiece: 0,
        text: '',
        imageURL: ''
      };
      board.push(square);
    }
  }

  return board;
};

//we create an initial gameBoard of size 8x8. Feel free to modify as you'd prefer!
makeGameBoard(8);

var makePiece = function(initialPosition, name) {

  var gamePiece = {
    movementDescription: 'use words to describe how this piece moves so your users can understand what their options are',
    name: name,
    imageURL: '',

  }
};

var addImageToGamePiece = function(imageURL, gamePiece) {
  //build out logic to scale the photo. Is that possible in JS?
}