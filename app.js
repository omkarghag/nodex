const _ = require('lodash');

const name = "Omkar Ghag"
console.log(`Hello my name is ${name}`)

const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items)

console.log(newItems);

