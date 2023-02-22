function createPerson(name, age, gender) {
  const obj = {};
  obj.name = name;
  obj.age = age;
  obj.gender = gender;

  return obj;
}

let Person1 = createPerson("Surya", 22, "Male");
console.log(Person1);

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const newPerson = new Person("Alien", 22);
console.log(newPerson);
console.log(newPerson.name);

// document.addEventListener("keypress", Start);

// function Start() {
//   const myNotify = new Notification("hello");
//   let promise = Notification.requestPermission();
//   return promise;
// }

function createStudent(obj) {
  this.name = obj.name;
  this.age = obj.age;
}

const s1 = new createStudent({ name: "surya", age: 22 });

console.log(s1.age);
