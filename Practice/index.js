let array = [3, 5, 7, 1, 2, 0, 9, 8, 4];
function merge(array) {
    if (array.length < 2) {
        return array
    }
    let mid = Math.floor(array.length / 2);
    let leftarr = array.slice(0, mid);
    let rightarr = array.slice(mid);
    mergesort(merge(leftarr), merge(rightarr))
}
function mergesort(left, right) {
    let myarr = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            myarr.push(left.shift())
        }
        else {
            myarr.push(right.shift())
        }
    }
    return [...myarr, ...left, ...right]
}
console.log(merge(array));