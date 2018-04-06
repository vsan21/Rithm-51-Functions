//Q1: Write a function called appendToString, which accepts two strings. The function should return a new string which consists of the second string appended to the first string.

function appendToString (str1, str2) {
  return str1 + str2;
}

describe('appendToString', function() {
  it('should return a new string that appends the two strings', function() {
    expect(appendToString('Hello', ' World!')).toMatch('Hello World!')
  });

  it('should return a new string that appends the two strings', function() {
    expect(appendToString('', 'test')).toMatch('test')
  });
});

//Q2: Write a function called prependToString, which accepts two strings. The function should return a new string with the second string prepended to the first string.

function prependToString (str1, str2) {
  return str2 + str1;
}

describe('prependToString', function() {
  it('should return a new string that prepends str2 to str1', function() {
    expect(prependToString('awesome', 'very')).toMatch('veryawesome')
  });

  it('should return a new string that prepends str2 to str1', function() {
    expect(prependToString('world', 'hello ')).toMatch('hello world')
  });
});

//Q3: Write a function called charAt which accepts a string and an index (number) and returns the character at that index. The function should return an empty string if the number is greater than the length of the string.

// function charAt (str, index) {
//   if (index < str.length) {
//     return str[index];
//   }
//   return '';
// }

//Using ternary operator
function charAt (str, index) {
  return (index < str.length) ? str[index] : '';
}

describe('', function() {
  it('', function() {
    expect(charAt('awesome', 2)).toBe('e')
  });

  it('', function() {
    expect(charAt('awesome', 12)).toBe('')
  });
});

//Q4: Write a function called stringIncludes, which accepts two strings: the first string is a word and the second string is a single character. The function should return true if the first string includes the character, otherwise it should return false. Do not use the built in String.includes() function!

function stringIncludes (str, char) {
  for(let i=0; i<str.length; i++) {
    if(str[i] === char) {
      return true;
    }
  }
  return false;
}

describe('', function() {
  it('', function() {
    expect(stringIncludes('awesome', 'e')).toBe(true)
  });

  it('', function() {
    expect(stringIncludes('awesome', 'z')).toBe(false)
  });
});

//Q5: Write a function called stringIndexOf, which accepts two strings: the first is a word and the second is a single character. The function should return the first index in the word at which the character exists or -1 if the character is not found. Do not use the built in String.indexOf() function!

function stringIndexOf (word, char) {
  for (let i=0; i<word.length; i++) {
    if(word[i] === char) {
      return i;
    }
  }
  return -1;
}

describe('', function() {
  it('', function() {
    expect(stringIndexOf('awesome', 'e')).toBe(2)
  });

  it('', function() {
    expect(stringIndexOf('awesome', 'z')).toBe(-1)
  });
});

//Q6: Write a function called stringLastIndexOf, which accepts two strings: the first is a word and the second is a single character. The function should return the last index at which the character exists or -1 if the character is not found. Do not use the built in String.lastIndexOf() function!

function stringLastIndexOf (word, char) {
  for (let i=word.length-1; i>=0; i--) {
    if(word[i] === char) {
      return i;
    }
  }
  return -1;
}

describe('', function() {
  it('', function() {
    expect(stringLastIndexOf('awesome', 'e')).toBe(6)
  });

  it('', function() {
    expect(stringLastIndexOf('awesome', 'z')).toBe(-1)
  });
});

//Q7: Write a function called repeat, which accepts a string and a number and returns a new string with the string repeated that number of times.

function repeat (str, num) {
  let word = '';
  //from 0-num, run word += str;
  for (let i=0; i<num; i++) {
    //adding str each iteration to the empty string
    word += str;
  }
  return word;
}

describe('', function() {
  it('', function() {
    expect(repeat('Matt', 3)).toBe('MattMattMatt')
  });

  it('', function() {
    expect(repeat('Elie', 0)).toBe('')
  });
});


//Q8: Write a function called removeFromString, which accepts a string, a starting index (number) and a number of characters to remove. The function should return a new string with the characters removed.

function removeFromString (str, index, num) {
  var arr = str.split("");
  arr.splice(index, num);
  return arr.join("");
}

describe('', function() {
  it('', function() {
    expect(removeFromString('Elie', 0, 1)).toBe('lie')
  });

  it('', function() {
    expect(removeFromString('Rithm School', 2, 4)).toBe('RiSchool')
  });
});

//Q9: Write a function called includes, which accepts an array and a number. The function should return true if the value exists in the array and false if it does not. Do not use the built in Array.includes() function!

function includes (array, num) {
  for(let i=0; i<array.length; i++) {
    if(array[i] === num) {
      return true;
    }
  }
  return false;
}

describe('', function() {
  it('', function() {
    expect(includes([1, 2, 3, 4], 4)).toBe(true)
  });

  it('', function() {
    expect(includes([1, 2, 3, 4], 14)).toBe(false)
  });
});

//Q10: Write a function called indexOf, which accepts an array and a number. The function should return the first index at which the value exists or -1 if the value is not found. Do not use the built in Array.indexOf() function!

function indexOf (array, num) {
  for(let i=0; i<array.length; i++) {
    if(array[i] === num) {
      return i;
    }
  }
  return -1;
}

describe('', function() {
  it('', function() {
    expect(indexOf([5, 10, 15, 20], 20)).toBe(3)
  });

  it('', function() {
    expect(indexOf([1, 2, 3, 4, 5], 2)).toBe(1)
  });
});

//Q11: Write a function called lastIndexOf, which accepts an array and a number. The function should return the last index at which the value exists, or -1 if the value is not found. Do not use the built in Array.lastIndexOf() function!

function lastIndexOf (array, number) {
  for(let i=array.length-1; i>=0; i--) {
    if(array[i] === number) {
      return i;
    }
  }
  return -1;
}

describe('', function() {
  it('', function() {
    expect(lastIndexOf([1, 2, 3, 4], 2)).toBe(1)
  });

  it('', function() {
    expect(lastIndexOf([1, 2, 3, 4, 2], 2)).toBe(4)
  });
});

//Q12: Write a function called push which accepts two parameters, an array and any value. The function should add the value to the end of the array and then return the new length of the array. Do not use the built in Array.push() function!

function push (array, value) {
  //because there is no index at array.length since indexing starts at 0 --> so you can assign it there. And you can continue to do this repeatedly because the length automatically updates
  array[array.length] = value;
  return array.length;
}

//.push method
// var newArray = array;
// newArray.push(value);

describe('', function() {
  it('', function() {
    expect(push([1, 2, 3], 10)).toBe(4)
  });

  it('', function() {
    expect(push([5, 2, 1, 6], 20)).toBe(5)
  });
});

//Q13: Write a function called pop which accepts an array. The function should remove the last value in the array and return the value removed or undefined if the array is empty. Do not use the built in Array.pop() function!

function pop (array) {
  //array.length - 1 gets us the index of the last value
  var last = array[array.length-1];
  if(array.length > 0) {
    //Change the current array length to array.length - 1 (takes off the last value)
    array.length = array.length - 1;
  }
  return last;
}

describe('', function() {
  it('', function() {
    expect(pop([1, 2, 3, 4])).toBe(4)
  });

  it('', function() {
    expect(pop([])).toBeUndefined();
  });
});

//Q14: Write a function called unshift which accepts an array and a value and adds the value to the beginning of the array. This function should return the new length of the array. Do not use the built in Array.unshift() function!

function unshift (array, value) {
  for (let i=array.length-1; i>=0; i--) {
    array[i+1] = array[i];
  }
  array[0] = value;
  return array.length;
}

//why it doesn't work with the forward for loop --> for(let i=0; i<array.length; i++)
//array.length = 3
//say i=2 --> array[2+1] = array[2]
//because array[3] never existed in the first place, we are adding it to the array WHICH makes array.length bigger SOOO then because it is constantly getting bigger, it will never meet the stop condition and just keep going. Which is why we need to do the backwards for loop (because there is no negative indexes, it will stop at 0)

// //another way
// let newArr = [];
// //pushing the value first to the empty array
// newArr.push(value);
// //then pushing each item of the array after it
// for (let i = 0; i < array.length; i++) {
//   newArr.push(array[i]);
// }
// return newArr.length;

describe('', function() {
  it('', function() {
    expect(unshift([1, 2, 3], 0)).toEqual(4)
  });

  it('', function() {
    expect(unshift([4, 5, 6], 10)).toEqual(4)
  });
});

//Q15: Write a function called shift which accepts an array and removes the first value in the array and then returns the value removed. It should return undefined if the array is empty. Do not use the built in shift function!

function shift (array) {
  //if array is not empty
  if(array.length > 0) {
    //splices the first item in the array (['a']) then turns it into a string 'a'
    return array.splice(0, 1).join('');
  }
}

describe('', function() {
  it('', function() {
    expect(shift(['a', 'b', 'c'])).toBe('a')
  });

  it('', function() {
    expect(shift([])).toBeUndefined();
  });
});

//Q16: Write a function called reverse, which accepts an array and returns the SAME ARRAY with all of the values reversed. In other words, do not solve this by creating a new array. Do not use the built in Array.reverse() function!

const reverse = (array) => {
  


  //returns same array but reversed
  return array;
}


describe('', function() {
  it('', function() {
    expect(reverse([5, 4, 3, 2, 1])).toBe([1, 2, 3, 4, 5])
  });

  it('', function() {
    expect(reverse([1, 2, 3])).toBe([3, 2, 1]);
  });
});
