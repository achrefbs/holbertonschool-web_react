import { concatElements, mergeElements } from './5-merge.js';

const page1 = [1, 2, 3];
const page2 = [4, 5];
console.log(concatElements(page1, page2));

const object1 = {name: 'Joe'};
const object2 = {name: 'Joe'};
console.log(mergeElements(object1, object2));
