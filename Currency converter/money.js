const nums1 = document.querySelector('#currency-1');
const nums2 = document.querySelector('#currency-2');
const option1 = document.querySelector('#select-currency-1');
const option2 = document.querySelector('#select-currency-2');
const disptxt = document.querySelector('.moneyop');

function converter() {
    fetch(`https://api.exchangerate-api.com/v4/latest/${option1.value}`).then(req => {
        if (!req.ok) {
            throw new Error('response from the server error')
        }
        return req.json()
    }).then(response => {
        if (nums1.value === 'E') {
            alert('Letters not allowed')
            return
        }
        let response1 = response.rates[option1.value];
        let response2 = response.rates[option2.value];
        nums2.value = ((nums1.value * response2).toFixed(3));
        disptxt.innerHTML = `1  ${option1.value} = ${response2}  ${option2.value}`
    })
        .catch(error => {
            console.log('issue:', error);
        })
}

nums1.addEventListener('input', converter);
nums2.addEventListener('input', converter);
option1.addEventListener('change', converter);
option2.addEventListener('change', converter);