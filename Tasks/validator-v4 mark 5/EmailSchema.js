export default class EmailSchema {
    constructor() {
        this.checks = [];
        this.regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    }

    isValid = (value) => typeof value === 'string' && this.regex.test(value) ?  this.checks.every((check) => check(value)) : false;
    setEmailLengthConstraint = (min, max = null) => (this.checks.push(value => { const localPart = value.split('@')[0]; return max === null ? localPart.length >= min : localPart.length >= min && localPart.length <= max; }), this);
}

const a = new EmailSchema();

console.log(a.setEmailLengthConstraint(4).isValid('Hi!@yahoo.com')); // false
console.log(a.setEmailLengthConstraint(4).isValid('Hello!@protonmail.com')); // true
console.log(a.setEmailLengthConstraint(2, 4).isValid('Hello!@protonmail.com')); // false