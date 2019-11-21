let nums = [4, 3, 2, 1];

//Normal iteration
for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i]);
}

//forEach
nums.forEach(function(element) {
    console.log(element);
});

let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character) {
    console.log(character);
});

