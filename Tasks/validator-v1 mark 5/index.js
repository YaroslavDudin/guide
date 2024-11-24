import Validator from './validator.js'; 
export default Validator;
const v = new Validator();

// Task 1

const schema = v.number();

console.log(schema.isValid(null)); // false

console.log(schema.isValid('')); // false

console.log(schema.isValid(true)); // false

console.log(schema.isValid(123)); // true

// Task 2

const evenSchema = v.number().even();

console.log(evenSchema.isValid(null)); // false

console.log(evenSchema.isValid('')); // false

console.log(evenSchema.isValid(true)); // false

console.log(evenSchema.isValid(123)); // false

console.log(evenSchema.isValid(2)); // true

// Task 3

const oddSchema = v.number().odd();

console.log(oddSchema.isValid(null)); // false

console.log(oddSchema.isValid('')); // false

console.log(oddSchema.isValid(true)); // false

console.log(oddSchema.isValid(123)); // false

console.log(oddSchema.isValid(5)); // true