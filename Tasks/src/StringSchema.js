class StringSchema {
  constructor() {
    this.checks = [];
  }

  isValid(value) {
    if (typeof value !== 'string') {
      return false;
    }
    return this.checks.every(check => check(value));
  }

}

export default StringSchema;