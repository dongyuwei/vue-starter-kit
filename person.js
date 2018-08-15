function Person(name, age) {
  this.name = name;
  this.age = age;

  this.inspect = () => {
    return `name: ${this.name}, age: ${this.age}`;
  };
}

function Person2(name, age) {
  this.name = name;
  this.age = age;
}

// Person2.prototype = {
//   inspect() {
//     return `name: ${this.name}, age: ${this.age}`;
//   },
// };

Person2.prototype.inspect = function() {
  return `name: ${this.name}, age: ${this.age}`;
};

class Person3 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  inspect() {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

const p1 = new Person("dyw", 30);
const p2 = new Person2("dyw", 30);
const p3 = new Person3("dyw", 30);

/*eslint-disable*/
console.log(`${p1.inspect()}\n${p2.inspect()}\n${p3.inspect()}`);
console.assert(p1.inspect() === p2.inspect());
console.assert(p2.inspect() === p3.inspect());












function Person4(name, age) {
  this.name = name;
  this.age = age;
  console.log(this instanceof Person4)
}

new Person4("dyw", 33)