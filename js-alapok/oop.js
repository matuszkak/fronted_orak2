

class Animal {
  eat() {
    console.log('eating...');
  }
}

class Dog extends Animal {
  constructor(name) {
    super();
    this.bread = 'kuvasz';
    this.legsCount = 4;
    this.name = name;
  }
  bark() {
    console.log('a kutya ugat');
  }
}

const myDog = new Dog('Bodri');
const myDog1 = new Dog('Drazsé'); // ha több példányt akarsz belőle

myDog.bark();

myDog.abc = 5;

console.log(myDog.abc);
console.log(myDog.name);
console.log(myDog1.name);
console.log(myDog.eat);

myDog.eat();

