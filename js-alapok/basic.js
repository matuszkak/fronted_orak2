
// létrehozzuk a szam változót és értket is adunk neki.
// változó létrehozása: deklarálás
// érték adás: value assignment
let szam = 9;

// value assignment
// a bal oldalon lévő változóba bele töltődik a jobb oldalon lévő érték
szam = 20;

// csak deklarálás
let myNumber;


// deklarálni három kulcsszóval lehet:
var a; // nem használjuk
let b; // let-et akkor használjuk a később a változó értékét módosítani akarjuk
const c = 10; // constans: akkor használjuk ha nem akarjuk módosítani az értékét a változónak

// szám: nincs körülötte aposztrof/idézőjel
a = 10;
b = 9;
console.log(a + b);

// string típusú változó: szöveg
let szoveg = 'hello';

console.log(szoveg.toUpperCase());


// tömb: olyan típus ami több másik típust tud tárolni
const myArray = [3, 'hello', a, ['a', 'b']];

console.log(myArray);

// a tömböt nullától indexeljük: 
console.log(myArray[0]);
// a 4 elemű tömb utolsó eleme a 3-adik lenne, 4-edik elem nem létezik
console.log(myArray[4]);

// logikai érték (boolean), true vagy false lehet az értéke
let kapcsolo = true;

console.log(typeof (kapcsolo));

function sayHello() {
  console.log('hello');
}

function addTwoNumbers(a, b) {
  const sum = a + b;
  console.log(sum);
}

addTwoNumbers(5, 9);

sayHello();

function addThreeNumbers(a, b, c) {
  const sum = a + b + c;
  return sum;
}

const result = addThreeNumbers(1, 2, 3);
console.log(result);

console.log(addThreeNumbers(1, 1, 1));

if (kapcsolo === true) {
  console.log('a kapcsolo be van kapcsolva');
}

if (addThreeNumbers(1, 1, 1) === 3) {
  console.log('az add3Numbers jól működik');
} else {
  console.log('az add3Numbers fucked up');
}

let n = 9;
n !== 9 && n !== 3; //false
n !== 9 || n !== 3; // true

n++;
console.log(n);

//ciklus vezáréási szerkezet
// 0-tól 10-ig egyesével
for (let i = 0; i <= 10; i++) {
  console.log(i + 'hello');
}

for (let i = 10; i >= 0; i--) {
  console.log(i + 'hello');
}

while (n >= 0) {
  console.log('ez egy while ciklus');
  n--
}

const szamok = [2, 5, 4, 5];
console.log('a tömb hossza: ' + szamok.length);

// i változó csak a for cikluson belül létezik
for (let i = 0; i < szamok.length; i++) {
  if (szamok[i] === 5) {
    console.log('a tömb ' + i + '. eleme: ' + szamok[i]);
  }
}

// lokális változó a myNum, csak a fv-en belül létezik
function myFunc() {
  const myNum = 10;
}

// not defined
// console.log(myNum);

console.log('az n változó típusa: ' + typeof (n));

let eredmeny = parseInt('a');

console.log('eredmeny');
console.log('az eredmeny tipusa: ' + typeof (eredmeny));

console.log(isNaN(eredmeny));

0 == 0; //true
0 == '0'; //false

0 === '0' // false

console.log('ez egy új sor:\n új sorba került');




