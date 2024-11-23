export default class EmailSchema {
  constructor() {
    this.minLength = null;
    this.maxLength = null;
    this.regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  }

  isValid(value) {
    if (typeof value !== 'string' || value === '') {
      return false;
    }

    if (!this.regex.test(value)) {
      return false;
    }

    const [localPart] = value.split('@');
    const { length } = localPart;

    if (this.minLength !== null && length < this.minLength) {
      return false;
    }
    if (this.maxLength !== null && length > this.maxLength) {
      return false;
    }

    return true;
  }

  setEmailLengthConstraint(min, max = null) {
    if (typeof min !== 'number' || (max !== null && typeof max !== 'number')) {
      throw new Error('Invalid length constraints');
    }
    if (max !== null && min > max) {
      throw new Error('Min length cannot exceed max length');
    }

    this.minLength = min;
    this.maxLength = max;
    return this;
  }
}