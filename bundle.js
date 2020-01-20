(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("tengzin-palindrome");

let string = prompt("Please enter a string for palindrome testing:");
let phrase = new Phrase(string);

if (phrase.palindrome()) {
  alert(`"${phrase.content}" is a palindrome!`);
} else {
  alert(`"${phrase.content}" is not a palindrome.`)
}

},{"tengzin-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

// Returns true if a string is equal to its reverse
// can't reverse a string, but can reverse an array
function reverse(string) {
    // return string.split("").reverse().join(""); // split, then reverse, then rejoin. But this doesn't work with emojis since they are rep'd with 2 chars
    return Array.from(string).reverse().join("")
}

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}
// true if its blank or whitespace
String.prototype.blank = function() {
    empty = /^\s*$/;
    return !!this.match(empty);
}
// last ele of array
Array.prototype.last = function() {
    return this.slice(-1)[0];
}

// Defines a Phrase object.
function Phrase(content) {
    this.content = content;

    this.processor = function(string) {
        return string.toLowerCase();
    }

      // Returns content processed for palindrome testing.
    this.processedContent = function processedContent() {
        return this.letters().toLowerCase();
    }

    this.letters = function letters() {
        // can simply use match
        return (this.content.match(/[a-z]/gi) || []).join("");

        // if no letters, [] will be true, evaluates to ''

        // let theLetters = [];
        // const letterRegex = /[a-z]/i;

        // // using filter
        // return Array.from(this.content).filter(c => c.match(letterRegex)).join("");

        // using forEach loop
        // Array.from(this.content).forEach(function(character) {
        //     if (character.match(letterRegex)) {
        //         theLetters.push(character);
        //     }
        // });

        // regular for loop
        // for (let i = 0; i < this.content.length; i++) {
        //     let character = this.content.charAt(i);
        //     if (character.match(letterRegex)) {
        //         theLetters.push(character);
        //     }
        // }
        // return theLetters.join("");
    }

    // Returns true if the phrase is a palindrome, false otherwise.
    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
    }

    this.louder = function() {
        let loud = this.content.toUpperCase();
        return loud; 
    }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;

    // override base (prototype)
    this.processedContent = function processedContent() {
        return this.processor(this.translation);
    }
}
  
TranslatedPhrase.prototype = new Phrase();



},{}]},{},[1]);
