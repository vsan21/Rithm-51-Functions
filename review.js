// //Q1: Write a function called appendToString, which accepts two strings. The function should return a new string which consists of the second string appended to the first string.
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

// //Q2: Write a function called prependToString, which accepts two strings. The function should return a new string with the second string prepended to the first string.
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

// //Q3: Write a function called charAt which accepts a string and an index (number) and returns the character at that index. The function should return an empty string if the number is greater than the length of the string.
function charAt (str, num) {
  if(num > str.length) {
    return '';
  }
  return str[num];
}

describe('', function() {
  it('', function() {
    expect(charAt('awesome', 2)).toBe('e')
  });

  it('', function() {
    expect(charAt('awesome', 12)).toBe('')
  });
});

// //Q4: Write a function called stringIncludes, which accepts two strings: the first string is a word and the second string is a single character. The function should return true if the first string includes the character, otherwise it should return false. Do not use the built in String.includes() function!
function stringIncludes (word, char) {
  for(let i=0; i<word.length; i++) {
    if (word[i] === char) {
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

// //Q5: Write a function called stringIndexOf, which accepts two strings: the first is a word and the second is a single character. The function should return the first index in the word at which the character exists or -1 if the character is not found. Do not use the built in String.indexOf() function!
function stringIndexOf (word, char) {
  for (let i = 0; i < word.length; i++) {
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

// //Q6: Write a function called stringLastIndexOf, which accepts two strings: the first is a word and the second is a single character. The function should return the last index at which the character exists or -1 if the character is not found. Do not use the built in String.lastIndexOf() function!
function stringLastIndexOf (word, char) {
  for(let i=word.length-1; i>0; i--){
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

// //Q7: Write a function called repeat, which accepts a string and a number and returns a new string with the string repeated that number of times.
function repeat (str, num) {
  let newStr = '';
  for(let i=0; i<num; i++) {
    newStr += str;
  }
  return newStr;
}

describe('', function() {
  it('', function() {
    expect(repeat('Matt', 3)).toBe('MattMattMatt')
  });

  it('', function() {
    expect(repeat('Elie', 0)).toBe('')
  });
});

// //Q8: Write a function called removeFromString, which accepts a string, a starting index (number) and a number of characters to remove. The function should return a new string with the characters removed.
function removeFromString (str, index, num) {
  let arr = str.split('');
  arr.splice(index, num);
  return arr.join('');
}

describe('', function() {
  it('', function() {
    expect(removeFromString('Elie', 0, 1)).toBe('lie')
  });

  it('', function() {
    expect(removeFromString('Rithm School', 2, 4)).toBe('RiSchool')
  });
});

// //Q9: Write a function called includes, which accepts an array and a number. The function should return true if the value exists in the array and false if it does not. Do not use the built in Array.includes() function!
function includes (arr, num) {
  for(let item of arr) {
    if(item === num) {
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

// //Q10: Write a function called indexOf, which accepts an array and a number. The function should return the first index at which the value exists or -1 if the value is not found. Do not use the built in Array.indexOf() function!
function indexOf (arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === num) {
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

// //Q11: Write a function called lastIndexOf, which accepts an array and a number. The function should return the last index at which the value exists, or -1 if the value is not found. Do not use the built in Array.lastIndexOf() function!
function lastIndexOf (arr, num) {
  for (let i=arr.length-1; i>0; i--) {
    if(arr[i] === num) {
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

// //Q12: Write a function called push which accepts two parameters, an array and any value. The function should add the value to the end of the array and then return the new length of the array. Do not use the built in Array.push() function!
function push (arr, value) {
  arr[arr.length] = value;
  return arr.length;
}

describe('', function() {
  it('', function() {
    expect(push([1, 2, 3], 10)).toBe(4)
  });

  it('', function() {
    expect(push([5, 2, 1, 6], 20)).toBe(5)
  });
});

// //Q13: Write a function called pop which accepts an array. The function should remove the last value in the array, and return the value removed or undefined if the array is empty. Do not use the built in Array.pop() function!
function pop (arr) {
  if (arr.length === 0){
    return;
  }
  let last = arr[arr.length-1];
  arr.length = arr.length-1;
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

// //Q14: Write a function called unshift which accepts an array and a value and adds the value to the beginning of the array. This function should return the new length of the array. Do not use the built in Array.unshift() function!
function unshift (arr, value) {
  for(let i=arr.length-1; i>0; i--) {
    arr[i+1] = arr[i];
  }
  arr[0] = value;
  return arr.length;
}

describe('', function() {
  it('', function() {
    expect(unshift([1, 2, 3], 0)).toEqual(4)
  });

  it('', function() {
    expect(unshift([4, 5, 6], 10)).toEqual(4)
  });
});

// //Q15: Write a function called shift which accepts an array and removes the first value in the array and then returns the value removed. It should return undefined if the array is empty. Do not use the built in shift function!
function shift (arr) {
  if(arr.length === 0) {
    return;
  }
  return arr.splice(0, 1).join('');
}

describe('', function() {
  it('', function() {
    expect(shift(['a', 'b', 'c'])).toBe('a')
  });

  it('', function() {
    expect(shift([])).toBeUndefined();
  });
});

// //Q16: Write a function called reverse, which accepts an array and returns the SAME ARRAY with all of the values reversed. In other words, do not solve this by creating a new array. Do not use the built in Array.reverse() function!
function reverse (arr) {
  let newArr = arr.slice();   //creates a copy of arr
  for(let i=0; i<arr.length; i++) {
    arr[i] = newArr[arr.length-1-i]
  }
  return arr;
}

describe('', function() {
  it('', function() {
    expect(reverse([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
  });

  it('', function() {
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1])
  });
});

// //Q17: Write a function called max, which accepts an array and returns the highest value. Do not use the built-in Math.max() function!
function max (arr) {
  let max = Math.min(...arr);
  for(let num of arr) {
    if(num > max) {
      max = num;
    }
  }
  return max;
}

describe('', function() {
  it('', function() {
    expect(max([5, 1, 4, 7, 1, 2])).toBe(7)
  });

  it('', function() {
    expect(max([3, 4, 12, 1, 8])).toEqual(12)
  });
});

// //Q18: Write a function called min, which accepts an array of numbers and returns the lowest value. Do note use the built-in Math.min() function!
function min (arr) {
  let min = Math.max(...arr);
  for(let num of arr) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

describe('', function() {
  it('', function() {
    expect(min([5, 1, 4, 7, 1, 2])).toBe(1)
  });

  it('', function() {
    expect(min([-1, 6, 3, 2.2, -10, -4])).toBe(-10)
  });
});

// //Q19: Write a function called slice, which accepts an array, and two numbers. The function should return a new array with the elements starting at the index of the first number and going until the index of the second number. If a third parameter is not passed to the function, it should slice until the end of the array by default. If the third parameter is greater than the length of the array, it should slice until the end of the array. Do not use the built in Array.slice() function!
function slice (arr, num1, num2) {
  let newArr = [];
  if(num2 === undefined || num2 > arr.length) {
    num2 = arr.length;
  }
  for(let i=num1; i<num2; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

describe('', function() {
  it('', function() {
    expect(slice([1, 2, 3, 4, 5], 0, 2)).toEqual([1, 2])
  });

  it('', function() {
    expect(slice([1, 2, 3, 4, 5], 2, 10)).toEqual([3, 4, 5])
  });
});

// //!!Q20: Write a function called concat, which accepts an array, and a variable amount of parameters (all of which are arrays). The function returns a new array with all of the remaining parameters joined with the array. Do not use the built in Array.concat() function!
//
//
// //Q21: Write a function called keys, which accepts an object and returns an array of all of the keys in the object. Do not use the built in Object.keys() function!
function keys (obj) {
  let arr = [];
  for(let key in obj) {
    arr.push(key);
  }
  return arr;
}

describe('', function() {
  it('', function() {
    expect(keys({ a: 1, b: 2, c: 3 })).toEqual(["a", "b", "c"])
  });

  it('', function() {
    expect(keys({})).toEqual([])
  });
});


//Q22: Write a function called values, which accepts an object and returns an array of all of the values in the object. Do not use the built in Object.values() function!
function values (obj) {
  let arr = [];
  for(let key in obj) {
    arr.push(obj[key]);
  }
  return arr;
}

describe('', function() {
  it('', function() {
    expect(values({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3])
  });

  it('', function() {
    expect(values({})).toEqual([])
  });
});

//Q23: Write a function called swapKeyAndValue, which accepts an object and a key. The function should return a new object with the given key and its value flipped, and all the other key/value pairs unchanged.
function swapKeyAndValue (obj, findKey) {
  let newObj = {};
  for(let key in obj) {
    if(key === findKey) {
      newObj[obj[key]] = key;
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

describe('', function() {
  it('', function() {
    expect(swapKeyAndValue({ name: 'Elie', job: 'Instructor' }, 'name')).toEqual({Elie: 'name', job: "Instructor"})
  });

  it('', function() {
    expect(swapKeyAndValue({ name: 'Elie', job: 'Instructor' }, 'job')).toEqual({name: "Elie", Instructor: 'job'})
  });
});

//Q24: Write a function called entries, which accepts an object and returns an array of arrays of key-value pairs. In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value. Do not use the built in Object.entries() function!
function entries (obj) {
  let newArr = [];
  for(let key in obj) {
    newArr.push([key, obj[key]]);
  }
  return newArr;
}

describe('', function() {
  it('', function() {
    expect(entries({ first: 'Matt', last: 'Lane', isDogOwner: true })).toEqual([["first","Matt"], ["last","Lane"], ["isDogOwner",true]])
  });

  it('', function() {
    expect(entries({})).toEqual([])
  });
});

//Q25:

//Q26:

//Q27:

//Q28:

//Q29:

//Q30:
