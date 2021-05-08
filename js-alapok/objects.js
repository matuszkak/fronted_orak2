

let myObject = {};

console.log(typeof (myObject));

const myPlayer = {
  'name': 'John',
  'health': 100,
  'alive': true,
  'shoot': function () {
    console.log(myPlayer.name, 'lő');
  }
};

console.log('a játékos neve: ', myPlayer.name);
myPlayer.name = 'Peter';
myPlayer.levelUp = function () {
  myPlayer.health = myPlayer.health + 50;
};

myPlayer.levelUp();
console.log('A játékos élete: ', myPlayer.health);

console.log(typeof (console)) // colsole is egy object, log a <property-je

const newObj = {
  myMethod: function () {
    console.log(this);
    console.log(this.myProp);
    return '2';
  },
  myProp: 3
}

console.log(newObj.myMethod());
console.log(newObj.myProp);


for (let key in myPlayer) {
  console.log(key);
  console.log(myPlayer[key]);
}

const myArray = [2, 3, 4];
myArray.myProp = 23;
myArray.push(12);
console.log(myArray);
