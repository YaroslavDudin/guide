export default class StringSchema {
  constructor() {
      this.checks = [];
  }

  isValid(value) {
      if (typeof value!== "string") {
          return false; 
      }
          return this.checks.every(check => check(value));

  }

  startsFromUpperCase() {
      this.checks.push(value => /^[A-Z]/.test(value));
      return this;
  }

  length(length) {
      this.checks.push(value => value.length === length);
      return this;
  }

  hasExclamation() {
      this.checks.push(value => value.includes("!"));
      return this;
  }
}