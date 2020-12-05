
  // RANDOM button
  function randombutton(){
          snake2.maxcells = 3;
          snake2.dx = grid;
          snake2.dy = 0;
         snake.maxcells = 3;
          snake.dx = grid;
          snake.dy = 0;
     snake2.x = getRandomInt(0, 25) * grid;
          snake2.y = getRandomInt(0, 25) * grid;
    snake.x = getRandomInt(0, 25) * grid;
          snake.y = getRandomInt(0, 25) * grid;
    }
  // on screen reset button
  function resetbutton(){
   snake.x = 160;
          snake.y = 160;
          snake.cells = [];
          snake.maxCells = 3;
          snake.dx = grid;
          snake.dy = 0;
          apple.x = getRandomInt(0, 25) * grid;
          apple.y = getRandomInt(0, 25) * grid;
    snake2.x = 160;
          snake2.y = 320;
          snake2.cells = [];
          snake2.maxCells = 3;
          snake2.dx = grid;
          snake2.dy = 0; 
    apple2.x = getRandomInt(0, 25) * grid;
          apple2.y = getRandomInt(0, 25) * grid;
        }
  var canvas = document.getElementById('game');
  var context = canvas.getContext('2d');
  var grid = 16;
  var count = 0;
  var snake = {
    x: 160,
    y: 160,
    // snake velocity. moves one grid length every frame in either the x or y direction
    dx: grid,
    dy: 0,
    // keep track of all grids the snake body occupies
    cells: [],
    // length of the snake. grows when eating an apple
    maxCells: 3
  };
  var snake2 = {
    x: 160,
    y: 320,
    // snake2 velocity. moves one grid length every frame in either the x or y direction
    dx: grid,
    dy: 0,
    // keep track of all grids the snake2 body occupies
    cells: [],
    // length of the snake2. grows when eating an apple
    maxCells: 3
  };
  var apple = {
    x: getRandomInt(0, 25) * grid,
    y: getRandomInt(0, 25) * grid
  };
  
  // get random whole numbers in a specific range
  // @see https://stackoverflow.com/a/1527820/2124254
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  // warp snake on edge of screen
  function snakeWarp() {
  // wrap snake position horizontally on edge of screen
    if (snake.x < 0) {
      snake.x = canvas.width - grid;
    }
    else if (snake.x >= canvas.width) {
      snake.x = 0;
    }
    // wrap snake position vertically on edge of screen
    if (snake.y < 0) {
      snake.y = canvas.height - grid;
    }
    else if (snake.y >= canvas.height) {
      snake.y = 0;
    }
  }
  // reset snake if hit edge of screen
  function snakeReset() {
    // reset snake position vertically on edge of screen
    if (snake.y < 0) {
          snake.cells = [];
          snake.maxCells = 3;
  
    }
    else if (snake.y >= canvas.height) {
          snake.cells = [];
          snake.maxCells = 3;
   
    }
    // reset snake position horizontally on edge of screen
    if (snake.x < 0) {
          snake.cells = [];
          snake.maxCells = 3;
   
    }
    else if (snake.x >= canvas.height) {
          snake.cells = [];
          snake.maxCells = 3;
   
    }
    
  }
  // snake2 will warp on edge of screen
  function snake2Warp() {
    // wrap snake2 position horizontally on edge of screen
    if (snake2.x < 0) {
      snake2.x = canvas.width - grid;
    }
    else if (snake2.x >= canvas.width) {
      snake2.x = 0;
    }
    // wrap snake2 position vertically on edge of screen
    if (snake2.y < 0) {
      snake2.y = canvas.height - grid;
    }
    else if (snake2.y >= canvas.height) {
      snake2.y = 0;
    }
  }
  // this resets snake2 on edge of screen
  function snake2Reset() {
    // reset snake position vertically on edge of screen
    if (snake2.y < 0) {
          snake2.cells = [];
          snake2.maxCells = 3;
  
    }
    else if (snake2.y >= canvas.height) {
          snake2.cells = [];
          snake2.maxCells = 3;
          
    }
    // reset snake position horizontally on edge of screen
    if (snake2.x < 0) {
          snake2.cells = [];
          snake2.maxCells = 3;
          
    }
    else if (snake2.x >= canvas.height) {
          snake2.cells = [];
          snake2.maxCells = 3;
    }
    
  }
  // Snakes collide
  function snakesCollide() {
    
    if (snake.x === snake2.x && snake.y === snake2.y) {
    snake2.cells = [];
          snake2.maxCells = 3;
          snake2.dx = grid;
          snake2.dy = 0;
    snake.cells = [];
          snake.maxCells = 3;
          snake.dx = grid;
          snake.dy = 0;
    snake2.x = getRandomInt(0, 25) * grid;
          snake2.y = getRandomInt(0, 25) * grid;
    snake.x = getRandomInt(0, 25) * grid;
          snake.y = getRandomInt(0, 25) * grid;
      }
  }
  // this is what makes snake work
  function snakeGame() {
    // draw snake one cell at a time
    if (snake.maxCells > snake2.maxCells) {
      context.fillStyle = 'green';
    }
    else {
    context.fillStyle = 'red';
    }
    snake.cells.forEach(function(cell, index) {
      // drawing 1 px smaller than the grid creates a grid effect in the snake body so you can see how long it is
      context.fillRect(cell.x, cell.y, grid-1, grid-1);  
      // snake ate apple
      if (cell.x === apple.x && cell.y === apple.y) {
        snake.maxCells++;
     snake.maxCells++;
      snake.maxCell++;
        // canvas is 400x400 which is 25x25 grids 
        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
      }
      // check collision with all cells after this one (modified bubble sort)
      for (var i = index + 1; i < snake.cells.length; i++) { 
        // snake occupies same space as a body part. reset game
        if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
          snake.cells = [];
          snake.maxCells = 3;
        }
      }
    });
    
  }
  // This is what makes snake2 work
  function snake2Game() {
  // draw snake2 one cell at a time
  if (snake2.maxCells > snake.maxCells) {
    context.fillStyle = 'green';
  }
  else {
  context.fillStyle = 'purple';  
  }
    snake2.cells.forEach(function(cell, index) { 
      // drawing 1 px smaller than the grid creates a grid effect in the snake2 body so you can see how long it is
      context.fillRect(cell.x, cell.y, grid-1, grid-1);  
      // snake2 ate apple
      if (cell.x === apple.x && cell.y === apple.y) {
        snake2.maxCells++;
     snake2.maxCells++;
      snake2.maxCell++;
        // canvas is 400x400 which is 25x25 grids 
        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
      }
      // check collision with all cells after this one (modified bubble sort)
      for (var i = index + 1; i < snake2.cells.length; i++) {
        // snake2 occupies same space as a body part. reset game
        if (cell.x === snake2.cells[i].x && cell.y === snake2.cells[i].y) {
          snake2.cells = [];
          snake2.maxCells = 3;
        
        }
      }
    });
  }
  // this is how to win game
  function gameWin() {
    if (snake.cells.length > 21) {
    snakeGame();
    }
   else if (snake2.cells.length > 21) {
    snake2Game();
    }
    else {
      snakeGame();
      snake2Game();
    }
  }
  // game loop
  function loop() {
    requestAnimationFrame(loop);
    // slow game loop to 15 fps instead of 60 (60/15 = 4)
    if (++count < 4) {
      return;
    }
    count = 0;
    context.clearRect(0,0,canvas.width,canvas.height);
    // move snake by it's velocity
    snake.x += snake.dx;
    snake.y += snake.dy;
    // this warps snake on edge of screen if longer than snake2 and so on
    
    if (snake.maxCells >= 21) {
      snakeReset();
    }
    else if (snake2.maxCells >= 21) {
      snake2Reset();
    }
    else if (snake.maxCells == snake2.maxCells) {
      snakeWarp();
      snake2Warp();
    }
    else if (snake.maxCells > snake2.maxCells) {
      snakeReset();
      snake2Warp();
    }
    else {
      snakeWarp();
      snake2Reset();
    }
    // keep track of where snake has been. front of the array is always the head
    snake.cells.unshift({x: snake.x, y: snake.y});
    // remove cells as we move away from them
    if (snake.cells.length > snake.maxCells) {
      snake.cells.pop();
    } 
     // move snake2 by it's velocity
    snake2.x += snake2.dx;
    snake2.y += snake2.dy;
    // keep track of where snake2 has been. front of the array is always the head
    snake2.cells.unshift({x: snake2.x, y: snake2.y});
    // remove snake2 cells as we move away from them
    if (snake2.cells.length > snake2.maxCells) {
      snake2.cells.pop();
    }
    // draw apple
    context.fillStyle = 'yellow';
    context.fillRect(apple.x, apple.y, grid-1, grid-1);
  // function for snakes collide
  snakesCollide();
    // Function to win the game
    gameWin(); 
  }
  // listen to keyboard events to move the snake
  document.addEventListener('keydown', function(e) {
    // prevent snake from backtracking on itself by checking that it's 
    // not already moving on the same axis (pressing left while moving
    // left won't do anything, and pressing right while moving left
    // shouldn't let you collide with your own body)
    // left arrow key
    if (e.which === 37 && snake.dx === 0) {
      snake.dx = -grid;
      snake.dy = 0;
    }
    // up arrow key
    else if (e.which === 38 && snake.dy === 0) {
      snake.dy = -grid;
      snake.dx = 0;
    }
    // right arrow key
    else if (e.which === 39 && snake.dx === 0) {
      snake.dx = grid;
      snake.dy = 0;
    }
    // down arrow key
    else if (e.which === 83 && snake2.dy === 0) {
      snake2.dy = grid;
      snake2.dx = 0;
    }
    // left arrow key
    else if (e.which === 65 && snake2.dx === 0) {
      snake2.dx = -grid;
      snake2.dy = 0;
    }
    // up arrow key
    else if (e.which === 87 && snake2.dy === 0) {
      snake2.dy = -grid;
      snake2.dx = 0;
    }
    // right arrow key
    else if (e.which === 68 && snake2.dx === 0) {
      snake2.dx = grid;
      snake2.dy = 0;
    }
    // down arrow key
    else if (e.which === 40 && snake.dy === 0) {
      snake.dy = grid;
      snake.dx = 0;
    }
    // reset game
    else if (e.which === 78) {
          snake.x = 160;
          snake.y = 160;
          snake.cells = [];
          snake.maxCells = 3;
          snake.dx = grid;
          snake.dy = 0;
          apple.x = getRandomInt(0, 25) * grid;
          apple.y = getRandomInt(0, 25) * grid;
    snake2.x = 160;
          snake2.y = 320;
          snake2.cells = [];
          snake2.maxCells = 3;
          snake2.dx = grid;
          snake2.dy = 0;
    apple2.x = getRandomInt(0, 25) * grid;
          apple2.y = getRandomInt(0, 25) * grid;
        }
        // Random button 
   else if (e.which === 82){
   snake2.dx = grid;
          snake2.dy = 0;
          snake.dx = grid;
          snake.dy = 0;
    snake2.x = getRandomInt(0, 25) * grid;
          snake2.y = getRandomInt(0, 25) * grid;
    snake.x = getRandomInt(0, 25) * grid;
          snake.y = getRandomInt(0, 25) * grid; 
   }
// Fullscreen button.
else if (e.which === 74){
toggleFullScreen();
}
  });
  // start the game
  requestAnimationFrame(loop);
 

  function goFullscreen(id) {
    // Get the element that we want to take into fullscreen mode
    var element = document.getElementById(id);

    // These function will not exist in the browsers that don't support fullscreen mode yet, 
    // so we'll have to check to see if they're available before calling them.

    if (element.mozRequestFullScreen) {
      // This is how to go into fullscren mode in Firefox
      // Note the "moz" prefix, which is short for Mozilla.
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
      // This is how to go into fullscreen mode in Chrome and Safari
      // Both of those browsers are based on the Webkit project, hence the same prefix.
      element.webkitRequestFullScreen();
   }
   // Hooray, now we're in fullscreen mode!
  }

function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen();  
    } else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen();  
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } else {  
    if (document.cancelFullScreen) {  
      document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen();  
    } else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen();  
    }  
  }
toggleFullScreenText();  
}

function toggleFullScreenText() {
  var x = document.getElementById("FullScreenText");
  if (x.innerHTML === "Minimize (J)") {
    x.innerHTML = "Maximize (J)";
  } else {
    x.innerHTML = "Minimize (J)";
  }
}
