//Binary search program

//in binary search array should be sorted.
let str = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];    // sorted array

function myfun(str) {
    // var target = require('prompt-sync')()('Enter the require number within 20.');
    let target = 4
    let start = 0; //starting index
    let end = str.length - 1; //last index

    while (start <= end) {  //running the loop till the start index is smaller than the last index
        let mid = Math.floor((start + end) / 2);  //getting the mid value and rounding that up
        console.log(mid);

        if (target === str[mid]) {
            if (str[mid - 1] == target) {
                return 'earlier num'
            }
            return 'main num'
        }
        else if (str[mid] < target) {
            start = mid + 1;

        }
        else
            end = mid - 1;

    }
    return false;
};
console.log(myfun(str));