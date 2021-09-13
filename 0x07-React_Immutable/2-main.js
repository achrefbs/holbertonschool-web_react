import accessImmutableObject from './2-nested.js';

const object = { name: {
       first: "Guillaume",
       last: "Salva"
  }};

const array = ['name', 'first'];

console.log(accessImmutableObject(object, array));
