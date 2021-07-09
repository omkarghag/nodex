const {readFileSync, writeFileSync} = require("fs");

//read from file
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first);
console.log(second);

//write to a file
writeFileSync('./content/result-sync',
 `Here is the result of sync: ${first}, ${second}`);

 // to append to file add third param: {flag : 'a'}

//  writeFileSync('./content/result-sync',
//  `Here is the result of sync: ${first}, ${second}`,
//  {flag : 'a'});