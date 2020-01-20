# Phrase object (with palindrome detector)

NPM Module to detect palindromes

The module can be used as follows:

```
$ npm install --global tengzin-palindrome
$ vim test.js
let Phrase = require("tengzin-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
```