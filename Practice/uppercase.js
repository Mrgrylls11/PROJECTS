let str = 'hi there i am iron man';

// Split the string into an array of words
let words = str.split(' ');

// Capitalize the first letter of each word
for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}

// Join the words back into a single string
let capitalizedStr = words.join(' ');

console.log(capitalizedStr);


let capitalize = str.replace(/\b\w/g, function (match) {
  return match.toUpperCase();
});

console.log(capitalize);