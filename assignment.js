const NewArray = require('./array.js');

// 1. Implemented in array.js


function main(){

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
  arr.push('tauhida');
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




