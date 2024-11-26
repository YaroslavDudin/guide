export default class ObjectSchema {
    constructor() {
      this.fields = {};
    }
  
   
    shape = (schema) => (typeof schema === 'object' && schema !== null ? (this.fields = schema, this) : false);  
    isValid=(user)=> typeof user !== 'object' || user === null ? false : Object.keys(user).every((key) => key in this.fields) && Object.entries(this.fields).every(([field, validator]) => field in user&& validator.isValid(user[field]));
}
  

  const a = new ObjectSchema()
  console.log(a.isValid({ email: 'HeyHey@hotmail.eu', age: 61 })) // false
  console.log(a.isValid({ email: 'HoiHoiHoi@gmail.com', age: 17 })) // false
  console.log(a.isValid({ email: 'gege@protonmail.com', age: 82 })) // false
