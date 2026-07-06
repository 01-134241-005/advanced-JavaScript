/*
  Topic: Prototypes and the prototype chain

  Goal:
  Understand how JavaScript finds properties and methods.
*/

const userMethods = {
  describe() {
    return `${this.name} has the role: ${this.role}`;
  },
};

const user = Object.create(userMethods);
user.name = "Amina";
user.role = "student";

console.log(user.describe());

console.log("Own property:", user.hasOwnProperty("name"));
console.log("Prototype method:", user.hasOwnProperty("describe"));

console.log(Object.getPrototypeOf(user) === userMethods);

/*
  Explanation:

  1. JavaScript checks `user` for `describe`.
  2. It does not find `describe` directly on `user`.
  3. It follows the prototype link to `userMethods`.
  4. It finds `describe` there and calls it with `this` set to `user`.
*/

class CourseMember {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    return `Hi, I am ${this.name}.`;
  }
}

const member = new CourseMember("Bilal");

console.log(member.introduce());
console.log(Object.getPrototypeOf(member) === CourseMember.prototype);

/*
  Practice Prompt:
  Create an object named `mentor` that inherits from `userMethods`.
  Add `name` and `role`, then call `mentor.describe()`.
*/

