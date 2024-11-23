export default class AgeSchema {
    constructor() {
      this.isAdultCheck = false;
    }
  
    isValid(value) {
      return typeof value === 'number' && !Number.isNaN(value) && value >= 0 && (!this.isAdultCheck || value >= 18);
    }
  
    isAdult() {
      this.isAdultCheck = true;
      return this;
    }
  }