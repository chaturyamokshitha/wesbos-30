// start with strings, numbers and booleans
//numbers--the original value (age)changes but the referenced one does'nt change such as age2
let age = 20;
let age2 = age;
console.log(age, age2);
age = 30;
console.log(age, age2);

//strings--same as numbers
let name = "mokshitha";
let name2 = "reddy";
console.log(name, name2);
name = "chaturya";
console.log(name, name2);

//arrays
const topcolleges = ["narayana", "srichaitanya", "vignan"];
const college = topcolleges;
//college[2]='gayatri';
console.log(college); //here the original referenced also changes as the colleges array
//how to copy an array but not reference
const college3 = [...topcolleges]; //ES6 spread
college3[2] = "gayatri";
console.log(college3); //the original array doesnt change as we copied an array but not referenced it

//create a new array nd concate old one
const college4 = [].concat(topcolleges);
console.log(college4);
//same using from method
const college5 = Array.from(topcolleges);
console.log(college5);

//clearing the console
console.clear();

//smae goes for objects

const person = {
  name: "mokshitha",
  age: 19,
};
const cap = person;
cap.number = 99;
console.log(cap); //the original object is changed as it added number from cap
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const cha = {
  name: "chatu",
  age: 20,
  social: {
    twitter: "@artz",
    facebook: "mokshitha.developer",
  },
};
console.log(cha);
//copying th object so that it doesnit change the original object
const dev = Object.assign({}, cha);
const dev2 = JSON.parse(JSON.stringify(cha));
