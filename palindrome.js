// Returns true if a string is equal to its reverse
// can't reverse a string, but can reverse an array
function reverse(string) {
    return string.split("").reverse().join(""); // split, then reverse, then rejoin
}

function palindrome(string) {
    let lcString = string.toLowerCase();
    return lcString === reverse(lcString);
}