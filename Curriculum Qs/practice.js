//FUNCTIONS

//Challenge 1: Write a function called createStudent, which accepts two parameters, firstName and lastName. The function should return an object with the keys firstName and lastName and the values should be each of the strings.
function createStudent (firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName
  };
}

//C1.1: Using your createStudent function, create three students and save them each in a variable. Then create a variable called students, which is an array that will store your three students.
var tim = createStudent("Tim", "Garcia");
var matt = createStudent("Matt", "Lane");
var elie = createStudent("Elie", "Schoppik");

var students = [tim, matt, elie];

//C1.2: Write a function called findStudentByFirstName, which accepts one parameter, name. This function should iterate through the students array you just made. If the parameter passed to the function is the same as one of the first name's of the students, the function should return true. Otherwise it should return false. This function should be case insensitive so that you can search successfully regardless of capitalization

function findStudentByFirstName (name) {
  let lowerCasedName = name.toLowerCase();
  for(let i=0; i<students.length; i++) {
    if(students[i].firstName.toLowerCase() === lowerCasedName) {
      return true;
    }
  }
  return false;
}

describe('', function() {
  it('', function() {
    expect(findStudentByFirstName('TIM')).toBe(true);
  });
  it('', function() {
    expect(findStudentByFirstName('MMMaaaTTTtttTTT')).toBe(false);
  });
});

//C2: Write a function called extractEveryThird which accepts an array as a parameter. The function should iterate over the array and return a new array with every 3rd element in the array passed to the function.

function extractEveryThird (array) {
  let newArr = [];
  for(let i=2; i<array.length; i+=3) {
    newArr.push(array[i]);
  }
  return newArr;
}

describe('', function() {
  it('', function() {
    expect(extractEveryThird([1,2,3,4,5,6])).toEqual([3,6]);
  });
  it('', function() {
    expect(extractEveryThird(["a","b","c","d"])).toEqual(["c"]);
  });
});

//C3: Write a function called countEvensAndOdds which accepts an array as a parameter. Start with an object that holds the count of even numbers and the count of odd numbers. Return this object.

function countEvensAndOdds (array) {
  let obj = {
    oddCount: 0,
    evenCount: 0
  };
  for(let i=0; i<array.length; i++) {
    if(array[i] % 2 === 0) {
      obj.evenCount++;
    } else {
      obj.oddCount++;
    }
  }
  return obj;
}

describe('', function() {
  it('', function() {
    expect(countEvensAndOdds([1,2,3,4])).toEqual({oddCount: 2, evenCount: 2});
  });
  it('', function() {
    expect(countEvensAndOdds([1,2,3,4,5,6,7])).toEqual({oddCount: 4, evenCount: 3});
  });
});

// //C4: Write a function called onlyCapitalLetters which accepts a string and returns a new string with only the capital letters passed to the string.

function onlyCapitalLetters (str) {
  let newStr = "";
  for(let i=0; i<str.length; i++) {
    if(str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) {
      newStr += str[i];
    }
  }
  return newStr;
}

describe('', function() {
  it('', function() {
    expect(onlyCapitalLetters("Amazing")).toBe("A");
  });
  it('', function() {
    expect(onlyCapitalLetters("nothing")).toBe("");
  });
});

// //HOISTING: What does the following code output:
// //1.
// var firstName = 'Elie';
//
// function displayFirstName(){
//     var firstName = 'Tim';
//     return firstName;
// }
//
// displayFirstName(); // "Tim" because JS works from inside --> out
//
// //2.
// function displayFirstName(){
//     var firstName = 'Tim';
//     return firstName;
// }
//
// displayFirstName();
//
// console.log(firstName) // undefined because you cannot access a local scoped variable outside of the function
//
// //3.
// console.log(firstName)
// var firstName = "Elie"
//
// // undefined because variable declaration is hoisted
//
// //4.
// console.log(firstName)
// firstName = 'Elie'
//
// // ReferenceError because firstName is not defined. It's trying to be reassigned but it's not declared first.
//
// //5.
// function sayHi(){
//     //var firstName;
//     return 'Hi ' + firstName;
//     var firstName = 'Elie'
// }
//
// sayHi(); // "Hi undefined" because variable declaration is hoisted
//
// //6.
// function sayHi(){
//     return 'Hi ' + firstName;
//     firstName = 'Elie'
// }
//
// sayHi(); // ReferenceError because firstName is not defined
//
// //7.
// sayHi(); // "Hi" because function declarations are always and completely hoisted
//
// function sayHi(){
//     return 'Hi!';
// }
//
//
// //8.
// sayHi();
//
// var sayHi = function(){
//     return 'Hi!';
// }
// // undefined because with function expressions, the variable declaration is hoisted.

//Functions exercise:
//1. Create a function called printDay. It takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;
function printDay(num) {
  let dates = {
    1: 'Sunday',
    2: 'Monday',
    3: 'Tuesday',
    4: 'Wednesday',
    5: 'Thursday',
    6: 'Friday',
    7: 'Saturday'
  };
  if(num in dates) {
    return dates[num];
  }
}

describe('', function() {
  it('', function() {
    expect(printDay(4)).toBe('Wednesday');
  });
  it('', function() {
    expect(printDay(41)).toBeUndefined;
  });
})

//2. Create a function called singleLetterCount. It takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.

function singleLetterCount (word, letter) {
  let lowerCasedLetter = letter.toLowerCase();
  let count = 0;
  for(let i=0; i<word.length; i++) {
    if(word[i] === lowerCasedLetter) {
      count++;
    }
  }
  return count;
}

describe('', function() {
  it('', function() {
    expect(singleLetterCount('amazing','A')).toBe(2);
  });
  it('', function() {
    expect(singleLetterCount('Rithm School','o')).toBe(2);
  });
})

//3. Create a function called multipleLetterCount. It takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.

function multipleLetterCount (str) {
  let obj = {};
  for(let i=0; i<str.length; i++) {
    if(!(str[i] in obj)) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  return obj;
}

describe('', function() {
  it('', function() {
    expect(multipleLetterCount("hello")).toEqual({h:1, e: 1, l: 2, o:1});
  });
  it('', function() {
    expect(multipleLetterCount("person")).toEqual({p:1, e: 1, r: 1, s:1, o:1, n:1});
  });
})

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

describe('', function() {
  it('', function() {
    expect(arrayManipulation([1,2,3], "remove", "end")).toBe(3);
  });
  it('', function() {
    expect(arrayManipulation([1,2,3], "add", "beginning", 20)).toEqual([20,1,2,3]);
  });
})

//4. Create a function called isPalindrome. It takes one parameter, a string, and returns true or false if it is a palindrome (same word forwards and backwards).

//Longer way:
function isPalindrome (str) {
  //finding the middle and stopping there (otherwise if it's an odd length, then the middle will always equal itself)
  let middle = Math.floor(str.length/2);
  for(let i=0; i<middle; i++) {
    if(str[i].toLowerCase() === str[str.length-1-i].toLowerCase()){
      return true;
    }
  }
  return false;
}

//Shorter way:
function isPalindrome (str) {
  return str.toLowerCase().split('').reverse().join('') === str;
}

//Recursion way:

function firstChar (str) {
  return str.slice(0,1);
}

function lastChar (str) {
  return str.slice(-1);
}

function middleChar (str) {
  return str.slice(1,-1);
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

describe('', function() {
  it('', function() {
    expect(isPalindrome('testing')).toEqual(false);
  });
  it('', function() {
    expect(isPalindrome('tacocat')).toEqual(true);
  });
  it('', function() {
    expect(isPalindrome('')).toEqual(true);
  });
  it('', function() {
    expect(isPalindrome('a')).toEqual(true);
  });

})

////////////////////////////////////////////////////////////////////////////////////////////////
//NESTED DATA STRUCTURES (OBJECTS & ARRAYS)

//A) NESTED OBJECTS
//Part 1: Writing functions
var instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};

// 1. function called displayCities that console.logs all the values in the citiesLivedIn array
function displayCities() {
  let cities = instructorData.additionalData.moreDetails.citiesLivedIn;
  for(let i=0; i<cities.length; i++) {
    console.log(cities[i]);
  }
}

displayCities();
// "Seattle"
// "Providence"
// "New York"

//2. function called displayHometownData that console.logs all the values inside of the hometown object
function displayHometownData() {
  let hometown = instructorData.additionalData.moreDetails.hometown;
  for(let key in hometown) {
    console.log(hometown[key]);
  }
}

displayHometownData();
// "West Orange"
// "NJ"

//3. function called addDetail. It takes in two parameters, a key and a value, and adds those to the moreDetails object. Return the moreDetails object.
function addDetail (key, value) {
  let addTomoreDetails = instructorData.additionalData.moreDetails;
  addTomoreDetails[key] = value;
  return addTomoreDetails;
}

addDetail('isHilarious', true);
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    },
    citiesLivedIn: ["Seattle", "Providence", "New York"],
    isHilarious: true
}
*/
addDetail('previousAparments', ['Mission', 'North Beach', 'Nob Hill']);
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    },
    citiesLivedIn: ["Seattle", "Providence", "New York"],
    isHilarious: true
    previousApartments: ["Mission", "North Beach", "Nob Hill"]
}
*/

//4. function called removeDetail that removes a key in the moreDetails object and returns the moreDetails object
function removeDetail (key) {
  let changedMoreObjects = instructorData.additionalData.moreDetails;
  delete changedMoreObjects[key];
  return changedMoreObjects;
}

removeDetail('citiesLivedIn');
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    }
}
*/
removeDetail('hometown');
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true
}
*/
removeDetail('favoriteBasketballTeam');
/*
{
    numberOfSiblings: 3,
    isYoungest: true
}
*/

//Nested Objects Exercise:
//Part 2:
let nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
        primeNumbers: [2,3,5,7,11],
        fibonnaci: [1,1,2,3,5,8,13]
    },
    addSnack: function(snack){
        this.snacks.push(snack);
        return this;
    }
  }
};

//1. Use a for-loop, console.log all the numbers of the primeNumbers array
let primeNumbersArray = nestedData.innerData.numberData.primeNumbers;

for(let i=0; i<primeNumbersArray.length; i++) {
  console.log(primeNumbersArray[i]);
}

//2. Use a for-loop, console.log all of the even Fibonnaci numbers
let fibonnaciArray = nestedData.innerData.numberData.fibonnaci;

for(let i=0; i<fibonnaciArray.length; i++) {
  if(fibonnaciArray[i]%2 === 0) {
    console.log(fibonnaciArray[i]);
  }
}

//3. Console.log the value "second" inside the order array
console.log(nestedData.innerData.order[1]);

//4. Invoke the addSnack funtion and add the snack "chocolate"
nestedData.innerData.addSnack('chocolate');

//5. Inside of the addSnack function, what does "this" refer to?
//"this" inside the addSnack function refers to the current object, which is the innerData object. ***When you are unsure, you can console.log(this) to find out.

//Part 3:
var nestedObject = {
  speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
          hello: "Hola"
      },
      french: {
          hello: "Bonjour"
      }
    }
  }
};

//1. function called addSpeaker to add a speaker to the array of speakers. The speaker you add must be an object with a key of name and a value of whatever you'd like.

function addSpeaker(speakerName) {
  nestedObject.speakers.push({
    name: speakerName
  });
  return nestedObject.speakers;
}

addSpeaker("Vivian");

//2. function called addLanguage that adds a language to the language object. The language object you add should have a key with the name of language and the value of another object with a key of "hello" and value of however you spell "hello" in the language you add.
function addLanguage (newlanguage, helloInLanguage) {
  nestedObject.data.languages[newlanguage] = {
    hello: helloInLanguage
  };
  return nestedObject.data.languages;
}

addLanguage('hawaiian', 'aloha');

//3. function called addCountry that adds a European country to the countries object. The country you add should be an object with the key as name of the country and the value as an object with the keys of "capital" and "population" and their respective values.
function addCountry(newCountry, capital, population) {
  nestedObject.data.continents.europe.countries[newCountry] = {
    capital: capital,
    population: population
  };
  return countriesObj;
}

addCountry('england', 'London', 53000000);

//B) NESTED ARRAYS
//Part 1:

//1. write a function called printEvens that console.logs all the even numbers
let nestedArr = [[1,2,3],[4,5,6],[7,8],[9,10,11,12]];

function printEvens() {
  for(let i=0; i<nestedArr.length; i++) {
    for(let j=0; j<nestedArr[i].length; j++) {
      if((nestedArr[i][j]) % 2 === 0) {
        console.log(nestedArr[i][j]);
      }
    }
  }
}

printEvens();
//2, 4, 6, 8, 10, 12

//2.
