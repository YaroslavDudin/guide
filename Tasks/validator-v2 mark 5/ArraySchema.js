export default class ArraySchema {
    constructor() {
        this.checks = [];
    }

    isValid(value) {
        if (!Array.isArray(value)) {
            return false;
        }
        return this.checks.every(check => check(value));
    }

    maxDepth(maxDepth) {
        const checkDepth = (arr) => {
            if (!Array.isArray(arr)) {
                return 0;
            }
            if (arr.length === 0) {
                return 1;
            }
            return 1 + Math.max(...arr.map(checkDepth));
        };

        this.checks.push(value => checkDepth(value) <= maxDepth + 1);
        return this;
    }
}