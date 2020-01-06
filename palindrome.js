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
        return this.processor(this.content);
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


