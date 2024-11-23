import Validator from './Validator.js';

export default Validator;

const stringSchema = v.string();
console.log(stringSchema.isValid('Hexlet')); 
console.log(stringSchema.isValid('')); 
console.log(stringSchema.isValid(null)); 