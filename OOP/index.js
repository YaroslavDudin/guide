function idGenerate() {
    return Math.random().toString(16).slice(2);
  }
  let postIdArr = [];
  class User {
    #id = idGenerate()
    constructor(name, age, email, password) {
      this.name = name
      this.age = age
      this.email = email
      this.password = password
    }
    
    post(text) {
        if(text.length < 1) {
          throw new Error("Text length must be greater than 1")
        };
        
        class Post {
          #idPost = idGenerate()
          constructor(text, author) {
            this.text = text
            this.author = author
          }
          getId() {
            return this.#idPost
          }
        }
        const newPost = new Post(text)
        console.log(`User ${this.name}, with ID ${this.#id} posted: ${newPost.text} (Post ID: ${newPost.getId()})`)
        postIdArr.push(newPost.getId())
      }
  }
  

const user = new User("John", 30, "johndoe@me.com", "password123")
user.post("Hello world!")
class Admin extends User {
  constructor(name, age, email, password) {
    super(name, age, email, password)
  }
  removePost(postId) {
    console.log(`Your post with ID ${postId} has been removed because you not an admin.`);
    
    postIdArr = postIdArr.filter(post => post !== postId)
  }
}
const admin = new Admin("Jane", 25, "janedoe@me.com", "password123")
console.log(postIdArr);

admin.removePost(postIdArr[0])
console.log(postIdArr);
