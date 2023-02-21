const person = {
  name: ["bob", "smith"],
  age: 22,
  bio: function () {
    console.log(`${this.name[0]} is ${this.age} years old`);
  },
  selfIntro: function () {
    console.log(`${this.name[1]} HI THERE!`);
  },
};
// console.log(person.bio());
// console.log(person.selfIntro());

const newPerson = {
  name: {
    first: "steve",
    last: "smith",
  },
};

// console.log(newPerson.name.first);
// console.log(newPerson.name.last);
// console.log(newPerson.name[0]);

// console.log(newPerson["name"]["first"]);

function logProps(PropName) {
  console.log(person[PropName]);
}

logProps("age");
logProps("bio");
