
import StringSchema from './StringSchema.js';

class Validator {
  string() {
    return new StringSchema();
  }

  array() {
    return new ArraySchema();
  }

  object() {
    return new ObjectSchema(this);
  }
}

export default Validator;

