#!/usr/local/bin/node

// Splitting strings to arrays
console.log("ant bat cat".split(" "));
let a = "badger".split("");
console.log(a[1]);

let hb = "honey badger".split("");
for (let i = 0; i <  hb.length; i++) {
    console.log(hb[i]);
}

// Slicing
let nums = [4, 3, 2, 1];
console.log(nums.slice(1)); // slices off indices before 1
console.log(nums.slice(1, 3)); // includes 1st but not 3rd
console.log(nums.slice(-1)[0]); // last ele
// Includes
console.log(nums.includes(1));
// Sort array (by alpha)
console.log(nums.sort());
// Reverse an array
console.log(nums.reverse());
// Push and pop
nums.push(5); // push to back
nums.pop(5); // removes last 
nums.shift(); // removes first
// Join
console.log(nums.join()); // default is comma
console.log(nums.join(", ")); // comma space
