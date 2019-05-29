'use strict';
//Even or odd
function isEven(value){
  if (value % 2 == 0){
    return true;
  }
  else
    return false;
}
//Big O: O(1)

//Are you here?
function areYouHere(arr1, arr2) {
  for (let i=0; i<arr1.length; i++) {
    const el1 = arr1[i];
    for (let j=0; j<arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}
//Big O: O(n^2)


//Doubler 
function doubleArrayValues(array) {
  for (let i=0; i<array.length; i++) {
    array[i] *= 2;
  }
  return array;
}
//Big O: O(n)

//Naive Search
function naiveSearch(array, item) {
  for (let i=0; i<array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}
//Big O: O(n)

//Creating pairs
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      console.log(arr[i] + ', ' +  arr[j] );
    }
  }
}
//Big O: O(n^2)

// Computing fibonaccis
function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
  
    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i == 2) {
      result.push(1);
    }
  
    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}
//Big O: O(n)

// An Efficient Search
function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    }
    else {
      return currentIndex;
    }
  }
  return -1;
}
//Big O: O(log(n))

//Random Element
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
//Big O: O(1)

//Is it prime?
function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 != 0) {
    return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
    if (n % i == 0) return false;
  }
  return true;
}
//Big O: O(n)

//===== Recursion Drills Big O =======

//Count Sheep
//Big O: O(n)

//Array Doubler
//Big O: O(n)

//Reverse String
//Big O: O(n)

//Triangular Number
//Big O: O(n)

//String Splitter
//Big O: O(n)

//Binary Representation
//Big O: O(log(n))

//Factorial
//Big O: O(n)

//Fibonacci
//Big O: O(n)

//Anagrams
//Big O: O(n)

//Animal Heirarchy
//Big O: O(n)

//Organize
//Big O: O(n)