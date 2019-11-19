function stringMessage(whatever) {
    if (whatever) {
        return "The string is nonempty.";
    } else {
        return "It's an empty string!";
    }
}
console.log(stringMessage("swag"));

let a = [8, 17, 42, 99];
console.log(a.sort());  //based on ASCII
function numberCompare(a, b) {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
}
// Now use this to sort numerically
console.log(a.sort(numberCompare));

