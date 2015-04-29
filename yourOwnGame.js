$(document).ready(function() {
// NOTE: it is an explicit goal of this project to get you familiar with functional programming. Functional programming is a whole new way of thinking that requires some practice and repetition to become natural. These prompts are designed to give you practice using functional programming, so go through them as they're written, even if you can think of other ways of doing them. 
//use filter to grab all pieces of the same type, and then use map to iterate through them and set their movement descriptions
//use map to iterate through all objects of the same type and set their collision descriptions
//use map to iterate through all pieces for each side and randomly 'gift' half of each player's objects to the other player. Call this command 'The Great Equalizer'

// NOTE: there are two separate things going on: you making a change to the javascript code/logic behind the app, and rendering that new "state" to the DOM (what appears on the screen). In order to see any changes you make rendered to the screen, you need to call renderGameBoard() and pass in the updated gameBoard as an argument. 

// When a user clicks on a square, the code will try to run a function on the global scope called 'clickHandler'. 
// Create a function called clickHandler, and make sure it's accessible in the global scope
// This funnction will be invoked with the indices of the square clicked on. For example, if the user clicked on the square in the top-left corner of the board, the clickHandler will be invoked like so: clickHandler([0,0]);

  var gameBoard = makeGameBoard(8);
  renderGameBoard(gameBoard);

  makePiece(gameBoard, [0,0], 'testPiece');

  window.clickHandler = function(positionArr) {
    var row = positionArr[0];
    var column = positionArr[1];
    console.log(gameBoard[row][column]);
    // console.log('position inside clickHandler!' + positionArr);
  };

});
