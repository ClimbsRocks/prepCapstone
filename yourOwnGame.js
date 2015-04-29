// The $(document).ready(function() {}) just says "Wait to run the code inside here until after everything we need on the page has loaded."

// TODO: MORE HANDHOLDING!!
// TODO: Refactor to be just getting used to the gameboard. Use a bunch of functional stuff here. Change colors. Place different pieces on the different spaces. Highlight all the spaces in the same row as a piece. Now highlight all the spaces in the same column. Now diagonals?!

$(document).ready(function() {
// NOTE: it is an explicit goal of this project to get you familiar with functional programming. Functional programming is a whole new way of thinking that requires some practice and experience to feel natural. These prompts are designed to give you experience using functional programming, so go through them as they're written, even if you can think of other ways of doing them without using functional programming. 

// We've created some helper functions FINISH THIS- explain the helperFunctions we've created, how to use each one, and that they're just to handle the rendering so they get to focus on the JS logic. GOAL: make them feel like they own the repo, and that what we've built out for them already is trivial. 

// TODO: talk about debugging again. Make that an obvious goal of this. 


// Let's start off by getting used to the gameBoard and how this project is structured.

// gameBoard is an array of arrays (an array that is filled with other arrays). Let's start by using each to iterate through the first row of the gameBoard (the array at position 0 in the gameBoard array). 
  // Let's change every other square (say, the even ones) to a different color of your choosing. 
    // If you're not familiar with colors in JS, you can do this in three main ways: through rgb values, hex values (the way we've done it right now), or just typing in a color name like 'orange'
  // Now let's do the same thing using map. 
    // We only changed every other square in that first row using each. So now let's change the odd squares to a new color so that all the squares have been changed. 
    // What's the key difference between map and each? ANSWER: map returns an array, whereas each only has side effects, and does not return anything. 
    // Think through how we'd use each and map in different ways from each other to accomplish the same goal. 
  // Now that we've figured out how to use map and each to change the colors in a row, let's nest them inside of each to change all of the rows!
    // Try doing this in two different ways, one with map nested inside of each, and one with an each statement nested inside of the outer each. 


// Awesome! Now we've got a decent understanding of the gameBoard. Now let's test out the makePiece function. 
  // In programming, it's a super useful skill to get used to just looking at the interfaces of things, and not worrying too much about how they work inside. If you try to figure out how everything works inside you'll find yourself descending through many deep, dark, and scary caves that oftentimes don't expand your programming knowledge very much. Try checking out the interface for makePiece (what parameters it takes and what's returned from it).
  // TODO: move interfaces speech to be for gameBoard?? In the introductory video, and in the in-person introduction. 
  // Let's add a new piece (name it anything you want. babyDino is my current favorite, but I'm sure you'll have fun coming up with your own favorite gamePieces!). Try invoking makePiece with the right arguments and make sure it worked by opening up your browser.  
  // Now that we've added a piece to the board, let's use that piece to practice filter. 
  // Invoke filter on the row that you just added the gamePiece to. See if you can use it to return an array of only the square(s) that have a gamePiece on them. Do you remember where we're storing gamePieces on each squareObj? TODO: hint them with console.log
  // Now try adding gamePieces to a couple of different rows throughout the board. Can you use each, in conjunction with filter, to find all the squares on the whole board that have a piece on them? 
  // Great! At this point, we should have an array that is filled with nested arrays. Each object in those nested arrays should be a square that has a gamePiece on it. TODO: Give them an example of what the result array looks like. 
  // Having that information scattered throughout a bunch of different arrays seems messy. You can probably think of plenty of cases where we'd want to have all that information collected into a single array. 
  // Wait, that's starting to sound like reduce! We're taking a collection of a bunch of things, and reducing it down to a single thing. 
    // Can you think of a way we could use reduce to reduce an array filled with arrays to a single array just filled with all the values contained in each subarray? 
    // Hint: what if we tried passing in an empty array as the starting value?
    // If it's easier to visualize, practice on this: [[1,2,3],[4],[5,6,7,8],[9,10]]. We can use reduce to simplify that down to a single value of [1,2,3,4,5,6,7,8,9,10].
    // TODO: Add in mini curriculum on using reduce- give them some practice on it. start with summing, then build up to the array of arrays example. 


// INTERNAL: explicitly calling these arrays 'ToAdd' should prevent any possible confusion from students trying to store the pieces into these arrays, since we only want them permanently stored in the gameBoard. 
// 1. Create an array called piecesToAdd that holds the names of each of the pieces we'll create for each player. For example: ['kuddlyKoala', 'babyDino','babyDino', 'babyDino', 'fierceDragon', 'lazyPanda', 'lazyPanda']

// 2. Create an array of the playerNames. For example: ['hermoineGranger', 'graceHopper']

// 3. Now use two (nested) each loops to add these pieces to the board. 
  // Question1: How can you make sure each piece ends up on a different square on the board? 
  // Question2: What happens when you get to the end of a line? How do you know to start on the first position of the next line? Think if you can use the modulus "%" operator for this TODO: link to modulus. we don't cover it much. 
  // Question3: How can we line these pieces up on opposite sides of the board?
  // BEST PRACTICE: Pseudocode the specific steps you'll need to accomplish. This takes a seemingly large and complex task and breaks it down into solvable chunks. 

// 4. Great! Now we have two opposing armies (or two groups of friends just trying to gather together on the same point?!) arranged on the board. Now it's time to make them look intimidating or pretty for their battle or cuddleFest. 
  // Let's use a couple of our functional programming skills here. We'll chain them together, slowly building up to do some fairly complex operations. 
    // A. Use filter to iterate through a single row, returning an arr of the squareObj in that row that have (at least) one gamePiece on them. 
    // B. Use map to change each of the objects in the array returned from filter to an array of their positions. Positions are a property saved as a property on each object. Console.log each object to check it out!
    // C. Use each to repeat this process on each row in your gameBoard
    // D. TODO: Narrate what they have at each step. At this point, you should have an array of subarrays. Each of those subarrays will contain the positions of the squares in a given row that have a gamePiece on them. Now, let's use reduce to reduce this down to a single array that contains the position of all the squares we're interested in. 
    // E. Whew! You've now used all four of the canonical functional programming functions! Great job getting here. Now we have a single array that holds the position of all the gamePieces. Let's use each to go through that array and do something for each item in that array. Except we're going to use it in a slightly creative way (yay for creativity in programming! And here my momma thought I'd never be an artist.). We're just going to use each item in the positionsArray as information to go find the gamePiece(s) at that position. Then, once we have those gamePieces, let's add an imageURL to each gamePiece so we can see the gamePieces on the board. 
      // imageURL is just a property on each object. All you need to do is add a link to an image. If you haven't done this before, you can right click on any image online, and get a link to that image. set the imageURL property equal to that string, and voila! Your image will appear on the screen. 
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
  // Use filter to find only those squares that have a collision. 
  // What are other easy ways of easing them into this? 
  // Use map to change the color of all squares a piece is eligible to move to. 
    // Store this as a method on each gamePiece object, so you can just call gamePiece.highlightSquares() no matter which piece it is
  // Hightlight all the squares that all gamePieces can move to!
  // Add a count of the number of pieces that could move to a certain square, onto every square. We could definitely use some functional programming for this. 
  // When a piece is clicked:
    // Set that piece to active if it's the first time it's clicked
    // Change the color of all the squares that piece can move to.
    // Deactivate that piece if it already is the active one. 
    // Change back the color of all the squares that piece can move to. 

  // When a piece is moved:
    // Check to make sure it's a valid move
    // If so change the color of the squares it can move to back to their original color
      // check for collisions
      // perform whatever logic suits your game on a collision
        // ADVANCED: don't let a piece move through another piece. If it's moving down a row, and there's a piece between it and it's destination, it should not be allowed to complete that move. 
    // If it is not a valid move, alert the user that this is not a valid move. Give them the chance to cancel (deactivate) this piece by clicking on Ok or Cancel


// NOTE: there are two separate things going on: you making a change to the javascript code/logic behind the app, and rendering that new "state" to the DOM (what appears on the screen). In order to see any changes you make rendered to the screen, you need to call renderGameBoard() and pass in the updated gameBoard as an argument. 

// When a user clicks on a square, the code will try to run a function on the global scope called 'clickHandler'. 
// Create a function called clickHandler, and make sure it's accessible in the global scope
// This funnction will be invoked with the indices of the square clicked on. For example, if the user clicked on the square in the top-left corner of the board, the clickHandler will be invoked like so: clickHandler([0,0]);
  
  var collisionCount = 0;

  var gameBoard = makeGameBoard(8);
  renderGameBoard(gameBoard);

  makePiece(gameBoard, [0,0], 'testPiece');

// TODO: Make sure they know to put clickHandler on the global scope. 
  window.clickHandler = function(positionArr) {
    var row = positionArr[0];
    var column = positionArr[1];
    console.log(gameBoard[row][column]);
    // console.log('position inside clickHandler!' + positionArr);
  };
  gameBoard[0][0].gamePieces[0].imageURL = "http://cs307103.vk.me/v307103801/4aad/kGuRYIMoJnw.jpg";

  renderGameBoard(gameBoard);

// STUDENT: Use filter to iterate through all the positions on the board, grabbing each gamePiece object
  // Then, use map to add a link to an image to the appropriate property on each of those objects. 


});
