// Code your solutions in this file
// Implement the writeCards function
function writeCards(names, eventName) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message);
    }
    return thankYouMessages;
  }
  
  // Implement the countDown function
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // You can also remove the previous test imports at the top of your code since you're using Mocha and Chai for testing.
  
  // Leave the exports statement at the end of the file
  module.exports = { writeCards, countDown };
  