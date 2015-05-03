// The $(document).ready(function() {}) just says "Wait to run the code inside here until after everything we need on the page has loaded."

// TODO: MORE HANDHOLDING!!
// TODO: Refactor to be just getting used to the gameboard. Use a bunch of functional stuff here. Change colors. Place different pieces on the different spaces. Highlight all the spaces in the same row as a piece. Now highlight all the spaces in the same column. Now diagonals?!

$(document).ready(function() {
// NOTE: it is an explicit goal of this project to get you familiar with functional programming. Functional programming is a whole new way of thinking that requires some practice and experience to feel natural. These prompts are designed to give you experience using functional programming, so go through them as they're written, even if you can think of other ways of doing them without using functional programming. 

// We've created some helper functions FINISH THIS- explain the helperFunctions we've created, how to use each one, and that they're just to handle the rendering so they get to focus on the JS logic. GOAL: make them feel like they own the repo, and that what we've built out for them already is trivial. 

// TODO: talk about debugging again. Make that an obvious goal of this. 


// Let's start off by getting used to the gameBoard and how this project is structured.

var gameBoard = makeGameBoard(8);

// When in doubt, always console.log whatever it is you're working with to investigate it more. Try that now with gameBoard to figure it out!
console.log('our gameBoard is: ', gameBoard);

// gameBoard is an array of arrays (an array that is filled with other arrays). Let's start by using each to iterate through the gameBoard array, console.logging each item inside the gameBoard array. You should see 8 arrays, each of length 8, logged to your console. Each array here represents a row. 
_.each(gameBoard, function(item) {
  console.log('every individual item being passed to each inside our gameBoard:', item);
});
// Ok, now that we see the gameBoard array contains 8 arrays representing the 8 rows in the board, let's investigate a single row. 
// Let's use each again, this time invoking it with the first row in the gameBoard. Let's go through and console.log each item in that row. 
_.each(gameBoard[0], function(item) {
  console.log('each item in our gameBoards first row', item);
});
// What you'll see is 8 different objects logged to your console. Click into them to explore them more. 
// Each of these objects represents a square. We have many different pieces of information we want to store about each square: what color it is, what position it is on the board, what gamePiece is at that position, etc. An object is a perfect way to store information about all these different properties associated with that square. 

// gameBoard[row][column] will get you the squareObj at that position in the gameBoard. So gameBoard[2][6] will point to the squareObj on row 3 column 7. Quick review on how this works: JS chains operators together, the results of each one being passed to the next operation. So first we're accessing the thing at position 2 in our gameBoard when we say gameBoard[2]. Then, within that thing (which is an array representing a row), we're asking for the thing at the 6th position (which is going to be a squareObj). 
// We could chain this together even more. Explain with your pair each individual operation that's going on when we say:
gameBoard[3][5].color = 'black';


// Alright! Now that we've figured out the gameBoard is an array of arrays, and that each square is just an object with some useful properties on it, let's start using our functional programming tools to make some changes to the board. 
// Use each to iterate through the first row of the gameBoard (the array at position 0 in the gameBoard array). 
  // Let's change every square to a different color of your choosing. 
  _.each(gameBoard[0], function(item) {
    item.color = 'orange';
  });
    // If you're not familiar with colors in JS, you can do this in three main ways: through rgb values, hex values (the way we've done it right now), or just typing in a color name like 'orange'
  // Now let's do the same thing using map on the second row of our gameBoard
  gameBoard[1] = _.map(gameBoard[1], function(item) {
    item.color = 'blue';
    return item;
  });
    // What's the key difference between map and each? map returns an array, whereas each only has side effects, and does not return anything. 
    // Think through how we'd use each and map in different ways to accomplish the same goal. 
    // The key part here is how to leverage what either of them does (side effects, vs. a returned array). 
  // Now that we've figured out how to use map and each to change the colors in a row, let's nest them inside of each to change all of the rows!
    // Let's warm up to this by doing it the way we would before we knew how to program functionally: using nested for loops. 
      // Use an outer for loop to iterate through all of the rows in the gameBoard. 
      // Use an inner for loop to iterate through all the objects in a given row. 
        // While iterating through each object, change it's color property to 'orange' (or any other color of your choosing).
        for(var i = 0; i < gameBoard.length; i++ ) {
          for(var j = 0; j < gameBoard[i].length; j++) {
            gameBoard[i][j].color = 'purple';
          }
        }
    // Great! Now that we've changed the color of each square to orange using for loops, let's transition this over to functional programming.
      // First, replace the inner for loop with an each statement that changes the color of each square to blue. Be sure to write a new each statement for this- don't just copy and paste the one you've written up above. We want you to get as much practice typing these out as possible!
      for (var i = 0; i < gameBoard.length; i++ ) {
        _.each(gameBoard[i], function(item) {
          item.color = 'green';
        });
      }
      // Now that all the squares are changed to blue, let's replace the outer for loop with an each statement. Again, write a whole new one from scratch here. 
        // Change the color in the inner each statement to green, just to make sure everything's working. 
        // Remember, when in doubt, console.log the item you're working with to make sure you understand what's going on at each step!
        // This is where naming your variables something descriptive makes a ton of sense. What is the thing that is being passed into the callback function on either each statement? Could you name it something that reflects exactly what's being passed in?
        _.each(gameBoard, function(row) {
          _.each(row, function(squareObj) {
            squareObj.color = 'black';
          });
        });
    // Awesome! Hopefully at this point you've fully grasped that each is just another way of executing some code on each item in a collection. And that you can make that code do whatever you want it to. 
      // Let's replace our inner each loop with map, changing the colors of all the squares to purple this time. 
      _.each(gameBoard, function(row) {
        row = _.map(row, function(squareObj) {
          squareObj.color = 'red';
          return squareObj;
        });
      });





// Awesome! Now we've got a decent understanding of the gameBoard. Now let's test out the makePiece function. 
  // In programming, it's a super useful skill to get used to just looking at the interfaces of things, and not worrying too much about how they work inside. If you try to figure out how everything works inside you'll find yourself descending through many deep, dark, and scary caves that oftentimes don't expand your programming knowledge very much. Try checking out the interface for makePiece (what parameters it takes and what's returned from it).
  // TODO: move interfaces speech to be for gameBoard?? In the introductory video, and in the in-person introduction. 
  // Let's add a new piece (name it anything you want. babyDino is my current favorite, but I'm sure you'll have fun coming up with your own favorite gamePieces!). Try invoking makePiece with the right arguments and make sure it worked by opening up your browser.  
  makePiece(gameBoard, [3,5], 'babyDino');
  // gameBoard[3][5].gamePiece.imageURL = "http://cs307103.vk.me/v307103801/4aad/kGuRYIMoJnw.jpg";

  // Now that we've added a piece to the board, let's use that piece to practice filter. 
  // Invoke filter on the row that you just added the gamePiece to. See if you can use it to return an array of only the square(s) that have a gamePiece on them. Do you remember where we're storing gamePieces on each squareObj? 
    var filteredResult = _.filter(gameBoard[3], function(item) {
      return item.gamePiece;
    });
    console.log(filteredResult);
  // Now try adding gamePieces to a couple of different rows throughout the board. 
  makePiece(gameBoard, [3,6], 'babyDino');
  makePiece(gameBoard, [3,2], 'babyDino');
  makePiece(gameBoard, [5,6], 'babyDino');
  makePiece(gameBoard, [5,2], 'babyDino');

  // Can you use each, in conjunction with filter, to find all the squares on the whole board that have a piece on them? 
    // Hint: Remember that each can't return anything, but it can have side effects (that is, modify variables it has scope access to).
    var results = [];
    _.each(gameBoard, function(row) {
      results.push(
        _.filter(row, function(squareObj) {
          return squareObj.gamePiece;
        })
      );
    });
    console.log('results after filter:', results);
  // Great! At this point, we should have an array that is filled with nested arrays. Each object in those nested arrays should be a square that has a gamePiece on it. TODO: Give them an example of what the result array looks like. 
    // That should look something like: "results after filter: [Array[0], Array[0], Array[0], Array[3], Array[0], Array[2], Array[0], Array[0]]" for a gameBoard that has three gamePieces on row 3 and two game pieces on row 5.
 
// We're now going to go on a mini-sprint covering reduce, the last critical functional programming tool. Understanding reduce will let us take this messy nested array we have, and turn it into a single, flattened array. 

//Reduce mini-sprint:
// You'll notice that oftentimes what you're doing with for loops and each statements is reducing an entire collection down to a single answer. This is such a common pattern that there's a canonical functional programming function called reduce. Let's explore what reduce does, and how it boils a collection down to a single answer!
// What reduce does is iterate over a collection, and invoke a callback function on each item in that collection. 
  // That callback function takes two parameters: the result from the previous iteration, and the current item.
  // An obvious way of using reduce is to sum up the values in an array. That would look like so:
  var testArr = [6,7,8,9,10];
  var sum = _.reduce(testArr, function(previous, current) {
    return previous + current;
  });
  console.log('the sum returned from reduce is:',sum);
  // Let's break this down for a moment. 
  // We're creating a variable sum, and setting it equal to the result of invoking reduce with some arguments. 
    // Those areguments are the testArr we just created, and a callback function. 
      // The callback function takes in two parameters: the result from the previous invocation of the callback function, and the current value being iterated over. 
      // The callback then performs some logic on these two things and returns a single thing. 
      // In our case, the callback function adds these two things together and returns the result of that addition. 
  // Write out your own invocation of reduce that gives you the results of multiplying all the values in testArr together. 
  // Reduce also works on the values stored in an object. 
  var codingPoints = {
    coderByte: 1200,
    eloquentJavaScript: 80,
    codeCademy: 700,
    telegraphPrep: 8000000
  };
  // Let's use reduce to add together all the values in our codingPoints object. 
  // reduce also takes an optional starting value that we haven't been giving it yet. 
    // What is this starting value used for? It's the value that is passed in as "previous" on the first iteration. 
    // Let's say that you already came in with 10 codingPoints before starting on coderByte or codeCademy. We can pass that in as the starting value to reduce. All you need to do is put it after a comma after the callback function, like so: 
    _.reduce(codingPoints, function(previous, current) {
      //logic goes here
      return;
    }, 10);
    // Try writing a new invocation of reduce that gives yourself 50 starting codingPoints and then sums up the rest of the codingPoints. 
    // Now try writing another invocation of reduce that multiplies the values in testArr together, but starts with the value of 10. 
      // What do you expect to happen?
      // Hint: think through what happens on the first iteration through reduce. 
        // Let's step through it: 10 will be passed in as the value for previous, and 6 will be passed in as the value for current. We'll multiply them together, and return the result, 60. 
        // 60 will then be passed in as the value for previous on the next iteratoin, and 7 will be passed in as the value for current. Multiply them together, we get 420, and return that value. 
        // We repeat this through the last item in the array, eventually getting to an answer that is 10x the value we got when we did not pass in 10 as the starting value. 
  // Reduce is super flexible. You can use it like filter if you wanted to. Let's write out code that reduces the codingPoints object down to just an array of values that are larger than 1000. So we'd expect to get the following: [1200, 8000000]
    // HINT: you can pass in anything you want as a starting value, even an empty array. 
  // Now let's think through how we could use reduce to turn an array of nested arrays into a flattened array. 
    var nestedArrs = [[1,2,3],[4],[5,6,7,8],[9,10]];
    // We can use reduce to simplify that down to a single value of [1,2,3,4,5,6,7,8,9,10].
    // As always, when in doubt, log the variables you're working with to the console with a clear note. 
    var flattened = _.reduce(nestedArrs, function(previous, current) {
      _.each(current, function(item) {
        previous.push(item);
      });
      return previous;
    });
    console.log('flattened post reduce:',flattened);
  // Another interesting use of reduce is with booleans. 
    var friends = {
      rihanna: true,
      taylorSwift: true,
      katyPerry: false
    }
    // Say you have a collection of people, and a true or false value marking whether you're friends with them or not. Maybe you want to iterate through the whole collection and see if you're friends with everyone. We can use reduce for that!
      // Let's think about this for a moment. On each iteration, we want to check two things: 
        // 1. Whether we're friends with the current person (current value)
        // 2. Whether we're friends with everyone who came before (previous value)
      _.reduce(friends, function(previous, current) {
        return previous && current; //return true ONLY IF both the current value is true, and the result of all previous iterations is true too. return false if either the current or the previous is false. 
      }, true); //start with true. What happens if we start with false? 
    // Now let's put this to use another way. 
      var bouncersNightmare= {ashley: 22, bobby:23, camila:25, gabriela:22, ben:21, miranda:24, jayden:22, sofia:23, matias:21, hannah:21, makayla:23, justin:22, isaiah:25, caleb:22, chloe:24};
      // Let's make this poor bouncer's job a bit easier by reducing this collection down to a single true or false value of whether everyone in this group is at least 21 or not. 
        // Use reduce to turn bouncersNightmare into a single boolean value certifying whether everyone in the collection is at least 21. 
        // Test it out by switching one of the ages to be less than 21. Does your function return false now? 
  // Awesome job! You've now covered several different uses of reduce. There's a bit of a running joke amongst programmers that any problem can be solved using reduce. With these tools in your belt, you're going to be well-suited to do just that! 


 // Let's return to our gameBoard now. Step back up to just before we went on the reduce mini-sprint to remind yourself what we were doing. 
 // Remember that we'd just used each and filter to find all the gamePieces on the board: "results after filter: [Array[0], Array[0], Array[0], Array[3], Array[0], Array[2], Array[0], Array[0]]" for a gameBoard that has three gamePieces on row 3 and two game pieces on row 5.
 // Having that information scattered throughout a bunch of different arrays seems messy. You can probably think of plenty of cases where we'd want to have all that information collected into a single array. 
  // Wait, that's starting to sound like reduce! We're taking a collection of a bunch of things, and reducing it down to a single thing. 
    // Can you think of a way we could reduce an array filled with arrays to a single array just filled with all the values contained in each subarray? 
    // Hint: what if we tried passing in an empty array as the starting value?

// This ends our intro to the capstone project. By this point you should be pretty familiar with the gameBoard, the makePiece function, and all four of the main functional programming tools (each, map, filter, and reduce). From here on out, we're intentionally going to give you less guidance. One of the key skills to be a successful engineer is autonomy in accomplishing tasks that are given to you. We want you to get used to that feeling with these upcoming exercises. 


// INTERNAL: explicitly calling these arrays 'ToAdd' should prevent any possible confusion from students trying to store the pieces into these arrays, since we only want them permanently stored in the gameBoard. 
// 1. Create an array called piecesToAdd that holds the names of each of the pieces we'll create for each player. For example: ['kuddlyKoala', 'babyDino','babyDino', 'babyDino', 'fierceDragon', 'lazyPanda', 'lazyPanda']

// 2. Create an array of the playerNames. For example: ['hermoineGranger', 'graceHopper']

// 3. Now use two (nested) each loops to add these pieces to the board. 
  // Question1: How can you make sure each piece ends up on a different square on the board? 
  // Question2: What happens when you get to the end of a line? How do you know to start on the first position of the next line? Think if you can use the modulus "%" operator for this. If you're not familiar with the modulus operator, it gives you the remainder from dividing two numbers. So if we divide 12 by 8, that gives us a remainder of 4 (we have 4 left over after taking 8 out of 12). As always, feel free to google around for more information!
  // Question3: How can we line these pieces up on opposite sides of the board?
  // BEST PRACTICE: Pseudocode the specific steps you'll need to accomplish. This takes a seemingly large and complex task and breaks it down into solvable chunks. 

// 4. Great! Now we have two opposing armies (or two groups of friends just trying to gather together on the same point?!) arranged on the board. Now it's time to make them look intimidating or pretty for their battle or cuddleFest. 
  // Let's use a couple of our functional programming skills here. We'll chain them together, slowly building up to do some fairly complex operations. 
    // A. Use filter to iterate through a single row, returning an arr of the squareObj in that row that have a gamePiece on them. 
    // B. Use map to change each of the objects in the array returned from filter to an array of their positions. Positions are a property saved as a property on each object. Console.log each object to check it out!
    // C. Use each to repeat this process on each row in your gameBoard
    // D. At this point, you should have an array of subarrays. Each of those subarrays will contain the positions of the squares in a given row that have a gamePiece on them. Now, let's use reduce to reduce this down to a single array that contains the position of all the squares we're interested in. 
    // E. Whew! You've now used all four of the canonical functional programming functions! Great job getting here. Now we have a single array that holds the position of all the gamePieces. Let's use each to go through that array and do something for each item in that array. Except we're going to use it in a slightly creative way (yay for creativity in programming! And here my momma thought I'd never be an artist.). We're just going to use each item in the positionsArray as information to go find the gamePiece at that position. Then, once we have those gamePieces, let's add an imageURL to each gamePiece so we can see the gamePieces on the board. 
      // imageURL is just a property on each object. All you need to do is add a link to an image. If you haven't done this before, you can right click on any image online, and get a link to that image. Set the imageURL property equal to that string, and voila! Your image will appear on the screen. 
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



// When a user clicks on a square, the code will try to run a function on the global scope called 'clickHandler'. 
// Create a function called clickHandler, and make sure it's accessible in the global scope
// This funnction will be invoked with the indices of the square clicked on. For example, if the user clicked on the square in the top-left corner of the board, the clickHandler will be invoked like so: clickHandler([0,0]);

  
  var collisionCount = 0;


// TODO: Make sure they know to put clickHandler on the global scope. 
  window.clickHandler = function(positionArr) {
    var row = positionArr[0];
    var column = positionArr[1];
    console.log(gameBoard[row][column]);
  };
  // gameBoard[row][column] will get you the squareObj at that position in the gameBoard. So gameBoard[2][6] will point to the squareObj on row 3 column 7. Quick review on how this works: JS chains operators together, the results of each one being passed to the next operation. So first we're accessing the thing at position 2 in our gameBoard when we say gameBoard[2]. Then, within that thing (which is an array representing a row), we're asking for the thing at the 6th position (which is going to be a squareObj). 
  // We could chain this together even more. Explain with your pair each individual operation that's going on when we say:


  // NOTE: there are two separate things going on: you making a change to the javascript code/logic behind the app, and rendering that new "state" to the DOM (what appears on the screen). In order to see any changes you make rendered to the screen, you need to call renderGameBoard() and pass in the updated gameBoard as an argument. 
  renderGameBoard(gameBoard); // DON'T REMOVE THIS LINE. This line makes sure that any changes you make to your JS code will actually show up on the screen. Try commenting it out and see how the gameBoard is no longer rendered to the browser, even though your logic is clearly still running, as seen by your console.logs. 

});
