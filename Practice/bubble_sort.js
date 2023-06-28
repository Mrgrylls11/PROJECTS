let mystr = [5, 7, 1, 9, 2, 6, 8, 3, 10, 4];
// 0  1  2  3  4  5  6  7  8   9
function bubble(mystr) {
    let checked;
    do {
        checked = false;
        for (let i = 0; i < mystr.length - 1; i++) {
            if (mystr[i] > mystr[i + 1]) {
                let element = mystr[i];
                mystr[i] = mystr[i + 1];
                mystr[i + 1] = element
                checked = true
            }
        }
    }
    while (checked) {
        return mystr
    }

}

console.log(bubble(mystr));