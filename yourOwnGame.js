// The $(document).ready(function() {}) just says "Wait to run the code inside here until after everything we need on the page has loaded."
$(document).ready(function() {
// NOTE: it is an explicit goal of this project to get you familiar with functional programming. Functional programming is a whole new way of thinking that requires some practice and repetition to become natural. These prompts are designed to give you practice using functional programming, so go through them as they're written, even if you can think of other ways of doing them. 

// We've created FINISH THIS

// INTERNAL: explicitly calling these arrays 'ToAdd' should prevent any possible confusion from students trying to store the pieces into these arrays, since we only want them permanently stored in the gameBoard. 
// 1. Create an array called piecesToAdd that holds the names of each of the pieces we'll create for each player. For example: ['kuddlyKoala', 'babyDino','babyDino', 'babyDino', 'fierceDragon', 'lazyPanda', 'lazyPanda']

// 2. Create an array of the playerNames. For example: ['hermoineGranger', 'graceHopper']

// 3. Now use two (nested) each loops to add these pieces to the board. 
  // Question1: How can you make sure each piece ends up on a different square on the board? 
  // Question2: What happens when you get to the end of a line? How do you know to start on the first position of the next line? Think if you can use the modulus "%" operator for this
  // Question3: How can we line these pieces up on opposite sides of the board?
  // BEST PRACTICE: Pseudocode the specific steps you'll need to accomplish. This takes a seemingly large and complex task and breaks it down into solvable chunks. 

// 4. Great! Now we have two opposing armies (or two groups of friends just trying to gather together on the same point?!) arranged on the board. Now it's time to make them look intimidating or pretty for their battle or cuddleFest. 
  // Let's use a couple of our functional programming skills here. We'll chain them together, slowly building up to do some fairly complex operations. 
    // A. Use filter to iterate through a single row, returning an arr of the squareObj in that row that have (at least) one gamePiece on them. 
    // B. Use map to change each of the objects in the array returned from filter to an array of their positions (HINT: positions are saved as a property on each object).
    // C. Use each to repeat this process on each row in your gameBoard
    // D. TODO: Narrate what they have at each step. At this point, you should have an array of subarrays. Each of those subarrays will contain the positions of the squares in a given row that have a gamePiece on them. Now, let's use reduce to reduce this down to a single array that contains the position of all the squares we're interested in. 
    // E. Whew! You've now used all four of the canonical functional programming functions! Great job getting here. Now we have a single array that holds the position of all the gamePieces. Let's use each to go through that array and do something for each item in that array. Except we're going to use it in a slightly creative way (yay for creativity in programming! And here my momma thought I'd never be an artist.). We're just going to use each item in the positionsArray as information to go find the gamePiece(s) at that position. Then, once we have those gamePieces, let's add an imageURL to each gamePiece so we can see the gamePieces on the board. 
      // Remember, we need to render everything to the DOM after we make changes, otherwise our updates will never be seen by the user!

// 5. 

//use filter to grab all pieces of the same type, and then use map to iterate through them and set their movement descriptions
//use map to iterate through all objects of the same type and set their collision descriptions
//use map to iterate through all pieces for each side and randomly 'gift' half of each player's objects to the other player. Call this command 'The Great Equalizer'

// Ideas:
  // Use reduce to create a tally of all of our gamePieces. Does this tally look identical to the totalPieceCount object?
  // Use filter to go through an objects array and only return objects of a particular type. 
  // Use map to change properties on each object (description, imageURL, collisionDescription, etc.)
  // Use map to advance all pieces one space closer towards the center (if their row is more than half, move their row down by one, if their row is less than half, increase their row by one).
  

// NOTE: there are two separate things going on: you making a change to the javascript code/logic behind the app, and rendering that new "state" to the DOM (what appears on the screen). In order to see any changes you make rendered to the screen, you need to call renderGameBoard() and pass in the updated gameBoard as an argument. 

// When a user clicks on a square, the code will try to run a function on the global scope called 'clickHandler'. 
// Create a function called clickHandler, and make sure it's accessible in the global scope
// This funnction will be invoked with the indices of the square clicked on. For example, if the user clicked on the square in the top-left corner of the board, the clickHandler will be invoked like so: clickHandler([0,0]);
  
  var collisionCount = 0;

  var gameBoard = makeGameBoard(8);
  renderGameBoard(gameBoard);

  makePiece(gameBoard, [0,0], 'testPiece');

  window.clickHandler = function(positionArr) {
    var row = positionArr[0];
    var column = positionArr[1];
    console.log(gameBoard[row][column]);
    // console.log('position inside clickHandler!' + positionArr);
  };
  gameBoard[0][0].gamePiece.imageURL = "http://cs307103.vk.me/v307103801/4aad/kGuRYIMoJnw.jpg";

  renderGameBoard(gameBoard);

// STUDENT: Use filter to iterate through all the positions on the board, grabbing each gamePiece object
  // Then, use map to add a link to an image to the appropriate property on each of those objects. 


});
