// Map, Filter, Reduce

// Map
// console.log([1, 2, 3, 4].map(function(n) { return n * n; }));
console.log([1, 2, 3, 4].map(n => n * n)); // for single arg, can eliminate a lot and use fat arrow

let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];
// Returns a URL-friendly version of a string.
//  Example: "North Dakota" -> "north-dakota"
function urlify(string) {
    return string.toLowerCase().split(/\s+/).join('-');
}

// urls: Imperative version
function imperativeUrls(elements) {
    let urls = [];
    elements.forEach(function(element) {
        urls.push(urlify(element));
    });
    return urls;
}
console.log(imperativeUrls(states));

// Using map
function functionalUrls(elements) {
    return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

function urlList(elements) {
    let urls = [];
    elements.forEach(function(element) {
        let fullUrl = "https://example.com/" + urlify(element);
        urls.push(fullUrl);
    });
    return urls;
}
console.log(urlList(states));

// Filter
// only want single word states
function imperativeSingles(elements) {
    let singles = [];
    elements.forEach(function(element) {
        if (element.split(/\s+/).length == 1) {
            singles.push(element);
        }
    });
    return singles;
}
console.log(imperativeSingles(states));
// filter to choose even numbers
console.log([1, 2, 3, 4, 5, 6].filter(n => n % 2 === 0));

// Filter version
function functionalSingles(elements) {
    
}