import EmailSchema from "./EmailSchema.js";
import AgeSchema from "./AgeSchema.js";
import ObjectSchema from "./ObjectSchema.js";
export default class Validator {
  email() {
    return new EmailSchema();
  }

  age() {
    return new AgeSchema();
  }
  user() {
    return new ObjectSchema();
  }
}
