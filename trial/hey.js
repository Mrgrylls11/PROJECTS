let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
function myfun(strs) {
    let map = {};
    for (let sort of strs) {
        let s = sort.split('').sort().join('');
        if (!map[s]) {
            map[s] = []
        }
        map[s].push(s)
    }
    console.log(Object.values(map).sort());
}

myfun(strs);




// let arr = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
// let x = 5;
// function myfun(arr, x) {
//     let start = 0;
//     let end = arr.length - 1;
//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2);
//         if (arr[mid] === x) {
//             return `found at index ${mid}`;
//         }
//         else if (arr[mid] > x) {
//             end = mid - 1;
//         }
//         else {
//             start = mid + 1;
//         }
//     }
//     return false;
// }

// let ary = myfun(arr, x);
// console.log(ary);

// function iterativeFunction(arr, x) {

//     let start = 0
//     let end = arr.length - 1;

//     // Iterate while start not meets end
//     while (start <= end) {

//         // Find the mid index
//         let mid = Math.floor((start + end) / 2);

//         // If element is present at mid, return True
//         if (arr[mid] === x) {
//             console.log(`found at ${mid}`);
//             return
//         }

//         // Else look in left or right half accordingly
//         else if (arr[mid] < x) {
//             start = mid + 1;
//         }

//         else {
//             end = mid - 1;
//         }

//     }

//     return false;
// }

// // Driver code
// let arr = [1, 3, 5, 7, 8, 9];
// let x = 5;
// iterativeFunction(arr, x);