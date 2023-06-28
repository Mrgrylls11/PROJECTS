let str = [1, 3, 5, 67, 78, 4, 2, 9, 0, 7, 6, 4, 5]; //list of items in an array.

function myfun() {
    let inp = require('prompt-sync')()('Enter the value you want to search ');
    for (let num in str) {
        if (num === inp) {
            return 'number exists'
        }
    }
    return false
}
console.log(myfun(str));