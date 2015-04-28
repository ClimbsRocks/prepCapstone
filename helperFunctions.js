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
        // TODO: make default colors Telegraph colors :)
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

// Call this function each time you make a change and want that change to appear on the screen. Otherwise, your "code" will know that the change happened, but the screen won't know that it's supposed to update. 
// There are more elegant ways of doing this (right now we're wiping out the existing rendered gameBoard entirely and rendering the whole new one). We could just update individual pieces, but that would require us to build out more helper functions for the students, which would decrease their feeling of ownership over the whole project. This way also explicitly calls out that updating state and updating rendering are two separate things. This also lets the student focus on what they feel comfortable with and what the goal of the course is (writing JS logic/functional programming), and really not have to think about DOM or rendering stuff much at all. 
var renderGameBoard = function(gameBoard) {
  $('.gameBoard').html('');
  var boardSize = gameBoard.length;
  // we scale the gameBoard to the user's screen. First we find which is smaller, the height or width of the user's browser
  var browserSize = Math.min($(window).height(), $(window).width());
  $('.gameBoard').width(browserSize - 200);
  // then we leave some room around the edges (200 pixels), and divide by the number of squares to find how large the squares should be to fill that space perfectly.
  var squareSize = (browserSize - 200) / boardSize;
  gameBoard.forEach(function(rowArr, rowIndex) {
    rowArr.forEach(function(squareObj, columnIndex) {
      // Here we are creating the HTML that will be rendered to the DOM for each square. 
      // HTML and JS play nicely together; you can just create a string with most of the characters that you need, add in some variables dynamically, and then when you render this to the DOM, it will interpret everything to be HTML elements and display them correctly. 
      // We're creating a <div>, which is just a default html container that we can do whatever we want with (similar to an object in JS).
      // We can then set "properties" on this html element. In this case, we're setting style properties to tell it how it should look on the screen. 
        // Those style properties include it's size (height and width) in pixels (px). 
        // We're setting it's background color to be the color of that squareObj. 
      // To keep track of which square this is (necessary for figuring out which square was clicked on later), we set a data "property" on each square as well. 
      // Inside of each div, we can put whatever text we want! Or none at all- it doesn't care. So we put in the text from the object at that position, if one exists
      // TODO: refactor rowIndex and columnIndex to be data attributes, not classes?? i like the idea of being able to operate on all of them at the same time, but i can't think of what practical purpse that would have, particularly when we're doing everything in JS and then just wiping/re-rendering it all each time there's a change. 
      var squareHtml = '<div class=gameSquare "' + rowIndex + ' ' + columnIndex + '" style="background-color:' + squareObj.color + '; height:' + squareSize + 'px; width:' + squareSize + 'px">This is my square!</div>';
      console.log(squareHtml);
      $('.gameBoard').append(squareHtml);
    });
  });
  // TODO: attach event listeners
  // TODO: add image if it exists on a piece
    // TODO: size image appropriately if it exists
  // TODO: include text if it exists on a piece- display name by default
  // TODO: comments for what this is doing to not intimidate students
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
