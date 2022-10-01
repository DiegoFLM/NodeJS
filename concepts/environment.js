//Environment variables
//The '||' operator is used to set a default value if the variable is not set
let greeting = process.env.GREETING || 'How are you?';

console.log( 'Hey, ' + greeting);
console.log( 'Hey, ' + 'YOU!');