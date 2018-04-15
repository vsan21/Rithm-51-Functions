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
