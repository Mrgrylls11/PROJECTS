const inptext = document.querySelector('.mine');
const oplog = document.querySelector('.oplog');

inptext.addEventListener('input', addData)

function addData(ele) {
    oplog.textContent = inptext.value.length
}