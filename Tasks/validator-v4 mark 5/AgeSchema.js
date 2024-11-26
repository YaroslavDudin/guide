export default class AgeSchema {
    constructor() {
        this.checks = [];
    }
    isValid = (value) =>  typeof value === 'number' && !isNaN(value) && this.checks.every((check) => check(value));
    isAdult = () => (this.checks.push(value => value >= 18), this);
}
const a = new AgeSchema()
console.log(a.isAdult().isValid(10))
console.log(a.isAdult().isValid(20))
console.log(a.isValid('lolololo'))
console.log(a.isValid(NaN)) 
console.log(a.isValid(25)) // true
console.log(a.isValid(11)) // true
console.log(a.isValid('25')) // false

