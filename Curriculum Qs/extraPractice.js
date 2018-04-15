//Challenge 1: Write a function called createStudent, which accepts two parameters, firstName and lastName. The function should return an object with the keys firstName and lastName and the values should be each of the strings.

function createStudent(firstName, lastName){
    return {
        firstName: firstName,
        lastName: lastName
    }
}
//C1.1: Using your createStudent function, create three students and save them each in a variable. Then create a variable called students, which is an array that will store your three students.
var tim = createStudent("Tim", "Garcia");
var matt = createStudent("Matt", "Lane");
var elie = createStudent("Elie", "Schoppik");

var students = [tim, matt, elie];

//C1.2: Write a function called findStudentByFirstName, which accepts one parameter, name. This function should iterate through the students array you just made. If the parameter passed to the function is the same as one of the first name's of the students, the function should return true. Otherwise it should return false. This function should be case insensitive so that you can search successfully regardless of capitalization
function findStudentByFirstName(name){
    var lowerCasedName = name.toLowerCase();
    for(var i = 0; i < students.length; i++){
        if(students[i].firstName.toLowerCase() === lowerCasedName){
            return true;
        }
    }
    return false;
}

findStudentByFirstName('TIM'); // true
findStudentByFirstName('MMMaaaTTTtttTTT'); // false

//C2: Write a function called extractEveryThird which accepts an array as a parameter. The function should iterate over the array and return a new array with every 3rd element in the array passed to the function.
function extractEveryThird(arr){
    var newArr = [];
    for(var i = 2; i < arr.length; i += 3){
        newArr.push(arr[i]);
    }
    return newArr;
}
extractEveryThird([1,2,3,4,5,6]); // [3,6]
extractEveryThird(["a","b","c","d"]); // ["c"]

//C3: Write a function called countEvensAndOdds which accepts an array as a parameter. Start with an object that holds the count of even numbers and the count of odd numbers. Return this object.
function countEvensAndOdds(arr){
    var countObj = {
        oddCount: 0,
        evenCount: 0
    }
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            countObj.evenCount++;
        } else {
            countObj.oddCount++;
        }
    }
    return countObj;
}

countEvensAndOdds([1,2,3,4]); //{oddCount: 2, evenCount: 2}
countEvensAndOdds([1,2,3,4,5,6,7]); //{oddCount: 4, evenCount: 3}

//C4: Write a function called onlyCapitalLetters which accepts a string and returns a new string with only the capital letters passed to the string.

function onlyCapitalLetters(str){
    var newStr = '';
    for(var i = 0; i < str.length; i++){
        if(str[i].charCodeAt(0) < 91 && str[i].charCodeAt(0) > 64 ){
            newStr += str[i];
        }
    }
    return newStr;
}

onlyCapitalLetters("Amazing"); //"A"
onlyCapitalLetters("nothing"); //""

//HOISTING: What does the following code output:
//1.
var firstName = 'Elie';

function displayFirstName(){
    var firstName = 'Tim';
    return firstName;
}

displayFirstName(); // 'Tim' is returned since the name variable defined in the function scope is return. JavaScript always starts from in (the closest function) and works its way out (to outer functions and eventually the global scope)

//2.
function displayFirstName(){
    var firstName = 'Tim';
    return firstName;
}

displayFirstName();

console.log(firstName) // ReferenceError - firstName is not defined. We get an error because we are trying to access a variable defined in a function outside of its scope.

//3.
console.log(firstName)
var firstName = "Elie"

// undefined is output because the var firstName; is hoisted to the top of the code so it actually looks like this under the hood:
// var firstName;
// console.log(firstName);
// firstName = "Elie"

//4.
console.log(firstName)
firstName = 'Elie'

// since variables that do not use the var keyword are NOT hoisted, this will return a ReferenceError - firstName is not defined.

//5.
function sayHi(){
    return 'Hi ' + firstName;
    var firstName = 'Elie'
}

sayHi(); // sayHi(); // "Hi undefined", since the firstName variable uses the var keyword, it is hoisted to the top and it's value is initialized to undefined. It looks a bit like this:

// function sayHi(){
//     var firstName; // the value of firstName is now undefined
//     return 'Hi ' + firstName;
//     firstName = 'Elie' // the value of firstName has been re-assigned to 'Elie'
// }

//6.
function sayHi(){
    return 'Hi ' + firstName;
    firstName = 'Elie'
}

sayHi(); // ReferenceError - firstName is not defined. Since we are not using the var keyword, the firstName variable does not get hoisted and JavaScript has no reference to the firstName variable.

//7.
sayHi(); // ReferenceError - firstName is not defined. Since we are not using the var keyword, the firstName variable does not get hoisted and JavaScript has no reference to the firstName variable.

function sayHi(){
    return 'Hi!';
}

// since function declarations are always hoisted, this will simple return "Hi!"

//8.
sayHi()

var sayHi = function(){
    return 'Hi!';
}
// TypeError: sayHi is not a function. Since we are using the var keyword, the declaration of the variable get's hoisted, but not its definition so the code looks like this:

// var sayHi; // the value of sayHi is undefined
//
// sayHi();
//
// sayHi = function(){
//     return 'Hi!';
// }

//Functions exercise:
//1. Create a function called printDay. It takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;
function printDay (num) {
  let dates = {
    1: 'Sunday',
    2: 'Monday',
    3: 'Tuesday',
    4: 'Wednesday',
    5: 'Thursday',
    6: 'Friday',
    7: 'Saturday'
  };
  if(num<1 || num>7) {
    return;
  }
  return dates[num];
}

printDay(4); // "Wednesday"
printDay(41); // undefined

//2. Create a function called singleLetterCount. It takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.
function singleLetterCount (str1, str2) {
  let lowerCasedChar = str2.toLowerCase();
  let count = 0;
  for(let i=0; i<str1.length; i++){
    if(str1[i] === lowerCasedChar) {
      count++;
    }
  }
  return count;
}

singleLetterCount('amazing','A'); // 2
singleLetterCount('Rithm School','o'); // 2

//3. Create a function called multipleLetterCount. It takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.
function multipleLetterCount (string) {
  let obj = {};
  for(let i=0; i<string.length; i++) {
    if(!(string[i] in obj)) {
      obj[string[i]] = 1;
    } else {
      obj[string[i]]++;
    }
  }
  return obj;
}

multipleLetterCount("hello"); // {h:1, e: 1, l: 2, o:1}
multipleLetterCount("person"); // {p:1, e: 1, r: 1, s:1, o:1, n:1}

//4. Create a function called arrayManipulation. It takes in four parameters (array, command, location, and value).
  //If the command is "remove" and the location is "end", the function should remove the last value in the array and return the value removed. (In this case, the function only needs three arguments.)
    //If the command is "remove" and the location is "beginning", the function should remove the first value in the array and return the value removed. (In this case, the function only needs three arguments.)
      //If the command is "add" and the location is "beginning", the function should add the value (fourth parameter) to the beginning of the array and return the array.
      //If the command is "add" and the location is "end", the function should add the value (fourth parameter) to the end of the array and return the array.

function arrayManipulation (array, command, location, value) {
  if(command === 'remove') {
    if(location === 'end') {
      return array.pop();
    } else {
      return array.shift();
    }
  } else if (command === 'add') {
    if(location === 'beginning') {
      array.unshift(value);
    } else {
      array.push(value);
    }
  }
  return array;
}

arrayManipulation([1,2,3], "remove", "end"); // 3
arrayManipulation([1,2,3], "remove", "beginning"); // 1
arrayManipulation([1,2,3], "add", "beginning", 20); // [20,1,2,3]
arrayManipulation([1,2,3], "add", "end", 30); // [1,2,3,30]

//4. Create a function called isPalindrome. It takes one parameter, a string, and returns true or false if it is a palindrome.

function isPalindrome (str) {
  for(let i=0; i<str.length; i++) {
    if(str[i].toLowerCase() !== str[str.length-1-i].toLowerCase()) {
      return false;
    }
  }
  return true;
}

//Shorter way:
// function isPalindrome (string) {
//   return string.toLowerCase().split('').reverse().join('') === string.toLowerCase();
// }

//Recursion way:
function firstChar (str) {
  return str.slice(0,1);
}

function lastChar (str) {
  return str.slice(str.length-1);
  //or str.slice(-1);
}

function middleChar (str) {
  return str.slice(1, -1);
}

function isPalindrome (str) {
  //Base Case:
  if(str.length === 0 || str.length === 1) {
    return true;
  }

  //Recursive Case:
  if(firstChar(str) === lastChar(str)) {
    return isPalindrome(middleChar(str));
  }
  return false;
}

isPalindrome('testing'); // false
isPalindrome('tacocat'); // true
isPalindrome(''); // true
isPalindrome('a'); // true
