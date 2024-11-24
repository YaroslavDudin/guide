export default class ArraySchema {
    constructor() {
        this.checks = [];
    }
    isValid(value) {
        if (!Array.isArray(value)) return false;
        return this.checks.every((check) => check(value));
    }

    length(length) {
        const lengthh = (value) => value.length === length;
        this.checks.push(lengthh);
        return this;
    }
}