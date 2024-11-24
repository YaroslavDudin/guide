export default class NumberSchema {
    constructor() {
        this.checks = [];
    }
    
    isValid(value) {
        if(typeof value!== 'number') return false;
        return this.checks.every((check) => check(value));
    }
    odd() {
        const odd = (value) => value % 2 !== 0;
        this.checks.push(odd);
        return this;
    }
    even() {
        const even = (value) => value % 2=== 0;
        this.checks.push(even);
        return this;
    }
}