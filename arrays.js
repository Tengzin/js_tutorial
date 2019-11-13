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
let nums = [1, 2, 3, 4];
console.log(nums.slice(1)); // slices off indices before 1
console.log(nums.slice(1, 3)); // includes 1st but not 3rd
console.log(nums.slice(-1)[0]); // last ele
// Includes
console.log(nums.includes(1));
