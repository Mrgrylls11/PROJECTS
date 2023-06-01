const getlink = document.querySelector('.getlink');
const generate = document.querySelector('.generatebtn');
generate.addEventListener('click', fetchLink)
    // const fileInput = document.getElementById('fileInput');

    // if ('files' in fileInput && fileInput.files.length > 0) {
    //     const file = fileInput.files[0];

    //     const reader = new FileReader();

    //     reader.onload = function (event) {
    //         const jsonData = event.target.result;
    //         const parsedData = JSON.parse(jsonData);

    //         // Use the parsed JSON data
    //         console.log(parsedData);
    //     };

    //     reader.readAsText(file);
    // }
    

function fetchLink() {
    const linkInput = document.querySelector('.getlink');
    const link = linkInput.value;
  
    window.location.href = `/fetch_link?link=${encodeURIComponent(link)}`;
  }
