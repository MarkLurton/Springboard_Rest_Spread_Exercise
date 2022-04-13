// Refactoring this function to use rest operator and an arrow function

// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...nums) => {
    return nums.filter((num) => num % 2 === 0)
};

// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
// Make sure to do this using the rest and spread operator.

const findMin = (...numbers) => {
    return numbers.reduce((min, nextValue) => (nextValue < min ? nextValue : min));
};
// Write a function called mergeObjects that accepts two objects and returns a new object which contains 
// all the keys and values of the first object and second object.

const mergeObjects = (object1, object2) => {
    return {...object1, ...object2}
};

// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. 
// The function should return a new array with the original array values and all of additional arguments doubled.

const doubleAndReturnArgs = (arr, ...extraNums) => {
    const doubleNums = extraNums.map((extraNum) => extraNum * 2);
    return [...arr, ...doubleNums];
}

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    itemsCopy = [...items];
    itemsCopy.splice(Math.floor(Math.random()*itemsCopy.length), 1);
    return itemsCopy;
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => ({...obj, [key] : val});


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    objCopy = {...obj};
    delete(objCopy[key]);
    return objCopy;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({...obj1, ...obj2});


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => ({...obj, [key] : val});