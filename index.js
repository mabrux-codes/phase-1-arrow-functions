// Function expression for division
const divide = function() {
    return 2000 / 100;
  };
  
  // Arrow function for squaring a number
  const square = x => x * x;
  
  // Arrow function for adding two numbers
  const add = (a, b) => a + b;
  
  // Export functions if using a test framework like Jest
  module.exports = { divide, square, add };