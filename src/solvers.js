/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme

  var board = new Board({n: n});
  for (var i = 0; i < n; i++) {
    var arr = [];
    for (var k = 0; k < n; k++) {
      if (i === k) {
        arr.push(1);
      } else {
        arr.push(0);
      }
    }
    board.set(i, arr);  
  }
  solution = board.rows(); 
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme
  var factorial = function (n) {
    if (n < 0) {
      return null;
    }  

    if (n === 0) {
      return 1; 
    }

    return n * factorial(n - 1); 
 
  };

  solutionCount = factorial(n);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n: n});
  var solution = undefined; //fixme
  var ndiv = Math.floor(n / 2); 
  for (var i = 1; i <= ndiv; i++) {
    board.togglePiece(2 * i - 1, i - 1); 
    board.togglePiece(2 * i - 2, ndiv - 1 + i);
  }    
  if (n % 2 !== 0) {
    board.togglePiece(n - 1, n - 1);
  }
  solution = board.rows();
  if (n === 2 || n === 3) {
    var board1 = new Board({n: n});
    var solution23 = board1.rows();
    console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution23));
    return solution23;
  }
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n: n});
  
  for (var k = 0; k < n; k++) {
  
    var count = 0;  

    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if (count === 0 && !board.findPiece(i, j)) {
          board.togglePiece(i, j);
          count++; 
          if (board.hasAnyQueenConflicts()) {
            board.togglePiece(i, j);
            count--; 
          }
        }
      }
    }
  }

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
