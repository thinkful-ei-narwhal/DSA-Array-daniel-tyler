const NewArray = require("./array.js");

// 1. Implemented in array.js

function main() {
  NewArray.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new NewArray();

  // Add an item to the array
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  arr.pop();
  arr.pop();
  arr.pop();

  console.log(arr);

  console.log(arr.get(0));

  arr.pop();
  arr.pop();
  arr.pop();
  arr.push("tauhida");
  console.log(arr.get(0));
}

main();

// 2.1) { length: 1, _capacity: 3, ptr: 0 }

// 2.2) { length: 6, _capacity: 12, ptr: 3 }
/* in the first push, it creates the capacty 3x1, and adds this to memory with the 
first pointer as 0.  it continues to add until it fills the array, in which
on the 4th addition, it realizes its out of memory and reallocates the array.  It
creates a new capacity of 4x3 being 12, and then sets the array pointer at the first
available slot, which is ptr 3.  Then it continues to fill and be happy. */

// 3) { length: 3, _capacity: 12, ptr: 3 }.
/* It's basically just truncating the length.  If we need that old memory, it can use it
now, but it does not need to change the location of the array.*/

//4.1) The result is that its 3, and then NaN.  It does because our memory is
// comprised of a FloatArray, which only allows float numbers.

//4.2) It's to change our capacity and put the new pointer in the correct place.

//5)
function url(str) {
  if (str.length === 0) {
    return "";
  }

  let arr = str.split("");

  if (arr[0] === " ") {
    arr[0] = "%20";
    let res = arr.join("");

    return arr[0] + url(res.slice(3));
  }

  let res = arr.join("");

  return arr[0] + url(res.slice(1));
}

console.log(url("d t"));

//6)
function filter(arr) {
  //removal all numbers less than 5
  if (arr.length === 0) {
    return [];
  }

  if (arr[0] > 5) {
    return [arr[0], ...filter(arr.slice(1))];
  }

  return filter(arr.slice(1));
}

console.log(filter([1, 2, 5, 10, 16]));

//7)

function sum(arr, max = 0, total = 0) {
  if (arr.length === 0) {
    return max;
  }

  total += arr[0];

  if (total > max) {
    max = total;
  }

  return sum(arr.slice(1), max, total);
}

console.log(sum([4, 6, -3, 5, -2, 1]));

//8
function merge(arr, arrTwo, sortedArray = []) {
  if (arr.length === 0) {
    sortedArray.push(arrTwo[0]);
    return sortedArray;
  }

  if (arrTwo.length === 0) {
    sortedArray.push(arr[0]);
    return sortedArray;
  }

  if (arr[0] <= arrTwo[0]) {
    sortedArray.push(arr[0]);
    return merge(arr.slice(1), arrTwo, sortedArray);
  } else if (arrTwo[0] < arr[0]) {
    sortedArray.push(arrTwo[0]);
    return merge(arr, arrTwo.slice(1), sortedArray);
  }
}

console.log(merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

//9
function rem(str, del) {
  if (str.length === 0) {
    return "";
  }

  for (let i = 0; i < del.length; i++) {
    if (str[0] === del[i]) {
      return rem(str.slice(1), del);
    }
  }

  return str[0] + rem(str.slice(1), del);
}

console.log(rem("Battle of the Vowels: Hawaii vs. Grozny", "aeiou"));

//10

function products(arr, output = [], count = arr.length) {
  if (count === 0) {
    return output;
  }
  let temp = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[0] !== arr[i]) {
      temp *= arr[i];
    }
  }
  output.push(temp);
  let num = arr[0];
  arr.push(num);
  return products(arr.slice(1), output, count - 1);
}

console.log(products([1, 3, 9, 4]));

//11
function twodee(arr, output = arr) {
  if (arr.length === 0) {
    return output;
  }
  for (let i = 0; i < arr[0].length; i++) {
    if (arr[0][i] === 0) {
      output = turnColToZero(output, i);
      output[0] = turnRowToZero(output[0]);
    }
  }
  return twodee(arr.slice(1), output);
}

console.log(
  twodee([
    [1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ])
);

function turnColToZero(arr, idx) {
  if (arr.length === 0) {
    return [];
  }

  arr[0][idx] = 0;
  return [arr[0], ...turnColToZero(arr.slice(1), idx)];
}

function turnRowToZero(arr) {
  if (arr.length === 0) {
    return [];
  }

  arr[0] = 0;
  return [arr[0], ...turnRowToZero(arr.slice(1))];
}
