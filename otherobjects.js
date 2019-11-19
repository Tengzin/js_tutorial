// Regexes
// RegExp object
let zipCode = new RegExp("\\d{5}"); // \d{5} means digits, 5 of them. First backslash to escape
let result = zipCode.exec("Beverly Hills 90210");
console.log(result);
// Better way, string matches
zipCode = /\d{5}/; // forward slashes around it
let s = "Beverly Hills 90210 was a '90s TV show set in Los Angeles.";
s += " 91125 is another ZIP code in the Los Angeles area.";
console.log(s.match(zipCode));
console.log(!!s.match(zipCode)); // use !! to force boolean value
// to get ALL occurences
zipCode = /\d{5}/g; // global flag
console.log(s.match(zipCode));
// get all whitespace
console.log("ant    bat\tcat\nduck".split(/\s+/)); // split on \s+, meaning any whitespace
let zip = /\d{5}-\d{4}/;
let test = "10118-0110";
console.log(!!s.match(zip));
console.log(!!test.match(zip));

// Plain Objects (like hashes)
let user = {};   
user["firstName"] = "Henry";
user["lastName"] = "Wang";
console.log(user);
console.log(user["firstName"]); // or use dot
console.log(user.lastName);

