var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
console.log(userName);

var welcomeMessage= "welcome "+ userName;
console.log(welcomeMessage);
