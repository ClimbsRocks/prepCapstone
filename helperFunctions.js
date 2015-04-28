// We've created several helper functions to handle the rendering of your code on the screen. If you're interested, you can learn everything this file is doing by reading through the comments and doing some Googling. 
// The $(document).ready(function() {}) part just says "Wait to run the code inside here until after everything we need on the page has loaded."
$(document).ready(function() {
var makeGameBoard = function(boardSize) {
  var board = [];
  //board is an array of arrays. console.log it to investigate it further!
  for(var i = 0; i < boardSize; i++) {
    var row = [];
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
      row.push(square);
    }
    board.push(row);
  }

  return board;
};

//we create an initial gameBoard of size 8x8. Feel free to modify as you'd prefer!
var gameBoard = makeGameBoard(8);

var renderGameBoard = function(gameBoard) {
  var boardSize = gameBoard.length;
  // we scale the gameBoard to the user's screen. First we find which is smaller, the height or width of the user's browser
  var browserSize = Math.min($(window).height(), $(window).width());
  // then we leave some room around the edges (200 pixels), and divide by the number of squares to find how large the squares should be to fill that space perfectly.
  var squareSize = (browserSize - 200) / boardSize;
  gameBoard.forEach(function(rowArr, rowIndex) {
    rowArr.forEach(function(square, columnIndex) {
      var squareHtml = '<div class=gameSquare "' + rowIndex + ' ' + columnIndex + '" >This is my square!</div>';
      $('.gameBoard').append(squareHtml);
    });
  });
}
renderGameBoard(gameBoard);

//here we're going to keep track of the count of all pieces added to our gameBoard. 
var totalPieceCount = {};

//initialPosition should be an array with two numbers in it. 
  // those numbers should specify the 0-indexed row and column you want this piece to start at. 
  // example: [1,3] would put the piece on the second row (remember we're 0-indexed) in the 4th column. 
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

  var row = initialPosition[0];
  var column = initialPosition[1];

  gameBoard[row][column].push(gamePiece);

  return gamePiece;
};

var addImageToGamePiece = function(imageURL, gamePiece) {
  //build out logic to scale the photo. Is that possible in JS?
}
});
