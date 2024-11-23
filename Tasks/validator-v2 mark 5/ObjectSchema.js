export default class ObjectSchema {
    constructor() {
      this.fields = {};
    }
  
    shape(schema) {
      if (typeof schema !== 'object' || schema === null) throw new Error('Schema should be a non-null object');
      this.fields = schema;
      return this;
    }
  
    isValid(user) {
      if (typeof user !== 'object' || user === null) return false;
      return Object.keys(user).every((key) => key in this.fields)
        && Object.entries(this.fields).every(([field, validator]) => field in user
         && validator.isValid(user[field]));
    }
  }