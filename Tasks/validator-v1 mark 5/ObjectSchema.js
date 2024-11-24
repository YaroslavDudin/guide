export default class ObjectSchema {
    constructor() {
      this.checks = {};
    }
  
    shape(schema) {
      if (typeof schema !== 'object') return false;
      this.checks = schema;
      return this;
    }
  
    isValid(user) {
      return Object.keys(this.checks).every((key) => this.checks[key].isValid(user[key]));
    }
  }