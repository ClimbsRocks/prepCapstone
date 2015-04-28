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

//here we're going to keep track of the count of all pieces added to our gameBoard. 
var totalPieceCount = {};

var makePiece = function(initialPosition, pieceType, playerBelongsTo) {
  // make sure this piece is counted in our totalPieceCount object. 
  if(totalPieceCount[pieceType]) {
    totalPieceCount[pieceType]++;
  } else {
    totalPieceCount[pieceType] = 1;
  }

  // default player to Player1 if no player name is passed in, then defines a unique name for this gamePiece
  playerBelongsTo = playerBelongsTo || 'Player1';
  var pieceName = playerBelongsTo + pieceType + '#' + totalPieceCount[pieceType];

  var gamePiece = {
    movementDescription: 'use words to describe how this piece moves so your users can understand what their options are',
    collisionDescription: 'use words to explain what happens when this piece collides with another',
    name: pieceName,
    typeoOfPiece: '',
    imageURL: '',
    playerBelongsTo: playerBelongsTo  // if you have a game with two (or more?!) players playing against each other, you'll want to specify which player this piece belongs to

  }

  return gamePiece;
};

var addImageToGamePiece = function(imageURL, gamePiece) {
  //build out logic to scale the photo. Is that possible in JS?
}