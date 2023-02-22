class Person {
  name;
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`${this.name} is here`);
  }
}

const Alex = new Person("Alex");

Alex.greet();

class Professor extends Person {
  subject;

  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }
  greets() {
    console.log(`${this.name} and ${this.subject}`);
  }
}

const Eren = new Professor("eren", "maths");

Eren.greet();
